import React from "react";

const OnbLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <head>
                <title>채티 - 온보딩</title>
            </head>
            {children}
        </>
    );
};

export default OnbLayout;