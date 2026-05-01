import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="bg-sky-500 px-5 pt-16 pb-10 rounded-b-[32px]">
      <Text className="text-2xl font-bold text-white">Froozen Food</Text>

      <Text className="mt-1 text-white/80">Mau pesan apa hari ini?</Text>
    </View>
  );
}
