import { Component, EventEmitter, HostBinding, Input, Output, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';


import { Validate } from '../services/validate';

import { CertificateRequest } from '../data-types/certificateRequest';
import { CertificateType } from '../data-types/types';
import { CertificateService } from '../services/certificate.service';
import { PaymentOrderComponent } from '../paymentOrder/paymentOrder.component';

import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-request-certificate',
  templateUrl: './request-certificate.component.html',
  styleUrls: ['./request-certificate.component.css']
})
export class RequestCertificateComponent {

  show: boolean = false;
  public CertificateType = CertificateType;
  public certificateRequests: CertificateRequest[] = [];
  propertyfound: boolean = false;

  constructor(private certificateService: CertificateService, private spinnerService: SpinnerService, private _router: Router) 
  { 
    this.certificateRequests = [];
    this.certificateRequests.length = 0;
    this.show = false;
    this.certificateRequests  = [];
  }

  public selectedCertificateItemType = CertificateType.empty;

  public propertyUID = '';
 
  
  public validateCertificateData(propertyUID: string): void {
   
    if(this.selectedCertificateItemType!=0 && this.propertyfound === true ){
 
    this._router.navigate(['/PaymentOrder/1/'+this.selectedCertificateItemType+'/'+propertyUID+'/1']);
    }else
    {
      alert('Necesito los datos solicitados para continuar...');
    }
  }
  
  public setCertificateTypeInitialValues(selectedValue: string): void {
    this.selectedCertificateItemType = Number(selectedValue);

    
    
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
      //this.messageBox.showMessage('Requiero se proporcione el folio real del predio.');
      alert('Requiero se proporcione el folio real del predio.');
      return false;
    }

    if (!this.verificateProperty(propertyUID)) {
      // this.messageBox.showMessage('No encontró ningún predio registrado con el folio real ' +
      //   propertyUID + '.');
      alert('No encontró ningún predio registrado con el folio real ' +
        propertyUID + '.');
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
          this.propertyfound = true;
          alert('Folio real encontrado: ' + propertyUID + '.');
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



