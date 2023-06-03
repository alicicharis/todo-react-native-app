import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import MyProvider from "../context/context";

const Layout = () => {
  return (
    <MyProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "rgb(109, 99, 255)" : "black"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="todos"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="th-list"
                size={24}
                color={focused ? "rgb(109, 99, 255)" : "black"}
              />
            ),
          }}
        />
      </Tabs>
    </MyProvider>
  );
};

export default Layout;
