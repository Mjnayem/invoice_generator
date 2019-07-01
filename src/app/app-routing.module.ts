import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { GetPdfComponent } from './get-pdf/get-pdf.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  { path: 'invoice', component: GenerateInvoiceComponent },
  {path:'pdf', component:GetPdfComponent},
  {path:'',component:HomeComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
