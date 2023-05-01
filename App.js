import React from "react";
import SplashScreen from "./src/screens/SplashScreen";
import UserList from "./src/screens/UserList";

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
    
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

//Export
export default App;