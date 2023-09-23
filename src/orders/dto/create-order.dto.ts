import { OrderDetails } from "src/order_details/entities/order_detail.entity";
import { Product } from "src/products/entities/product.entity";

export class CreateOrderDto {
    name: string;
    description: string;
    products: Product[]
}
