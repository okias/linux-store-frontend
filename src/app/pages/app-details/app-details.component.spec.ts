import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsComponent } from './app-details.component';

describe('AppDetailsComponent', () => {
  let component: AppDetailsComponent;
  let fixture: ComponentFixture<AppDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
