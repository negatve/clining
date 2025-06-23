interface Order {
  id: number;
  serviceName: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  address: string;
  area: number;
  date: string;
  time: string;
  comments?: string;
  paymentMethod: string;
  agree: boolean;
  createdAt: string;
}

export default Order;