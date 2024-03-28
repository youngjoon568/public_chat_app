"use client";

import { SignupContainer, SignupForm, SignupInputBox } from "@/(FSD)/apps/styles/SinupStyle.css";
import Feature from "@/(FSD)/features";
import Shared from "@/(FSD)/shareds";
import Widget from "@/(FSD)/widgets";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod'
import React, { FC } from "react";

interface FormData {
    email: string;
}

const SignupEmailInputPage: FC = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const schema: ZodType<FormData> = z.object({
        email: z.string().regex(emailRegex, {
            message: "알맞은 이메일 주소를 입력해주세요."
        }),
    });

    const router = useRouter();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data: any) => {
        console.log(data);


        router.push("/signup/password");
    }

    return (
        <div className={SignupContainer}>
            <Widget.PrivateHeader signupPathType={"email"} />
            <form className={SignupForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={SignupInputBox}>
                    <Feature.FormInput errorMessage={<>{ errors.email && <>{errors.email.message}</>}</>} isRequired name={"email"} control={control} placeholder={"예) abcd1234@gmail.com"} />
                </div>
                <Shared.Button type={"submit"} variant={"solid"} color={"default"} size={"lg"} radius={"md"} fullWidth>다음으로</Shared.Button>
            </form>
        </div>
    );
};

export default SignupEmailInputPage;