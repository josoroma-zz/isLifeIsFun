import { Page, NavController, NavParams } from 'ionic-angular';

import { Inject, OnInit } from 'angular2/core';

import { Rest } from '../../providers/rest/rest';

/*
 * Numbers Page
 */
@Page({
    templateUrl: 'build/pages/numbers/numbers.html',
    providers: [Rest]
})
export class Numbers {
    /*
     * Properties
     */
    public items: Array<any> = [];
    public selectedItem: any = null;

    /*
     * Constructor
     */
    constructor(
        public nav: NavController,
        public navParams:NavParams,
        @Inject(Rest) private rest: Rest
    ) {
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.get('numbers');
    }

    /*
     * Get
     */
    get(req: string = '') {
        this.rest.get(req)
            .subscribe(
                res => this.items = res.data
            );
    }

    /*
     * Speak
     */
    speak(text: string = '') {
        responsiveVoice.speak(text);
    }

    // class Numbers
}
