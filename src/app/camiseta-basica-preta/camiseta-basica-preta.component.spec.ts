import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetaBasicaPretaComponent } from './camiseta-basica-preta.component';

describe('CamisetaBasicaPretaComponent', () => {
  let component: CamisetaBasicaPretaComponent;
  let fixture: ComponentFixture<CamisetaBasicaPretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetaBasicaPretaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetaBasicaPretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
