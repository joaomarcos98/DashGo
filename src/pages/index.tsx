import { Flex, Button, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"

type SignInFormData = {
    email: string;
    password: string;
}

export default function Home() {
    const { register, handleSubmit, formState } = useForm()

    const { errors } = formState

    const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
        console.log(values);
    }

    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center"
        >
            <Flex
                as="form"
                w="100%"
                maxWidth={360}
                bg="gray.800"
                p="8"
                borderRadius="8"
                flexDir="column"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">

                    <Input
                        name="email"
                        label="Email :"
                        {...register("email")}
                    />

                    <Input
                        name="password"
                        label="Password :"
                        type="password"
                        {...register("password")}
                    />

                    <Button
                        type="submit"
                        mt="6"
                        colorScheme="pink"
                        size="lg"
                    >
                        Entrar
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    )
}
