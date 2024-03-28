"use client";

import { SignupContainer, SignupForm, SignupInputBox } from "@/(FSD)/apps/styles/SinupStyle.css";
import Feature from "@/(FSD)/features";
import Shared from "@/(FSD)/shareds";
import Widget from "@/(FSD)/widgets";
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'
import React, { FC } from "react";

const SignupPasswordInputPage: FC = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    const schema = z.object({
        password: z.string().regex(passwordRegex, {
            message: "알맞는 비밀번호를 입력해주세요."
        }),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirmPassword"],
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
            <Widget.PrivateHeader signupPathType={"password"} />
            <form className={SignupForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={SignupInputBox}>
                    <Feature.PasswordInput errorMessage={<>{ errors.password && <>{errors.password.message}</>}</>} isRequired name={"password"} control={control} />
                    <Feature.PasswordInput errorMessage={<>{ errors.confirmPassword && <>{errors.confirmPassword.message}</>}</>} isRequired name={"confirmPassword"} control={control} />
                </div>
                <Shared.Button type={"submit"} variant={"solid"} color={"default"} size={"lg"} radius={"md"} fullWidth>다음으로</Shared.Button>
            </form>
        </div>
    );
};

export default SignupPasswordInputPage;