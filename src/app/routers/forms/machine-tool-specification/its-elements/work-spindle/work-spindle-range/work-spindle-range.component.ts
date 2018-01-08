import {Component, OnInit} from '@angular/core';
import {SpindleRange} from '../../../../shared/models/spindle-range.model';
import {ActivatedRoute} from '@angular/router';
import {MachineToolSpecificationFormService} from '../../../shared/services';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'inz-work-spindle-range',
  templateUrl: './work-spindle-range.component.html',
  styleUrls: ['./work-spindle-range.component.sass']
})
export class WorkSpindleRangeComponent implements OnInit {
  spindleRangeForm: FormArray;
  generator = SpindleRange.getFormControls;
  private machineToolElementId: number;
  private spindleId: number;

  constructor(private machineToolSpecificationFormService: MachineToolSpecificationFormService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.parent.parent.params.subscribe(params => {

      this.machineToolElementId = +params['machineToolElementId'];

      this.activatedRoute.parent.params.subscribe(pppparams => {
        this.spindleId = +pppparams['spindleId'];
        this.spindleRangeForm = this.machineToolSpecificationFormService.getWorkSpindleRange(this.machineToolElementId, this.spindleId);
      });

    });
  }
}