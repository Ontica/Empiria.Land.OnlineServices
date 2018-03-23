export interface CertificateRequest  {
    CertificateType: number;
    realPropertyUID: string;
    externalTransactionNo: string;
    externalTransactionTime: Date;
    paymentAmount: number;
    paymentReceiptNo: string;
    requestedBy: string;
    status: number;
    propertyId: number;
    postedById: number;
   
}


/*export interface CertificateRequest extends ExternalTransactionRequest {
    CertificateType: number;
    realPropertyUID: string;
  
  
}

export interface ExternalTransactionRequest {
    externalTransactionNo: string;
    externalTransactionTime: Date;
    paymentAmount: number;
    paymentReceiptNo: string;
    requestedBy: string;
    status: number;
    propertyId: number;
    postedById: number;
}*/

