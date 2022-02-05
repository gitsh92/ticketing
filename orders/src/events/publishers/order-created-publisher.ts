import {
  Publisher,
  OrderCreatedEvent,
  Subjects
} from '@gitsh92-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
