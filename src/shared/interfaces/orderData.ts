interface OrderData {
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
  }

export default OrderData;