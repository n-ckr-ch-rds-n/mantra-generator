import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMantraComponent } from './create-mantra.component';

describe('CreateMantraComponent', () => {
  let component: CreateMantraComponent;
  let fixture: ComponentFixture<CreateMantraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMantraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMantraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
