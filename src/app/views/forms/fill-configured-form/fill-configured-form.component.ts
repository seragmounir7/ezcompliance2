import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-configured-form',
  templateUrl: './fill-configured-form.component.html',
  styleUrls: ['./fill-configured-form.component.scss']
})
export class FillConfiguredFormComponent implements OnInit {
  displayedColumns = [
    'index',
    'formName',
    'edit',
  ]
  selectValue: number;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.selectValue = this.activatedRoute.snapshot.params.index

  }

}
