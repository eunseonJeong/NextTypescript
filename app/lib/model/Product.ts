import { Document, model, Model, models, Schema } from 'mongoose';

// Product 스키마 정의
export interface IProduct extends Document {
  email: string;
  password: string;
}

const productSchema: Schema<IProduct> = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Product 모델 생성
const ProductModel: Model<IProduct> = models?.Product || model<IProduct>('Product', productSchema);

export default ProductModel;
