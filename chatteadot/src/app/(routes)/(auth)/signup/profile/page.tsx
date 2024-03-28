"use client";

import Shared from "@/(FSD)/shareds";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Feature from "@/(FSD)/features";
import Widget from "@/(FSD)/widgets";
import { SignupContainer, SignupForm, SignupInputBox } from "@/(FSD)/apps/styles/SinupStyle.css";
import { profileSelectBox } from "@/(FSD)/apps/lib/setProfile";
import React from "react";
import { forwardRef } from "@nextui-org/react";

const SignupProfileInputPage = () => {
    const nameRegex = /^[가-힣a-zA-Z\s]{1,20}$/;

    const { yearsTuple, regionTuple, genderTuple, yearsItemList, regionItemList, genderItemList } = profileSelectBox;

    const schema = z.object({
        name: z.string().regex(nameRegex, { message: "알맞은 이름을 입력해주세요." }),
        year: z.enum(yearsTuple),
        gender: z.enum(regionTuple),
        region: z.enum(genderTuple),
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const profileSelectObj = {
        year: {
            label: "year",
            text: "출생년도를 입력 해주세요.",
            itemList: [...yearsItemList],
        },
        gender: {
            label: "gender",
            text: "성별을 입력 해주세요.",
            itemList: [...genderItemList]
        },
        region: {
            label: "region",
            text: "사는 지역을 입력 해주세요.",
            itemList: [...regionItemList]
        },
    }

    const onSubmit = (data: any) => {        
        console.log(data);
    }

    return (
        <div className={SignupContainer}>
            <Widget.PrivateHeader signupPathType={"profile"} />
            <form className={SignupForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={SignupInputBox}>
                    <Feature.FormInput errorMessage={<>{errors.name && <>{errors.name.message}</>}</>} name={"name"} type={"text"} placeholder="이름을 입력해주세요." control={control} />
                    <Controller defaultValue={""} name={profileSelectObj.year.label} control={control} render={({ field, fieldState: { invalid } }) => <Shared.Select {...field} itemList={profileSelectObj.year.itemList} isRequired radius={"md"} size={"md"} placeholder={profileSelectObj.year.text} />}
                    />
                    <Controller defaultValue={""} name={profileSelectObj.gender.label} control={control} render={({ field, fieldState: { invalid } }) => <Shared.Select {...field} itemList={profileSelectObj.gender.itemList} isRequired radius={"md"} size={"md"} placeholder={profileSelectObj.gender.text} />}
                    />
                    <Controller defaultValue={""} name={profileSelectObj.region.label} control={control} render={({ field, fieldState: { invalid } }) => <Shared.Select {...field} itemList={profileSelectObj.region.itemList} isRequired radius={"md"} size={"md"} placeholder={profileSelectObj.region.text} />}
                    />
                </div>
                <Shared.Button type={"submit"} variant={"solid"} color={"default"} size={"lg"} radius={"md"} fullWidth>다음으로</Shared.Button>
            </form>
        </div>
    );
};

export default forwardRef(SignupProfileInputPage);