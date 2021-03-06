import {MachineTool} from './machine-tool.model';
import {MachineClass} from '../types/machine-class.type';
import {DeviceId} from './device-id.model';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MachiningCapability} from './machining-capability.model';
import {MachineToolElement} from './machine-tool-element.model';
import {Installation} from './installation.model';
import {Location} from './location.model';
import {EnvironmentalEvaluation} from './environmental-evaluation.model';
import {MeasuringCapability} from './measuring-capability.model';


export class MachineToolSpecification extends MachineTool {
  machine_class: MachineClass = null;
  device_id: DeviceId = new DeviceId();
  machining_capabilities: MachiningCapability[] = [];
  measuring_capability: MeasuringCapability = new MeasuringCapability();
  environmental_evaluation: EnvironmentalEvaluation = new EnvironmentalEvaluation();
  location: Location = new Location();
  installation: Installation = new Installation();
  its_elements: MachineToolElement[] = [];

  constructor(machineToolSpecification?) {
    super(machineToolSpecification);
    Object.assign(this, machineToolSpecification);
  }


  public static getFormControls(loadModel?): { [key: string]: AbstractControl } {
    if (!loadModel) {
      loadModel = new MachineToolSpecification();
    }

    const formControls = Object.assign(MachineTool.getFormControls(loadModel), {
      machine_class: new FormControl(loadModel.machine_class, Validators.required),
      device_id: new FormGroup(DeviceId.getFormControls(loadModel.device_id)),
      machining_capabilities: new FormArray([]),
      measuring_capability: new FormGroup(MeasuringCapability.getFormControls(loadModel.measuring_capability)),
      environmental_evaluation: new FormGroup(EnvironmentalEvaluation.getFormControls(loadModel.environmental_evaluation)),
      location: new FormGroup(Location.getFormControls(loadModel.location)),
      installation: new FormGroup(Installation.getFormControls(loadModel.installation)),
      its_elements: new FormArray([]),
    });

    loadModel.machining_capabilities.forEach(mc => {
      formControls.machining_capabilities.push(new FormGroup(
        MachiningCapability.getFormControls(mc)
      ));
    });
    loadModel.its_elements.forEach(itsElement => {
      formControls.its_elements.push(new FormGroup(
        MachineToolElement.getFormControls(itsElement)
      ));
    });

    return formControls;
  }
}
