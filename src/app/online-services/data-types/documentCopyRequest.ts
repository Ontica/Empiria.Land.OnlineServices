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
