import { Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisims/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisims/user/UserDetailModal";

export const UserManagement:VFC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure(); //3つのプロパティはMdal表示に必要
    const {getUsers, users, loading} = useAllUsers();
    useEffect(()=> getUsers(), [])

    const onClickUser = useCallback(() => onOpen(),[])
    return(
        <>
        {loading? (
            <Center h="100vh">
                 <Spinner/> 
            </Center>
       ):(
        <Wrap p={{base: 4, md: 10}}>
                {users.map((user)=>(
            <WrapItem key={user.id} mx="auto">
                <UserCard 
                imageUrl="https://source.unsplash.com/random" 
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                />
            </WrapItem>
            ))}
        </Wrap>
        )}
       <UserDetailModal isOpen={isOpen} onClose={onClose}/>
        </>
    );
});
