import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Category)
    @JoinColumn({ name: 'category_id', referencedColumnName: "id" })
    category: Category;
}
