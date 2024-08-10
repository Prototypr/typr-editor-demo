"use client";
import React from "react";
// import dynamic from "next/dynamic";

import "tiptypr/dist/styles.css";

// const Tiptypr = dynamic(() => import("tiptypr"), {
//   ssr: false,
// });
import Tiptypr from 'tiptypr'

export default function EditorPage() {
  return (
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
        // isLoggedIn: true,
        // isAdmin:true
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      }}
    />
  );
}
