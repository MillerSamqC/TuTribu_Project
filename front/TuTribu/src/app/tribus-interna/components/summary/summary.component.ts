import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;

  constructor() {
    //
  }

  ngOnInit(): void {
    //
  }

}
