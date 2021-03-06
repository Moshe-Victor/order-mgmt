import { OrderLine } from './order-line.model';

export interface Order {
  id?: number;
  customerName: string;
  orderlines?: OrderLine[];
}
