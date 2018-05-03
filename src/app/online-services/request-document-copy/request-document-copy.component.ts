
//import { DocumentItemType } from '../data-types/types';

import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

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
export class RequestDocumentCopyComponent {

  ngOnInit() {
  }

  show: boolean = false;

  // Enumeration re-declaration for use in html code.
  public DocumentItemType = DocumentItemType;
  public selectedDocumentItemType = DocumentItemType.empty;
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

  public documentCopyRequests: DocumentCopyRequest[] = [];


  constructor(private copyService: CopyService, private spinnerService: SpinnerService/*, private searchService: SearchService*/) { }

  //public selectedCertificateItemType =  CertificateType.empty;

  public documentUID = '';
  public filingUID = '';


  private setDocument(document: PropertyItem[]): void {
    this.document = [];
    this.document = document;
  }

  public setDocumentItemInitialValues(selectedValue: string, document: PropertyItem[], documentCopyRequests: DocumentCopyRequest[]): void {
    this.selectedDocumentItemType = Number(selectedValue);
    //this.certificateRequest.certificateType = Number(selectedValue);
    //this.setDocumentItemTypePattern();
    this.documentCopyRequests.length = 0;
    this.show = false;
    this.documentCopyRequests = [];
    this.document = document;
    this.documentCopyRequests = documentCopyRequests = [];
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
      .subscribe((documentCopyRequests) => {
        this.documentCopyRequests = documentCopyRequests;

        if (this.documentCopyRequests != null || this.documentCopyRequests != undefined) {
          alert('Documento encontrado: ' + propertyUID + '.');

          return true;
        }
        else if (this.documentCopyRequests === null || this.documentCopyRequests === undefined) {
          return false;
        }

      },
        () => { },
        () => { this.spinnerService.hide(); });
    return true;
  }

  private showErrorMessage(error: any): void {
    this.hasError = true;
    this.errorMessage = (<string>error.errorMessage).replace(/\n/g, '<br />');
  }


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

      alert('Requiero se proporcione el número de trámite.');
      return false;
    }

    if (!this.verificateFiling(filingUID)) {
      alert('No encontró ningún documento registrado con el tramite ' + filingUID + '.');
      return false;
    }

    return true;
  }

  private verificateFiling(filingUID: string): boolean {

    this.spinnerService.show();
    this.copyService.existsFiling(filingUID)
      .subscribe((documentCopyRequests) => {
        this.documentCopyRequests = documentCopyRequests;

        if (this.documentCopyRequests != null || this.documentCopyRequests != undefined) {
          alert('Trámite encontrado: ' + filingUID + '.');
          return true;
        }
        else if (this.documentCopyRequests === null || this.documentCopyRequests === undefined) {
          return false;
        }

      },
        () => { },
        () => { this.spinnerService.hide(); });
    return true;
  }

}
