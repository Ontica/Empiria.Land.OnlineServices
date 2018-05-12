import { Component, EventEmitter, HostBinding,  Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Validate } from '../services/validate';

@Component({
  selector: 'app-personal-property-search-service',
  templateUrl: './personal-property-search-service.component.html',
  styleUrls: ['./personal-property-search-service.component.css']
})  
export class PersonalPropertySearchServiceComponent  {
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
      alert('Necesito los datos solicitados para continuar...');
    }
  }


 
  
   

}
