import ButtonShared from "./Button/ui/ButtonShared";
import InputShared from "./Input/ui/InputShared";
import IconShared from "./Icon/ui/IconShared";
import SelectShared from "./Select/ui/SelectShared";
import type { ButtonType } from "./Button/model/ButtonProps.type";
import type { InputType } from "./Input/model/InputProps.type";
import type { IconType } from "./Icon/model/IconProps.type";
import type { SelectType } from "./Select/model/SelectProps.type";
import { SelectItem } from "@nextui-org/react";
import SelectItemShared from "./SelectItem/ui/SelectItemShared";

const Shared = {
    Button: ({ children, customtype, ...props }: ButtonType) => <ButtonShared data-customtype={customtype} {...props}><span>{children}</span></ButtonShared>,

    Input: ({ ...props } : InputType) => (
        <InputShared {...props} />
    ),

    Icon: ({ iconType, ...props }: IconType) => <IconShared iconType={iconType} {...props} />,

    Select: ({ placeholder, label, value, onChange, itemList, ...props }: SelectType) => (
        <SelectShared placeholder={placeholder} value={value} aria-label={label} onChange={onChange} {...props}>
            {
                itemList.map((item, index) => (
                    <SelectItem aria-label={item.value} value={item.value} key={index}>
                        {item.label}
                    </SelectItem>
                ))
            }
        </SelectShared>
    ),
    SelectItem: () => (
        <SelectItemShared />
    )
};

export default Shared;