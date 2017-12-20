import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Chuck} from '../../../shared/models/chuck.model';
import {Collet} from '../../../shared/models/collet.model';

@Component({
  selector: 'inz-collet',
  templateUrl: './collet.component.html',
  styleUrls: ['./collet.component.sass']
})
export class ColletComponent implements OnInit {
  formModelGroup: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.formModelGroup.controls['arrayModel'];
  }

  get model(): Collet[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .collets;
  }

  set model(collet: Collet[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .collets = collet;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.formModelGroup = this.buildForm();
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      arrayModel: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    console.log(this.model);
    return this.model.map(model => {
      return new FormGroup(
        Collet.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(Collet.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }


}
