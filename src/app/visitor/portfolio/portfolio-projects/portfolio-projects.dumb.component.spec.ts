import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectsDumbComponent } from './portfolio-projects.dumb.component';

describe('PortfolioProjectsDumbComponent', () => {
  let component: PortfolioProjectsDumbComponent;
  let fixture: ComponentFixture<PortfolioProjectsDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectsDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
