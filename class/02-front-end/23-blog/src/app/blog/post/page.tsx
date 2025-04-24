"use client"; // Untuk membuat component menjadi client component. Karena kita ada pakai event handler (onSubmit, onClick, onChange) dan karena kita juga pakai react hooks

import React, { useState } from "react"; // Import React untuk memberi anotasi typescript dan useState untuk bikin state

// Membuat komponen PostPage
export default function PostPage() {
  // State file untuk menyimpan file yang kita upload lewat input type=file
  const [file, setFile] = useState<File | null>(null);
  // State title menyimpan value input=text title
  const [title, setTitle] = useState("");
  // State content menyimpan value input=text content
  const [content, setContent] = useState("");
  // State preview untuk menyimpan value input=text preview
  const [preview, setPreview] = useState("");

  // Fungsi yang akan dijalankan ketika form disubmit
  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault(); // Menghalangi reload browser ketika form disubmit

      if (!file) return; // Early exit. Menghentikan fungsi handleSubmit ketika state file undefined

      // Untuk membuat FormData. Kenapa? Karena satu-satunya cara untuk mengirim sebuah file itu hanya bisa pakai FormData. Tidak bisa pakai JSON/Text/urlFormEncoded/GraphQL
      const formData = new FormData();

      // Untuk menambah key dengan nama file yang valuenya ada File yang ada di state file
      formData.append("file", file);

      // Key yang diminta oleh Cloudinary agar kita bisa upload image menggunakan format unsigned
      formData.append("upload_preset", "blog_unsigned");

      // Fetchi POST ke API Cloudinary untuk mengirim File/image yang ada di state file
      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/fuadinadhif/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(cloudinaryRes);

      // Menghentikan fungsi handleSubmit ketika fetch POST API Cloudinary gagal
      if (!cloudinaryRes.ok) return;

      // Untuk mengambil data JSON yang ada di dalam Response Body dari API Cloudinary. Kenapa? Karena kita butuh property `secure_url` yang ada di dalam body JSON-nya
      const cloudinaryData = await cloudinaryRes.json();

      console.log(cloudinaryData);

      // Memastikan fetch POST ke API Backendless hanya akan dijalankan ketika cloudinaryData ada isinya
      if (cloudinaryData) {
        // Fetching POST API ke Backendless untuk membuat article baru
        await fetch(
          // URL Endpointnya. Alamat kita mengirim data ke server Backendless
          "https://volantpurpose-us.backendless.app/api/data/Articles",
          {
            // HTTP method yang kita pakai karena kita mau kirim data
            method: "POST",
            // Data type dari data yang kita kirim ke server. Kita mau kirim JSON
            headers: {
              "Content-Type": "application/json",
            },
            // Inti data yang mau disimpan di server Backendless. Bentuknya/formatnya JSON
            body: JSON.stringify({
              title: title,
              preview: preview,
              image: cloudinaryData.secure_url,
              content: content,
            }),
          }
        );
      }
      // Catch akan dijalankan kalau di block try ada throw error/error
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      {/* Element form untuk membuat sebuah form dengan event handler onSubmit yang akan menjalankan fungsi di dalamnya ketika form-nya disubmit */}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid">
          <label htmlFor="image" className="text-xl font-semibold">
            Image
          </label>
          {/* Input dengan type=file untuk upload file dan hanya menerima file dengan jenis image */}
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
