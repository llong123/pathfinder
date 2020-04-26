import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSearchComponent } from './graph-search.component';

describe('GraphSearchComponent', () => {
  let component: GraphSearchComponent;
  let fixture: ComponentFixture<GraphSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
