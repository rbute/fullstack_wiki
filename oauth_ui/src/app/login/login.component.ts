import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


    public selValue : string;

    constructor(private route: ActivatedRoute) {
        this.selValue = '';
    }

    ngOnInit(): void {
        // document.
    }

    selected(value: any):void{
        console.log(value);
    }

    doLogin(event: any) : void{
        // console.log(event);
        console.log("Value=>"+this.selValue);
    }
}
