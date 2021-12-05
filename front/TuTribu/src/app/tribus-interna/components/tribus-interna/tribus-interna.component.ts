import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-tribus-interna',
  templateUrl: './tribus-interna.component.html',
  styleUrls: ['./tribus-interna.component.scss']
})
export class TribusInternaComponent implements OnInit {

  faCaretDown = faCaretDown;

  constructor() { }

  ngOnInit(): void {
  }

}
