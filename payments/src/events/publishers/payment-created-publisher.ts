import {
  Publisher,
  Subjects,
  PaymentCreatedEvent
} from '@gitsh92-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
