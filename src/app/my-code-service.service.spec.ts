import { TestBed, inject } from '@angular/core/testing';

import { MyCodeServiceService } from './my-code-service.service';

describe('MyCodeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCodeServiceService]
    });
  });

  it('should be created', inject([MyCodeServiceService], (service: MyCodeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
