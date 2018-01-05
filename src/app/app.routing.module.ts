import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComMessage }   from './products/ng2mqtt/message.component';
import { ComParent }    from './products/parent-child/parent.component';
import { ComBike }      from './products/bike/bike-main.component';

import { ComNguiTab }   from './products/ui/ngui-tab.component';
import { ComBoat }      from './services/boat/boat.component';
import { ComEmployee }  from './services/employee/employee.component';
import { ComCustomer }  from './services/customer/customer.component';


const mainRoutes: Routes = [
    { path: 'tabNg2mqtt',  component: ComMessage },
    { path: 'tabParentChild',   component: ComParent },
    { path: 'tabBike',  component: ComBike },
    { path: 'tabUI', component: ComNguiTab },
  
    { path: 'tabBoat',  component: ComBoat },
    { path: 'tabEmployee', component: ComEmployee },
    { path: 'tabCustomer', component: ComCustomer },
    { path: '',   redirectTo: 'product4', pathMatch: 'full' },
    { path: '**', redirectTo: 'product4', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
