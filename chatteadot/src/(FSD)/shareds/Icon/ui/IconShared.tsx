import React from "react"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import type { IconType } from "../model/IconProps.type";
import { FaChevronLeft, FaChevronRight, FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";


const IconShared: React.FC<IconType> = ({ iconType }) => {
    let component = null;

    switch (iconType) {
        case "google":
            component = <FcGoogle />;
            break;
        case "apple":
            component = <FaApple />;
            break;
        case "kakao":
            component = <RiKakaoTalkFill />;
            break;
        case "left":
            component = <FaChevronLeft />;
            break;
        case "right":
            component = <FaChevronRight />;
            break;
        case "eye":
            component = <FaEye />;
            break;
        case "eyeSlash":
            component = <FaEyeSlash />;
            break;
        case "close":
            component = <IoCloseCircle />;
            break;    
        default:
            component = null;
            break;
    }

    return (
        <>
            {component}
        </>
    );
};

export default IconShared;