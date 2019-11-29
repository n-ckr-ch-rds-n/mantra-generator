import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input()
  letters: string[];

  constructor() { }

  changeOrder() {
    const indices = [1, 2].map(() => this.getRandomIndex(0, (this.letters.length - 1)));
    this.animateChange(indices);
    // [this.letters[indices[0]], this.letters[indices[1]]] = [this.letters[indices[1]], this.letters[indices[0]]];
  }

  animateChange(indices: number[]) {
    const tiles = indices.map(i => document.querySelector(`#letter-${this.letters[i]}`));
    tiles.forEach((tile, index) => {
      const startPosition = tile.getBoundingClientRect();
      const endPosition = tiles[index === 0 ? 1 : 0].getBoundingClientRect();
      const deltaX = startPosition.left - endPosition.left;
      const deltaY = startPosition.top - endPosition.top;
      tile.animate([
        {
          transformOrigin: 'top left',
          transform: `translate(${deltaX}px, ${deltaY}px)`
        },
        {
          transformOrigin: 'top left',
          transform: 'none'
        }
      ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'both'
      });
    });
  }

  getRandomIndex(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
  }

}
