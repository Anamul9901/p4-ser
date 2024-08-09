/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBuyInfo } from './buy.interface';
import { BuyInfo } from './buy.model';

const createBuyInfoIntoDB = async (payload: TBuyInfo) => {
  const result = await BuyInfo.create(payload);
  return result;
};

const getAllBuyInfoFromDB = async (email: any) => {
  const result = await BuyInfo.find(email);
  return result;
};

export const BuyInfoService = {
  createBuyInfoIntoDB,
  getAllBuyInfoFromDB,
};
