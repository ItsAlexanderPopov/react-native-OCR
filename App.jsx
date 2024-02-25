import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraScreen from './screens/Camera';
import PhotoScreen from './screens/Photo';
import { StringListProvider } from './Context';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <StringListProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={CameraScreen} 
          />
           <Stack.Screen 
            name="Results" 
            component={PhotoScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StringListProvider>
  );
};

export default App;