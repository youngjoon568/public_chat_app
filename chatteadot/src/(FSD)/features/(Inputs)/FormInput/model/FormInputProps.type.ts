import { InputType } from "@/(FSD)/shareds/Input/model/InputProps.type";
import { Control } from "react-hook-form";

export interface FormInputType extends InputType {
    control: Control;
    name: string;
    placeholder?: string;
    type?: string
};