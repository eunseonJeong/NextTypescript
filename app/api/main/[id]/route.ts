import dbConnect from '@/app/lib/dbConnect';
import ProductModel, { IProduct } from '@/app/lib/model/Product';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

type ResponseData = {
  message: string;
  data: any;
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    dbConnect();

    await ProductModel.deleteOne({ _id: params.id });
    const products: IProduct[] = await ProductModel.find();

    const responseData: ResponseData = {
      message: '삭제했습니다!!',
      data: products,
    };
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('delete 에러!!', error);

    const responsData: ResponseData = {
      message: 'Internal Server Error',
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
};

// //수정
export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    dbConnect();

    const products: IProduct[] = await ProductModel.find();
    const responseData: ResponseData = {
      message: '수정했습니다!!',
      data: products,
    };
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error('PUT 에러!!', error);

    const responsData: ResponseData = {
      message: 'Internal Server Error',
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
};
