import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { ProjectsList } from './portfolio-projects.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-portfolio-projects',
  imports: [TitleCasePipe],
  templateUrl: './portfolio-projects.dumb.component.html',
  styleUrl: './portfolio-projects.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioProjectsDumbComponent {
  readonly projectsList = input.required<ProjectsList>();

    // Tableau de catégories
    readonly categories = signal<('all' | 'video' | 'son' | 'photo')[]>(['all', 'video', 'son', 'photo']);

    selectedCategory = signal<'all' | 'video' | 'son' | 'photo'>('all');
  
    filteredProjects = () => 
      this.projectsList().filter(project => 
        this.selectedCategory() === 'all' || project.category === this.selectedCategory()
      );
  
    selectCategory(category: 'all' | 'video' | 'son' | 'photo') {
      this.selectedCategory.set(category);
    }
  

}
