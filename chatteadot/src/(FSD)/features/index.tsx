import SocialButton from "./(Buttons)/SocialButton/ui/SocialButton";
import FormInputShared from "./(Inputs)/FormInput/ui/FormInputShared";
import PasswordInputShared from "./(Inputs)/PasswordInput/ui/PasswordInputShared";
import type { SocialButtonType } from "./(Buttons)/SocialButton/model/SocialButtonProps.type";
import type { FormInputType } from "./(Inputs)/FormInput/model/FormInputProps.type";
import type { PasswordInputType } from "./(Inputs)/PasswordInput/model/PasswordInputProps.type";

const Feature = {
    SocialButton : ({ children, ...props } : SocialButtonType) => <SocialButton {...props}>{ children }</SocialButton>,
    PasswordInput: ({ name, type, control, ...props } : PasswordInputType) => <PasswordInputShared {...props} name={name} control={control} />,
    FormInput: ({ name, placeholder, type, control, ...props } : FormInputType) => <FormInputShared {...props} name={name} placeholder={placeholder} control={control} type={type} />,
};

export default Feature;