import { memo, ReactNode, VFC } from "react";

import { Header } from "../organisims/layout/Header"; 

type Props = {
    children: ReactNode; //React要素を表す型。コンポーネントのporpsに子要素を渡すために使用。
}

export const HeaderLayout:VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children} 
        </>
    )
});
//propsで渡された子要素をレンダリングされる、つまりHeaderLayoutコンポーネント（Routesコンポーネント）でレンダリングされる子要素が渡される