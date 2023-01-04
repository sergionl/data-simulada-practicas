import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosEditComponent } from './autos-edit.component';

describe('AutosEditComponent', () => {
  let component: AutosEditComponent;
  let fixture: ComponentFixture<AutosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
