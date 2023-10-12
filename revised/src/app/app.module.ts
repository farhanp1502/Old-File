import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './aboutservices/parent/parent.component';
import { ChildComponent } from './aboutservices/child/child.component';
import { DataComponent } from './aboutobservablesandsubjects/data/data.component';
import { PublisherComponent } from './aboutobservablesandsubjects/publisher/publisher.component';
import { SubscriberComponent } from './aboutobservablesandsubjects/subscriber/subscriber.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './simpleobserverableandsubject/demo/demo.component';
import { HomeComponent } from './authentication/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProtectedComponent } from './authentication/protected/protected.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DataComponent,
    PublisherComponent,
    SubscriberComponent,
    DemoComponent,
    HomeComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
