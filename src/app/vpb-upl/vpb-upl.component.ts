import { Component, OnInit } from '@angular/core';
import { GetMobileOperatingSystemService } from '../getMobileSystem.service'
@Component({
    selector: 'app-vpb-upl',
    templateUrl: './vpb-upl.component.html',
    styleUrls: ['./vpb-upl.component.scss']
  })
  export class VpbUplComponent implements OnInit {
    device = '';
    constructor(
        private getSystemService: GetMobileOperatingSystemService
    ) { }

    ngOnInit(): void {
        this.device = this.getSystemService.getMobileOperatingSystem();
        
        if (this.device === 'iphone') {
            window.open('sms:9698&body=VVP', '_self');
            return;
        }
        if (this.device === 'android') {
            window.open('sms:9698?body=VVP', '_self');
            return;
        }
    }
}
