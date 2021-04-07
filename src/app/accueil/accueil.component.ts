import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Objet} from '../modele';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  objetControl = new FormControl();

  discord = {
    class: 'discord-default',
    text: '####'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  afficherDiscord(): void {
    this.discord.text = '8156';
    this.discord.class = '';
  }

  callbackInput(objetRetour: Objet): void {
    this.router.navigate(['/rechercher-objet'], { queryParams: {id: objetRetour.id}});

  }

}
