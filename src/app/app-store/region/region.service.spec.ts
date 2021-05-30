import { TestBed } from '@angular/core/testing';
import {
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { RegionService } from './region.service';

describe('RegionService', () => {
  let service: RegionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        EntityCollectionServiceElementsFactory,
        RegionService
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(RegionService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
