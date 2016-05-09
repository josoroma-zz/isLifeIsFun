import { Page, NavController, NavParams } from 'ionic-angular';

import { Inject, OnInit } from 'angular2/core';

import { Rest } from '../../providers/rest/rest';

/*
 * Alphabet Page
 */
@Page({
    templateUrl: 'build/pages/alphabet/alphabet.html',
    providers: [Rest]
})
export class Alphabet {
    /*
     * Properties
     */
    items: Array<any> = [];
    selectedItem: any = null;

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
        this.get('alphabet');
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

    // class Alphabet
}
