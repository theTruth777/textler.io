import {observable, decorate} from "mobx";

class Store {
    characterCount = 0;
    wordsCount = 0;
}

decorate(Store, {
    characterCount: observable,
    wordsCount: observable
});

let store = new Store();
export default store;