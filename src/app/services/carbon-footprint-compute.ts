import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarbonFootprintCompute {
  voyages = [
    {
      distanceKm: 50,
      consommationPour100Km: 5,
      quantiteCO2: ((50 * 5) / 100) * 2.3,
    },
    {
      distanceKm: 150,
      consommationPour100Km: 6,
      quantiteCO2: ((150 * 6) / 100) * 2.3,
    },
    {
      distanceKm: 250,
      consommationPour100Km: 7,
      quantiteCO2: ((250 * 7) / 100) * 2.3,
    },
  ];
  constructor() {
    const voyagesSauvegardes = localStorage.getItem('voyages');

    if (voyagesSauvegardes) {
      this.voyages = JSON.parse(voyagesSauvegardes);
    }
  }
  getVoyages() {
    return this.voyages;
  }
  sauvegarderVoyages(): void {
    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }
  reinitialiserVoyages(): void {
    this.voyages.length = 0;
    this.sauvegarderVoyages();
  }
  restaurerVoyagesDemo(): void {
    this.voyages.length = 0;

    this.addVoyage({
      distanceKm: 50,
      consommationPour100Km: 5,
    });

    this.addVoyage({
      distanceKm: 150,
      consommationPour100Km: 6,
    });

    this.addVoyage({
      distanceKm: 250,
      consommationPour100Km: 7,
    });
  }

  addVoyage(voyage: any) {
    voyage.quantiteCO2 = ((voyage.distanceKm * voyage.consommationPour100Km) / 100) * 2.3;

    this.voyages.push(voyage);

    localStorage.setItem('voyages', JSON.stringify(this.voyages));
  }
  getResumeVoyages() {
    let distanceKm = 0;
    let consommationTotaleLitres = 0;
    let quantiteCO2Totale = 0;

    this.voyages.forEach((voyage) => {
      distanceKm += voyage.distanceKm;

      consommationTotaleLitres += (voyage.distanceKm * voyage.consommationPour100Km) / 100;

      quantiteCO2Totale += voyage.quantiteCO2;
    });

    const consommationPour100Km =
      distanceKm > 0 ? (consommationTotaleLitres / distanceKm) * 100 : 0;

    return {
      distanceKm,
      consommationPour100Km,
      consommationTotaleLitres,
      quantiteCO2Totale,
    };
  }
}
