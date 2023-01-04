import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosAddComponent } from './autos-add.component';

describe('AutosAddComponent', () => {
  let component: AutosAddComponent;
  let fixture: ComponentFixture<AutosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
