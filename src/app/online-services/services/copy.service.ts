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


import { DocumentCopyRequest } from '../data-types/DocumentCopyRequest';

  export enum CopyServiceErr {
    GET_PENDING_ERR =
          '[GET_PENDING_ERR] No pude leer el documento o tramite.',
          GET_REFUSED_ERR =
          '[GET_REFUSED_ERR] Ocurrió un problema al leer los documentos regresados.',
          POST_REFUSED_ERR =
          '[POST_REFUSED_ERR] Ocurrió un problema al guardar los documentos rechazados.',
          POST_REVOKE_ERR =
          '[POST_REVOKE_ERR] Ocurrió un problema al enviar los documentos revocados.',
          POST_UNREFUSE_ERR =
          '[POST_UNREFUSED_ERR] Ocurrió un problema al regresar  los documentos rechazados.',
  }


@Injectable()
export class CopyService {
    constructor(private core:CoreService) {}


    public existsDocument(documentUID: string): Observable<DocumentCopyRequest[]> {     
      
    //public sign(signRequests: string[]): Observable<any> {  
     
     //http://187.157.152.5/services/v1/online-services/documents/RP47HD-28MA37-TE92C8
      const path1 = `http://187.157.152.5/services/v1/online-services/documents/`+documentUID;
      console.log ('en existsDocument ' + path1);//
      return this.core.http
                    .get<DocumentCopyRequest[]>(path1)                  
                    .catch((e) => this.core.http.showAndReturn(e, CopyServiceErr.GET_PENDING_ERR, null))
    }
    //Filing
    public existsFiling(filingUID: string): Observable<DocumentCopyRequest[]> {     
      
      //public sign(signRequests: string[]): Observable<any> {  
       
       //http://187.157.152.5/services/v1/online-services/transactions/TL87HY49CT22-6
        const path2 = `http://187.157.152.5/services/v1/online-services/transactions/`+filingUID;
        console.log ('en existsFiling ' + path2);//
        return this.core.http
                      .get<DocumentCopyRequest[]>(path2)                  
                      .catch((e) => this.core.http.showAndReturn(e, CopyServiceErr.GET_PENDING_ERR, null))
      }


}

