import { EntityMetadataMap } from '@ngrx/data';
import { Department } from './department/department';

const entityMetadata: EntityMetadataMap = {
    Department: { selectId: (e: Department) => e._id },
};

// because the plural of "hero" is not "heros"
const pluralNames = {
};

export const entityConfig = {
    entityMetadata,
    pluralNames
};