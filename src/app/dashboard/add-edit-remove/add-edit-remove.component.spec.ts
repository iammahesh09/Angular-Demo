import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRemoveComponent } from './add-edit-remove.component';

describe('AddEditRemoveComponent', () => {
  let component: AddEditRemoveComponent;
  let fixture: ComponentFixture<AddEditRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
