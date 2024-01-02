import { memo, VFC, ReactNode } from "react";
import { Box, Image, Stack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input} from "@chakra-ui/react";

type Props = {
   isOpen: boolean;
   onClose: () => void;
}

export const UserDetailModal:VFC<Props> = memo((props) => {
    const {isOpen, onClose} = props;
    return(
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        autoFocus={false} 
        motionPreset="slideInBottom">
            <ModalOverlay/>
            <ModalContent pb={6}>
                <ModalHeader>ユーザー詳細</ModalHeader>//タイトル
                <ModalCloseButton/>//閉じるボタン
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="ユーザー詳細" isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="ユーザータロウ" isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value="123@example.com" isReadOnly/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="090-1111-2222" isReadOnly/>
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
});