import React from "react"
import type { PrivateHeaderType } from "../model/PrivateHeaderProps.type";
import { PrivateHeader } from "./PrivateHeaderStyle.css";
import Shared from "@/(FSD)/shareds";
import { ButtonStyle } from "@/(FSD)/shareds/Button/ui/ButtonStyle.css";
import { useRouter } from "next/navigation";

const PrivateHeaderWidget: React.FC<PrivateHeaderType> = ({ signupPathType }) => {
    const title = signupPathType === "email" ? "이메일을 입력해주세요." : signupPathType === "password" ? "비밀번호를 입력해주세요." : signupPathType === "profile" ? "사용자 정보를 입력하세요" : ""

    const router = useRouter();

    const onClick = () => {
        router.back();
    };

    return (
        <header className={PrivateHeader}>
            <Shared.Button onClick={onClick} className={ButtonStyle} size={"sm"} variant={"light"} startContent={<Shared.Icon iconType={"left"} />} isIconOnly />
            <h2>{ title }</h2>
        </header>
    );
};

export default PrivateHeaderWidget;