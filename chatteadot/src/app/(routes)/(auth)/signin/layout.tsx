

import React from "react";

const SigninLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <head>
                <title>채티 - 로그인</title>
            </head>
            {children}
        </>
    );
};

export default SigninLayout;