import { memo, VFC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children:ReactNode;
    isDisabled?: boolean; //disabled→disAbledに変更になった
    loading?: boolean;
    onClick: () => void;
}

export const PrimaryButton:VFC<Props> = memo((props) => {
    const { children, isDisabled=false, loading=false,onClick } = props;
    return(
        <Button 
        bg="teal.400" 
        color="white" 
        _hover={{ opacity:0.8}} 
        isDisabled={isDisabled || loading}
        isLoading={loading}
        onClick={onClick}>
            {children}
        </Button>

    );
});