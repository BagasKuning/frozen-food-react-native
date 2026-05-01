import "../global.css";

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,

        headerStyle: {
          backgroundColor: "#1498D6",
        },

        headerTintColor: "#fff",

        headerTitle: "Frozen Food A&Y",

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
