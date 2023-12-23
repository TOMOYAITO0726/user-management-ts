import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: { //オブジェクト
        global: { //styleオブジェクトのプロパティ
            body: { //bodyタグ
                backgroundColor: "gray.100", //スタイル
                color: "gray.800"
            }
        }
    }
});
export default theme;