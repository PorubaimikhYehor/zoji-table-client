import { EntityMetadataMap } from '@ngrx/data';
import { Consumer } from './consumer/consumer.model';

const entityMetadata: EntityMetadataMap = {
    Consumer: { selectId: (e: Consumer) => e._id },
    //   Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = {
    // Consumer: 'Consumers' 
};

export const entityConfig = {
    entityMetadata,
    pluralNames
};