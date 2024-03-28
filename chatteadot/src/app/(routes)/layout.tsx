"use client";

import React from "react";
import RootProvider from "@/(FSD)/apps/providers/RootProvider";
import "@/(FSD)/apps/styles/globals.css";
import { container } from "@/(FSD)/apps/styles/app.css";

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <html lang="ko" suppressHydrationWarning={true}>
            <head>
                <title>채티</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div className={container}>
                    <RootProvider>
                        {children}
                    </RootProvider>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;