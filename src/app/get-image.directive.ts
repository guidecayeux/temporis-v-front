import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appGetImage]'
})
export class GetImageDirective implements OnChanges  {

  @Input()
  type: string;

  @Input()
  size: string;

  constructor(
    public el: ElementRef
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type){
      let asset = `assets/items/${this.size}/`;
      switch (this.type) {
        case 'Arme':
          asset += 'arme';
          break;
        case 'Amulette':
          asset += 'amulette';
          break;
        case 'Anneau':
          asset += 'anneau';
          break;
        case 'Bottes':
          asset += 'bottes';
          break;
        case 'Bouclier':
          asset += 'bouclier';
          break;
        case 'Cape':
          asset += 'cape';
          break;
        case 'Ceinture':
          asset += 'ceinture';
          break;
        case 'Chapeau':
          asset += 'chapeau';
          break;
        case 'Dofus':
          asset += 'dofus';
          break;
        case 'Sac à dos':
          asset += 'sac-a-dos';
          break;
        case 'Trophée':
          asset += 'trophee';
          break;
        case 'Idole':
          asset += 'idole';
          break;
        case 'Consommable':
          asset += 'consommable';
          break;
        case 'Level Up':
          asset += 'lvl-up';
          break;
        case 'Autre':
          asset += 'autre';
          break;
        default:
          asset += 'autre';
      }
      this.el.nativeElement.src = asset + '.png';
    }
  }
}
