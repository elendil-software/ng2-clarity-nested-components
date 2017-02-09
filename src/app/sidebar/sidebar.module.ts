import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarMainComponent} from "./sidebar-main/sidebar-main.component";
import {SidebarSub1Component} from "./sidebar-sub1/sidebar-sub1.component";
import {RouterModule} from "@angular/router";
import {RoutingModule} from '../app-routing.module'

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    SidebarMainComponent,
    SidebarSub1Component
  ]
})
export class SidebarModule { }
