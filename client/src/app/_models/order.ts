import { OrderItem } from './orderItem';

export interface Order {
  orderItems: OrderItem[];
  total: number;
  createdDate: Date;
}
