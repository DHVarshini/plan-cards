import { Component, Input } from '@angular/core';
interface FeatureItems{
  name: String,
  isEnabled? : boolean
}

interface PlanDetail{
  plan: string;
  price: number;
  features: Array<FeatureItems>
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Features:FeatureItems|undefined;
  @Input() planObj: PlanDetail | undefined;           
}