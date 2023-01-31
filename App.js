import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Ionic from "react-native-vector-icons/Ionicons";
import Search from './src/components/screens/Search';

import Home from './src/components/screens/Home';

import Profile from './src/components/screens/Profile';
import UploadPhoto from './src/components/screens/UploadPhoto';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = ()=>{
    return(
      <Tab.Navigator 
       screenOptions={({route})=>({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle :{
          height:50
        },
        tabBarIcon:({focused,size,colour})=>{
          let iconName;
          if(route.name === "Home"){
            iconName= focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          }
          else if( route.name === "Search")
          {
            iconName = focused ? "search" : "ios-search-outline";
          }
          else if( route.name === "UploadPhoto")
          {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
         
          else if( route.name === "Profile")
          {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }
          return <Ionic name={iconName} size={size} color={colour}/>

        }
    
       })}
      >
        <Tab.Screen name="Home" component={Home}/>     
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="UploadPhoto" component={UploadPhoto}/>

         
        <Tab.Screen name="Profile" component={Profile}/>     
      </Tab.Navigator>
    )
  }
  

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Bottom' component={bottomTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


