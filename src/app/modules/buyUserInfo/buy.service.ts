import { TBuyInfo } from './buy.interface';
import { BuyInfo } from './buy.model';

const createBuyInfoIntoDB = async (payload: TBuyInfo) => {
  const result = await BuyInfo.create(payload);
  return result;
};

const getAllBuyInfoFromDB = async () => {
  const result = await BuyInfo.find();
  return result;
};

export const BuyInfoService = {
  createBuyInfoIntoDB,
  getAllBuyInfoFromDB,
};
