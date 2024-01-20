import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesesTabComponent } from './cheeses-tab.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('CheesesTabComponent', () => {
  let component: CheesesTabComponent;
  let fixture: ComponentFixture<CheesesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheesesTabComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
