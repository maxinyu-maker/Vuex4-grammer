//创建容器 返回一个store

const storeDefault = 'store'

class Store {
    constructor(options) {
        //Vuex 3 内部创造一个vue实例 ， 但是 Vuex4 直接采用vue3提供的响应式方法
        const store = this;
        store._state = reactive({ data: options.state }) //方便改值和replaceState的调用
    }

    install(app, injectKey) { //createApp().use(store,'my')
        app.provide(injectKey || storeDefault, this); //全局暴露一个变量，暴露的是store的实例
        app.config.globalProperties.$store = this; //$store属性
    }
}
export function createStore(options) {
    return new Store(options)
}

export function useStore(injectKey = null) {
    return inject(injectKey !== null ? injectKey : storeDefault)
}