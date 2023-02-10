import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPassFormComponent } from './email-pass-form.component';

describe('EmailPassFormComponent', () => {
  let component: EmailPassFormComponent;
  let fixture: ComponentFixture<EmailPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
