import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
    {
        path:"/",
        exact: true, //exactの代わりにendを使用
        children: <Home />
    },
    {
        path:"/user_management",
        exact: false,
        children: <UserManagement />
    },
    {
        path:"/setting",
        e: false,
        children: <Setting />
    }
];