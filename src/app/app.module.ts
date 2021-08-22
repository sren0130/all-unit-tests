import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ComponentRouterComponent } from './component-router/component-router.component';
import { ComponentServiceComponent } from './component-service/component-service.component';
import { ComponentRouteComponent } from './component-route/component-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    ComponentRouterComponent,
    ComponentServiceComponent,
    ComponentRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
