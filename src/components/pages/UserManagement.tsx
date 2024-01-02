import { Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisims/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisims/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement:VFC = memo(() => {
    const {isOpen, onOpen, onClose} = useDisclosure(); //3つのプロパティはMdal表示に必要
    const {getUsers, users, loading} = useAllUsers();
    const {onSelectUser, selectedUser} = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log(loginUser);
    
    useEffect(()=> getUsers(), []);

    const onClickUser = useCallback((id:number) => { 
        console.log(id);
        onSelectUser({id, users, onOpen});
    },[users, onSelectUser, onOpen])
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
                id={user.id}
                imageUrl="https://source.unsplash.com/users" 
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                />
            </WrapItem>
            ))}
        </Wrap>
        )}
       <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose}/>
        </>
    );
});
