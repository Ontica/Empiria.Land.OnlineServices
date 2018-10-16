/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeMainPageComponent } from './main-page/home-main-page.component';

import { RequestCertificateComponent } from '../online-services/request-certificate/request-certificate.component';
import { PaymentOrderComponent } from '../online-services/paymentOrder/paymentOrder.component';
import { RequestDocumentCopyComponent } from '../online-services/request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from '../online-services/verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from '../online-services/property-UID-generation-service/property-UID-generation-service.component';
import { PersonalPropertySearchServiceComponent } from '../online-services/personal-property-search-service/personal-property-search-service.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeMainPageComponent },
      { path: 'RequestCertificate', component: RequestCertificateComponent },
      { path: 'PaymentOrder/:id/:number/:param/:municipality', component: PaymentOrderComponent },
      { path: 'RequestDocumentCopy', component: RequestDocumentCopyComponent },
      { path: 'VerifyDocument', component: VerifyDocumentComponent },
      { path: 'PropertyUIDGenerationService', component: PropertyUIDGenerationServiceComponent },
      { path: 'SearchProperties', component: PersonalPropertySearchServiceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
