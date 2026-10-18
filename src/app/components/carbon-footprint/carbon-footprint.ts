import { Component } from '@angular/core';
import { CarbonFootprintForm } from '../carbon-footprint-form/carbon-footprint-form';
import { CarbonFootprintResult } from '../carbon-footprint-result/carbon-footprint-result';
import { CommonModule } from '@angular/common';
import { CarbonFootprintCompute } from '../../services/carbon-footprint-compute';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [CommonModule, CarbonFootprintForm, CarbonFootprintResult],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.css',
})
export class CarbonFootprint {
  constructor(private carbonService: CarbonFootprintCompute) {}
  voyages: any[] = [];

  distanceKm = 0;
  consommationPour100Km = 0;
  quantiteCO2Totale = 0;
  consommationTotaleLitres = 0;

  ngOnInit() {
    this.voyages = this.carbonService.getVoyages();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;

    this.consommationPour100Km = resume.consommationPour100Km;

    this.quantiteCO2Totale = resume.quantiteCO2Totale;

    this.consommationTotaleLitres = resume.consommationTotaleLitres;
  }
  ngOnDestroy() {
    console.log('Le composant a été détruit.');
  }
  ngAfterContentInit() {
    console.log('Le contenu du composant a été initialisé.');
  }
  ngAfterContentChecked() {
    console.log('Le contenu du composant est vérifié.');
  }
  ngAfterViewInit() {
    console.log('La vue du composant a été initialisée.');
  }
  ngAfterViewChecked() {
    console.log('La vue du composant a été vérifiée.');
  }

  ajouter100Km(): void {
    console.log('Le bouton +100 km a été cliqué');
    if (this.voyages.length === 0) {
      return;
    }

    const voyage = this.voyages[0];

    voyage.distanceKm += 100;

    voyage.quantiteCO2 = ((voyage.distanceKm * voyage.consommationPour100Km) / 100) * 2.3;

    this.carbonService.sauvegarderVoyages();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }

  genererVoyage(): void {
    const distance = Math.floor(Math.random() * 1000) + 1;
    const consommation = Math.floor(Math.random() * 10) + 1;

    this.carbonService.addVoyage({
      distanceKm: distance,
      consommationPour100Km: consommation,
    });

    this.voyages = this.carbonService.getVoyages();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }
  ajouterVoyageDepuisFormulaire(voyage: {
    distanceKm: number;
    consommationPour100Km: number;
  }): void {
    this.carbonService.addVoyage(voyage);

    this.voyages = this.carbonService.getVoyages();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }
  reinitialiserVoyages(): void {
    const confirmation = window.confirm('Voulez-vous vraiment supprimer tous les voyages ?');

    if (!confirmation) {
      return;
    }

    this.carbonService.reinitialiserVoyages();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.consommationTotaleLitres = resume.consommationTotaleLitres;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }
  restaurerVoyagesDemo(): void {
    this.carbonService.restaurerVoyagesDemo();

    const resume = this.carbonService.getResumeVoyages();

    this.distanceKm = resume.distanceKm;
    this.consommationPour100Km = resume.consommationPour100Km;
    this.consommationTotaleLitres = resume.consommationTotaleLitres;
    this.quantiteCO2Totale = resume.quantiteCO2Totale;
  }
}
