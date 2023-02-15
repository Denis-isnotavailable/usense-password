import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckZoneComponent } from './check-zone.component';

describe('CheckZoneComponent', () => {
  let component: CheckZoneComponent;
  let fixture: ComponentFixture<CheckZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
