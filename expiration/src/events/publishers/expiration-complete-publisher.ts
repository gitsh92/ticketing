import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@gitsh92-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
