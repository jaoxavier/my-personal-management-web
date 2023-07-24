import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFinishComponent } from './confirm-finish.component';

describe('ConfirmFinishComponent', () => {
  let component: ConfirmFinishComponent;
  let fixture: ComponentFixture<ConfirmFinishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmFinishComponent]
    });
    fixture = TestBed.createComponent(ConfirmFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
