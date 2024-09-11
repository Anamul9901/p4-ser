export interface PaymentIntentData {
    amount: number;
  }



export interface Payment {
  email: string;
  price: number;
  transactionId: string;
  date: Date;
  cartId: string[];
  status: string;
}
