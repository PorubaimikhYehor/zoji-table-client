import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Consumer } from './consumer.model';

@Injectable({ providedIn: 'root' })
export class ConsumerService extends EntityCollectionServiceBase<Consumer> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Consumer', serviceElementsFactory);
    }
}