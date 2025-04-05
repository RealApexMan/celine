import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-about',
  imports: [RouterLink],
  templateUrl: './home-about.dumb.component.html',
  styleUrl: './home-about.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeAboutDumbComponent {

}
