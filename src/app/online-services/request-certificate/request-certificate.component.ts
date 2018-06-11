import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Validate } from '@app/core';
import { MessageBoxService, SpinnerService } from '@app/core/ui-services';

import { CertificateRequest } from '../data-types/certificateRequest';
import { CertificateType } from '../data-types/types';
import { CertificateService } from '../services/certificate.service';
import { PaymentOrderComponent } from '../paymentOrder/paymentOrder.component';


@Component({
  selector: 'app-request-certificate',
  templateUrl: './request-certificate.component.html',
  styleUrls: ['./request-certificate.component.css'],

})
export class RequestCertificateComponent {

  show: boolean = false;
  CertificateType = CertificateType;
  certificateRequests: CertificateRequest[] = [];
  propertyUID = '';
  propertyfound: boolean = false;

  selectedCertificateItemType = CertificateType.empty;

  constructor(private certificateService: CertificateService,
              private messageBox: MessageBoxService,
              private spinner: SpinnerService,
              private _router: Router) {

    this.certificateRequests = [];
    this.certificateRequests.length = 0;
    this.show = false;
    this.certificateRequests = [];

  }

  setCertificateTypeInitialValues(selectedValue: string): void {
    this.selectedCertificateItemType = Number(selectedValue);



  }


  searchProperty(propertyUID: string): void {
    console.log('searchProperty', propertyUID);

    try {
      if (!this.validateProperty(propertyUID)) {
        return;
      }
      return;
    } catch (e) {
      this.messageBox.show(e);

    }
  }


  validateCertificateData(propertyUID: string): void {

    if (this.selectedCertificateItemType != 0 && this.propertyfound === true) {

      this._router.navigate(['/PaymentOrder/1/' + this.selectedCertificateItemType + '/' + propertyUID + '/1']);
    } else {
      this.messageBox.show('Necesito los datos solicitados para continuar...');

    }
  }


  validateProperty(propertyUID: string): boolean {
    console.log('propertyUID', propertyUID);

    if (!Validate.hasValue(propertyUID)) {
      this.messageBox.show('Requiero se proporcione el folio real del predio.');
      return false;
    }

    if (!this.verificateProperty(propertyUID)) {
      this.messageBox.show(`No se encontró ningún predio registrado con el folio real ${propertyUID}.`);
      return false;
    }

    return true;
  }


  /// private methods


  private verificateProperty(propertyUID: string): boolean {

    this.spinner.show();
    this.certificateService.existsProperty(propertyUID)
      .subscribe((certificateRequests) => {
        this.spinner.hide();
        this.certificateRequests = certificateRequests;

        if (this.certificateRequests != null || this.certificateRequests != undefined) {
          this.propertyfound = true;
          this.messageBox.show('Folio real encontrado: ' + propertyUID + '.');
          return true;
        }
        else if (this.certificateRequests === null || this.certificateRequests === undefined) {
          return false;
        }

      },
        () => { this.spinner.hide(); },
        () => { this.spinner.hide(); });
    return true;
  }

}

