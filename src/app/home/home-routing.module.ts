/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SecurityGuardService } from '../core';

import { MainLayoutComponent } from '../shared';

import { HomeMainPageComponent } from './main-page/home-main-page.component';

import { RequestCertificateComponent } from '../online-services/request-certificate/request-certificate.component';

import { OnlineServicesModule } from './online-services/online-services.module';
import { OnlineServicesRoutingModule } from './online-services-routing.module';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HomeMainPageComponent },
    {path: 'RequestCertificate', component: RequestCertificateComponent }
  ])],
  exports: [RouterModule]
})



export class HomeRoutingModule { }
