/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlipImagenComponent } from './flipImagen.component';

describe('FlipImagenComponent', () => {
  let component: FlipImagenComponent;
  let fixture: ComponentFixture<FlipImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
