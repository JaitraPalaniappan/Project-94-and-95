//import 'react-native-gesture-handler';
import * as React from 'react';
import { View, StyleSheet} from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
 

import HomeScreen from "./Screens/HomeScreen";
import MySpaceScreen from './Screens/MySpaceScreen';
import CreateSpaceScreen from "./Screens/CreateSpaceScreen";
import DeleteSpaceScreen from './Screens/DeleteSpaceScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}


const AppSwitchNavigator = createSwitchNavigator({
    HomeScreen: HomeScreen,
    MySpaceScreen: MySpaceScreen,
    CreateSpaceScreen: CreateSpaceScreen,
    DeleteSpaceScreen: DeleteSpaceScreen
    
   
   
})

const AppContainer = createAppContainer(AppSwitchNavigator)

