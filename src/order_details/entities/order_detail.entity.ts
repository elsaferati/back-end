import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'order_details'})
export class OrderDetails {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    order_id: number;

    @Column()
    product_id: number;

    @Column()
    description: string;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id', referencedColumnName: "id" })
    product: Product;

}
