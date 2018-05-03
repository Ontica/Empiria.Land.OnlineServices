import { Component, OnInit } from '@angular/core';
import { DistrictItemId } from '../data-types/types';

@Component({
  selector: 'app-property-UID-generation-service',
  templateUrl: './property-UID-generation-service.component.html',
  styleUrls: ['./property-UID-generation-service.component.css']
})  
export class PropertyUIDGenerationServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
