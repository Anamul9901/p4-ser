import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CartService } from './cart.service';

const createCart = catchAsync(async (req, res) => {
  const result = await CartService.createCartIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart created successfully',
    data: result,
  });
});

const getAllCarts = catchAsync(async (req, res) => {
  const result = await CartService.getAllCartFromDB();

  if (!result.length) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'No Data Found',
      data: result,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrieved successfully',
    data: result,
  });
});

const getSingleCart = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CartService.getSingleCartFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Availability checked successfully',
    data: result,
  });
});

export const CartCollection = {createCart, getAllCarts, getSingleCart};
