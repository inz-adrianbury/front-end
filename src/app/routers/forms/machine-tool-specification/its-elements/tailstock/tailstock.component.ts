import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationService} from '../../shared/services/machine-tool-specification/machine-tool-specification.service';
import {Tailstock} from '../../../shared/models/tailstock.model';

@Component({
  selector: 'inz-tailstock',
  templateUrl: './tailstock.component.html',
  styleUrls: ['./tailstock.component.sass']
})
export class TailstockComponent implements OnInit {
  modelFormGroup: FormGroup;
  private activeArrayIndex: number;

  constructor(private activatedRoute: ActivatedRoute,
              private machineToolSpecificationService: MachineToolSpecificationService) {
  }

  get modelForm(): AbstractControl {
    return this.modelFormGroup.controls['tailstocks'];
  }

  get model(): Tailstock[] {
    return this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tailstocks;
  }

  set model(tailstock: Tailstock[]) {
    this.machineToolSpecificationService
      .machine_tool_specification
      .its_elements[this.activeArrayIndex]
      .capabilities
      .tailstocks = tailstock;
  }

  ngOnInit(): void {
    this.activatedRoute
      .parent
      .params
      .subscribe(params => {
        this.activeArrayIndex = params['machineToolElementId'];
        this.modelFormGroup = this.buildForm();
      });
  }

  buildForm(): FormGroup {
    return new FormGroup({
      tailstocks: new FormArray(this.loadForm())
    });
  }

  loadForm(): FormGroup[] {
    return this.model.map(model => {
      return new FormGroup(
        Tailstock.getFormControls(model)
      );
    });
  }

  add() {
    const control = <FormArray>this.modelForm;
    control.push(new FormGroup(Tailstock.getFormControls()));
  }

  remove(index: number) {
    const control = <FormArray>this.modelForm;
    control.removeAt(index);
  }

  saveAll() {
    this.model = this.modelForm.value;
  }

}