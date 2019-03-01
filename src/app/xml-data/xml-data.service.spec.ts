import { TestBed } from '@angular/core/testing';

import { XmlDataService } from './xml-data.service';

describe('XmlDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XmlDataService = TestBed.get(XmlDataService);
    expect(service).toBeTruthy();
  });
});
