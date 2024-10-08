import { Baskervville, Lora } from '@next/font/google';
import "tiptypr/dist/styles.css";
import "./globals.css";
// import Script from 'next/script';

const baskerville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskerville',
});

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head> */}
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X8QJE8EP22"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8QJE8EP22');
          `}
        </Script> */}
      {/* </head> */}
      <body className={`${baskerville.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
