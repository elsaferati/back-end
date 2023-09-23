import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: string;
  
    @Column()
    name: string;

    @Column()
    category_id: number;
}
