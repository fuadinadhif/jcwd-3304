"use client";

import React, { useState } from "react";

export default function PostPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();

      if (!file) return; // Early exit

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "blog_unsigned");

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/dlvmupovg/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryRes.ok) return;

      const cloudinaryData = await cloudinaryRes.json();

      console.log(cloudinaryData);

      if (cloudinaryData) {
        await fetch(
          "https://volantpurpose-us.backendless.app/api/data/Articles",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              preview: preview,
              image: cloudinaryData.secure_url,
              content: content,
            }),
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid">
          <label htmlFor="image" className="text-xl font-semibold">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className="grid">
          <label htmlFor="title" className="text-xl font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Type the article title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid">
          <label htmlFor="preview" className="text-xl font-semibold">
            Preview
          </label>
          <input
            type="text"
            id="preview"
            placeholder="Type the article preview here..."
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
          />
        </div>
        <div className="grid">
          <label htmlFor="content" className="text-xl font-semibold">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Type the content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border border-white py-2 px-4 w-full mt-4"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// const formData = {
//   file: { name: "abc.jpg", size: 1232133 },
// };
