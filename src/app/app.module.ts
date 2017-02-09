import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {RoutingModule} from './app-routing.module';
import {SimpleComponent} from "./simple/simple.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SidebarModule} from "./sidebar/sidebar.module";
import {SubnavModule} from "./subnav/subnav.module";
import {SidebarMainComponent} from "./sidebar/sidebar-main/sidebar-main.component";

@NgModule({
    declarations: [
        AppComponent,
        SimpleComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        ClarityModule.forChild(),
        HttpModule,
        SidebarModule,
        SubnavModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
