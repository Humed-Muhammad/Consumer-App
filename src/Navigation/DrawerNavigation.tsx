import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { screenList } from "@Routes/DrawerNavigationList"
import Container from "@Components/Atoms/Container";
import Image from "@Components/Atoms/Image";
import Text from "@Components/Atoms/Text";
import { colors } from "@Utils/Color/colors";
import { ScrollView } from "react-native-gesture-handler";
import Navbar from "@Components/Organisms/Navbar";
import { Icons } from "@Components/Atoms/Icons";

const style = {
    backgroundColor: colors.gray,
    height: 55,
    width: 55,
    borderRadius: 50,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Drawer = createDrawerNavigator();

const iconNames = ["home", "pending", "person", "contact-support"]

const screens = screenList.map(({ name, component, Icon, title }: any, index) => (
    <Drawer.Screen
        key={index}
        name={name}
        component={component}
        options={{
            drawerIcon: () => <Icon size={30} name={iconNames[index]} />,
            header: ({ navigation }) => name != "Home" ? <Navbar name={name} navigation={navigation} title={name} /> : <Icons style={style} onPress={() => navigation.openDrawer()} color={colors.white} name="menu" size={40} />,
            headerTransparent: true
        }}
    />
))

const CustomDrawerContent = (props) => {
    return (
        <ScrollView {...props}>
            <Container bg={colors.border} direction="column" justify="space-evenly" height="200px">
                <Image height={100} width={100} radius={50} source={{ uri: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" }} />
                <Text color={colors.gray} fontSize="15px" fontWeight="bold">Hi Humed</Text>
            </Container>
            <DrawerItemList {...props} />
            {/* <DrawerItem onPress={null} icon={() => <Icons style={null} size={30} name="language" />} label={() => <Dropdown placeholder="Language" />} /> */}
        </ScrollView>
    );
}

export const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            {screens}
        </Drawer.Navigator>
    )
}