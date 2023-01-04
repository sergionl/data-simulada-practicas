import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasAddComponent } from './tarjetas-add.component';

describe('TarjetasAddComponent', () => {
  let component: TarjetasAddComponent;
  let fixture: ComponentFixture<TarjetasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
