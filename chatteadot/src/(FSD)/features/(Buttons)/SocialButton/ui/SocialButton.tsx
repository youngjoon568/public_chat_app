import React from 'react';
import Shared from '@/(FSD)/shareds';
import useAuthStore from '@/stores/AuthStore';
import { SocialButtonStyle } from "./SocialButtonStyle.css";
import type { SocialButtonType } from '../model/SocialButtonProps.type';

const SocialButton: React.FC<SocialButtonType> = ({ socialType, children, ...props }) => {
    const { signInWithOAuth } = useAuthStore();
    
    return <Shared.Button className={SocialButtonStyle}
    customtype={socialType} 
    onClick={() => {
        signInWithOAuth(socialType);
    }} {...props} fullWidth radius={"lg"} size={"md"} startContent={<Shared.Icon iconType={socialType} />}>{children}</Shared.Button>;
}; 

export default SocialButton;