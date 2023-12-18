/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { SetMetadata, UseInterceptors } from '@nestjs/common';
import { EventMiddleware } from '../interceptor/event.Interceptor';
import type { Events } from '../model';

export const EMIT_EVENT_NAME = 'EMIT_EVENT_NAME';

export function EmitEvent(name: Events): MethodDecorator {
  return (target: any, key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    SetMetadata(EMIT_EVENT_NAME, name)(target, key, descriptor);
    UseInterceptors(EventMiddleware)(target, key, descriptor);
  };
}