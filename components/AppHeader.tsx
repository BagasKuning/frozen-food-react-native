// components/AppHeader.tsx
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppHeader() {
  return (
    <SafeAreaView style={{ backgroundColor: "#1498D6" }}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          Frozen Food A&Y
        </Text>

        <View
          style={{
            marginLeft: "auto",
            width: 44,
            height: 44,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 44,
              height: 44,
              transform: [{ scale: 1.5 }],
              marginBottom: -6,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
