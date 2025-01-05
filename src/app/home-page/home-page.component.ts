import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  show :boolean;
  constructor() {
    this.show = false;
  }

showBar(){
  this.show = !this.show;
}
studetItems : any = {};

ngOnInit(){
  this.studetItems=[
    {
      icon:"fas fa-user-alt",
      title:"MY Classmates"
    },
    {
      icon:"fa fa-pencil-square-o ",
      title:"Notice Board"
    },
    {
      icon:"fas fa-bullhorn",
      title:"Class Annocement"
    },
    {
      icon:"fas fa-hourglass",
      title:"My Progress"
    },
    {
      icon:"fas fa-pencil",
      title:"My Assignments"
    } ,   
    {
      icon:"fas fa-person",
      title:"My Projects"
    } ,   
    {
      icon:"fas fa-question",
      title:"Quiz"
    } ,  
    {
      // icon:"fas fa-pho",
      title:"MAIN MENU"
    } , 
    {
      icon:"fas fa-phone",
      title:"Helaps"
    } ,   
    
    {
      icon:"far fa-list-alt",
      title:"Setting"
    } ,
    {
      icon:"fas fa-user-shield",
      title:"Security"
    } ,   
          

  ]
}
}
