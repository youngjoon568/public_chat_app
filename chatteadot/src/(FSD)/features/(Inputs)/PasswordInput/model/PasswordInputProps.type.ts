import { InputType } from "@/(FSD)/shareds/Input/model/InputProps.type";
import { Control } from "react-hook-form";

export interface PasswordInputType extends InputType {
    control: Control;
    name: "password" | "confirmPassword";
}