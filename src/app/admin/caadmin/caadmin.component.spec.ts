import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaadminComponent } from './caadmin.component';

describe('CaadminComponent', () => {
  let component: CaadminComponent;
  let fixture: ComponentFixture<CaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
