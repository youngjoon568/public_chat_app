import { globalStyle, style } from "@vanilla-extract/css";

export const PrivateHeader = style({
    marginBottom: 30,
    paddingTop: 20,
    paddingBottom: 10,
    height: 95,
});

globalStyle(`${PrivateHeader} > h2`, {
    fontSize: 18,
    paddingTop: 6,
    fontWeight: "bold"
});