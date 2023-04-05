import { Component } from '@angular/core';
import { Coin } from './coin';
let counter: number = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  startRecursion(n: number, s_pole: string, d_pole: string, i_pole: string) {
    this.coins[0].block = 2;
    console.log(this.coins[0].block);

    // for (let i = 0; i < n; i++) {
    //   let tempCoin: Coin = {
    //     id: i + 1,
    //     width: (18 / n) * i,
    //     heigth: Math.floor(Math.random() * 100),
    //     block: Math.floor(Math.random() * 100),
    //   };
    //   this.coins.push(tempCoin);
    // }
  }
  coins: Coin[] = [
    { id: 5, width: 9, height: 10, block: 1 },
    { id: 5, width: 9, height: 10, block: 1 },
  ];
  title = 'towers-of-hanoi';
  // values: number = 10;
}

function defaultSim(n: number, s_pole: string, d_pole: string, i_pole: string) {
  if (n == 1) {
    console.log('move disc', n, 'from pole', s_pole, 'to pole', d_pole);
    // print("Move disc 1 from pole",s_pole,"to pole",d_pole)
    return;
  }
  defaultSim(n - 1, s_pole, i_pole, d_pole);
  console.log('move disc', n, 'from pole', s_pole, 'to pole', d_pole);
  // print("Move disc",n,"from pole",s_pole,"to pole",d_pole)
  defaultSim(n - 1, i_pole, d_pole, s_pole);
}
