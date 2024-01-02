import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
    id: number;
    users: Array<User>;
    onOpen: ()=> void;
}
//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const onSelectUser = useCallback((props:Props) => {
        const { id, users, onOpen } = props;
        const targetUser = users.find((user) => user.id === id); //users（配列）の中からuserを順番に参照し、user.idと一致する要素を返してくれる
        //findは配列に対して使う
        //setSelectedUser(targetUser ?? null);//targetUserがない、undefied（users配列とidが一致せず返す値がない）場合にnullを返す
        setSelectedUser(targetUser!); //typescript上で値が必ずあると明示する→型を無視、あまり使わない
        // console.log("!!!");
        // console.log(targetUser);
        onOpen()
    },[]);
    return { onSelectUser,  selectedUser }
}