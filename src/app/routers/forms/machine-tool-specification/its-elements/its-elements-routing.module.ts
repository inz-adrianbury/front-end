import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarFeederComponent} from './bar-feeder/bar-feeder.component';
import {RouterOutletComponent} from '../../shared/components/router-outlet/router-outlet.component';
import {ItsElementsComponent} from './its-elements.component';
import {TailstockComponent} from './tailstock/tailstock.component';
import {ColletComponent} from './collet/collet.component';
import {ChuckComponent} from './chuck/chuck.component';
import {ToolBreakageComponent} from './tool-breakage/tool-breakage.component';
import {PartProbeComponent} from './part-probe/part-probe.component';
import {ToolSettingComponent} from './tool-setting/tool-setting.component';
import {CoolantComponent} from './coolant/coolant.component';
import {MachineToolAxisComponent} from './machine-tool-axis/machine-tool-axis.component';
import {LinearAxisComponent} from './linear-axis/linear-axis.component';
import {ContinuousRotaryComponent} from './continuous-rotary/continuous-rotary.component';
import {IndexingComponent} from './indexing/indexing.component';
import {LimitedSwingComponent} from './limited-swing/limited-swing.component';
import {PalletComponent} from './pallet/pallet.component';
import {CircularWorkTableComponent} from './circular-work-table/circular-work-table.component';
import {RectangularWorkTableComponent} from './rectangular-work-table/rectangular-work-table.component';
import {TurretComponent} from './turret/turret.component';
import {ToolMagazineComponent} from './tool-magazine/tool-magazine.component';
import {ToolChangerComponent} from './tool-changer/tool-changer.component';
import {ToolMagazineContentsComponent} from './tool-magazine/tool-magazine-contents/tool-magazine-contents.component';
import {TurretContentsComponent} from './turret/turret-contents/turret-contents.component';
import {SpindleComponent} from './spindle/spindle.component';
import {SpindleRangeComponent} from './spindle/spindle-range/spindle-range.component';
import {WorkSpindleComponent} from './work-spindle/work-spindle.component';
import {WorkSpindleRangeComponent} from './work-spindle/work-spindle-range/work-spindle-range.component';
import {TaperedSpindleRangeComponent} from './tapered-spindle/tapered-spindle-range/tapered-spindle-range.component';
import {StraightSpindleComponent} from './straight-spindle/straight-spindle.component';
import {TaperedSpindleComponent} from './tapered-spindle/tapered-spindle.component';
import {ThreadedSpindleComponent} from './threaded-spindle/threaded-spindle.component';
import {ThreadedSpindleRangeComponent} from './threaded-spindle/threaded-spindle-range/threaded-spindle-range.component';
import {StraightSpindleRangeComponent} from './straight-spindle/straight-spindle-range/straight-spindle-range.component';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        component: ItsElementsComponent
      },
      {
        path: ':machineToolElementId',
        component: RouterOutletComponent,
        children: [
          {
            path: 'bar-feeders',
            component: BarFeederComponent,
            data: {
              breadcrumb: 'Bar Feeders'
            }
          },
          {
            path: 'tailstocks',
            component: TailstockComponent,
            data: {
              breadcrumb: 'Tailstocks'
            }
          },
          {
            path: 'collets',
            component: ColletComponent,
            data: {
              breadcrumb: 'Collets'
            }
          },
          {
            path: 'chucks',
            component: ChuckComponent,
            data: {
              breadcrumb: 'Chucks'
            }
          },
          {
            path: 'tool-breakages',
            component: ToolBreakageComponent,
            data: {
              breadcrumb: 'Tool breakages'
            }
          },
          {
            path: 'part-probes',
            component: PartProbeComponent,
            data: {
              breadcrumb: 'Part probes'
            }
          },
          {
            path: 'tool-settings',
            component: ToolSettingComponent,
            data: {
              breadcrumb: 'Tool settings'
            }
          },
          {
            path: 'collants',
            component: CoolantComponent,
            data: {
              breadcrumb: 'Coolants'
            }
          },
          {
            path: 'machine-tool-axis',
            component: MachineToolAxisComponent,
            data: {
              breadcrumb: 'Machine tool axis'
            }
          },
          {
            path: 'linear-axis',
            component: LinearAxisComponent,
            data: {
              breadcrumb: 'Linear axis'
            }
          },
          {
            path: 'continuous-rotary',
            component: ContinuousRotaryComponent,
            data: {
              breadcrumb: 'Continuous rotary'
            }
          },
          {
            path: 'indexing',
            component: IndexingComponent,
            data: {
              breadcrumb: 'Indexing'
            }
          },
          {
            path: 'limited-swing',
            component: LimitedSwingComponent,
            data: {
              breadcrumb: 'Limited swing'
            }
          },
          {
            path: 'rectangularWorkTables',
            component: PalletComponent,
            data: {
              breadcrumb: 'Pallet'
            }
          },
          {
            path: 'circular-work-table',
            component: CircularWorkTableComponent,
            data: {
              breadcrumb: 'Circular work table'
            }
          },
          {
            path: 'tool-changer',
            component: ToolChangerComponent,
            data: {
              breadcrumb: 'Tool changer'
            }
          },
          {
            path: 'rectangular-work-table',
            component: RectangularWorkTableComponent,
            data: {
              breadcrumb: 'Rectangular work table'
            }
          },
          {
            path: 'turret',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Turret'
            },
            children: [
              {
                path: '',
                component: TurretComponent
              },
              {
                path: ':turretId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'turret-contents',
                    component: TurretContentsComponent,
                    data: {
                      breadcrumb: 'Turret contents'
                    }
                  }
                ]
              }
            ]
          }, {
            path: 'tool-magazine',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Tool magazine'
            },
            children: [
              {
                path: '',
                component: ToolMagazineComponent
              },
              {
                path: ':toolMagazineId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'tool-magazine-contents',
                    component: ToolMagazineContentsComponent,
                    data: {
                      breadcrumb: 'Tool magazine contents'
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'spindle',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Spindle'
            },
            children: [
              {
                path: '',
                component: SpindleComponent
              },
              {
                path: ':spindleId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'range',
                    component: SpindleRangeComponent,
                    data: {
                      breadcrumb: 'Spindle range'
                    }
                  }
                ]
              }
            ]
          },

          {
            path: 'work-spindle',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Work spindle'
            },
            children: [
              {
                path: '',
                component: WorkSpindleComponent
              },
              {
                path: ':spindleId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'range',
                    component: WorkSpindleRangeComponent,
                    data: {
                      breadcrumb: 'Spindle range'
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'tapered-spindle',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Tapered spindle'
            },
            children: [
              {
                path: '',
                component: TaperedSpindleComponent
              },
              {
                path: ':spindleId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'range',
                    component: TaperedSpindleRangeComponent,
                    data: {
                      breadcrumb: 'Spindle range'
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'straight-spindle',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Straight spindle'
            },
            children: [
              {
                path: '',
                component: StraightSpindleComponent
              },
              {
                path: ':spindleId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'range',
                    component: StraightSpindleRangeComponent,
                    data: {
                      breadcrumb: 'Spindle range'
                    }
                  }
                ]
              }
            ]
          },
          {
            path: 'threaded-spindle',
            component: RouterOutletComponent,
            data: {
              breadcrumb: 'Threaded spindle'
            },
            children: [
              {
                path: '',
                component: ThreadedSpindleComponent
              },
              {
                path: ':spindleId',
                component: RouterOutletComponent,
                children: [
                  {
                    path: 'range',
                    component: ThreadedSpindleRangeComponent,
                    data: {
                      breadcrumb: 'Spindle range'
                    }
                  }
                ]
              }
            ]
          },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItsElementsRoutingModule {
}
