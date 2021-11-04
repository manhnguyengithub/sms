import { Component, OnInit } from '@angular/core';
import { GetMobileOperatingSystemService } from '../getMobileSystem.service'
@Component({
    selector: 'app-vpb-cc',
    templateUrl: './vpb-cc.component.html',
    styleUrls: ['./vpb-cc.component.scss']
  })
  export class VpbCcComponent implements OnInit {
    device = '';
    constructor(
        private getSystemService: GetMobileOperatingSystemService
    ) { }

    ngOnInit(): void {
        this.device = this.getSystemService.getMobileOperatingSystem();
        
        if (this.device === 'iphone') {
            window.open('sms:9698&body=TVP', '_self');
            return;
        }
        if (this.device === 'android') {
            window.open('sms:9698?body=TVP', '_self');
            return;
        }
    }
}
