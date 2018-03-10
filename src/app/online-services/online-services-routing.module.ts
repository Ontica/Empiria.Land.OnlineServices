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


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'RequestCertificate', component: RequestCertificateComponent }
  ])],
  exports: [RouterModule]
})


export class OnlineServicesRoutingModule { }
