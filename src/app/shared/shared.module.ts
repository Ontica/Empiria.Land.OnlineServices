/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core/core.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NoContentComponent } from './no-content/no-content.component';

import { AutocompleteControl } from './controls/autocomplete-control';
import { CalendarControl } from './controls/calendar-control';
import { SelectControl } from './controls/select-control';

import { NavBarService } from './navbar/navbar.service';


/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],

  declarations: [
    AutocompleteControl,
    CalendarControl,
    MainLayoutComponent,
    NavbarComponent,
    NoContentComponent,
    SelectControl
  ],

  exports: [
    AutocompleteControl,
    CalendarControl,
    MainLayoutComponent,
    NoContentComponent,
    SelectControl
  ],

  providers:[
    NavBarService
  ]

})
export class SharedModule { }
