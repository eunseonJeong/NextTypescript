import ProductModel, { IProduct } from '@/app/lib/model/Product';
import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  data: any;
};

//조회
export const GET = async () => {
  try {
    dbConnect();

    const data = await ProductModel.find();
    const responseData: ResponseData = {
      message: '성공입니다!!',
      data: data,
    };

    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('GET 에러!!', error);
    const responsData: ResponseData = {
      message: 'Internal Server Error',
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
};

// 등록
export const POST = async (req: Request) => {
  try {
    dbConnect();

    const data = await req.json();
    ProductModel.insertMany(data);

    console.log(data);

    const products: IProduct[] = await ProductModel.find();

    const responseData: ResponseData = {
      message: '성공입니다!!',
      data: products,
    };
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('post 에러!!', error);

    const responsData: ResponseData = {
      message: 'Internal Server Error',
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
};
