import Button from '@Components/Atoms/Button'
import Container from '@Components/Atoms/Container'
import Image from '@Components/Atoms/Image'
import Input from '@Components/Atoms/Inputs'
import React from 'react'
import { ScrollView } from 'react-native'
import FilePicker from "@Components/Organisms/FilePicker"
import CardConatiner from '@Components/Atoms/CardContainer'
import { useSelector } from 'react-redux'
import { changeProfileImage } from "@Redux/Slices/AccountSlice"



const Profile = () => {
    const { userProfileData } = useSelector((state: any) => state.account)

    return (
        <ScrollView style={{ height: "100%" }}>
            <Container justify="flex-start" direction="column" height="650px">
                <Container>
                    <FilePicker changeImage={changeProfileImage} />
                    <Image radius={5} height={250} width="90%" source={{ uri: userProfileData.profileImage }} />
                </Container>
                <CardConatiner radius="2px" bottom="20px" position="absolute" justify="space-evenly" width="90%" height="55%" direction="column">
                    <Input value={userProfileData.fullName} radius="0px" borderWidth="0px" borderBottomWidth={1} width="85%" placeholder="Full Name" />
                    <Input value={userProfileData.email} radius="0px" borderWidth="0px" borderBottomWidth={1} width="85%" placeholder="Email" />
                    <Input value={userProfileData.phoneNumber} radius="0px" borderWidth="0px" borderBottomWidth={1} width="85%" placeholder="Phone Number" />
                    <Input value={userProfileData.location} radius="0px" borderWidth="0px" borderBottomWidth={1} width="85%" placeholder="Location" />
                    <Button width="90%" text="Save" />
                </CardConatiner>
            </Container>

        </ScrollView>
    )
}

export default Profile
