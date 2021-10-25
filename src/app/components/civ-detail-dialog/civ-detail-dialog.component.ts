import { Component, Inject, OnInit } from '@angular/core';
import { Unit } from 'src/app/shared/models/unit.model';

@Component({
  selector: 'app-civ-detail-dialog',
  templateUrl: './civ-detail-dialog.component.html',
  styleUrls: ['./civ-detail-dialog.component.css']
})
export class CivDetailDialogComponent implements OnInit {
  units: Unit[]= [];
  constructor() { }

  ngOnInit(): void {
  }

}
