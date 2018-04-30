/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OnlineServicesModule } from './online-services-module';


//import { InputControlsModule } from './input-controls-module';
;

///Online Services Components
import { RequestCertificateComponent } from './request-certificate/request-certificate.component';
import { RequestDocumentCopyComponent } from './request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from './property-UID-generation-service/property-UID-generation-service.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';

import { HomeMainPageComponent } from '../home/main-page/home-main-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HomeMainPageComponent },
    { path: 'RequestCertificate', component: RequestCertificateComponent },
    { path: 'RequestDocumentCopy', component: RequestDocumentCopyComponent},
    { path:'VerifyDocument', component:VerifyDocumentComponent},
    { path:'PropertyUIDGenerationService', component:PropertyUIDGenerationServiceComponent},
    { path:'SearchProperties', component:SearchPropertiesComponent}
  ])],
  exports: [RouterModule]
})


export class OnlineServicesRoutingModule { }
