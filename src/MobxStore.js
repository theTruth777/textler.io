import {observable, decorate} from "mobx";

class Store {
    characterCount = 0;
}

decorate(Store, {
    characterCount: observable,
});

let store = new Store();
export default store;