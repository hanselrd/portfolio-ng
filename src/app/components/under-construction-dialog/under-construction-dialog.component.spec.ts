import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionDialogComponent } from './under-construction-dialog.component';

describe('UnderConstructionDialogComponent', () => {
  let component: UnderConstructionDialogComponent;
  let fixture: ComponentFixture<UnderConstructionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
