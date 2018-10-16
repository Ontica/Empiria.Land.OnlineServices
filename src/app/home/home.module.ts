/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMainPageComponent } from './main-page/home-main-page.component';


@NgModule({
  imports: [HomeRoutingModule, SharedModule, CommonModule, FormsModule],
  providers: [],
  declarations: [HomeMainPageComponent],
  exports: [HomeMainPageComponent]
})
export class HomeModule { }
