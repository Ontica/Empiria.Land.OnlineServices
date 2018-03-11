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
import { RequestDocumentCopyComponent } from './request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from './property-UID-generation-service/property-UID-generation-service.component';

//import { InputControlsModule } from '../global_shared/components/input-controls/input-controls.module';

import { OnlineServicesRoutingModule } from './online-services-routing.module';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [OnlineServicesRoutingModule, CommonModule, FormsModule,/*InputControlsModule*/],
  providers: [],
  declarations: [RequestCertificateComponent,RequestDocumentCopyComponent,VerifyDocumentComponent,PropertyUIDGenerationServiceComponent],
  exports: [RequestCertificateComponent,RequestDocumentCopyComponent,VerifyDocumentComponent,PropertyUIDGenerationServiceComponent]
})
export class OnlineServicesModule { }
