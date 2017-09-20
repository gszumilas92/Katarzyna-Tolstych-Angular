import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesTableComponent } from './prizes-table.component';

describe('PrizesTableComponent', () => {
  let component: PrizesTableComponent;
  let fixture: ComponentFixture<PrizesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
