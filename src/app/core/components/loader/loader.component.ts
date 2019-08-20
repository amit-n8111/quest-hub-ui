import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { LoaderService } from './../../services/loader.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
    private loaderService: LoaderService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loaderService.loader$.subscribe(isShow => {
      if (isShow) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }

}
