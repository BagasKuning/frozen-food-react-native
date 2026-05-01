import AppHeader from "@/components/AppHeader";
import { Stack } from "expo-router";
import { View } from "react-native";
import "../global.css";
// app/_layout.tsx

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader />

      {/* 🔥 SCREEN CONTENT */}
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}
