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



export enum DocumentItemType {
  empty = 0,
  transaction = 1,
  document = 2
}


