import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirsttwocardDetailsPage } from './firsttwocard-details.page';

describe('FirsttwocardDetailsPage', () => {
  let component: FirsttwocardDetailsPage;
  let fixture: ComponentFixture<FirsttwocardDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttwocardDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirsttwocardDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
