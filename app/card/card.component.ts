import { Component, ɵɵngDeclareClassMetadata } from '@angular/core';
import { dataa } from 'src/assets/dataa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

collection = dataa;

}
