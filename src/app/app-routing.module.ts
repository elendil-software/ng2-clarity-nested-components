import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SimpleComponent} from "./simple/simple.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SidebarModule} from "./sidebar/sidebar.module";
import {SidebarMainComponent} from "./sidebar/sidebar-main/sidebar-main.component";
import {SidebarSub1Component} from './sidebar/sidebar-sub1/sidebar-sub1.component';
import {SubnavMainComponent } from './subnav/subnav-main/subnav-main.component'
import {SubnavSidebarComponent } from './subnav/subnav-sidebar/subnav-sidebar.component'
import {SubnavSidebarSub1Component } from './subnav/subnav-sidebar-sub1/subnav-sidebar-sub1.component'
import {SubnavSimpleComponent } from './subnav/subnav-simple/subnav-simple.component'

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: '404', component: NotFoundComponent },

  { path: 'sidebar', component: SidebarMainComponent, children: [
    { path: 'sidebar-sub1', component: SidebarSub1Component, outlet: 'sidebar-sub' }
  ]},

  { path: 'subnav', component: SubnavMainComponent, children: [
    { path: 'subnav-simple', component: SubnavSimpleComponent, outlet: 'subnav-sub' },
    { path: 'subnav-sidebar', component: SubnavSidebarComponent, outlet: 'subnav-sub', children: [
      { path: 'subnav-sidebar-sub1', component: SubnavSidebarSub1Component, outlet: 'subnav-sidebar-sub' }
    ]}
  ]},

  { path: '', redirectTo: 'simple', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
