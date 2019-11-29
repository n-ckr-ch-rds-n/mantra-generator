import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateMantraComponent} from '../create-mantra/create-mantra.component';
import {LetterObject} from './letter.object';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  letters: LetterObject[];

  constructor(public dialog: MatDialog) { }

  changeOrder() {
    const indices = [1, 2].map(() => this.getRandomInteger(0, (this.letters.length - 1)));
    this.animateChange(indices);
    [this.letters[indices[0]], this.letters[indices[1]]] = [this.letters[indices[1]], this.letters[indices[0]]];
  }

  openDialog() {
    const ref = this.dialog.open(CreateMantraComponent);
    ref.afterClosed().subscribe(result => {
      this.letters = this.setLetters(result);
    });
  }

  setLetters(intention: string) {
    const letterArray = intention.toUpperCase().split('')
      .filter(letter => letter !== ' ');
    return this.deDupe(letterArray)
      .map(letter => this.toLetterObject(letter));
  }

  toLetterObject(letter: string) {
    return {value: letter, color: `hsl(${this.getRandomInteger(0, 359)}, 30%, 70%)`};
  }

  deDupe(letters: string[]) {
    return letters.filter((letter, index) => index === letters.indexOf(letter));
  }

  animateChange(indices: number[]) {
    const tiles = indices.map(i => document.querySelector(`#letter-${this.letters[i].value}`));
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

  getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    if (!this.letters) {
      this.openDialog();
    }
  }

}
