import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MainPageComponent),
    multi: true
  }]
})
export class MainPageComponent implements ControlValueAccessor, OnInit { 
  
  isHide: boolean = false;
  type: string = 'text';
  private onChange = (value: string) => {};
  private onTouched = () => { };
  private _value!: string;

  set value(value: string) {
    this._value = value;    
  }

  get value(): string {
    return this._value;
  }
  
  constructor() { }

  ngOnInit(): void { }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string) {
    // получить из Forms API
    this.value = outsideValue;
  }

  updateValue(insideValue: string) {
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();
  } 
  
  

  ngDoCheck() {    
    this.updateValue(this.value);

    this.isHide ? this.type = 'password' : this.type = 'text';
  }

  changePasswordView(): void {
    this.isHide = !this.isHide;
  }  

}
