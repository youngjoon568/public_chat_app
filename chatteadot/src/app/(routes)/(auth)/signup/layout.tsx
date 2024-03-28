import React from "react";

const SignupLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <>
            <head>
                <title>채티 - 가입하기</title>
            </head>
            {children}
        </>
    );
};

export default SignupLayout;