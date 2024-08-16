"use client";
import React from "react";
import Tiptypr from 'tiptypr';
import Head from 'next/head';

export default function EditorPage() {
  return (
    <>
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