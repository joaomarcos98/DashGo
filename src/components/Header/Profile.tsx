import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (

        <Flex align="center">
            <Box mr="4" textAlign="center">
                <Text>João</Text>
                <Text color="gray.300" fontSize="small">
                    joomarcos.belanga98@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="João Marcos" />
        </Flex>
    )
}