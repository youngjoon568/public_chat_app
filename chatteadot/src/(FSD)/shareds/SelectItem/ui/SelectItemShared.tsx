import { SelectItem, extendVariants } from "@nextui-org/react";

const SelectItemShared = extendVariants(SelectItem, {
    variants: {
        size: {
            lg: {
                title: "text-medium",
            },
            md: {
                title: "text-small",
            },
            sm: {
                title: "text-small",
            }
        }
    },
    defaultVariants: {
        size: "md",
    }
});

export default SelectItemShared;