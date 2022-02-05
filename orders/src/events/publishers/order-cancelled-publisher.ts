import {
  Publisher,
  OrderCancelledEvent,
  Subjects
} from '@gitsh92-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
