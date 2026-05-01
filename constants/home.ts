export const DUMMY_SUMMARIZE = [
  {
    title: "Total Pendapatan",
    value: "30 Jt",
    bgColor: "#E7F8FC",
    iconColor: "#25B7D3",
    icon: "cash-outline",
  },
  {
    title: "Total Pesanan",
    value: "120",
    bgColor: "#FDECEF",
    iconColor: "#E04F5F",
    icon: "bag-handle-outline",
  },
  {
    title: "Pesanan Tertunda",
    value: "12",
    bgColor: "#EEF2FF",
    iconColor: "#92ACEE",
    icon: "time-outline",
  },
  {
    title: "Growth",
    value: "+18%",
    bgColor: "#FFF7E7",
    iconColor: "#FABC3D",
    icon: "trending-up-outline",
  },
];

export const DUMMY_CHART = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],

  datasets: [
    {
      data: [30, 45, 28, 80, 66, 92],
    },
  ],
};
export const DUMMY_ORDER: {
  id: number;
  name: string;
  products: any;
  orderStatus: "pending" | "process" | "success";
  shipmentStatus: string | null;
  total: number;
}[] = [
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
];
