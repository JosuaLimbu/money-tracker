import React from "react";
import SplashScreen from "./src/screens/SplashScreen";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import HomeTab from "./src/screens/HomeTab";
import CashOnHand from "./src/screens/CashOnHand";
import CashOnBank from "./src/screens/CashOnBank";

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="CashOnHand"
          component={CashOnHand}
          options={{headerShown: false}}
        />
    <Stack.Screen
          name="CashOnBank"
          component={CashOnBank}
          options={{headerShown: false}}
        />
    
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

//Export
export default App;