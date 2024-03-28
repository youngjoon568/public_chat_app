"use server";

import React from "react";

const SplashLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <head>
                <title>채티 - </title>
            </head>
            {children}
        </>
    );
};

export default SplashLayout;