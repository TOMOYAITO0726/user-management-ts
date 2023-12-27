import { Flex, Heading, Box, Link, IconButton, DrawerOverlay, DrawerContent, DrawerBody, Button, Drawer, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import {  useNavigate } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header:VFC = memo(() => {
    const { isOpen, onOpen, onClose} = useDisclosure();
    //const history = useNavigate(); //useHistoryは、useNavigate関数に置き換えられた。
    //const onClickHome = useCallback(() => navi("/home"),[]);
    const navigate = useNavigate(); // useHistory の代わりに useNavigate を使用
    const onClickHome = useCallback(() => navigate("/home"), []); // history.push ではなく navigate を使用
    const onClickUserMnagement = useCallback(() => navigate("/home/user_management"), []); // history.push ではなく navigate を使用
    const onClickSetting = useCallback(() => navigate("/home/setting"), []); // history.push ではなく navigate を使用
    return(
        <>
        <Flex 
        as="nav" 
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between" //space-betweenによって子要素が左右均等に配置される。
        padding={{ base:3, md: 5 }}
        >
        <Flex 
        align="center" 
        as="a" mr={8} 
        _hover={{cursor: "pointer"}} 
        onClick={onClickHome}
        >
            <Heading as="h1" fontSize={{ base: "md", md:"lg"}}>
                ユーザー管理アプリ
            </Heading>
        </Flex>   
        <Flex 
            align="center" 
            fontSize="sm" 
            flexGrow={2} 
            display={{ base: "none", md: "flex"}}
        >
            <Box pr={4}>
                <Link onClick={onClickUserMnagement}>ユーザー一覧</Link>
            </Box>
            <Link onClick={onClickSetting}>設定</Link>
        </Flex>
       <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer  onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserMnagement={onClickUserMnagement} onClickSetting={onClickSetting} />
        </>
    );
});