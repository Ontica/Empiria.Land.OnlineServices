
//import { DocumentItemType } from '../data-types/types';

import { Component, EventEmitter, HostBinding,  Input, Output } from '@angular/core';

import { Validate } from '../services/validate';

import { DocumentCopyRequest } from '../data-types/documentCopyRequest';
import { DocumentItemType } from '../data-types/documentCopyRequest';
import { CopyService } from '../services/copy.service';

import { SpinnerService } from '../../shared/spinner/spinner.service';
import { PropertyItem } from '../services/propertyItem';
//import { SearchService, DocumentItemType } from '../services/search.service';

@Component({
  selector: 'app-request-document-copy',
  templateUrl: './request-document-copy.component.html',
  styleUrls: ['./request-document-copy.component.css']
})
export class RequestDocumentCopyComponent  {

  ngOnInit() {
  }

    // Enumeration re-declaration for use in html code.
  public DocumentItemType = DocumentItemType;
  public selectedDocumentItemType =  DocumentItemType.empty;
  public document: PropertyItem[];
  //public document: PropertyItem[];
  //public DocumentItemType = DocumentItemType;
  //public selectedDocumentItemType = 0;
  public selectedDocumentItemName = 'Buscar';
//public document: PropertyItem[];
public itemUID = '';
  public itemHash = '';
  public hasError = false;
public errorMessage = '';

public documentCopyRequests: DocumentCopyRequest[];

constructor (private copyService: CopyService, private spinnerService: SpinnerService/*, private searchService: SearchService*/){}   

//public selectedCertificateItemType =  CertificateType.empty;

public documentUID = '';
public filingUID  = '';

private setDocument(document: PropertyItem[]): void {
  this.document = [];
  this.document = document;
}

public setDocumentItemInitialValues(selectedValue: string, document: PropertyItem[]): void {
  this.selectedDocumentItemType = Number(selectedValue);
  //this.certificateRequest.certificateType = Number(selectedValue);
  //this.setDocumentItemTypePattern();
  this.documentCopyRequests = [];
  this.document = document;
}


public searchDocument(documentUID: string): void {
  try {
    if (!this.validateDocument(documentUID)) {
      return;
    }
    return;
  } catch (e) {
    alert(e);
  }
}

private validateDocument(documentUID: string): boolean {
  if (!Validate.hasValue(documentUID)) {
     //this.messageBox.showMessage('Requiero se proporcione el folio real del predio.');
     alert('Requiero se proporcione el documento electronico.');
     return false;
   }

   if (!this.verificateDocument(documentUID)) {
    // this.messageBox.showMessage('No encontró ningún predio registrado con el folio real ' +
    //   propertyUID + '.');
    alert('No encontró ningún documento registrado con el documento ' +
    documentUID + '.');
     return false;
   }

   return true;
 }

private verificateDocument(propertyUID: string): boolean {

  this.spinnerService.show();
  this.copyService.existsDocument(propertyUID)
  .subscribe((documentCopyRequests) => { this.documentCopyRequests = documentCopyRequests; console.log('this.documentCopyRequests',this.documentCopyRequests) 

  if(this.documentCopyRequests != null || this.documentCopyRequests != undefined ){
    console.log('vp true');
    alert('Documento Encontrado: ' +
       propertyUID + '.');
  
       /*this.searchService.getDocument(this.selectedDocumentItemType, this.itemUID, this.itemHash)
       .then(x => this.setDocument(x))
       .catch(x => this.showErrorMessage(x));*/

    return true;
  }
  else if(this.documentCopyRequests === null || this.documentCopyRequests === undefined){
    console.log('vp false');
    return false;
  }

  },
  () => {},
  () => { this.spinnerService.hide(); });  
return true;
}

private showErrorMessage(error: any): void {
  this.hasError = true;
  this.errorMessage = (<string>error.errorMessage).replace(/\n/g, '<br />');
}
/////////////////////////////////////////////////////////////////////////////////////////////
public searchFiling(filingUID: string): void {
  try {
    if (!this.validateFiling(filingUID)) {
      return;
    }
    return;
  } catch (e) {
    alert(e);
  }
}

private validateFiling(filingUID: string): boolean {
  if (!Validate.hasValue(filingUID)) {
     //this.messageBox.showMessage('Requiero se proporcione el folio real del predio.');
     alert('Requiero se proporcione el tramite.');
     return false;
   }

   if (!this.verificateFiling(filingUID)) {
    // this.messageBox.showMessage('No encontró ningún predio registrado con el folio real ' +
    //   propertyUID + '.');
    alert('No encontró ningún documento registrado con el tramite ' +
    filingUID + '.');
     return false;
   }

   return true;
 }

private verificateFiling(filingUID: string): boolean {

  this.spinnerService.show();
  this.copyService.existsFiling(filingUID)
  .subscribe((documentCopyRequests) => { this.documentCopyRequests = documentCopyRequests; console.log('this.documentCopyRequests',this.documentCopyRequests) 

  if(this.documentCopyRequests != null || this.documentCopyRequests != undefined ){
    console.log('vp true');
    alert('Tramite Encontrado: ' +
    filingUID + '.');
    return true;
  }
  else if(this.documentCopyRequests === null || this.documentCopyRequests === undefined){
    console.log('vp false');
    return false;
  }

  },
  () => {},
  () => { this.spinnerService.hide(); });  
return true;
}

}//end
//  RP78MZ-32DW49-HY23C8
//  RP28XM-93EP47-ZH84E7   
//  RP56CL-87NW34-ZX29M4
// TL74PH96VF20-2  
// TL84YF15KT93-0 
// TR-43MT9-7DP28-0

