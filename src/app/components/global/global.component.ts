import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
