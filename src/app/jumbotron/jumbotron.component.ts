import {Component} from '@angular/core';

@Component({
  selector:'jumbotron',
  templateUrl:'./jumbotron.component.html'
})

export class JumbotronComponent{
  private welcomeText:string;
  constructor(){
    this.welcomeText = "Hello, world!";
  };
}
