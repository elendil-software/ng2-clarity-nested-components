import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubnavMainComponent } from './subnav-main/subnav-main.component'
import {SubnavSidebarComponent } from './subnav-sidebar/subnav-sidebar.component'
import {SubnavSidebarSub1Component } from './subnav-sidebar-sub1/subnav-sidebar-sub1.component'
import {SubnavSimpleComponent } from './subnav-simple/subnav-simple.component'

import { ClarityModule } from 'clarity-angular';

import {RouterModule} from "@angular/router";
import {RoutingModule} from '../app-routing.module'

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ClarityModule
  ],
  declarations: [
    SubnavMainComponent,
    SubnavSidebarComponent,
    SubnavSidebarSub1Component,
    SubnavSimpleComponent
  ]
})
export class SubnavModule { }
