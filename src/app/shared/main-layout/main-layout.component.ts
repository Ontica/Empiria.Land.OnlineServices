/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { Component } from '@angular/core';

import { SessionService } from '@app/core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public userName = 'UserName || et al';
  public title = 'Servicios en Línea';
  public breadcrumb = '';

  public constructor(private session: SessionService) {
    session.start();

//    this.userName = principal.identity.fullname;
  }


  public get displayVedaElectoralUI(): boolean {
    return false;
  }

  get mainLogo() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-logo-veda.png';
    }
    return './assets/img/customer-logo.png';
  }


  get secondaryLogo() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-secondary-logo-veda.png';
    }
    return './assets/img/customer-secondary-logo.png';
  }


  get advertisementImage() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-honestidad-veda.jpg';
    }
    return './assets/img/customer-honestidad-logo.jpg';
  }


}
