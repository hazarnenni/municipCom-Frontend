import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinefilesComponent } from './onlinefiles.component';

describe('OnlinefilesComponent', () => {
  let component: OnlinefilesComponent;
  let fixture: ComponentFixture<OnlinefilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinefilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlinefilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
