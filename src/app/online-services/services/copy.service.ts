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

import { DocumentCopyRequest } from '../data-types/DocumentCopyRequest';


export enum Errors {
  GET_DOCUMENT =
  '[GET_DOCUMENT] No pude leer el documento.',

  GET_FILING =
  '[GET_FILING] No pude leer el trámite.',
}


@Injectable()
export class CopyService {

  constructor(private core: CoreService) { }

  public existsDocument(documentUID: string): Observable<DocumentCopyRequest[]> {
    const path = `v1/online-services/documents/${documentUID}`;

    return this.core.http.get<DocumentCopyRequest[]>(path)
      .pipe(
        catchError((e) => this.core.http.showAndThrow(e, Errors.GET_DOCUMENT))
      );
  }


  public existsFiling(filingUID: string): Observable<DocumentCopyRequest[]> {
    const path = `v1/online-services/transactions/${filingUID}`;

    return this.core.http.get<DocumentCopyRequest[]>(path)
      .pipe(
        catchError((e) => this.core.http.showAndThrow(e, Errors.GET_FILING))
      );
  }

}
