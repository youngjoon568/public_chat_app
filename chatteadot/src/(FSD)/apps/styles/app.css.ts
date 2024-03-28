import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
    width: 390,
    height: 844,
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

globalStyle("[data-overlay-container=true]", {
    width: "100%",
    height: "100%"
});
globalStyle(".tsqd-parent-container", {
    display: "none"
});