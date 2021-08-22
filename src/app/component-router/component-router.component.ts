import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-component-router',
  templateUrl: './component-router.component.html',
  styleUrls: ['./component-router.component.css']
})
export class ComponentRouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
