import { Button } from "@chakra-ui/react";

interface PaginationItem {
    number: number;
    isCurrent?: boolean
}


export function PaginationItem({
    isCurrent = false,
    number
}: PaginationItem) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="pink"
                _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="gray.700"
            _hover={{
                bg: "gray.500"
            }}

        >
            {number}
        </Button>
    )
}