import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeUplComponent } from './fe-upl/fe-upl.component';
import { GtvHrComponent } from './gtv-hr/gtv-hr.component';
import { VpbCcComponent } from './vpb-cc/vpb-cc.component';
import { VpbUplComponent } from './vpb-upl/vpb-upl.component';

const routes: Routes = [
    {
        path: '',
        component: FeUplComponent,
        children: [
            {
                path: 'fe-upl',
                component: FeUplComponent,
            },
            {
                path: 'gtv-hr',
                component: GtvHrComponent,
            },
            {
                path: 'vpb-cc',
                component: VpbCcComponent,
            },
            {
                path: 'vpb-upl',
                component: VpbUplComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
