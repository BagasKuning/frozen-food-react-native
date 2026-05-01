import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: Props) {
  const getPages = () => {
    const pages: number[] = [];

    const maxVisible = 5; // jumlah tombol halaman yang tampil
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, page + half);

    // adjust kalau di ujung biar tetap 5 kalau memungkinkan
    if (end - start < maxVisible - 1) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisible - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        marginTop: 16,
        flexWrap: "wrap",
      }}
    >
      {/* Prev */}
      <Pressable
        onPress={() => page > 1 && onChange(page - 1)}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: "#F3F4F6",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Prev</Text>
      </Pressable>

      {/* Pages */}
      {pages.map((p) => {
        const isActive = p === page;

        return (
          <Pressable
            key={p}
            onPress={() => onChange(p)}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: isActive ? "#1498D6" : "#F3F4F6",
            }}
          >
            <Text
              style={{
                color: isActive ? "#FFF" : "#374151",
                fontWeight: "600",
              }}
            >
              {p}
            </Text>
          </Pressable>
        );
      })}

      {/* Next */}
      <Pressable
        onPress={() => page < totalPages && onChange(page + 1)}
        style={{
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: "#F3F4F6",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Next</Text>
      </Pressable>
    </View>
  );
}
