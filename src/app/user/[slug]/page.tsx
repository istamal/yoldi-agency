"use client"

import { EmailIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Icon, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import React, { SyntheticEvent, useState } from 'react'

import styles from "./profile.module.css";
import useSWR from 'swr';
import Service from '@/app/Service/Service';
import withAuth from '@/app/HOCs/withAuth';

function Account({ params }: { params: { slug: string, name: string, avatar: string }}) {
    const [file, setFile] = useState(null);
    const [avatar, setAvatar] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data, error, isLoading } = useSWR(["user"], () => Service.getProfile());

    console.log(error);

    const loadFIle = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const loadAvatar = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const deleteFile = () => {
        setFile(null);
    }

    const deleteAvatar = () => {
        setFile(null);
    }
  return (
    <>
        <Flex bg={file ? `url(${file})` : "blackAlpha.100"} className={styles.headerWallpaper} justifyContent="center" alignItems="center" role="header" height="200px" width="100%">
            {!file ? (
                    <label className={styles.downloadButton}>
                        <Icon viewBox='0 0 20 20' color='black' width="2em" height="1em">
                        <path d="M7.5 0.307617L6.93848 0.844727L1.46973 6.31348L2.59277 7.43652L6.71875 3.31055V16.25H8.28125V3.31055L12.4072 7.43652L13.5303 6.31348L8.06152 0.844727L7.5 0.307617ZM0.46875 17.8125V19.375H14.5312V17.8125H0.46875Z" fill="black"/>
                        </Icon>
                        Загрузить
                        <Icon viewBox='0 0 20 20' color='black' width="2em" height="1em">
                            <path d="M0.5625 0.40625V17.5938H22.4375V0.40625H0.5625ZM2.125 1.96875H20.875V12.833L16.749 8.68262L16.1875 8.12109L12.6475 11.6611L8.15527 7.12012L7.59375 6.55859L2.125 12.0273V1.96875ZM17.75 3.53125C16.8864 3.53125 16.1875 4.2301 16.1875 5.09375C16.1875 5.9574 16.8864 6.65625 17.75 6.65625C18.6136 6.65625 19.3125 5.9574 19.3125 5.09375C19.3125 4.2301 18.6136 3.53125 17.75 3.53125ZM7.59375 8.78027L14.7715 16.0312H2.125V14.249L7.59375 8.78027ZM16.1875 10.3428L20.875 15.0303V16.0312H16.9932L13.7461 12.7598L16.1875 10.3428Z" fill="black"/>
                        </Icon>
                        <Input onChange={loadFIle} display="none" type="file" />
                    </label>
                ) : (
                    <label onClick={deleteFile} className={styles.downloadButton}>
                        <Icon viewBox='0 0 20 20' color='black' width="2em" height="1em">
                        <path d="M7.5 0.307617L6.93848 0.844727L1.46973 6.31348L2.59277 7.43652L6.71875 3.31055V16.25H8.28125V3.31055L12.4072 7.43652L13.5303 6.31348L8.06152 0.844727L7.5 0.307617ZM0.46875 17.8125V19.375H14.5312V17.8125H0.46875Z" fill="black"/>
                        </Icon>
                        Удалить
                        <Icon viewBox='0 0 20 20' color='black' width="2em" height="1em">
                            <path d="M0.5625 0.40625V17.5938H22.4375V0.40625H0.5625ZM2.125 1.96875H20.875V12.833L16.749 8.68262L16.1875 8.12109L12.6475 11.6611L8.15527 7.12012L7.59375 6.55859L2.125 12.0273V1.96875ZM17.75 3.53125C16.8864 3.53125 16.1875 4.2301 16.1875 5.09375C16.1875 5.9574 16.8864 6.65625 17.75 6.65625C18.6136 6.65625 19.3125 5.9574 19.3125 5.09375C19.3125 4.2301 18.6136 3.53125 17.75 3.53125ZM7.59375 8.78027L14.7715 16.0312H2.125V14.249L7.59375 8.78027ZM16.1875 10.3428L20.875 15.0303V16.0312H16.9932L13.7461 12.7598L16.1875 10.3428Z" fill="black"/>
                        </Icon>
                    </label>
                )
            }
        </Flex>
        <Box flex={1} px="10%">
            
            <Box bg={avatar ? `url(${avatar})` : "gray.100"} className={styles.avatar} mt="-50px" mb="50px" height="100px" width="100px" border="1px solid gray.200" borderRadius="100">
                {/* {params.avatar ? (
                    <Image src={params.avatar} alt="avatar" />
                ) : (
                    <Box>{params.name[0]}</Box>
                )} */}
                <label className={styles.setAvatar}>
                    <Input onChange={loadAvatar} display="none" type="file" />
                </label>
            </Box>
            <Flex flex={1} flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "flex-start", md: "space-between" }} alignItems="left">
                <Box>
                    <Box mb="2" fontSize="2rem">Владислав</Box>
                    <Box mb="6">example@email.com</Box>
                </Box>
                <Button onClick={onOpen} mb="6" width="200px" leftIcon={
                    <Icon viewBox='0 0 20 20' color='black' width="2em" height="1em">
                        <path d="M16.6768 0.600586C15.8589 0.600586 15.041 0.917969 14.4062 1.55273L2.05273 13.9062L2.00391 14.1504L1.14941 18.4473L0.905273 19.5947L2.05273 19.3506L6.34961 18.4961L6.59375 18.4473L18.9473 6.09375C20.2168 4.82422 20.2168 2.82227 18.9473 1.55273C18.3125 0.917969 17.4946 0.600586 16.6768 0.600586ZM16.6768 2.08984C17.0704 2.08984 17.4672 2.2699 17.8486 2.65137C18.6085 3.41125 18.6085 4.23523 17.8486 4.99512L17.2871 5.53223L14.9678 3.21289L15.5049 2.65137C15.8864 2.2699 16.2831 2.08984 16.6768 2.08984ZM13.8691 4.31152L16.1885 6.63086L6.74023 16.0791C6.22754 15.0781 5.42188 14.2725 4.4209 13.7598L13.8691 4.31152ZM3.41992 15.0293C4.35681 15.4077 5.09229 16.1432 5.4707 17.0801L2.90723 17.5928L3.41992 15.0293Z" fill="black"/>
                    </Icon>
                } variant='outline'>Редактрировать</Button>
            </Flex>
            <Box mb="10">
            Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
            </Box>

            <Button onClick={() => Service.logOut()}>Выйти</Button>
        </Box>
        <Modal width="100%" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay display={{ base: "none", md: "block" }} />
            <ModalContent>
                <ModalHeader>Редактрировать профиль</ModalHeader>
                <ModalBody>
                    <label style={{ fontSize: "0.8rem" }}>
                        Имя
                        <Input _focus={{
                            borderColor: 'black',
                            borderWidth: '1px',
                            boxShadow: 'none',
                            }}
                            mt="1" mb="2" type="text"
                        />
                    </label>
                    <label style={{ fontSize: "0.8rem" }}>
                        Адрес профиля
                        <InputGroup mt="1" mb="2" size='sm'>
                            <InputLeftAddon>example.com/</InputLeftAddon>
                            <Input _focus={{
                    borderColor: 'black',
                    borderWidth: '1px',
                    boxShadow: 'none',
                    }} placeholder='mysite' />
                        </InputGroup>
                    </label>
                    <label style={{ fontSize: "0.8rem" }}>
                        Описание
                        <Textarea _focus={{
                    borderColor: 'black',
                    borderWidth: '1px',
                    boxShadow: 'none',
                    }} mt="1" mb="4"></Textarea>
                    </label>
                </ModalBody>

                <ModalFooter>
                    <Button width="265px" variant='outline' mr={3} onClick={onClose}>
                    Отмена
                    </Button>
                    <Button width="265px" bg="black" color="white">Сохронить</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default withAuth(Account);