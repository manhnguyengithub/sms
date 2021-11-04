import { Component, OnInit } from '@angular/core';
import { GetMobileOperatingSystemService } from '../getMobileSystem.service'

@Component({
    selector: 'app-fe-upl',
    templateUrl: './fe-upl.component.html',
    styleUrls: ['./fe-upl.component.scss']
})
export class FeUplComponent implements OnInit {
    device = '';
    constructor(
        private getSystemService: GetMobileOperatingSystemService
    ) { }

    ngOnInit(): void {
        this.device = this.getSystemService.getMobileOperatingSystem();
        
        if (this.device === 'iphone') {
            window.open('sms:9396&body=V', '_self');
            return;
        }
        if (this.device === 'android') {
            window.open('sms:9396?body=V', '_self');
            return;
        }
    }


}
