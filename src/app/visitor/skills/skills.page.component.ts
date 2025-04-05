import { Component } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './skills.page.component.html',
  styleUrl: './skills.page.component.scss'
})
export class SkillsPageComponent {
  softSkills = [
    {
      emoji: '🔥',
      title: 'Détermination',
      description: 'Quand j’ai un objectif, je mets tout en œuvre pour l’atteindre.'
    },
    {
      emoji: '🕵️',
      title: 'Attentive & à l’écoute',
      description: 'Comprendre les attentes, s’adapter et affiner son travail est essentiel.'
    },
    {
      emoji: '🎭',
      title: 'Créative & Passionnée',
      description: 'J’aime explorer, imaginer et créer des projets qui marquent les esprits.'
    },
    {
      emoji: '🏋️‍♂️',
      title: 'Persévérante',
      description: 'Je suis prêt à surmonter les défis pour progresser chaque jour.'
    }
  ];

  softwares = [
    { emoji: '🎥', name: 'Premiere Pro' },
    { emoji: '🎞️', name: 'DaVinci Resolve' },
    { emoji: '📷', name: 'Photoshop' },
    { emoji: '🎼', name: 'Audacity' }
  ];
}
