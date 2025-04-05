import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutDumbComponent } from './home-about.dumb.component';

describe('HomeAboutDumbComponent', () => {
  let component: HomeAboutDumbComponent;
  let fixture: ComponentFixture<HomeAboutDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
