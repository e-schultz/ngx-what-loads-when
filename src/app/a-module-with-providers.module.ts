import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';
import { SimpleService } from './simple.service';
import { AnotherService } from './another.service';


@NgModule({
  providers: [SimpleService]
})
export class AModuleWithProviders {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AModuleWithProviders,
      providers: [AnotherService]
    };

  }

  constructor(ss: SimpleService) {
    console.log(`AModuleWithProviders.ctor called`);
    ss.someMethod();
  }

};

