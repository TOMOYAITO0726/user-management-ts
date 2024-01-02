import { memo, VFC, ReactNode } from "react";
import { Box, Image, Stack, Text} from "@chakra-ui/react";

type Props = {
   imageUrl: string;
   userName: string;
   fullName: string;
   onClick: () => void;
}

export const UserCard:VFC<Props> = memo((props) => {
    const {imageUrl, userName, fullName, onClick  } = props;
    return(
        <Box 
            w="260px" 
            h="260px" 
            bg="white" 
            borderRadius="10px" 
            shadow="md"
            p={4}
            _hover={{cusor:"pointer", opacity:0.8}}
            onClick={onClick}
            >
                <Stack textAlign="center">
                    <Image 
                    borderRadius="full"
                    boxSize="160px"
                    src={imageUrl}
                    alt={userName}
                    m="auto"
                />
                <Text fontSize="lg" fontWeight="bold">{userName}</Text>
                <Text fontSize="sm" color="gray">{fullName}</Text>
                </Stack>
        </Box>

    );
});