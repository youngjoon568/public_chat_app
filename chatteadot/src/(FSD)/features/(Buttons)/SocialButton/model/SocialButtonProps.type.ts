import { ButtonType } from "@/(FSD)/shareds/Button/model/ButtonProps.type";

export interface SocialButtonType extends ButtonType {
    socialType: "google" | "kakao" | "apple";
}