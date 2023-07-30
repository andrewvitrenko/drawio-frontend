import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title = new FormControl('', [Validators.required]);

  save() {
    if (!this.title.valid) {
      return;
    }

    console.log('title', this.title.value);
  }
}
