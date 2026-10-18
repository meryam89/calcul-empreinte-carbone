import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carbon-footprint-form.html',
  styleUrl: './carbon-footprint-form.css',
})
export class CarbonFootprintForm {
  distanceKm = 0;
  consommationPour100Km = 0;

  @Output() voyageAjoute = new EventEmitter<{
    distanceKm: number;
    consommationPour100Km: number;
  }>();

  ajouterVoyage(): void {
    if (this.distanceKm <= 0 || this.consommationPour100Km <= 0) {
      return;
    }

    this.voyageAjoute.emit({
      distanceKm: this.distanceKm,
      consommationPour100Km: this.consommationPour100Km,
    });

    this.distanceKm = 0;
    this.consommationPour100Km = 0;
  }
}
