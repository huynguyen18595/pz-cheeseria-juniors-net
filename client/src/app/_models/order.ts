import { OrderItem } from './orderItem';

export interface Order {
  OrderItems: OrderItem[];
  Total: number;
  CreatedDate: Date;
}
