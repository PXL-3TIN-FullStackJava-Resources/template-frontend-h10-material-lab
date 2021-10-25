import { Component, Input, OnInit } from '@angular/core';
import { Structure } from 'src/app/shared/models/structure.model';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {
  @Input() structure!: Structure;
  constructor() { }

  ngOnInit(): void {
  }

}
