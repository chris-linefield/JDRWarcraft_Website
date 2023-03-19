import { Component } from '@angular/core';

export interface Spell {
  id: number;
  name: string;
  category: string;
  image: string;
  title: string;
  class: string;
  level: number;
  manaCost: number;
  description: string;
  range: string;
  castTime: string;
  duration: string;
}

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrls: ['./sorts.component.css']
})
export class SortsComponent {
  spells: Spell[] = [
    {
      id: 1,
      name: 'Repentir',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/repentir.jpg',
      title: 'Repentir',
      class: 'Paladin',
      level: 1,
      manaCost: 1,
      description: 'Vous forcez la cible ennemie à plonger dans une transe méditative qui la stupéfie pendant 1 tour. Fonctionne contre les humanoïdes, les démons, les morts-vivants, les draconiens et les géants.',
      range: '6 cases',
      castTime: 'N/A',
      duration: '1 tour'
    },
    {
      id: 2,
      name: 'Bouclier saint',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/bouclier_saint.jpg',
      title: 'Bouclier saint',
      class: 'Paladin',
      level: 2,
      manaCost: 3,
      description: "Une barrière de lumière sacrée protège la créature jusqu'au début de votre prochain tour, la créature gagne pendant 1/4 tours, un bouclier équivalent à 1d4 qui correspond aux dégâts absorbés. Le sort augmente en fonction de votre prise de niveau (Ex: Niv.2 => 2D4) Le sort ne vous protège pas contre les sources naturelles de dégâts, comme la lave en fusion ou les chutes.",
      range: '6 cases',
      castTime: 'N/A',
      duration: '1 tour'
    },
    {
      id: 3,
      name: 'Prisme sacré',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/prisme_sacre.jpg',
      title: 'Prisme sacré',
      class: 'Paladin',
      level: 2,
      manaCost: 3,
      description: "Un rayon de lumière jaillit de vous vers une créature à portée et se disperse à l'impact, touchant trois créatures supplémentaires de votre choix à moins de 2 cases de la cible. Chaque créature gagne l'un des effets suivants de votre choix. Offensif : La créature doit réussir un jet de sauvegarde de Dextérité, subissant 2d4 dégâts rayonnants en cas d'échec, ou la moitié en cas de réussite. Guérison : La créature regagne un nombre de points de vie égal à 1d4 + Mod. de Classe.",
      range: '6 cases',
      castTime: 'N/A',
      duration: '1 tour'
    },
    // Ajouter les autres sorts ici
  ];
  filteredSpells = [...this.spells];

  onSearch(event: any) {
    const searchText = event.target.value.toLowerCase();
    const searchClass = event.target.value.toLowerCase();
    this.filteredSpells = this.spells.filter((spell) => {
      return spell.name.toLowerCase().includes(searchText) || spell.title.toLowerCase().includes(searchText) || spell.class.toLowerCase().includes(searchClass);
    });
  }
}
