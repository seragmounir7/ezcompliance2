import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-site-inspection-topic',
  templateUrl: './add-site-inspection-topic.component.html',
  styleUrls: ['./add-site-inspection-topic.component.scss'],
})
export class AddSiteInspectionTopicComponent implements OnInit {
  siteInspectionTopicAdd: FormGroup;
  categoryId: any;
  constructor(
    private fb: FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params.id;
    this.siteInspectionTopicAdd = this.fb.group({
      arrObj: this.fb.array([]),
    });
    this.addTopic();
  }
  addTopic() {
    this.topicArr().push(this.topicForm());
  }
  topicArr(): FormArray {
    return this.siteInspectionTopicAdd.get('arrObj') as FormArray;
  }
  topicForm(): FormGroup {
    return this.fb.group({
      categoryId: [this.categoryId, Validators.required],
      action: ['', Validators.required],
      item: ['', Validators.required],
      topic: ['', Validators.required],
    });
  }
  removeTopic(i) {
    const item = <FormArray>this.siteInspectionTopicAdd.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    }
  }
  onSubmit() {
    console.log(this.siteInspectionTopicAdd.value);

    this.logicalFormInfoService
      .addMultipleSiteInspectionTopic(this.siteInspectionTopicAdd.value)
      .subscribe(
        (res) => {
          console.log('addCustomerForm=>', res);
          //this.dialogRef.close('ok')
          this.router.navigate([
            '/admin/siteInfo/siteinspectiontopic/' + this.categoryId,
          ]);
        },
        (err) => {
          console.error(err);
        }
      );
  }
}