/////////}

/*

import { Component, ViewChild } from '@angular/core';

import { Assertion } from '../../../shared/services/assertion';
import { TriState } from '../../../shared/services/tri.state';
import { Validate } from '../../../shared/services/validate';

import { OnlineServices, DocumentItem, DocumentItemType } from '../../../shared/services/online.services';

import { DocumentCopyRequest, getDocumentItemTypeUIDPattern } from '../../../../global_shared/types';

//import { MessageBoxComponent } from '../../../../global_shared/components';
import {  ValidatePatternDirective } from '../../../../global_shared/components';

@Component({
  moduleId: module.id,
  selector: 'request-document-copy.form',
  templateUrl: 'request-document-copy.form.html',
  // directives: [MessageBoxComponent, ValidatePatternDirective]
})
export class RequestDocumentCopyForm {

 // @ViewChild(MessageBoxComponent) public messageBox: MessageBoxComponent;
  // Enumeration re-declaration for use in html code.
  public DocumentItemType = DocumentItemType;

  public pattern = '';
  public documentCopyRequest = this.getNewDocumentCopyRequest();
  public selectedDocumentItemType =  DocumentItemType.empty;

  public setDocumentItemInitialValues(selectedValue: string): void {
    this.selectedDocumentItemType = Number(selectedValue);
    this.setDocumentItemTypePattern();
  }

  public requestDocumentCopy(): void {
     try {
      if (!this.validateForm()) {
        return;
      }
      if (!this.existDocument()) {
        return;
      }
      //this.messageBox.showMessage('Sus copias serán enviadas al correo electrónico que nos proporciono ');
    } catch (e) {
      //this.messageBox.showException(e);
    }
  }

  private setDocumentItemTypePattern(): void {
    //this.pattern = getDocumentItemTypeUIDPattern(this.selectedDocumentItemType);
  }

  private existDocument(): boolean {
     try {
      return OnlineServices.existsDocumentItem(this.selectedDocumentItemType,
                                               this.documentCopyRequest.itemUID);
    } catch (e) {
      //this.messageBox.showMessage(this.getErrMsgWhenitemUIDNoExist());
      return false;
    }
  }


  private itemUIDHasValue(): boolean {
    return Validate.hasValue(this.documentCopyRequest.itemUID);
  }

  private isValiditemUID(): boolean {
    let regExp = new RegExp(this.pattern);
    return  regExp.test(this.documentCopyRequest.itemUID);
  }


  private validateForm(): boolean {
    if (!this.itemUIDHasValue()) {
      //this.messageBox.showMessage(this.getErrMsgWhenitemUidIsEmpty());
      return false;
    }
    if (!this.isValiditemUID()) {
      //this.messageBox.showMessage(this.getErrMsgWhenPatternIsNotValid());
      return false;
    }
    if (!Validate.isEmail(this.documentCopyRequest.email)) {
      //this.messageBox.showMessage('Requiero el correo electrónico en formato alguien@ejemplo.com');
      return false;
    }
    return true;
  }

  private getErrMsgWhenitemUIDNoExist(): string {
    switch (this.selectedDocumentItemType) {
      case DocumentItemType.landTransaction:
        return 'El número de Boleta de tramite ' + this.documentCopyRequest.itemUID + ' no existe.';

      case DocumentItemType.landCertificate:
        return 'El número de Certificado ' + this.documentCopyRequest.itemUID + ' no existe.';

      case DocumentItemType.recordingDocument:
        return 'El número Documento electrónico ' + this.documentCopyRequest.itemUID + ' no existe.';

      default:
        throw Assertion.assertNoReachThisCode('Invalid request type');
    }
  }

  private getErrMsgWhenitemUidIsEmpty(): string {
    switch (this.selectedDocumentItemType) {
      case DocumentItemType.landTransaction:
        return 'Necesito un número de boleta ';

      case DocumentItemType.landCertificate:
        return 'Necesito el número de certificado ';

      case DocumentItemType.recordingDocument:
        return 'Necesito el número de documento ';

      default:
        throw Assertion.assertNoReachThisCode('Invalid request type');
    }
  }

  private getErrMsgWhenPatternIsNotValid(): string {
    switch (this.selectedDocumentItemType) {
      case DocumentItemType.landTransaction:
        return 'El número de la boleta debe tener el formato TLXXXXXXXX-N';

      case DocumentItemType.landCertificate:
        return 'El número de certificado debe tener el formato CEXXXX-XXXXXX-XXXXXX';

      case DocumentItemType.recordingDocument:
        return 'El número de documento debe tener el formato RPXXXX-XXXXXX-XXXXXX';

      default:
        throw Assertion.assertNoReachThisCode('Invalid request type');
    }
  }

   private getNewDocumentCopyRequest(): DocumentCopyRequest {
     let temporalDocumentCopyRequest :DocumentCopyRequest = {
       // documentItemType: this.selectedDocumentItemType,
        itemUID: '',
        email: ''
    };
    return temporalDocumentCopyRequest;

  }

// CE37YZ-29MA47-KJ82HF
}

*/