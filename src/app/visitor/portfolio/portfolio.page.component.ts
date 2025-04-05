import { Component, computed, signal } from '@angular/core';
import { PortfolioProjectsDumbComponent } from "./portfolio-projects/portfolio-projects.dumb.component";

@Component({
  imports: [PortfolioProjectsDumbComponent],
  templateUrl: './portfolio.page.component.html',
  styleUrl: './portfolio.page.component.scss'
})
export class PortfolioPageComponent {

  projectsList = signal([
    {
      title:'Projet Vidéo 1',
      category: 'video',
      description: 'Description du projet...'
    } ,
    {
      title:'Projet Son 1',
      category: 'son',
      description: 'Description du projet...'
    } ,
    {
      title:'Projet Photo 1',
      category: 'photo',
      description: 'Description du projet...'
    } ,
    {
      title:'Projet Vidéo 2',
      category: 'video',
      description: 'Description du projet...'
    } ,
    {
      title:'Projet Son 2',
      category: 'son',
      description: 'Description du projet...'
    } ,
    {
      title:'Projet photo 2',
      category: 'photo',
      description: 'Description du projet...'
    } ,
  ]);

  selectedCategory = signal<'all' | 'video' | 'son' | 'photo'>('all');

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    return category === 'all' ? this.projectsList() : this.projectsList().filter(p => p.category === category);
  });

  
  selectCategory(category: 'all' | 'video' | 'son' | 'photo') {
    this.selectedCategory.set(category);
  }


}
