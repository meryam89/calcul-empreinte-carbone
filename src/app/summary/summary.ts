import { Component } from '@angular/core';
import {CarbonFootprint} from "../components/carbon-footprint/carbon-footprint";


@Component({
  selector: 'app-summary',
  imports: [CarbonFootprint],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {}
