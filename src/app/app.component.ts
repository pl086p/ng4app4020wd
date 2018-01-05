// Import
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// component decorator
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css']
})

// Component class
export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;

    constructor(private router: Router) {
        this.routeLinks = [
            { label: 'Bike',          link: './tabBike', index: 1 },
            { label: 'Parent-Child',  link: './tabParentChild',  index: 2 },
            { label: 'UI',            link: './tabUI', index: 3 }, 
            { label: 'ng2-mqtt',      link: './tabNg2mqtt',index: 4 },  
            { label: 'Srv-Boat',      link: './tabBoat', index: 5 },  
            { label: 'Srv-Empployee', link: './tabEmployee',index: 6 },            
            { label: 'Srv-Customer',  link: './tabCustomer',index: 7 },                 
        ];
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}
