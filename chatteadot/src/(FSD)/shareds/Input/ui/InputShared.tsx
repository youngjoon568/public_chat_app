import { Input, extendVariants } from "@nextui-org/react";

const InputShared = extendVariants(Input, {
    variants: {
        variant: {
            "bordered": {

            },
            "faded": {

            },
            "flat": {

            },
            "underlined": {

            },
        },
        color: {
            "primary": {

            },
            "default": {

            },
            "danger": {

            },
            "secondary": {

            },
            "success": {

            },
            "warning": {

            },
        },
        size: {
            lg: {
                inputWrapper: "min-h-unit-11 h-unit-11",
                errorMessage: "mt-1 mb-2",
                helperWrapper: "h-unit-9"
            },
            md: {
                inputWrapper: "min-h-unit-10 h-unit-10",
                errorMessage: "mt-1 mb-2",
                helperWrapper: "h-unit-9"
            },
            sm: {
                inputWrapper: "min-h-unit-8 h-unit-8",
                errorMessage: "mt-1 mb-2",
                helperWrapper: "h-unit-9"
            },
        }
    }
});

export default InputShared;