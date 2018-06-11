/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */


export interface KeyValue {
  readonly key: string;
  readonly value: any;
}


export enum TriState {
  true = 1,
  false = 0,
  empty = -1
}
