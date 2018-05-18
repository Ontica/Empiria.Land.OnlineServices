import { Component, EventEmitter, HostBinding, Input, Output, ViewChild  } from '@angular/core';

import { Validate } from '../services/validate';

import { CertificateRequest } from '../data-types/certificateRequest';
import { CertificateType } from '../data-types/types';
import { CertificateService } from '../services/certificate.service';

import { SpinnerService } from '../../shared/spinner/spinner.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import {MessageBox} from '../../shared/windows/message-box/message-box.component';
import {ModalWindowComponent} from '../../shared/windows/modal-window/modal-window';

@Component({
  selector: 'app-paymentOrderComponent',
  templateUrl: './paymentOrder.component.html',
  styleUrls: ['./paymentOrder.component.css']
})
export class PaymentOrderComponent {
  @ViewChild(MessageBox) public messageBox: MessageBox;
  @ViewChild(ModalWindowComponent) public modalWindow: ModalWindowComponent;

  public originLink: string;
  public returnLink: string;
  public optionNumber: string;
  public optionString: string;
  public stringParam: string;
  public msjHTML: string;
  public names: string;
  public data: string;
  public municipality:string;
  public fullMunicipalityName:string;

  public CertificateType = CertificateType;
  public certificateRequests: CertificateRequest[];

