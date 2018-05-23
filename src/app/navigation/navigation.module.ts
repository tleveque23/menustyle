import { NgModule } from '@angular/core';

import { MenuModule, ButtonModule, GrowlModule, DialogModule, DropdownModule } from 'primeng/primeng';

import { NavigationComponent } from './navigation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MenuModule,
    ButtonModule,
    GrowlModule,
    DialogModule,
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent,
  ],
  providers: [
  ]
})
export class NavigationModule {
  constructor() {
    console.debug("Registering NavigationModule...");
    console.debug("Registered NavigationModule.");
  }
}
