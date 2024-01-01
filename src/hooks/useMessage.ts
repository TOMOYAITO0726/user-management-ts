import { useCallback } from "react"
import { useToast } from "@chakra-ui/react";

type Props = {
    title: string;
    status: "info"|"warning"|"success"|"error"; //|はor（もしくは）という意味
}
export const useMessage = () => {
    const toast = useToast();
    
    const showMessage = useCallback((props:Props) => {
        const { title, status } = props;
        toast({
            title,
            status,
            position:"top",//表示場所
            duration: 2000,//表示時間
            isClosable:true
        });
    }, [toast]);
    return { showMessage}
} 