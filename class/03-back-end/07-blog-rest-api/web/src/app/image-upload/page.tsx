"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsUploading(true);

      if (!file) {
        throw new Error("File not found");
      }

      const formData = new FormData();
      formData.append("singleImage", file);
      formData.append("caption", "Upload single image");

      const res = await fetch("http://localhost:8000/api/v1/images/single", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Error upload single image");
      }

      alert("Success upload single image");
    } catch (error) {
      console.error(error);
    } finally {
      setFile(null);
      setPreview(null);
    }
  }

  function deletePreview() {
    setFile(null);
    setPreview(null);
    setIsUploading(false);
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div className="grid place-items-center w-full max-w-96">
        <h1 className="uppercase font-bold mb-12 text-2xl">Image Upload</h1>

        <div className="grid place-items-center w-full">
          <h2 className="font-bold text-xl mb-6">Single Upload</h2>
          {/* form */}
          <form className="w-full mb-2" onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFile(file);
                  setPreview(URL.createObjectURL(file));
                }
                setIsPickerOpen(false);
              }}
              className="hidden"
            />
            {!preview && (
              <button
                className="border border-white p-2 w-full"
                disabled={isPickerOpen}
                onClick={() => {
                  setIsPickerOpen(true);
                  inputRef.current?.click();
                  setTimeout(() => {
                    setIsPickerOpen(false);
                  }, 1500);
                }}
              >
                {isPickerOpen ? "Loading..." : "Pick Image"}
              </button>
            )}
            {preview && (
              <button
                type="submit"
                className="border border-white p-2 w-full"
                disabled={isUploading}
              >
                {isUploading ? "Uploading..." : "upload"}
              </button>
            )}
          </form>

          {/* preview */}
          {preview && (
            <div className="relative w-full h-32">
              <button
                className="absolute cursor-pointer z-10 right-2 top-2"
                onClick={deletePreview}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Image
                src={preview}
                alt="Upload single image preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
