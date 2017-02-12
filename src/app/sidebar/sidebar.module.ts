import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarMainComponent} from "./sidebar-main/sidebar-main.component";
import {SidebarSub1Component} from "./sidebar-sub1/sidebar-sub1.component";
import {SidebarSub2Component} from "./sidebar-sub2/sidebar-sub2.component";
import {RouterModule} from "@angular/router";
import {RoutingModule} from '../app-routing.module'

import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    ClarityModule
  ],
  declarations: [
    SidebarMainComponent,
    SidebarSub1Component,
    SidebarSub2Component
  ]
})
export class SidebarModule { }
