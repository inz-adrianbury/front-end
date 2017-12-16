import {DynamicFormControlModel, DynamicInputModel} from '@ng-dynamic-forms/core';
import {elementCapabilityForm} from './element-capability.form';

export function tailstockForm(): DynamicFormControlModel[] {
  return elementCapabilityForm().concat([
    new DynamicInputModel({
      id: 'spindle_name',
      label: 'Spindle Name'
    }),
    new DynamicInputModel({
      id: 'taper',
      label: 'Taper'
    }),
    new DynamicInputModel({
      id: 'maximum_workpiece_weight_of_quill',
      label: 'Maximum workpiece weight of quill'
    }),

  ]);
}
