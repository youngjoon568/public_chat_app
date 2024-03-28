import { style } from "@vanilla-extract/css";

export const OnbContainer = style({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export const OnbTopContainer = style({
    flexGrow: 3
});
export const OnbBtmContainer = style({
    flexGrow: 1,
    padding: "0 20px",
});

export const SignupBtnStyle = style({
    marginBottom: 10,
    fontWeight: "bold"
});

export const SigninBtnStyle = style({
    display: "block",
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    marginTop: 10,
    padding: 5,
    color: "#000",
    transform: "translateX(-50%)",
});