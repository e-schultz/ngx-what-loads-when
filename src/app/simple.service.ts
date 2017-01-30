import { Injectable } from '@angular/core';
import { AnotherService } from './another.service';

@Injectable()
export class SimpleService {
  constructor(as: AnotherService) {
    console.log('SimpleService.ctor called');
  }

  someMethod() {
    console.log(`SimpleService.someMethod called`);
  }

};
