import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostsService } from '../../services/posts.service';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  taskDetails: any = {};

  selectedDocumentValue: string;
  selectedDocumentIndex: number = 0;

  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postsService: PostsService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      const postId = +params.id;

      if (postId) {
        console.log('post id' + postId);
        this.getPostDetails(params.id);
      } else {
        console.log('new post');
        this.getEmptyForm();
      }
    });
  }

  savePostDetails() {
    this.router.navigate(['/posts']);
  }

  getPostDetails(postId) {
    this.postsService.getPostDetailsByPostId(postId).subscribe(
      (postDetails) => {
        this.selectedDocumentIndex = 0;
        this.selectedDocumentValue = postDetails.documents[0].documentValue;
        this.taskDetails = postDetails;
        this.createTaskForm(this.taskDetails);
        console.log(this.taskForm);
      }
    );
  }

  getEmptyForm() {
    this.postsService.getEmptyForm().subscribe(
      (emptyFormDetails) => {
        this.selectedDocumentIndex = 0;
        this.selectedDocumentValue = emptyFormDetails.documents[0].documentValue;
        this.taskDetails = emptyFormDetails;
        this.createTaskForm(this.taskDetails);
      }
    );
  }

  selectDocumentSection(documentForm, docIndex) {
    this.selectedDocumentIndex = docIndex + 1;
    this.selectedDocumentValue = documentForm.get('documentValue').value;
  }

  changeDocumentByIndex() {
    this.selectedDocumentValue = this.taskDetails.documents[this.selectedDocumentIndex + 1].documentValue;
    this.selectedDocumentIndex = this.selectedDocumentIndex + 1;
  }

  submitPostDetails() {
    this.router.navigate(['/posts']);
  }

  createTaskForm(taskData) {
    this.taskForm = this.formBuilder.group({
      documents: this.createDocumentForm(taskData.documents)
    });
  }

  createDocumentForm(documents): FormArray {
    let documentForm: FormArray = this.formBuilder.array([]);

    if (documents) {
      documents.forEach(document => {
        documentForm.push(
          this.formBuilder.group({
            sections: this.createSectionForm(document.sections),
            documentName: document.documentName,
            documentValue: document.documentValue,
            isDocument: document.isDocument
          })
        );
      });
    }

    return documentForm;
  }

  createSectionForm(sections): FormArray {
    let sectionForm: FormArray = this.formBuilder.array([]);

    if (sections) {
      sections.forEach(section => {
        sectionForm.push(
          this.formBuilder.group({
            isSection: section.isSection,
            header: section.header,
            sectionName: section.sectionName,
            sectionValue: section.sectionValue,
            valueType: section.valueType,
            value: section.value,
            options: this.generateOptionsForm(section.options, section.sectionValue)
          })
        );
      });
    }

    return sectionForm;
  }

  generateOptionsForm(options, sectionKey): FormArray {
    let optionForm: FormArray = this.formBuilder.array([]);

    if (options) {
      if (sectionKey !== 'skillset') {
        options.forEach(option => {
          optionForm.push(
            this.formBuilder.group({
              key: option.key,
              value: option.value,
              isSelected: option.isSelected
            })
          );
        });
      } else {
        optionForm = this.formBuilder.array(options || []);
      }
    }

    return optionForm;
  }

}
