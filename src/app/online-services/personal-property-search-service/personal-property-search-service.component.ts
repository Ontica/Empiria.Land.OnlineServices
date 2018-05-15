import { Component, EventEmitter, HostBinding, Input, Output, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { Validate } from '../services/validate';

import {MessageBox} from '../../shared/windows/message-box/message-box.component';
import {ModalWindowComponent} from '../../shared/windows/modal-window/modal-window';

@Component({
  selector: 'app-personal-property-search-service',
  templateUrl: './personal-property-search-service.component.html',
  styleUrls: ['./personal-property-search-service.component.css']
})  
export class PersonalPropertySearchServiceComponent  {
  @ViewChild(MessageBox) public messageBox: MessageBox;
  @ViewChild(ModalWindowComponent) public modalWindow: ModalWindowComponent;

  public selectedMunicipalityValue = 0;
  public names:string = '';
  public personalPropertyNames:string;
  public data:string;

  constructor( private _router: Router) { }


  public setMunicipalityInitialValues(selectedValue: string): void {
    this.selectedMunicipalityValue = Number(selectedValue);
    this.names = '';
    this.data = '';
    
  }

  public validatePersonalPropertySearchData(names:string , data:string): void {
    if( this.selectedMunicipalityValue!=0 && names!='' && names!= ' ' && data!='' && data!= ' '&& names!=null && names!= undefined && data!=null && data!= undefined  ){
    this._router.navigate(['/PaymentOrder/3/'+names+'/'+data+'/'+this.selectedMunicipalityValue]);
    }else
    {
      this.messageBox.showMessage('Necesito los datos solicitados para continuar...');
    }
  }
  
}

