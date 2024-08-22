import React from "react";
import HomePage from './HomePage';

export const metadata = {
  title: "Typr Editor - Open-Source Writing Tool by Prototypr",
  description:
    "A customizable WYSIWYG editor with publishing flows and user state management for React.js. Built with Tiptap and ProseMirror.",
  openGraph: {
    title: "Typr Editor - Open-Source Writing Tool by Prototypr",
    description:
      "A customizable WYSIWYG editor with publishing flows and user state management for React.js. Built with Tiptap and ProseMirror.",
    images: [
      {
        url: `https://typr.dev/typr-og.png`,
        width: 1200,
        height: 630,
        alt: "Tiptypr Editor Preview",
      },
    ],
  },
};

export default function EditorPage() {
  return (
    <>
      <HomePage />
      
    </>
  );
}