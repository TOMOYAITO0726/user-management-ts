import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../organisims/layout/user/UserCard";

export const UserManagement:VFC = memo(() => {
    return(
        <Wrap p={{base: 4, md: 10}}>
            <WrapItem>
                <UserCard imageUrl="https://source.unsplash.com/random" userName="ユーザー1" fullName="User1"/>
            </WrapItem>
        </Wrap>
    );
});
//読み込む度にランダムに画像が表示される