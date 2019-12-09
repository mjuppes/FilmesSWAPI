/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatalogFilmesService } from './catalog-filmes.service';

describe('CatalogFilmesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogFilmesService]
    });
  });

  it('should ...', inject([CatalogFilmesService], (service: CatalogFilmesService) => {
    expect(service).toBeTruthy();
  }));
});
