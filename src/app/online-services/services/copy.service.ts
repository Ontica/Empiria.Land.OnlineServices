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
  constructor(private core: CoreService) { }


  public existsDocument(documentUID: string): Observable<DocumentCopyRequest[]> {
    const path = `v1/online-services/documents/${documentUID}`;

    return this.core.http
      .get<DocumentCopyRequest[]>(path)
      .catch((e) => this.core.http.showAndReturn(e, CopyServiceErr.GET_PENDING_ERR, null))
  }


  public existsFiling(filingUID: string): Observable<DocumentCopyRequest[]> {
    const path = `v1/online-services/transactions/${filingUID}`;

    return this.core.http
      .get<DocumentCopyRequest[]>(path)
      .catch((e) => this.core.http.showAndReturn(e, CopyServiceErr.GET_PENDING_ERR, null))
  }


}

