import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingscreen',
  templateUrl: './loadingscreen.component.html',
  styleUrls: ['./loadingscreen.component.css']
})
export class LoadingscreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    var getLoadData = JSON.parse(localStorage.getItem('loadData'));
    setTimeout(function() {
      window.location.pathname=getLoadData;
      localStorage.clear();
  }, 2000);

    }
  }
