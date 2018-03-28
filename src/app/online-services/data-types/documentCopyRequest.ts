export interface DocumentCopyRequest {
  //documentItemType: DocumentItemType;
  itemUID: string;
  email: string;
  status: number;
  statusText: string;
  document: {
    uid: string,
    type: string,
    documentNo: string,
    description: string,
    uri: string
},
filing: {
    filingNo: string,
    filingTime: Date,
    filedBy: string,
    postedBy: string
}

}



/*
export enum DocumentItemType {
  empty = 0,
  landTransaction = 1,
  recordingDocument = 2
}
*/

export enum DocumentItemType {
  empty = 0,
  resource = 1,
  transaction = 2,
  certificate = 4,
  document = 8
}



/*
//import {Assertion} from 'empiria/assertion';
//import {DocumentItemType} from 'empiria-land/online.services';
export class DocumentCopyRequest {
  //documentItemType: DocumentItemType;
  itemUID: string;
  email: string;
}

export enum DocumentItemType {
  empty = 0,
  landTransaction = 1,
  recordingDocument = 2
}

export function getDocumentItemTypeUIDPattern(){
(documentItemType: DocumentItemType): string =>{
   switch (documentItemType) {
      case DocumentItemType.landTransaction:
       return '^TL\\w{10}-\\d{1}$';
      case DocumentItemType.recordingDocument:
       return '^RP\\w{4}-\\w{6}-\\w{6}$';
      default:
       // throw Assertion.assertNoReachThisCode('Invalid documentItemType.');
    }
  }
}
*/