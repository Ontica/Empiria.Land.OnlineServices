/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestCertificateComponent } from './request-certificate/request-certificate.component';
import { PaymentOrderComponent } from './paymentOrder/paymentOrder.component';
import { RequestDocumentCopyComponent } from './request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from './property-UID-generation-service/property-UID-generation-service.component';
import { PersonalPropertySearchServiceComponent } from './personal-property-search-service/personal-property-search-service.component';
import { SearchPropertiesComponent } from './search-properties/search-properties.component';

import { OnlineServicesRoutingModule } from './online-services-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CertificateService } from './services/certificate.service';
import { CopyService } from './services/copy.service';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    OnlineServicesRoutingModule,
  ],

  providers: [
    CertificateService,
    CopyService
  ],

  declarations: [
    PaymentOrderComponent,
    PersonalPropertySearchServiceComponent,
    PropertyUIDGenerationServiceComponent,
    RequestCertificateComponent,
    RequestDocumentCopyComponent,
    SearchPropertiesComponent,
    VerifyDocumentComponent
  ],

  exports: [
    PersonalPropertySearchServiceComponent,
    PropertyUIDGenerationServiceComponent,
    RequestCertificateComponent,
    RequestDocumentCopyComponent,
    SearchPropertiesComponent,
    VerifyDocumentComponent
  ]

})
export class OnlineServicesModule { }
