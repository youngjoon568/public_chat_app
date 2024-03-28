import { Button, extendVariants } from "@nextui-org/react";

const ButtonShared = extendVariants(Button, {
    variants: {
        variant: {
            "solid": "",
            "bordered": "",
            "faded": "",
            "flat": "",
            "ghost": "",
            "light": "",
            "shadow": "",
        },
        color: {
            "primary": "",
            "default": "bg-foreground text-default",
            "secondary": "",
            "success": "",
            "danger": "",
            "warning": "",
        },
        size: {
            lg: "min-h-unit-11 h-unit-11",
            md: "min-h-unit-10 h-unit-10",
            sm: "min-h-unit-8 h-unit-8",
        },
    },
    defaultVariants: {
        size: "md",
    }
});

export default ButtonShared;