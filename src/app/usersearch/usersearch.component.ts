import { Component, OnInit } from '@angular/core';
import { Profile2Service } from 'src/app/profile2.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {

  users:any[]
  profileInfo:any[]
  username: string
  repos: any[]
  BarChart=[];

  constructor(private profileservice:Profile2Service) { }

  ngOnInit() {
  }

  getUser(){
    this.profileInfo = null;
    this.profileservice.findProfile(this.username);
    this.profileservice.getProfileInfo().subscribe(profile => {
    console.log(profile);
    this.users = profile;
    
  });

}
getUserInfo(){

  this.users = null;  
  this.profileservice.findProfile(this.username);
  this.profileservice.getProfileInfo().subscribe(profile => {
  console.log(profile);
  this.profileInfo = profile;
  
});
this.profileservice.getProfileRepos().subscribe(repos => {
  console.log(repos);
  this.repos = repos; 
});



this.profileservice.getProfileInfo().subscribe(profile => {
  let followers = profile.followers;
  let following = profile.following;
  let gists = profile.public_gists;

this.BarChart = new Chart('barchart', {
  type: 'bar',
  data: {
    labels: ["Followers", "Following", "Gists"],
    datasets: [{
      label:[],
      data: [followers, following, gists],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        
        'rgba(255, 206, 86, 0.2)',
        
        
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255,99,132,1)',
        
        'rgba(255, 206, 86, 1)',
        
        
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
    }]
  }
})
})


}

}