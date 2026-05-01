import { CARD_RADIUS, ORDER_STATUS_CONFIG } from "@/constants";
import { Order } from "@/types";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  item: Order;
};

export default function OrderCard({ item }: Props) {
  const status =
    ORDER_STATUS_CONFIG[item.orderStatus] || ORDER_STATUS_CONFIG.pending;

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: CARD_RADIUS,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 4,
      }}
    >
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "#111827",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              marginTop: 2,
            }}
          >
            Order #{item.id}
          </Text>
        </View>

        {/* STATUS BADGE */}
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 999,
            backgroundColor: status.bg,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: status.text,
              textTransform: "capitalize",
            }}
          >
            {status.label}
          </Text>
        </View>
      </View>

      {/* PRODUCTS */}
      <View style={{ marginBottom: 14 }}>
        {item.products.map((product) => (
          <View
            key={product.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text style={{ color: "#374151", flex: 1 }}>
              {product.name} x{product.qty}
            </Text>

            <Text style={{ fontWeight: "600", color: "#111827" }}>
              Rp {(product.price * product.qty).toLocaleString()}
            </Text>
          </View>
        ))}
      </View>

      {/* FOOTER */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#F3F4F6",
          paddingTop: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, color: "#6B7280" }}>Total</Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: "#1498D6",
          }}
        >
          Rp {item.total.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}
