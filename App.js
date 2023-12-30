
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Chat from "./screens/Chat/Chat";
import likeYou from "./screens/likeYou";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{ headerShown: false }}
        barStyle={{
          showLabel: false,
          position: "absolute",
          marginTop: 10,
          bottom: 15,
          left: 15,
          right: 15,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 20,
          height: 70,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#ff00ff" : "#808080"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Liked You"
          component={likeYou}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="north-star"
                size={24}
                color={focused ? "#ff00ff" : "#808080"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="md-chatbubbles-outline"
                size={24}
                color={focused ? "#ff00ff" : "#808080"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="profile"
                size={24}
                color={focused ? "#ff00ff" : "#808080"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

