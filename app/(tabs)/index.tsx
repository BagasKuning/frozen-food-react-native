import OrderCard from "@/components/OrderCard";
import SalesChart from "@/components/SalesChart";
import { CARD_RADIUS, ORDER_STATUS_CONFIG, PRIMARY_BLUE } from "@/constants";
import { DUMMY_CHART, DUMMY_ORDER, DUMMY_SUMMARIZE } from "@/constants/home";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeStats() {
  const handleAddProduct = () => {
    console.log("Add product clicked");
  };

  const handleSeeOrders = () => {
    console.log("See orders clicked");
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* summarize data */}
        <View style={styles.container}>
          {DUMMY_SUMMARIZE.map((item, index) => (
            <View
              key={index}
              style={[
                styles.card,
                {
                  backgroundColor: item.bgColor,
                },
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  {
                    backgroundColor: item.iconColor,
                  },
                ]}
              >
                <Ionicons name={item.icon as any} size={22} color="#fff" />
              </View>

              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* chart */}
        <Text style={styles.title}>Statistik Penjualan (7 Hari)</Text>
        <SalesChart data={DUMMY_CHART} />

        {/* order card */}
        <View style={{ marginVertical: 32 }}>
          <Text style={styles.title}>Riwayat Pesanan</Text>

          {DUMMY_ORDER.map((item) => (
            <OrderCard
              key={item.id}
              item={item}
              statusConfig={ORDER_STATUS_CONFIG}
              cardRadius={CARD_RADIUS}
            />
          ))}
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable
            onPress={handleAddProduct}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              backgroundColor: "#FEF3C7",
              borderRadius: 16,

              // shadow iOS
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },

              // shadow Android
              elevation: 4,
            }}
          >
            <Ionicons name="add" size={32} color="#92400E" />
            <Text style={{ marginTop: 8, fontWeight: "600", color: "#92400E" }}>
              Tambah Produk
            </Text>
          </Pressable>

          <Pressable
            onPress={handleSeeOrders}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              backgroundColor: "#FFFFFF",
              borderRadius: 16,

              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 3 },
              elevation: 3,
            }}
          >
            <Ionicons name="eye" size={32} color="#374151" />
            <Text style={{ marginTop: 8, fontWeight: "600", color: "#374151" }}>
              Lihat Pesanan
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,

    justifyContent: "space-between",

    marginBottom: 32,
    paddingTop: 16,
  },

  card: {
    width: "48%",

    borderRadius: CARD_RADIUS,

    padding: 18,

    borderWidth: 1,
    borderColor: "#E5EEF5",

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },

  iconWrapper: {
    width: 48,
    height: 48,

    borderRadius: 24,

    alignItems: "center",
    justifyContent: "center",

    marginBottom: 14,
  },

  title: {
    fontSize: 16,

    fontWeight: "700",

    marginBottom: 20,

    color: "#1F2937",
  },

  value: {
    fontSize: 24,

    fontWeight: "700",

    color: PRIMARY_BLUE,
  },
});
