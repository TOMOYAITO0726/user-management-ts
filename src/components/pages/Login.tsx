import { ChangeEvent, memo, useState, VFC } from "react";
import {Box, Button, Divider, Flex, Heading, Input, Stack} from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login:VFC = memo(() => {
    const { login, loading} = useAuth();
    const [userId, setUserId] = useState(``);

    const onChangeUserId =(e: ChangeEvent<HTMLInputElement>) => 
        setUserId(e.target.value);

    const onClickLogin = () => login(userId);
    return(
        <Flex align="center" justify="center" height="100vh" shadow="md">
            <Box bg="white" w="sm" p={4} borderRadius="md">
                <Heading as="h1" size="lg" textAlign="center" >ユーザー管理アプリ</Heading>
                <Divider my={4}/>
                <Stack spacing={6} py={4} px={10}>
                <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>
                <PrimaryButton 
                isDisabled={userId === ""}
                loading={loading} 
                onClick={onClickLogin}
                >
                    ログイン
                </PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    );
});
//stackは囲った要素の間隔を等間隔にしてくれる