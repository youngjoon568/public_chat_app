import React, { useEffect, useState } from "react";
import Shared from "@/(FSD)/shareds";
import { FormInputType } from "../model/FormInputProps";
import { Controller } from "react-hook-form";

const FormInputShared = ({ name, control, placeholder, type = "text", ...props }: FormInputType) => {

    return (
        <Controller name={name} control={control} render={({ field }) => (
            <Shared.Input {...props} {...field} placeholder={placeholder} type={type}
                size={"md"} isRequired variant={"flat"} radius={"md"}
                endContent={<>
                    {
                        ((field.value != null) && (String(field.value).length >= 1)) &&
                        <button className="focus:outline-none" type="button" onClick={_ => { field.onChange(""); }}>
                            <Shared.Icon iconType={"close"} />
                        </button>
                    }
                </>}
            />)} 
        />
    );
};

export default FormInputShared;