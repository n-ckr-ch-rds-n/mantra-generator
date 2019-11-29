import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-mantra',
  templateUrl: './create-mantra.component.html',
  styleUrls: ['./create-mantra.component.scss']
})
export class CreateMantraComponent {
  intention: string;

  constructor(public dialogRef: MatDialogRef<CreateMantraComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
