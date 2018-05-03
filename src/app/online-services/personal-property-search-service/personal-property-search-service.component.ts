import { Component, EventEmitter, HostBinding,  Input, Output, OnInit } from '@angular/core';
import { DistrictItemId } from '../data-types/types';

@Component({
  selector: 'app-personal-property-search-service',
  templateUrl: './personal-property-search-service.component.html',
  styleUrls: ['./personal-property-search-service.component.css']
})  
export class PersonalPropertySearchServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public setMunicipalityInitialValues(selectedValue: string): void {
    
  }


    // Enumeration re-declaration for use in html code.
    public DistrictItemId = DistrictItemId;
    public selectedDocumentItemType =  DistrictItemId.empty;
  
    public setDocumentItemInitialValues(selectedValue: string): void {
      this.selectedDocumentItemType = Number(selectedValue);
      //this.certificateRequest.certificateType = Number(selectedValue);
      //this.setDocumentItemTypePattern();
    }

}
