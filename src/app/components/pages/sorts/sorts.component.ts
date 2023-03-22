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
      castTime: '1 réaction',
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
      castTime: '1 réaction',
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
      castTime: '1 action',
      duration: '1 tour'
    },
    {
      id: 4,
      name: 'Châtiment vertueux',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/chatiment_vertueux.png',
      title: 'Châtiment vertueux',
      class: 'Paladin',
      level: 2,
      manaCost: 3,
      description: "La prochaine fois que vous touchez avec une arme de mêlée pendant la durée de ce sort, votre attaque inflige 2d6 de dégâts sacrés supplémentaires et le prochain jet d'attaque effectué contre cette cible avant la fin de votre prochain tour a l'avantage. Aux niveaux supérieurs. Lorsque vous lancez ce sort, les dégâts augmentent de 1d6 pour chaque niveau de sort mais augmente également son coût en mana.",
      range: 'Soi-même',
      castTime: '1 action bonus',
      duration: 'Instantané'
    },
    {
      id: 5,
      name: 'Guide de lumière',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/guide_de_lumiere.jpg',
      title: 'Guide de lumière',
      class: 'Paladin',
      level: 3,
      manaCost: 5,
      description: "Vous étendez votre main et placez une marque sacrée sur une créature à portée. Chaque fois que vous rendez des points de vie à une cible avec un sort, la créature marquée regagne un nombre de points de vie égal à votre modificateur de Sagesse. Le sort prend fin si la créature sort de la portée du sort.",
      range: '18 cases',
      castTime: '1 action bonus',
      duration: 'Si la cible sort de la portée du sort'
    },
    {
      id: 6,
      name: 'Lumière aveuglante',
      category: 'Paladin',
      image: 'assets/images/spells/paladin/lumiere_aveuglante.jpg',
      title: 'Lumière aveuglante',
      class: 'Paladin',
      level: 3,
      manaCost: 5,
      description: "Émet dans toutes les directions une lumière éblouissante sur une portée de 14 cases autour de soi qui aveugle les adversaires et les oblige à lancer un jet de Constitution pour effectuer une action. Une créature aveuglée par ce sort peut effectuer un nouveau jet de sauvegarde de Constitution à la fin de chaque tour. Si elle réussit son jet de sauvegarde, elle n'est plus aveuglée.",
      range: '14 cases',
      castTime: '1 action',
      duration: '1 tour/niv'
    },
    {
      id: 7,
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
    {
      id: 8,
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
    {
      id: 9,
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
    {
      id: 10,
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
