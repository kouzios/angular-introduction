import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    /*
      This will not work in a real app. You're getting
      away with it now because the service currently returns 
      mock heroes. But soon the app will fetch heroes from a
      remote server, which is an inherently asynchronous operation.
    */
  }

  onSelect(hero: Hero): void {
    if(this.selectedHero == hero) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  }

}
