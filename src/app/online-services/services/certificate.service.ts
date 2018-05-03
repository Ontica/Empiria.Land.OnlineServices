/**
 * @license
 * Copyright (c) 2018 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CoreService } from '../../core/core.service';


import { CertificateRequest } from '../data-types/CertificateRequest';

export enum CertificateServiceErr {
  GET_PROPERTY_ERR = 'GET_PROPERTY_ERR] No pude leer el folio de predio.'
}

@Injectable()
export class CertificateService {

  constructor(private core: CoreService) { 

  }

  public existsProperty(propertyUID: string): Observable<CertificateRequest[]> {

    const path = `http://187.157.152.5/services/v1/online-services/resources/` + propertyUID;
    
    return this.core.http.get<CertificateRequest[]>(path)
                        .catch((e) => this.core.http.showAndReturn(e, CertificateServiceErr.GET_PROPERTY_ERR, null))

  }

}
