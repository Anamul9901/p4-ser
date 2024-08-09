import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BuyInfoService } from './buy.service';

const createBuInfo = catchAsync(async (req, res) => {
  const result = await BuyInfoService.createBuyInfoIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User buy info recorded',
    data: result,
  });
});

const getAllBuyInfo = catchAsync(async (req, res) => {
  const result = await BuyInfoService.getAllBuyInfoFromDB(req?.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User buy info retrieved successfully',
    data: result,
  });
});

export const BuyUserInfoCollection = { createBuInfo, getAllBuyInfo };
