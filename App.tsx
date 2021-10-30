import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerNavigation as Authenticated } from '@Navigation/DrawerNavigation'
import { NonAuthenticatedStackNavigation as NonAuthenticated } from '@Navigation/NonAuthenticatedStackNavigation'
import { Provider, useSelector } from 'react-redux';
import store from '@Redux/store';

const RootStack = createNativeStackNavigator()


const App = () => {

  const { loggedIn } = useSelector((state: any) => state.account)
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName={loggedIn.status ? "Auth" : "NonAuth"}  >
        <RootStack.Screen options={{ headerShown: false }} name="Auth" component={Authenticated} />
        <RootStack.Screen options={{ headerShown: false }} name="NonAuth" component={NonAuthenticated} />
      </RootStack.Navigator>
    </NavigationContainer>

  )
}

export default () => {
  return (
    <Provider store={store}>
      {/* <NativeBaseProvider> */}
      <App />
      {/* </NativeBaseProvider> */}
    </Provider>
  )
}





