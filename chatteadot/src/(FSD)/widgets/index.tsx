import { PrivateHeaderType } from "./(header)/PrivateHeader/model/PrivateHeaderProps.type";
import PrivateHeaderWidget from "./(header)/PrivateHeader/ui/PrivateHeaderWidget";
import SocialContainerWidget from "./SocialContainer/ui/SocialContainerWidget";

const Widget = {
    SocialContainer: () => <SocialContainerWidget />,
    PrivateHeader: ({ signupPathType } : PrivateHeaderType) => <PrivateHeaderWidget signupPathType={signupPathType} />,
};

export default Widget;