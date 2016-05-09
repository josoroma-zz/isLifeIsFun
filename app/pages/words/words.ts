import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the WordsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/words/words.html',
})
export class Words {
    constructor(public nav: NavController) {}

    /*
     * Speak
     */
    speak(text: string = '') {
        responsiveVoice.speak(text);
    }
}
