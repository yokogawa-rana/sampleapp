import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ExampleComponent} from "./example/example.component";
import {TreeExampleComponent} from "./tree-example/tree-example.component";
import {HomeComponent} from "./home/home.component";
import {ButtonExampleComponent} from "./button-example/button-example.component";
import {SlideToggleExampleComponent} from "./slide-toggle-example/slide-toggle-example.component";
import {CheckboxExampleComponent} from "./checkbox-example/checkbox-example.component";
import {RadioExampleComponent} from "./radio-example/radio-example.component";
import {ContainerExampleComponent} from "./container-example/container-example.component";
import {InputExampleComponent} from "./input-example/input-example.component";
import {SelectExampleComponent} from "./select-example/select-example.component";
import {TypographyExampleComponent} from "./typography-example/typography-example.component";
import {CardExampleComponent} from "./card-example/card-example.component";
import {ElevationExampleComponent} from "./elevation-example/elevation-example.component";
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {ButtonToggleExampleComponent} from "./button-toggle-example/button-toggle-example.component";
import {TabExampleComponent} from "./tab-example/tab-example.component";
import {MenuExampleComponent} from "./menu-example/menu-example.component";
import {FormExampleComponent} from "./form-example/form-example.component";
import {BreadcrumbExampleComponent} from "./breadcrumb-example/breadcrumb-example.component";
import { Child1ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child1-example/child1-example.component';
import { Child2ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child2-example/child2-example.component';
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { SliderExampleComponent } from './slider-example/slider-example.component';
import { ProgressbarExampleComponent } from './progressbar-example/progressbar-example.component';
import { ProgressSpinnerExampleComponent } from './progress-spinner-example/progress-spinner-example.component';
import { SnackbarExampleComponent } from './snackbar-example/snackbar-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { FooterExampleComponent } from './footer-example/footer-example.component';
import { ExpensionPanelExampleComponent } from './expension-panel-example/expension-panel-example.component';
import { AutocompletExampleComponent } from './autocomplet-example/autocomplet-example.component';
import { ChipsExampleComponent } from './chips-example/chips-example.component';
import { DatePickerExampleComponent } from './date-picker-example/xy-date-picker-example.component';

const routes:Routes = [
  { path: 'inbox', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'invoices', component: HomeComponent },
  { path: 'customers', component: HomeComponent },
  { path: 'chat_room', component: HomeComponent },
  { path: 'calendar', component: HomeComponent },
  { path: 'help_center', component: HomeComponent },
  { path: 'setting', component: HomeComponent },
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: ExampleComponent
      },
      {
        path: 'button',
        component: ButtonExampleComponent
      },
      {
        path: 'button_toggle',
        component: ButtonToggleExampleComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleExampleComponent
      },
      {
        path: 'checkbox',
        component: CheckboxExampleComponent
      },
      {
        path: 'radio',
        component: RadioExampleComponent
      },
      {
        path: 'container',
        component: ContainerExampleComponent
      },
      {
        path: 'input',
        component: InputExampleComponent
      },
      {
        path: 'select',
        component: SelectExampleComponent
      },
      {
        path: 'tab',
        component: TabExampleComponent
      },
      {
        path: 'typography',
        component: TypographyExampleComponent
      },
      {
        path: 'card',
        component: CardExampleComponent
      },
      {
        path: 'dialog',
        component: DialogExampleComponent
      },
      {
        path: 'elevation',
        component: ElevationExampleComponent
      },
      {
        path: 'tree',
        component: TreeExampleComponent
      },
      {
        path: 'menu',
        component: MenuExampleComponent,
        data: { breadcrumb: 'menu'},
      },
      {
        path: 'form',
        component: FormExampleComponent,
        data: { breadcrumb: 'form'},
      },
      {
        path: 'breadcrumb',
        data: { breadcrumb: 'Home'},component:BreadcrumbExampleComponent,
        children:[
          { path:'child1', component:Child1ExampleComponent, data : {breadcrumb:'Library'}, 
          children:[{ path:'child2', component:Child2ExampleComponent, data : {breadcrumb:'Data'}}]}
      ]
      },
      {
        path: 'badge',
        component: BadgeExampleComponent
      },
      {
        path: 'slider',
        component: SliderExampleComponent
      },
      {
        path: 'progressbar',
        component: ProgressbarExampleComponent
      },
      {
        path: 'progress-spinner',
        component: ProgressSpinnerExampleComponent
      },{
        path: 'snackbar',
        component: SnackbarExampleComponent
      },
      {
        path: 'table',
        component: TableExampleComponent
      },
      {
        path: 'stepper',
        component: StepperExampleComponent
      },
      {
        path: 'xytopAppBar',
        component: HeaderExampleComponent
      },
      {
        path: 'tooltip',
        component: TooltipExampleComponent
      },
      {
        path: 'footer',
        component: FooterExampleComponent
      },
      {
        path: 'expention-panel',
        component: ExpensionPanelExampleComponent
      },
      {
        path: 'autocomplete',
        component: AutocompletExampleComponent
      },
      {
        path: 'chips',
        component: ChipsExampleComponent
      },
      {
        path: 'datePicker',
        component: DatePickerExampleComponent
      }
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        paramsInheritanceStrategy: 'always'
      }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
