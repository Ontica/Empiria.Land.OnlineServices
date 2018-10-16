import { Component, OnInit } from '@angular/core';
import { DistrictItemId } from '../data-types/types';

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.css']
})
export class SearchPropertiesComponent implements OnInit {

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