  public propertyUID: string;
  public eMail:string;
  public requestedBy:string;
  constructor(private _router: Router, private certificateService: CertificateService, private spinnerService: SpinnerService, private _route: ActivatedRoute ) {
     this.originLink =  this._route.snapshot.paramMap.get('id');
     this.optionNumber = this._route.snapshot.paramMap.get('number');
     this.stringParam = this._route.snapshot.paramMap.get('param');
     this.municipality = this._route.snapshot.paramMap.get('municipality');
 
     if(this.originLink==='1'){
      this.returnLink ='/RequestCertificate';
       if(this.optionNumber ==='1'){ this.optionString='Certificado de Propiedad'; }
       if(this.optionNumber ==='2'){ this.optionString='Certificado de Inscripción'; }
       if(this.optionNumber ==='3'){ this.optionString='Libertad de gravamen / Gravamen'; }
       this.msjHTML = ' PARA EL TRAMITE:  '+this.optionString+' ,  CON EL FOLIO REAL:  '+ this.stringParam+' ';
     }
     if(this.originLink==='2'){
      if(this.optionNumber ==='1'){ this.optionString='Boleta de trámite'; }
       if(this.optionNumber ==='2'){ this.optionString='Documento electrónico'; }
       this.msjHTML = ' PARA:  '+this.optionString+' ,  CON NUMERO:  '+ this.stringParam+' ';
     }
     if(this.originLink==='3'){
      this.returnLink ='/SearchProperties';

      if(this.municipality=='1')  { this.fullMunicipalityName='Amaxac de Guerrero'; }
      if(this.municipality=='2')  { this.fullMunicipalityName='Apetatitlán de Antonio Carvajal'; }
      if(this.municipality=='3')  { this.fullMunicipalityName='Atlangatepec'; }
      if(this.municipality=='4')  { this.fullMunicipalityName='Atltzayanca'; }
      if(this.municipality=='5')  { this.fullMunicipalityName='Apizaco'; }
      if(this.municipality=='6')  { this.fullMunicipalityName='Calpulalpan'; }
      if(this.municipality=='7')  { this.fullMunicipalityName='El Carmen Tequexquitla'; }
      if(this.municipality=='8')  { this.fullMunicipalityName='Cuapiaxtla'; }
      if(this.municipality=='9')  { this.fullMunicipalityName='Cuaxomulco'; }
      if(this.municipality=='10')  { this.fullMunicipalityName='Chiautempan'; }
      if(this.municipality=='11')  { this.fullMunicipalityName='Muñoz de Domingo Arenas'; }
      if(this.municipality=='12')  { this.fullMunicipalityName='Españita'; }
      if(this.municipality=='13')  { this.fullMunicipalityName='Huamantla'; }
      if(this.municipality=='14')  { this.fullMunicipalityName='Hueyotlipan'; }
      if(this.municipality=='15')  { this.fullMunicipalityName='Ixtacuixtla de Mariano Matamoros'; }
      if(this.municipality=='16')  { this.fullMunicipalityName='Ixtenco'; }
      if(this.municipality=='17')  { this.fullMunicipalityName='Mazatecochco de José María Morelos'; }
      if(this.municipality=='18')  { this.fullMunicipalityName='Contla de Juan Cuamatzi'; }
      if(this.municipality=='19')  { this.fullMunicipalityName='Tepetitla de Lardizábal'; }
      if(this.municipality=='20')  { this.fullMunicipalityName='Sanctórum de Lázaro Cárdenas'; }
      if(this.municipality=='21')  { this.fullMunicipalityName='Nanacamilpa de Mariano Arista'; }
      if(this.municipality=='22')  { this.fullMunicipalityName='Acuamanala de Miguel Hidalgo'; }
      if(this.municipality=='23')  { this.fullMunicipalityName='Natívitas'; }
      if(this.municipality=='24')  { this.fullMunicipalityName='Panotla'; }
      if(this.municipality=='25')  { this.fullMunicipalityName='San Pablo del Monte'; }
      if(this.municipality=='26')  { this.fullMunicipalityName='Santa Cruz Tlaxcala'; }
      if(this.municipality=='27')  { this.fullMunicipalityName='Tenancingo'; }
      if(this.municipality=='28')  { this.fullMunicipalityName='Teolocholco'; }
      if(this.municipality=='29')  { this.fullMunicipalityName='Tepeyanco'; }
      if(this.municipality=='30')  { this.fullMunicipalityName='Terrenate'; }
      if(this.municipality=='31')  { this.fullMunicipalityName='Tetla de la Solidaridad'; }
      if(this.municipality=='32')  { this.fullMunicipalityName='Tetlatlahuca'; }
      if(this.municipality=='33')  { this.fullMunicipalityName='Tlaxcala'; }
      if(this.municipality=='34')  { this.fullMunicipalityName='Tlaxco'; }
      if(this.municipality=='35')  { this.fullMunicipalityName='Tocatlán'; }
      if(this.municipality=='36')  { this.fullMunicipalityName='Totolac'; }
      if(this.municipality=='37')  { this.fullMunicipalityName='Ziltlaltépec de Trinidad Sánchez Santo'; }
      if(this.municipality=='38')  { this.fullMunicipalityName='Tzompantepec'; }
      if(this.municipality=='39')  { this.fullMunicipalityName='Xaloztoc'; }
      if(this.municipality=='40')  { this.fullMunicipalityName='Xaltocan'; }
      if(this.municipality=='41')  { this.fullMunicipalityName='Papalotla de Xicohténcatl'; }
      if(this.municipality=='42')  { this.fullMunicipalityName='Xicohtzinco'; }
      if(this.municipality=='43')  { this.fullMunicipalityName='Yauhquemehcan'; }
      if(this.municipality=='44')  { this.fullMunicipalityName='Benito Juárez'; }
      if(this.municipality=='45')  { this.fullMunicipalityName='Emiliano Zapata'; }
      if(this.municipality=='46')  { this.fullMunicipalityName='Lázaro Cárdenas'; }
      if(this.municipality=='47')  { this.fullMunicipalityName='La Magdalena Tlaltelulco'; }
      if(this.municipality=='48')  { this.fullMunicipalityName='San Damián Texóloc'; }
      if(this.municipality=='49')  { this.fullMunicipalityName='San Francisco Tetlanohcan'; }
      if(this.municipality=='50')  { this.fullMunicipalityName='San Jerónimo Zacualpan'; }
      if(this.municipality=='51')  { this.fullMunicipalityName='San José Teacalco'; }
      if(this.municipality=='52')  { this.fullMunicipalityName='San Juan Huactzinco'; }
      if(this.municipality=='53')  { this.fullMunicipalityName='San Lorenzo Axocomanitla'; }
      if(this.municipality=='54')  { this.fullMunicipalityName='San Lucas Tecopilco'; }
      if(this.municipality=='55')  { this.fullMunicipalityName='Santa Cruz Quilehtla'; }
      if(this.municipality=='56')  { this.fullMunicipalityName='Santa Ana Nopalucan'; }
      if(this.municipality=='57')  { this.fullMunicipalityName='Santa Apolonia Teacalco'; }
      if(this.municipality=='58')  { this.fullMunicipalityName='Santa Catarina Ayometla'; }
      if(this.municipality=='59')  { this.fullMunicipalityName='Santa Isabel Xiloxoxtla'; }
      if(this.municipality=='60')  { this.fullMunicipalityName='Zacatelco'; }

      this.msjHTML = 'BUSQUEDA DE BIENES A NOMBRE:  '+this.optionNumber+' , SOBRE EL PREDIO:  '+ this.stringParam+ ' , DEL MUNICIPIO: '+this.fullMunicipalityName;
     }
     
   }

 
  public selectedCertificateItemType = CertificateType.empty;

  public return(): void {
    if(this.originLink==='1'){
      this.returnLink ='/RequestCertificate';
      this._router.navigate([this.returnLink]);
     }
     if(this.originLink==='2'){
      this.returnLink ='/RequestDocumentCopy';
      this._router.navigate([this.returnLink]);
     }
     if(this.originLink==='3'){
      this.returnLink ='/SearchProperties';
      this._router.navigate([this.returnLink]);
     }
  }
 

  public setCertificateTypeInitialValues(selectedValue: string): void {
    this.selectedCertificateItemType = Number(selectedValue);

    this.certificateRequests = [];
  }


  private validatePaymentOrderData(eMail: string, requestedBy: string): boolean {
     if(!Validate.hasValue(requestedBy)){
      this.messageBox.showMessage('Requiero se proporcione el Nombre completo del interesado.');
      return false;
    }else{ 

      if (!Validate.isEmail(eMail)) {
         this.messageBox.showMessage('Requiero se proporcione el E-mail correctamente.');
        return false;
      }
      else{
        this.messageBox.showMessage('Datos correctos.');
        return true;
      }

    }

    

  }

}
