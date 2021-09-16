import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbboardComponent } from './rbboard.component';

describe('RbboardComponent', () => {
  let component: RbboardComponent;
  let fixture: ComponentFixture<RbboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
