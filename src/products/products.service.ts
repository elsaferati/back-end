import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const prod = new Product();
    prod.category_id = createProductDto.category_id;
    prod.name = createProductDto.name;
    prod.price = createProductDto.price;
    const insertion = await this.productRepository.create(prod);
    return await this.productRepository.save(insertion);
  }

  findAll() {
    return `This action returns all products`;
  }

  async findOne(id: number) {
    return await this.productRepository.findBy({category_id: id});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
