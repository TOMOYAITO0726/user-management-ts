import { memo, VFC } from "react";
import {Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickUserMnagement: () => void;
    onClickSetting: () => void; 
}

export const MenuDrawer:VFC<Props> = memo((props) => {
    const {onClose, isOpen,  onClickHome, onClickUserMnagement, onClickSetting } = props;
    return(
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>TOP</Button>
                        <Button onClick={onClickUserMnagement}>ユーザー一覧</Button>
                        <Button onClick={onClickSetting}>設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});