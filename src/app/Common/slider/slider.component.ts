import { Component } from '@angular/core';
//import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-slider,ngb-carousel',
  templateUrl: './slider.component.html',
 
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
