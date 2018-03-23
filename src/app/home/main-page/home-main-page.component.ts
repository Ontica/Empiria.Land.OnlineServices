/**
 * @license
 * Copyright (c) 2017 La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 *
 */

import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

import { Assertion } from 'empiria';

import { SessionService } from '../../core/general/session.service';

import { OnInit } from '@angular/core';


@Component({
    selector:'home-main-page',
    templateUrl: './home-main-page.component.html',
    styleUrls: ['./home-main-page.component.scss']
})

@Injectable()
export class HomeMainPageComponent implements OnInit  {
    
    constructor(private session: SessionService) {}

    async ngOnInit() { 
       await this.session.start();  
        }
}

