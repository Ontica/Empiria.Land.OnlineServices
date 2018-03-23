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
    GET_PENDING_ERR =
          '[GET_PENDING_ERR] No pude leer el folio de predio.',
  }

@Injectable()
export class CertificateService {
    constructor(private core:CoreService) {}


    public existsProperty(propertyUID: string): Observable<CertificateRequest[]> {     
      
    //public sign(signRequests: string[]): Observable<any> {  
     
      //http://187.157.152.5/services/v1/properties/TL72-F3K6-AC9H-5Z1Q 
      //404 si no exsite el predio      //y 200 si si exsite
      const path = `http://187.157.152.5/services/v1/properties/`+propertyUID;
      console.log ('en existttttt ' + path);//
      return this.core.http
                    .get<CertificateRequest[]>(path)                  
                    .catch((e) => this.core.http.showAndReturn(e, CertificateServiceErr.GET_PENDING_ERR, null))
                     
      
    }



}
