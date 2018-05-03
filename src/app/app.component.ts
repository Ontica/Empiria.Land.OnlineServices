import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: '/app.component.html'
})
export class AppComponent {

  public get displayVedaElectoralUI(): boolean {
    return false;
  }

  public get mainLogo() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-logo-veda.png';
    }
    return './assets/img/customer-logo.png';
  }


  public get secondaryLogo() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-secondary-logo-veda.png';
    }
    return './assets/img/customer-secondary-logo.png';
  }


  public get advertisementImage() {
    if (this.displayVedaElectoralUI) {
      return './assets/img/customer-honestidad-veda.jpg';
    }
    return './assets/img/customer-honestidad-logo.jpg';
  }

}
