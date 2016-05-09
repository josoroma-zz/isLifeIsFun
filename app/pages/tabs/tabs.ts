import {Page} from 'ionic-angular';

import {Home} from '../home/home';

import {Numbers} from '../numbers/numbers';
import {Alphabet} from '../alphabet/alphabet';
import {Words} from '../words/words';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pagesshould be each tab's root Page
  tabHome: any = Home;

  tabNumbers: any = Numbers;
  tabAlphabet: any = Alphabet;
  tabWords: any = Words;
}
