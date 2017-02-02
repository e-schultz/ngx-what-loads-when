import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SimpleModule } from './simple.module';
import { AModuleWithProviders } from './a-module-with-providers.module';

export function appInitilizer() {
  console.log('App Initilizer Called', arguments);
  return function () {
    console.log('App Initilizer Run');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Promise Resoloving');
        resolve('done');
      }, 1000);
    });
  };
}
export function boostrapListenerFactory() {
  console.log('Bootstrap Listener Registered', arguments);
  return function () {
    console.log('Bootstrap Listner Run', arguments);
  };
}

export function boostrapListenerFactoryTwo() {
  console.log('BootstrapTwo Listener Registered', arguments);
  return function () {
    console.log('BootstrapTwo Listner Run', arguments);
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleModule,
    AModuleWithProviders.forRoot()
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: appInitilizer,
    deps: [Injector]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: boostrapListenerFactory
  },
  {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: boostrapListenerFactoryTwo
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(`AppModule.ctor called`);
  }
}
