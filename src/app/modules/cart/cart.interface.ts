import { Types } from "mongoose"

 export type TCart = {
    productInfo: Types.ObjectId;
    userEmail: string;
 }