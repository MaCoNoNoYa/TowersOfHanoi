import { Component } from '@angular/core';
import { Coin } from './coin';
let counter: number = 0;
let origNum: number = 0;
let delay: number = 0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coins: Coin[] = [];
  title = 'towers-of-hanoi';

  startRecursion(n: number, s_pole: number, d_pole: number, i_pole: number) {
    origNum = n;
    this.coins = [];
    // switchBlock(3, 2, this.coins);
    for (let i = 0; i < n; i++) {
      let tempCoin: Coin = {
        id: i + 1,
        width: (18 / n) * (n - i),
        height: 50 / n,
        block: 1,
      };
      this.coins.push(tempCoin);
    }
    this.defaultSim(n, s_pole, d_pole, i_pole);
    console.log(this.coins);
  }

  isNumber(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  async defaultSim(n: number, s_pole: number, d_pole: number, i_pole: number) {
    if (n == 1) {
      await new Promise((f) => setTimeout(f, delay));

      //Unsauber, da Funktion nicht im Export sein sollte, wurde aus Faulheit ignoriert ¯\_(ツ)_/¯
      this.coins = await switchBlock(n, d_pole, this.coins);
      return;
    }
    await this.defaultSim(n - 1, s_pole, i_pole, d_pole); // wait for the recursive call to complete
    await new Promise((f) => setTimeout(f, delay));
    this.coins = await switchBlock(n, d_pole, this.coins); // wait for switchBlock to complete
    // print("Move disc",n,"from pole",s_pole,"to pole",d_pole)
    await new Promise((f) => setTimeout(f, delay));
    await this.defaultSim(n - 1, i_pole, d_pole, s_pole); // wait for the recursive call to complete
  }
}
function switchBlock(id: number, newBlock: number, coinsArray: Coin[]): Coin[] {
  const pos = coinsArray.map((e) => e.id).indexOf(origNum - id + 1);
  let tempCoin: Coin = coinsArray[pos];
  let newPos: number = 0;
  coinsArray.splice(pos, 1);
  switch (newBlock) {
    case 1:
      let count1 = coinsArray.filter((coin) => {
        if (coin.block === 1) {
          return true;
        }
        return false;
      }).length;
      newPos = count1;
      break;
    case 2:
      let count2 = coinsArray.filter((coin) => {
        if (coin.block === 1 || coin.block === 2) {
          return true;
        }
        return false;
      }).length;
      newPos = count2;
      break;
    case 3:
      newPos = coinsArray.length;
      break;
  }
  tempCoin.block = newBlock;
  coinsArray.splice(newPos, 0, tempCoin);
  return coinsArray;
}
