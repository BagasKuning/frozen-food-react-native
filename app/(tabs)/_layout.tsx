import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const activeColor = "#1EA7C6";
  const inactiveColor = "#1EA7C680";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,

        tabBarShowLabel: true,

        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 10,

          backgroundColor: "#fff",

          borderTopWidth: 0,

          elevation: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",

          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="product/[id]"
        options={{
          title: "Product",

          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={focused ? "file-tray" : "file-tray-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="order/index"
        options={{
          title: "Pesanan",

          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="chat/index"
        options={{
          title: "Chat",

          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profil",

          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
