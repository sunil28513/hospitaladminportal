import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappointComponent } from './createappoint.component';

describe('CreateappointComponent', () => {
  let component: CreateappointComponent;
  let fixture: ComponentFixture<CreateappointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateappointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
