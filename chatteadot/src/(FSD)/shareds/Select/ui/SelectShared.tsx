import { Select, SelectItem, extendVariants, forwardRef } from "@nextui-org/react";

const SelectShared = extendVariants(Select, {
    variants: {
        size: {
            lg: {
                base: "h-unit-11",
                mainWrapper: "h-unit-11",
                trigger: "h-unit-11",
                selectorIcon: "",
                value: "",
                listbox: "",
                popoverContent: "rounded-medium",
            },
            md: {
                base: "h-unit-10",
                mainWrapper: "h-unit-10",
                trigger: "h-unit-10",
                popoverContent: "rounded-medium",
            },
            sm: {
                base: "h-unit-9",
                mainWrapper: "h-unit-9",
                trigger: "h-unit-9",
                popoverContent: "rounded-medium",
            }
        }
    },
    defaultVariants: {
        size: "md",
    }
});
const SelectItemVariant = extendVariants(SelectItem, {
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

export default forwardRef(SelectShared);
