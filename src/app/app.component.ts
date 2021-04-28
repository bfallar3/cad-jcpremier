import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@cad-jcpremier';

  goToktok() {
    window.location.href = "http://www.toktok.ph/delivery/1111534896";
  }

  goMangBoks() {
    window.location.href = "http://www.mangboks.ph/1111534896";
  }

  goBoyBondat() {
    window.location.href = "http://www.boybondat.ph/ordernow/1111534896";
  }

  goSiomaiKing() {
    window.location.href = "http://www.siomaiking.ph/ordernow/1111534896";
  }

  goCoppermask() {
    window.location.href = "http://www.coppermask.ph/cpshop/1111534896";
  }

  goNinjaion() {
    window.location.href = "http://www.ninjaph.com/cpshop/1111534896";
  }
  goShopForMe() {
    window.location.href = "https://toktok.ph/pabiliservice/1111534896";
  }

  goJcShop() {
    window.location.href = "https://jcshop.ph/1111534896";
  }
}
