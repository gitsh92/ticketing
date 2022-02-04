import {
  Publisher,
  Subjects,
  TicketUpdatedEvent
} from '@gitsh92-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
