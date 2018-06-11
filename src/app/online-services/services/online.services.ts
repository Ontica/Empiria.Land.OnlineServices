/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */


export interface ExternalTransactionRequest {
  externalTransactionNo: string;
  externalTransactionTime: Date;
  paymentAmount: number;
  paymentReceiptNo: string;
  requestedBy: string;
}


export interface PendingNoteRequest extends ExternalTransactionRequest {
  realPropertyUID: string;
  notaryId: number;
  projectedActId: number;
  projectedOwner: string;
  isPartition?: boolean;
  partitionName?: string;
  partitionSize?: number;
  partitionLocation?: string;
  partitionMetesAndBounds?: string;
  recordingObservations?: string;
}


export interface OnlineTransaction {
  uid: string;
  externalTransactionNo: string;
  requestedBy: string;
  presentationTime: Date;
  realPropertyUID: string;
  estimatedDueTime: Date;
  status: string;
}


export interface DocumentItem {
  uid: string;
  itemType: string;
  documentType: string;
  digitalSeal: string;
  digitalSignature: string;
  status: string;
}


export declare enum DocumentItemType {
  landTransaction = 0,
  recordingDocument = 1,
  empty = 2,
}


export declare class OnlineServices {
  static existsDocumentItem(documentItemType: DocumentItemType, itemUID: string): boolean;
  static getDocumentItem(documentItemType: DocumentItemType, itemUID: string): DocumentItem;
  static getPropertyAsHtml(propertyUID: string): string;
  static requestPendingNoteRecording(request: PendingNoteRequest): OnlineTransaction;
  private static getDocumentItemDataOperation(documentItemType, itemUID);
}
