export type OrderStatus = "pending" | "process" | "success";

export type ShipmentStatus =
  | "packing"
  | "shipped"
  | "in_transit"
  | "delivered"
  | null;

export type Product = {
  id: number;
  name: string;
  qty: number;
  price: number;
};

export type Order = {
  id: number;
  name: string;
  products: Product[];
  orderStatus: OrderStatus;
  shipmentStatus: ShipmentStatus;
  total: number;
};
