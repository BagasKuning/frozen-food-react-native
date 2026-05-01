import OrderCard from "@/components/OrderCard";
import Pagination from "@/components/Pagination";
import { DUMMY_ORDER, ITEMS_PER_PAGE } from "@/constants";
import { OrderStatus } from "@/types";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type Status = OrderStatus | "all";

export default function OrderScreen() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<Status>("all");

  // 1. filter data dulu
  const filteredData = useMemo(() => {
    if (status === "all") return DUMMY_ORDER;
    return DUMMY_ORDER.filter((item: any) => item.orderStatus === status);
  }, [status]);

  // 2. hitung total page dari hasil filter
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // 3. paginasi setelah filter
  const paginatedData = useMemo(() => {
    return filteredData.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
    );
  }, [page, filteredData]);

  const filters = [
    { value: "all", label: "Semua" },
    { value: "pending", label: "Menunggu" },
    { value: "process", label: "Diproses" },
    { value: "success", label: "Selesai" },
  ] as const;

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            marginBottom: 12,
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => {
            const isActive = status === f.value;

            return (
              <Pressable
                key={f.value}
                onPress={() => {
                  setStatus(f.value);
                  setPage(1);
                }}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 999,
                  backgroundColor: isActive ? "#1498D6" : "#F3F4F6",
                }}
              >
                <Text
                  style={{
                    color: isActive ? "#FFF" : "#374151",
                    fontWeight: "600",
                  }}
                >
                  {f.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {paginatedData.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </ScrollView>
    </SafeAreaView>
  );
}
