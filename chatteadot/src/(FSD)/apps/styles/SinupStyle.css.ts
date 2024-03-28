import { globalStyle, style } from "@vanilla-extract/css";

export const SignupContainer = style({
    width: "100%",
    height: "100%",
    padding: "0 20px",
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
});

export const SignupForm = style({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});
export const SignupInputBox = style({

});
globalStyle(`${SignupInputBox} > *`, {
    marginBottom: 0
});
globalStyle(`${SignupInputBox} > *:last-child`, {
    marginBottom: 0
});