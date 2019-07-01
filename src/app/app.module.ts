import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {CookieService} from 'ngx-cookie-service';
import {Globals} from './globals';
import { GetPdfComponent } from './get-pdf/get-pdf.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,

    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    GenerateInvoiceComponent,
    GetPdfComponent,
    HomeComponent,
  
  ],
  providers: [ 
    CookieService,
    Globals,
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    // console.log(`Running ${platform} with appId=${appId}`);
  }
}
