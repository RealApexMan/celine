import { Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from "./home-banner/home-banner.dumb.component";
import { HomepageFeatureCardListDumbComponent } from "./homepage-feature-card-list/homepage-feature-card-list.dumb.component";
import { HomeAboutDumbComponent } from "./home-about/home-about.dumb.component";

@Component({
  imports: [HomeBannerDumbComponent, HomepageFeatureCardListDumbComponent, HomeAboutDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {

  featureCardList = signal([
    {
      name: 'Déterminée & Passionnée',
      icon: 'bullseye',
      description: 'Deux ans de persévérance pour intégrer mon BTS et 4h de trajet par jour pour réaliser mon rêve.',
    },
    {
      name: "Spécialiste de l’audiovisuel",
      icon: 'camera-reels-fill',
      description: 'Pratique la prise de vue, lumière et son, avec une approche technique et artistique.',
    },
    {
      name: 'Attentive & Créative',
      icon: 'palette-fill',
      description: "À l’écoute des besoins, je cherche toujours à créer des images et des sons qui transmettent une émotion.",
    },
  ]);

  onBannerClicked(){
    console.log('Button clicked')
  }

}
