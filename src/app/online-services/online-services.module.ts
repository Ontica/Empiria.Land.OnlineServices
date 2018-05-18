/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

///Online Services Components
import { RequestCertificateComponent } from './request-certificate/request-certificate.component';
import { PaymentOrderComponent } from './paymentOrder/paymentOrder.component';
import { RequestDocumentCopyComponent } from './request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from './property-UID-generation-service/property-UID-generation-service.component';
import { PersonalPropertySearchServiceComponent } from './personal-property-search-service/personal-property-search-service.component';

import { OnlineServicesRoutingModule } from './online-services-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CertificateService } from './services/certificate.service';
import { CopyService } from './services/copy.service';
import { PropertyItem } from './services/propertyItem';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [OnlineServicesRoutingModule, CommonModule, FormsModule,SharedModule],
  providers: [CertificateService,CopyService,PropertyItem,],
  declarations: [RequestCertificateComponent,PaymentOrderComponent,RequestDocumentCopyComponent,VerifyDocumentComponent,PropertyUIDGenerationServiceComponent,PersonalPropertySearchServiceComponent],
  exports: [RequestCertificateComponent,RequestDocumentCopyComponent,VerifyDocumentComponent,PropertyUIDGenerationServiceComponent,PersonalPropertySearchServiceComponent]
})
export class OnlineServicesModule { }
