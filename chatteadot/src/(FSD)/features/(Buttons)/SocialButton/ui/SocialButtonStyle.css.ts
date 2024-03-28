import { globalStyle, style } from "@vanilla-extract/css";

export const SocialButtonStyle = style({
    display: "block",
    position: "relative",
    textAlign: "left",
    fontWeight: "bold",
    selectors: {
        '&[data-customtype="google"]': {
            backgroundColor: "#fff",
            border: "2px solid #eaeaea"
        },
        '&[data-customtype="kakao"]': {
            backgroundColor: "#FEE500",
        },
        '&[data-customtype="apple"]': {
            backgroundColor: "#000",
            color: "#fff"
        },
    },
});

globalStyle(`${SocialButtonStyle} > svg`, {
    position: "absolute",
    left: "108px",
    top: "50%",
    transform: "translateY(-50%)",
});
globalStyle(`${SocialButtonStyle} > span`, {
    display: "block",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "135px"
});