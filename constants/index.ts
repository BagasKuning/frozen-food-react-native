import { Order } from "@/types";

// style
export const PRIMARY_BLUE = "#1498D6";
export const CARD_RADIUS = 20;

export const ITEMS_PER_PAGE = 10;

export const ORDER_STATUS_CONFIG = {
  pending: {
    bg: "#FEF3C7",
    text: "#B45309",
    label: "Pending",
  },
  process: {
    bg: "#DBEAFE",
    text: "#1D4ED8",
    label: "Process",
  },
  success: {
    bg: "#DCFCE7",
    text: "#15803D",
    label: "Success",
  },
};
export const DUMMY_ORDER: Order[] = [
  {
    id: 1,
    name: "Si Pira",
    products: [
      { id: 101, name: "Dimsum Ayam", qty: 2, price: 25000 },
      { id: 102, name: "Kentang Goreng", qty: 1, price: 18000 },
    ],
    orderStatus: "pending",
    shipmentStatus: null,
    total: 68000,
  },

  {
    id: 2,
    name: "John Doe",
    products: [{ id: 103, name: "Sosis Premium", qty: 3, price: 30000 }],
    orderStatus: "success",
    shipmentStatus: "packing",
    total: 90000,
  },

  {
    id: 3,
    name: "Sifa Anisa",
    products: [
      { id: 104, name: "Nugget Ayam", qty: 2, price: 35000 },
      { id: 105, name: "Bakso Frozen", qty: 1, price: 28000 },
      { id: 106, name: "Tempura", qty: 4, price: 15000 },
    ],
    orderStatus: "success",
    shipmentStatus: "shipped",
    total: 158000,
  },

  {
    id: 4,
    name: "Maria",
    products: [
      { id: 107, name: "Chicken Katsu", qty: 2, price: 32000 },
      { id: 108, name: "Frozen Dumpling", qty: 1, price: 27000 },
    ],
    orderStatus: "success",
    shipmentStatus: "delivered",
    total: 91000,
  },

  {
    id: 5,
    name: "Rizky Febian",
    products: [
      { id: 109, name: "Sosis Jumbo", qty: 5, price: 12000 },
      { id: 110, name: "Nugget Spicy", qty: 2, price: 34000 },
      { id: 111, name: "Bakso Seafood", qty: 1, price: 26000 },
    ],
    orderStatus: "success",
    shipmentStatus: "in_transit",
    total: 154000,
  },

  {
    id: 6,
    name: "Rizky Ksepian",
    products: [
      { id: 112, name: "Tempura Udang", qty: 3, price: 22000 },
      { id: 113, name: "Dimsum Mozarella", qty: 2, price: 29000 },
    ],
    orderStatus: "process",
    shipmentStatus: null,
    total: 124000,
  },

  // 🔥 tambahan 7 - 15

  {
    id: 7,
    name: "Aulia Rahman",
    products: [{ id: 114, name: "Chicken Nugget", qty: 2, price: 30000 }],
    orderStatus: "success",
    shipmentStatus: "delivered",
    total: 60000,
  },

  {
    id: 8,
    name: "Budi Santoso",
    products: [
      { id: 115, name: "Fish Roll", qty: 3, price: 20000 },
      { id: 116, name: "Sosis Ayam", qty: 2, price: 15000 },
    ],
    orderStatus: "process",
    shipmentStatus: "packing",
    total: 90000,
  },

  {
    id: 9,
    name: "Citra Lestari",
    products: [{ id: 117, name: "Bakso Sapi", qty: 1, price: 40000 }],
    orderStatus: "pending",
    shipmentStatus: null,
    total: 40000,
  },

  {
    id: 10,
    name: "Dimas Pratama",
    products: [
      { id: 118, name: "Tempura Mix", qty: 2, price: 25000 },
      { id: 119, name: "Nugget Cheese", qty: 1, price: 35000 },
    ],
    orderStatus: "success",
    shipmentStatus: "in_transit",
    total: 85000,
  },

  {
    id: 11,
    name: "Eka Putri",
    products: [{ id: 120, name: "Dimsum Ayam", qty: 4, price: 20000 }],
    orderStatus: "success",
    shipmentStatus: "delivered",
    total: 80000,
  },

  {
    id: 12,
    name: "Fajar Nugroho",
    products: [
      { id: 121, name: "Sosis Premium", qty: 2, price: 30000 },
      { id: 122, name: "Kentang Spiral", qty: 1, price: 25000 },
    ],
    orderStatus: "process",
    shipmentStatus: "packing",
    total: 85000,
  },

  {
    id: 13,
    name: "Gita Sari",
    products: [{ id: 123, name: "Chicken Katsu", qty: 3, price: 32000 }],
    orderStatus: "success",
    shipmentStatus: "shipped",
    total: 96000,
  },

  {
    id: 14,
    name: "Hendra Wijaya",
    products: [
      { id: 124, name: "Bakso Seafood", qty: 2, price: 26000 },
      { id: 125, name: "Nugget Ayam", qty: 1, price: 35000 },
    ],
    orderStatus: "pending",
    shipmentStatus: null,
    total: 87000,
  },

  {
    id: 15,
    name: "Intan Permata",
    products: [{ id: 126, name: "Tempura Udang", qty: 5, price: 22000 }],
    orderStatus: "success",
    shipmentStatus: "delivered",
    total: 110000,
  },
];
