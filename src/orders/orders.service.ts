import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderDetailsService } from 'src/order_details/order_details.service';
import { Product } from 'src/products/entities/product.entity';
import { OrderDetails } from 'src/order_details/entities/order_detail.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private orderDetailsService: OrderDetailsService
  ) {
  }

  async create(createOrderDto: CreateOrderDto) {
    const order = new Order();
    order.name = `Order_${new Date().getTime()}`
    order.description = createOrderDto.description;
    const insertion = await this.orderRepository.create(order);
    const o = await this.orderRepository.save(insertion);
    for(const x in createOrderDto.products) {
      const details = new OrderDetails();
      details.order_id = o.id;
      details.product_id = createOrderDto.products[x].id,
      details.description = createOrderDto.description;
      await this.orderDetailsService.create(details);
    }
    return o
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
  

}
