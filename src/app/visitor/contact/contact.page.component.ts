import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  templateUrl: './contact.page.component.html',
  styleUrl: './contact.page.component.scss'
})
export class ContactPageComponent {
  readonly name = signal('');
  readonly email = signal('');
  readonly message = signal('');

  onSubmit() {
    console.log('Form Submitted')
  }
}
