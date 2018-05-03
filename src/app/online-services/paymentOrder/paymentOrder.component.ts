import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { Validate } from '../services/validate';

import { CertificateRequest } from '../data-types/certificateRequest';
import { CertificateType } from '../data-types/types';
import { CertificateService } from '../services/certificate.service';

import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-paymentOrderComponent',
  templateUrl: './paymentOrder.component.html',
  styleUrls: ['./paymentOrder.component.css']
})
export class PaymentOrderComponent {


  public CertificateType = CertificateType;
  public certificateRequests: CertificateRequest[];

  constructor(private certificateService: CertificateService, private spinnerService: SpinnerService) { }

  public selectedCertificateItemType = CertificateType.empty;

  public propertyUID = '';

  public setCertificateTypeInitialValues(selectedValue: string): void {
    this.selectedCertificateItemType = Number(selectedValue);

    this.certificateRequests = [];
  }


  public searchProperty(propertyUID: string): void {
    try {
      if (!this.validateProperty(propertyUID)) {
        return;
      }
      return;
    } catch (e) {
      alert(e);
    }
  }

  private validateProperty(propertyUID: string): boolean {
    if (!Validate.hasValue(propertyUID)) {
      alert('Requiero se proporcione el folio real del predio.');
      return false;
    }

    if (!this.verificateProperty(propertyUID)) {
      alert(`No encontró ningún predio registrado con el folio real ${propertyUID}.`);
      return false;
    }

    return true;
  }

  private verificateProperty(propertyUID: string): boolean {

    this.spinnerService.show();
    this.certificateService.existsProperty(propertyUID)
      .subscribe((certificateRequests) => {

        this.certificateRequests = certificateRequests;

        if (this.certificateRequests != null || this.certificateRequests != undefined) {
          alert(`Folio real encontrado: ${propertyUID}`);
          return true;
        }
        else if (this.certificateRequests === null || this.certificateRequests === undefined) {
          return false;
        }

      },
        () => { },
        () => { this.spinnerService.hide(); });
    return true;
  }

}
