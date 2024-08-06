"use client"
import { InputGroup, InputLeftElement, Icon, Input, InputRightElement, Button, Box, Text } from "@chakra-ui/react";
import Card from "../components/Card/Card";
import Link from "next/link";

import { SyntheticEvent, useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { data, error, isLoading, authenticate } = useAuth(email, password);

  const signIn = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (data) {
      authenticate(email, password);
    }
  }

  return (
    <>
      <Card heading="Войти в Yoldi Agency">
      <InputGroup mb={4} size='lg'>
        <InputLeftElement width="4rem" pointerEvents='none'>
          <Icon viewBox='0 0 25 26' color='black' width="2em" height="1.6em">
            <path d="M2.34375 6.75V20.8125H22.6562V6.75H2.34375ZM5.71289 8.3125H19.2871L12.5 12.8291L5.71289 8.3125ZM3.90625 8.99609L12.0605 14.4404L12.5 14.709L12.9395 14.4404L21.0938 8.99609V19.25H3.90625V8.99609Z" fill="black"/>
          </Icon>
        </InputLeftElement>
        <Input pl="3.5rem" _focus={{
            borderColor: 'black',
            borderWidth: '1px',
            boxShadow: 'none',
          }} type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup mb={6} size='lg'>
        <InputLeftElement width="4rem" pointerEvents='none'>
          <Icon viewBox='0 0 25 26' color='black' width="2em" height="1.6em">
          <path d="M12.5 2.84375C9.49707 2.84375 7.03125 5.30957 7.03125 8.3125V10.6562H4.6875V23.1562H20.3125V10.6562H17.9688V8.3125C17.9688 5.30957 15.5029 2.84375 12.5 2.84375ZM12.5 4.40625C14.6515 4.40625 16.4062 6.16101 16.4062 8.3125V10.6562H8.59375V8.3125C8.59375 6.16101 10.3485 4.40625 12.5 4.40625ZM6.25 12.2188H18.75V21.5938H6.25V12.2188Z" fill="black"/>
          </Icon>
        </InputLeftElement>
        <Input
          _focus={{
            borderColor: 'black',
            borderWidth: '1px',
            boxShadow: 'none',
          }}
          pl="3.5rem"
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {show ? (
          <InputRightElement width="4rem">
          <Icon onClick={handleClick} viewBox='0 0 25 26' color='black' width="2em" height="1.6em">
            <path d="M12.5 6.75C5.98755 6.75 0.976562 12.4873 0.976562 12.4873L0.512695 13L0.976562 13.5127C0.976562 13.5127 5.54504 18.722 11.6211 19.2012C11.911 19.2378 12.2009 19.25 12.5 19.25C12.7991 19.25 13.089 19.2378 13.3789 19.2012C19.455 18.722 24.0234 13.5127 24.0234 13.5127L24.4873 13L24.0234 12.4873C24.0234 12.4873 19.0125 6.75 12.5 6.75ZM12.5 8.3125C14.2212 8.3125 15.8081 8.78247 17.1875 9.41113C17.6849 10.2351 17.9688 11.1842 17.9688 12.2188C17.9688 15.0416 15.8508 17.361 13.1104 17.6631C13.0951 17.6661 13.0768 17.66 13.0615 17.6631C12.8754 17.6722 12.6892 17.6875 12.5 17.6875C12.2925 17.6875 12.0911 17.6753 11.8896 17.6631C9.14917 17.361 7.03125 15.0416 7.03125 12.2188C7.03125 11.1995 7.30591 10.2504 7.78809 9.43555H7.76367C9.15527 8.79468 10.7605 8.3125 12.5 8.3125ZM12.5 9.875C11.2061 9.875 10.1562 10.9248 10.1562 12.2188C10.1562 13.5127 11.2061 14.5625 12.5 14.5625C13.7939 14.5625 14.8438 13.5127 14.8438 12.2188C14.8438 10.9248 13.7939 9.875 12.5 9.875ZM5.66406 10.6074C5.54199 11.1323 5.46875 11.6603 5.46875 12.2188C5.46875 13.589 5.85938 14.8707 6.54297 15.9541C4.57458 14.8158 3.2074 13.4578 2.75879 13C3.13416 12.6155 4.18091 11.5962 5.66406 10.6074ZM19.3359 10.6074C20.8191 11.5962 21.8658 12.6155 22.2412 13C21.7926 13.4578 20.4254 14.8158 18.457 15.9541C19.1406 14.8707 19.5312 13.589 19.5312 12.2188C19.5312 11.6603 19.458 11.1262 19.3359 10.6074Z" fill="#838383"/>
          </Icon>
        </InputRightElement>
          
        ) : (
          <InputRightElement width="4rem">
            <Icon onClick={handleClick} viewBox='0 0 25 26' color='black' width="2em" height="1.6em">
            <path d="M21.0006 12.0007C19.2536 15.5766 15.8779 18 12 18M12 18C8.12204 18 4.7463 15.5766 2.99977 12.0002M12 18L12 21M19.4218 14.4218L21.4999 16.5M16.2304 16.9687L17.5 19.5M4.57812 14.4218L2.5 16.5M7.76953 16.9687L6.5 19.5" stroke="#838383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Icon>
          </InputRightElement>
        )}
      </InputGroup>
      <Button isDisabled={email === "" && password === ""} onClick={signIn} fontWeight={400} size="lg" bg="blackAlpha.300" color="white" width="full">Войти</Button>
    </Card>
    <Box as="footer" bg="white" color="gray.500" py={4} textAlign="center">
      <Text>Еще нет аккаунта? <Link style={{ color: "black", fontWeight: "600" }} href={"/"}>Зарегистрироваться</Link></Text>
    </Box>
    </>
  )
}

export default Login;