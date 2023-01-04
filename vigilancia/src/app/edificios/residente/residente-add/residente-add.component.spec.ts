import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenteAddComponent } from './residente-add.component';

describe('ResidenteAddComponent', () => {
  let component: ResidenteAddComponent;
  let fixture: ComponentFixture<ResidenteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
