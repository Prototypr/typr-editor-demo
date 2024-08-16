"use client";
import React from "react";
import Tiptypr from 'tiptypr';
import Head from 'next/head';

export const metadata = {
  title: 'Typr Editor - Open Source Content Editor by Prototypr',
  description: 'A powerful and customizable text editor for your Next.js application.',
  openGraph: {
    title: 'Tiptypr Editor',
    description: 'Create and edit content with ease using our advanced text editor.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tiptypr Editor Preview',
      },
    ],
  },
};

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </Head>
      <Tiptypr
        requireLogin={false}
        components={{
          nav: {
            userBadge: {
              loggedInMenu: {
                userMenu: [
                  {
                    link: "/dashboard/drafts",
                    label: "Posts",
                  },
                ],
              },
            },
          },
          // settingsPanel:{
          //   seoTab:{
          //     menu:[
          //       {
          //         type: 'text',
          //         field:'seo.opengraphTitle',
          //         label: 'Meta Description',
          //         initialValue: '',
          //       }
          //     ]
          //   }
          // }
        }}
        theme={'gray'}
        user={{
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
        }}
      />
    </>
  );
}