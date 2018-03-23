import { Component, EventEmitter, HostBinding,  Input, Output } from '@angular/core';

import { Validate } from '../services/validate';

import { CertificateRequest } from '../data-types/certificateRequest';
import { CertificateType } from '../data-types/types';
import { CertificateService } from '../services/certificate.service';

import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'app-request-certificate',
  templateUrl: './request-certificate.component.html',
  styleUrls: ['./request-certificate.component.css']
})
export class RequestCertificateComponent  { 


public CertificateType = CertificateType;
public certificateRequests: CertificateRequest[];

constructor (private certificateService: CertificateService, private spinnerService: SpinnerService){}   

public selectedCertificateItemType =  CertificateType.empty;

public propertyUID = '';

public setCertificateTypeInitialValues(selectedValue: string): void {
  this.selectedCertificateItemType = Number(selectedValue);
  console.log('1 ', selectedValue);//
  console.log('2 ', this.selectedCertificateItemType);//
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
  .subscribe((certificateRequests) => { this.certificateRequests = certificateRequests; console.log('this.certificateRequests',this.certificateRequests) 

  if(this.certificateRequests != null || this.certificateRequests != undefined ){
    console.log('vp true');
    alert('Folio Encontrado: ' +
       propertyUID + '.');
    return true;
  }
  else if(this.certificateRequests === null || this.certificateRequests === undefined){
    console.log('vp false');
    return false;
  }

  },
  () => {},
  () => { this.spinnerService.hide(); });  
return true;
}

}//end
// TL72-F3K6-AC9H-5Z1Q
// TL23-A0W7-MS5C-9E8C   
// TL23-A1B0-M95P-7W4F 

