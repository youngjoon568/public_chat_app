import React, { useEffect, useState } from "react";
import { PasswordInputType } from "../model/PasswordInputProps";
import Shared from "@/(FSD)/shareds";
import { Controller } from "react-hook-form";

const PasswordInputShared = ({ name, control, ...props }: PasswordInputType) => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        switch (name) {
            case "password":
                setPlaceholder("영문, 숫자 포함 8~16자");
                break;
            case "confirmPassword":
                setPlaceholder("비밀번호를 한 번 더 입력해주세요.");
                break;
            default:
                break;
        }
    }, [name]);

    return (
        <Controller name={name} control={control} render={({ field }) => (
            <Shared.Input {...props} {...field} name={name} placeholder={placeholder} type={isVisible ? "password" : "text"}
                size={"md"} isRequired variant={"flat"} radius={"md"}
                endContent={<>
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {
                            isVisible ? <Shared.Icon iconType={"eye"} /> : <Shared.Icon iconType={"eyeSlash"} />
                        }
                    </button>
                </>}
            />
        )}
        />
    );
};

export default PasswordInputShared;

// Control<FieldValues, any>