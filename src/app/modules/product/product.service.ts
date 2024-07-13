/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  console.log(payload);
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async (query: Record<string, unknown>) => {
  console.log('base query:', query);
  const queryObject = { ...query }; // query k copy kore queryObject e bosalam
  // {email: { $regex : query.searchTerm, $options: i}}
  // {presentAddress: { $regex : query.searchTerm, $options: i}}
  // {'name.firstName': { $regex : query.searchTerm, $options: i}}

  const productSearchableFirlds = ['name', 'title', 'category'];
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Product.find({
    $or: productSearchableFirlds.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //Filtering
  const exludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  exludeFields.forEach((el) => delete queryObject[el]);
  console.log('queryObject', queryObject);
  const filterQuery = searchQuery
    .find(queryObject)

  let sort = '-createdAt';
  if (query.sort) {
    sort = query.sort as string;
  }

  const sortQuery = filterQuery.sort(sort);

  let limit = 10;
  let page = 1;
  let skip = 0;

  if (query.limit) {
    limit = Number(query.limit);
  }

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginationQuery = sortQuery.skip(skip);

  const limitQuery = paginationQuery.limit(limit);

  //fields limiting
  let fields = '-__v';

  // fields: 'name,enail';
  // fields: 'name enail';
  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');
    console.log({ fields });
  }

  const fieldQuery = await limitQuery.select(fields);

  const alldata =await Product.find();
  const productsLength = alldata.length;
  console.log('alldata', alldata.length);

  return {fieldQuery, productsLength};
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

// const updateProductFromDB = async (id: string, payload: TProduct) => {
//   console.log('update data=>', payload);
//   const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
//     new: true,
//     runValidators: true,
//   });

//   const { name, image, title, price, quantity, category }: any = result;
//   const finalResult = { name, image, title, price, quantity, category };

//   return finalResult;
// };
const updateProductFromDB = async (id: string, payload: TProduct) => {
  console.log('update data=>', payload);

  // Filter out null or empty string values
  const filteredPayload = Object.fromEntries(
    Object.entries(payload).filter(
      ([key, value]) => value !== null && value !== ''
    )
  );

  const result = await Product.findByIdAndUpdate({ _id: id }, filteredPayload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new Error('Product not found or could not be updated');
  }

  const { name, image, title, price, quantity, category } = result;
  const finalResult = { name, image, title, price, quantity, category };

  return finalResult;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
