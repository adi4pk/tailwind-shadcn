export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Căști wireless Nova",
    category: "Audio",
    price: 349,
    stock: 12,
    description: "Căști over-ear cu anularea zgomotului și autonomie de 30 de ore.",
    image: "/produse/casti.svg",
  },
  {
    id: 2,
    name: "Tastatură mecanică K87",
    category: "Periferice",
    price: 459,
    stock: 3,
    description: "Tastatură compactă, switch-uri tactile, iluminare RGB.",
    image: "/produse/tastatura.svg",
  },
  {
    id: 3,
    name: "Mouse ergonomic M5",
    category: "Periferice",
    price: 129,
    stock: 0,
    description: "Mouse vertical, 6 butoane, conexiune Bluetooth și USB.",
    image: "/produse/mouse.svg",
  },
  {
    id: 4,
    name: "Monitor 27\" QHD",
    category: "Monitoare",
    price: 1299,
    stock: 7,
    description: "Panou IPS 2560×1440, 165 Hz, reglabil pe înălțime.",
    image: "/produse/monitor.svg",
  },
];
