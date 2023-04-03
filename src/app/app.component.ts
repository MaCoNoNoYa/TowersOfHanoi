import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'towers-of-hanoi';
}

function defaultSim(n: number, s_pole: string, d_pole: string, i_pole: string) {
  if (n == 1) {
    // print("Move disc 1 from pole",s_pole,"to pole",d_pole)
    return;
  }

  defaultSim(n - 1, s_pole, i_pole, d_pole);
  // print("Move disc",n,"from pole",s_pole,"to pole",d_pole)
  defaultSim(n - 1, i_pole, d_pole, s_pole);
}
