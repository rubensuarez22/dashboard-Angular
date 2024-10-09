import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal, Signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { timer } from 'rxjs';

@Component({
  selector: 'dashboard-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="Change detection"></app-title>
  <pre>{{frameworkAsSignal() | json}}</pre>
  <pre>{{frameworkAsPropery | json}}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public frameworkAsSignal = signal ({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsPropery = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {
      // this.frameworkAsPropery.name = 'React'
      this.frameworkAsSignal.update( value => ({
        ...value,
        name:'React'
      }))
      console.log('hecho');
    }, 3000)

  }
}
