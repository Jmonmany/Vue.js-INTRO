console.log(Vue)
const app = Vue.createApp({
    template: `
        <h1>Hello World</h1>
        <p>From app.js</p>
    `
})
// Mount the app to the DOM
app.mount('#myApp')