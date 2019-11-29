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
    [this.letters[indices[0]], this.letters[indices[1]]] = [this.letters[indices[1]], this.letters[indices[0]]];
  }

  getRandomIndex(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
  }

}
