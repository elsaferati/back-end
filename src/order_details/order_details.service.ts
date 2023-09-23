import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { OrderDetails } from './entities/order_detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderDetailsService {

  constructor(
    @InjectRepository(OrderDetails) private orderDetailsRepository: Repository<OrderDetails>,
  ) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    const ord = new OrderDetails();
    ord.order_id = createOrderDetailDto.order_id;
    ord.product_id = createOrderDetailDto.product_id;
    ord.description = createOrderDetailDto.description;
    const insertion = await this.orderDetailsRepository.create(ord);
    return await this.orderDetailsRepository.save(insertion);
  }

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }

  async findAndMakeReadyToPrint(order_id: number) {
    const order = await this.orderDetailsRepository.find({where: {order_id}, relations: ['product']});
    return order;
  }
}
