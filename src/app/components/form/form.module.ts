import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
