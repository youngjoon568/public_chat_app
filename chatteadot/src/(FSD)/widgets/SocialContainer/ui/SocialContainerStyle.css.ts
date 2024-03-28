import { globalStyle, style } from "@vanilla-extract/css";

export const SocialContainerStyle = style({

});

globalStyle(`${SocialContainerStyle} > button`, {
    marginBottom: 8
});
globalStyle(`${SocialContainerStyle} > button:last-child`, {
    marginBottom: 0
});