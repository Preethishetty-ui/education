import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent {
studetItems : any = {};

ngOnInit(){
  this.studetItems=[
    {
      icon:"",
      title:"details",
      path:"/sform",
    },
    {
      icon:"fa fa-pencil-square-o",
      title:'login',
      path:'/login',
    },
    {
      icon:"fa fa-pencil-square-o ",
      title:"Student Detailes",
      path:"/student"
    },
    {
      icon:"fa fa-pencil-square-o ",
      title:"from",
      path:"/from"
    },
    {
      icon:"fas fa-user-alt",
      title:"Attendance",
      path:"/attendance"
    },
    {
      icon:"fa fa-pencil-square-o ",
      title:"Fees",
      path:"/discovery"
    },
    {
      icon:"fas fa-bullhorn",
      title:"Timetable"
    },
    {
      icon:"fas fa-hourglass",
      title:"Announcement"
    },
    {
      icon:"fas fa-pencil",
      title:"My Subject"
    } ,   
    {
      icon:"fas fa-person",
      title:"Galery"
    } ,   
    {
      icon:"fas fa-question",
      title:"Assignments"
    } ,   
    {
      icon:"fas fa-phone",
      title:"Online Exam"
    } ,   
    {
      icon:"far fa-list-alt",
      title:"Event"
    } ,
    {
      icon:"fas fa-user-shield",
      title:"Library"
    } ,   
    {
      icon:"fas fa-user-shield",
      title:"Transport"
    } ,      

  ]
}
// ngOnInit() {
//   this.discoverItems = [{
//     icon : "assessment",
//     title: "i Report Card",
//     path: "/over-all-performance"
//   },
//   {
//     icon : "assignment_turned_in",
//     title: "Attendance",
//     path: "/attendance"
//   },
//   {
//     icon : "payment",
//     title : "Fees",
//     path: "/fees"
//   },
//   {
//     icon : "directions_bus",
//     title : "Transport",
//     path: "/"
//   },
//   {
//     icon : "trending_up",
//     title : "Progress Report",
//     path: "/progress-report"
//   },
//   {
//     icon : "library_books",
//     title : "Library",
//     path: "/"
//   },
//   {
//     icon : "book",
//     title : "Learning",
//     path: "/"
//   },
//   {
//     icon : "message",
//     title : "Messages",
//     path: "/messages"
//   },
//   {
//     icon : "perm_media",
//     title : "Media",
//     path: "/sample"
//   },
//   {
//     icon: "grid_on",
//     title: "Activities",
//     path: "/"
//   },
//   {
//     icon: "person",
//     title: "Ward Details",
//     path: "/ward-details"
//   },
//   {
//     icon: "event_available",
//     title: "Events",
//     path: "/events"
//   }];
  
// }
}
