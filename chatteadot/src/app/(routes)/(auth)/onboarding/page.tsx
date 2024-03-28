"use client";

import Widget from "@/(FSD)/widgets";
import React, { FC } from "react";
import { OnbBtmContainer, OnbContainer, OnbTopContainer, SigninBtnStyle, SignupBtnStyle } from "@/(FSD)/apps/styles/OnbStyle.css";
import Shared from "@/(FSD)/shareds";
import { Link } from "@nextui-org/react";
// import Logo from "@/images/logo.png";
// import Image from "next/image";

const OnbPage: FC = () => {

    return (
        <div className={OnbContainer}>
            <div className={OnbTopContainer}>
                
            </div>
            <div className={OnbBtmContainer}>
                <Shared.Button href={"/signup"} size={"md"} as={Link} color={"primary"} fullWidth radius={"lg"}  className={SignupBtnStyle}>계정 만들기</Shared.Button>
                <Widget.SocialContainer />
                <Link className={SigninBtnStyle} href={"signin"}>로그인하기</Link>
            </div>
        </div>
    );
};

export default OnbPage;