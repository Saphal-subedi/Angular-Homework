import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponentComponent } from './add-book-component.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddBookComponentComponent', () => {
  let component: AddBookComponentComponent;
  let fixture: ComponentFixture<AddBookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookComponentComponent,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
