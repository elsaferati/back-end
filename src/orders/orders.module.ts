import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from './entities/order.entity';
import { OrderDetails } from 'src/order_details/entities/order_detail.entity';
import { OrderDetailsService } from 'src/order_details/order_details.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDetails])],
  controllers: [OrdersController],
  providers: [OrdersService, OrderDetailsService],
})
export class OrdersModule {}
