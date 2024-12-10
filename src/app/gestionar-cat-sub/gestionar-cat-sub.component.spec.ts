import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarCatSubComponent } from './gestionar-cat-sub.component';

describe('GestionarCatSubComponent', () => {
  let component: GestionarCatSubComponent;
  let fixture: ComponentFixture<GestionarCatSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarCatSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarCatSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
