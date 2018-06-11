
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Validate } from '@app/core';
import { MessageBoxService, SpinnerService } from '@app/core/ui-services';

import { DocumentCopyRequest } from '../data-types/documentCopyRequest';
import { DocumentItemType } from '../data-types/documentCopyRequest';

import { CopyService } from '../services/copy.service';
import { PropertyItem } from '../services/propertyItem';


@Component({
  selector: 'app-request-document-copy',
  templateUrl: './request-document-copy.component.html',
  styleUrls: ['./request-document-copy.component.css']
})
export class RequestDocumentCopyComponent {

  show: boolean = false;

  // Enumeration re-declaration for use in html code.
  DocumentItemType = DocumentItemType;
  selectedDocumentItemType = DocumentItemType.empty;
  document: PropertyItem[];

  selectedDocumentItemName = 'Buscar';

  itemUID = '';
  itemHash = '';
  hasError = false;
  errorMessage = '';

  documentCopyRequests: DocumentCopyRequest[] = [];

  documentUID = '';
  filingUID = '';
  paramUID = '';

  constructor(
    private copyService: CopyService,
    private messageBox: MessageBoxService,
    private spinner: SpinnerService,
    private _router: Router
  ) { }



  documentfound: boolean = false;
  filingfound: boolean = false;


  public validateDocumentCopyData(): void {
    if (this.selectedDocumentItemType != 0 && (this.documentfound === true || this.filingfound === true)) {
      this._router.navigate(['/PaymentOrder/2/' + this.selectedDocumentItemType + '/' + this.paramUID + '/2']);
    } else {
      this.messageBox.show('Necesito los datos solicitados para continuar...');
    }
  }


  private setDocument(document: PropertyItem[]): void {
    this.document = [];
    this.document = document;
  }

  public setDocumentItemInitialValues(selectedValue: string, document: PropertyItem[], documentCopyRequests: DocumentCopyRequest[]): void {
    this.selectedDocumentItemType = Number(selectedValue);
    this.documentCopyRequests.length = 0;
    this.show = false;
    this.documentCopyRequests = [];
    this.document = document;
    this.documentCopyRequests = documentCopyRequests = [];
    this.documentfound = false;
    this.filingfound = false;

  }


  public searchDocument(documentUID: string): void {
    try {
      if (!this.validateDocument(documentUID)) {
        return;
      }
      return;
    } catch (e) {
      this.messageBox.show(e);
    }
  }

  private validateDocument(documentUID: string): boolean {
    if (!Validate.hasValue(documentUID)) {
      this.messageBox.show('Requiero se proporcione el número de documento electrónico.');
      return false;
    }

    if (!this.verificateDocument(documentUID)) {
      this.messageBox.show(`No se encontró ningún documento registrado con el documento ${documentUID}.`);
      return false;
    }

    return true;
  }

  private verificateDocument(documentUID: string): boolean {

    this.spinner.show();
    this.copyService.existsDocument(documentUID)
      .subscribe((documentCopyRequests) => {
        this.documentCopyRequests = documentCopyRequests;

        if (this.documentCopyRequests != null || this.documentCopyRequests != undefined) {
          this.documentfound = true;
          this.paramUID = documentUID;
          this.messageBox.show('Documento encontrado: ' + documentUID + '.');

          return true;
        }
        else if (this.documentCopyRequests === null || this.documentCopyRequests === undefined) {
          return false;
        }

      },
        () => { },
        () => { this.spinner.hide(); });
    return true;
  }

  private showErrorMessage(error: any): void {
    this.hasError = true;
    this.errorMessage = (<string>error.errorMessage).replace(/\n/g, '<br />');
    this.messageBox.show(this.errorMessage);
  }


  public searchFiling(filingUID: string): void {
    try {
      if (!this.validateFiling(filingUID)) {
        return;
      }
      return;
    } catch (e) {
      this.messageBox.show(e);

    }
  }


  private validateFiling(filingUID: string): boolean {
    if (!Validate.hasValue(filingUID)) {
      this.messageBox.show('Requiero se proporcione el número de trámite.');
      return false;
    }

    if (!this.verificateFiling(filingUID)) {
      this.messageBox.show('No encontró ningún documento registrado con el tramite ' + filingUID + '.');
      return false;
    }

    return true;
  }

  private verificateFiling(filingUID: string): boolean {

    this.spinner.show();
    this.copyService.existsFiling(filingUID)
      .subscribe((documentCopyRequests) => {
        this.documentCopyRequests = documentCopyRequests;

        if (this.documentCopyRequests != null || this.documentCopyRequests != undefined) {
          this.filingfound = true;
          this.paramUID = filingUID;
          this.messageBox.show('Trámite encontrado: ' + filingUID + '.');
          return true;
        }
        else if (this.documentCopyRequests === null || this.documentCopyRequests === undefined) {
          return false;
        }

      },
        () => { },
        () => { this.spinner.hide(); });
    return true;
  }
}
