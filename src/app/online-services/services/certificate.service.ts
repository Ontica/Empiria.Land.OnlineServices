/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CoreService } from '../../core/core.service';

import { CertificateRequest } from '../data-types/CertificateRequest';


enum Errors {

  GET_PROPERTY_ERR =
  '[GET_PROPERTY_ERR] No pude leer el folio de predio.'

}


@Injectable()
export class CertificateService {

  constructor(private core: CoreService) { }

  public existsProperty(propertyUID: string): Observable<CertificateRequest[]> {
    const path = `v1/online-services/resources/${propertyUID}`;

    return this.core.http.get<CertificateRequest[]>(path)
      .pipe(
        catchError((e) => this.core.http.showAndThrow(e, Errors.GET_PROPERTY_ERR))
      );
  }

}
