import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenList } from "@Routes/OrderStackNavigationList"


const Stack = createNativeStackNavigator();

const screens = screenList.map((item: any, index) => (
    <Stack.Screen
        key={index}
        name={item.name}
        component={item.component}
        options={{
            // headerTitle: (navigation) => <Navbar navigation={navigation} title={item.title} />,
            // headerBackVisible: false
            headerShown: false
        }}
    />
))

export const OrderStackNavigation = () => {
    return (
        <Stack.Navigator>
            {screens}
        </Stack.Navigator>
    )
}