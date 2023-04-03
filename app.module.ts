import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonExampleComponent} from './button-example/button-example.component';
import {MaterialModule} from './material.module';
import {InputExampleComponent} from './input-example/input-example.component';
import {SelectExampleComponent} from './select-example/select-example.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxExampleComponent} from './checkbox-example/checkbox-example.component';
import {RadioExampleComponent} from './radio-example/radio-example.component';
import {TypographyExampleComponent} from './typography-example/typography-example.component';
import {CardExampleComponent} from './card-example/card-example.component';
import {DialogExampleComponent, DialogExampleDialog} from "./dialog-example/dialog-example.component";
import {SlideToggleExampleComponent} from './slide-toggle-example/slide-toggle-example.component';
import {ElevationExampleComponent} from './elevation-example/elevation-example.component';
import {ExampleComponent} from './example/example.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {TreeExampleComponent} from './tree-example/tree-example.component';
import {HomeComponent} from './home/home.component';
import {ContainerExampleComponent} from './container-example/container-example.component';
import {ButtonToggleExampleComponent} from './button-toggle-example/button-toggle-example.component';
import {XyModule} from 'xy-designsystem';
import {TabExampleComponent} from "./tab-example/tab-example.component";
import { MenuExampleComponent } from './menu-example/menu-example.component';
import {FormExampleComponent} from "./form-example/form-example.component";
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { BreadcrumbExampleComponent } from './breadcrumb-example/breadcrumb-example.component';
import { Child1ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child1-example/child1-example.component';
import { Child2ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child2-example/child2-example.component';
import { SnackbarExampleComponent, SnackbarExampleSnackbar, SnackbarExampleSnackbarTest } from './snackbar-example/snackbar-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { SliderExampleComponent } from './slider-example/slider-example.component';
import { ProgressbarExampleComponent } from './progressbar-example/progressbar-example.component';
import { ProgressSpinnerExampleComponent } from './progress-spinner-example/progress-spinner-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { FooterExampleComponent } from './footer-example/footer-example.component';
import { ExpensionPanelExampleComponent } from './expension-panel-example/expension-panel-example.component';
import { AutocompletExampleComponent } from './autocomplet-example/autocomplet-example.component';
import { ChipsExampleComponent } from './chips-example/chips-example.component';
import { DatePickerExampleComponent } from './date-picker-example/xy-date-picker-example.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    InputExampleComponent,
    SelectExampleComponent,
    CheckboxExampleComponent,
    RadioExampleComponent,
    TypographyExampleComponent,
    CardExampleComponent,
    DialogExampleComponent,
    DialogExampleDialog,
    SlideToggleExampleComponent,
    ElevationExampleComponent,
    ExampleComponent,
    TreeExampleComponent,
    HomeComponent,
    ContainerExampleComponent,
    ButtonToggleExampleComponent,
    TabExampleComponent,
    MenuExampleComponent,
    FormExampleComponent,
    BadgeExampleComponent,
    BreadcrumbExampleComponent,
    Child2ExampleComponent,
    Child1ExampleComponent,
    SnackbarExampleComponent,
    SnackbarExampleSnackbar,
    TableExampleComponent,
    StepperExampleComponent,
    HeaderExampleComponent,
    SliderExampleComponent,
    ProgressbarExampleComponent,
    ProgressSpinnerExampleComponent,
    TooltipExampleComponent,
    FooterExampleComponent,
    SnackbarExampleSnackbarTest,
    ExpensionPanelExampleComponent,
    AutocompletExampleComponent,
    ChipsExampleComponent,
    DatePickerExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    XyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
