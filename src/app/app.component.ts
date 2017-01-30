import {
  Component,
  OnChanges,
  OnInit,

  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {
  title = 'app works!';

  constructor() {
    console.log(`AppComponent.ctor called`);
  }
  ngOnInit() {
    console.log('AppComponent.ngOnInit called');
  }

  ngOnChanges() {
    console.log('AppComponent.ngOnChanges called');
  }

  ngAfterViewInit() {
    console.log('AppComponent.ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('AppComponent.ngAfterViewChecked called');
  }

  ngAfterContentChecked() {
    console.log('AppComponent.ngAfterContentChecked called');
  }
}
