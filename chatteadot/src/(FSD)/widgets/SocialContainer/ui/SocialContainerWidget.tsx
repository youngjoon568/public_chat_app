import React from "react";
import Feature from "@/(FSD)/features";
import { SocialContainerStyle } from "./SocialContainerStyle.css";
import type { DomCommonType } from "@/types/DomCommon.type";

const SocialContainerWidget: React.FC<DomCommonType> = () => {
    return (
        <div className={SocialContainerStyle}>
            <Feature.SocialButton socialType={"google"}>Google로 시작하기</Feature.SocialButton>
            <Feature.SocialButton socialType={"kakao"}>Kakao로 시작하기</Feature.SocialButton>
            <Feature.SocialButton socialType={"apple"}>Apple로 시작하기</Feature.SocialButton>
        </div>
    );
};

export default SocialContainerWidget;