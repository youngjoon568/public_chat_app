import { SelectVariantProps } from "@nextui-org/react";
import { ChangeEvent, ReactNode } from "react";

export interface SelectType extends SelectVariantProps {
    placeholder: string;
    label?: string;
    name?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    itemList: { label: string; value: string; }[];
    value?: string;
}