import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { AboutPageComponent } from './visitor/about/about.page.component';
import { PortfolioPageComponent } from './visitor/portfolio/portfolio.page.component';
import { SkillsPageComponent } from './visitor/skills/skills.page.component';
import { ContactPageComponent } from './visitor/contact/contact.page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Céline Pirot'
    },
    {
        path: 'about',
        component: AboutPageComponent,
        title: 'Céline Pirot - A propos'
    },
    {
        path: 'portfolio',
        component: PortfolioPageComponent,
        title: 'Céline Pirot - Portfolio'
    },
    {
        path: 'skills',
        component: SkillsPageComponent,
        title: 'Céline Pirot - Compétences'
    },
    {
        path: 'contact',
        component: ContactPageComponent,
        title: 'Céline Pirot - Contact'
    },
];
