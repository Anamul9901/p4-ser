import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ProductRoutes } from '../modules/product/product.route';
import { CartRoutes } from '../modules/cart/cart.route';
import { PaymentRouter } from '../modules/payment/pay.route';
import { BuyInfoRouter } from '../modules/buyUserInfo/buy.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
  {
    path: '/payment',
    route: PaymentRouter,
  },
  {
    path: '/buyinfo',
    route: BuyInfoRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
