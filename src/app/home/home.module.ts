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
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeMainPageComponent } from './main-page/home-main-page.component';


import { OnlineServicesModule } from './online-services/online-services.module';
import { OnlineServicesRoutingModule } from './online-services-routing.module';
import { RequestCertificateComponent } from './online-services/request-certificate/request-certificate.component';
import { PaymentOrderComponent } from './online-services/paymentOrder/paymentOrder.component';
import { RequestDocumentCopyComponent } from './online-services/request-document-copy/request-document-copy.component';
import { VerifyDocumentComponent } from './online-services/verify-document/verify-document.component';
import { PropertyUIDGenerationServiceComponent } from '../online-services/property-UID-generation-service/property-UID-generation-service.component';
import { SearchProperties } from '../online-services/search-propierties/search.properties.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [HomeRoutingModule, SharedModule, CommonModule, FormsModule],
  providers: [],
  declarations: [HomeMainPageComponent],
  exports: [HomeMainPageComponent]
})
export class HomeModule { }
