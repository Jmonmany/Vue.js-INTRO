console.log(Vue)
const app = Vue.createApp({
  template: `
        <h1>Hello World</h1>
        <p>From app.js</p>

        <h2>Declaratory representation</h2>
        <p>Vue renders the resolution of JavaScript code inside the double brackets {"{}"} with some limitations.</p>
        
        <h3>the following paragraph solves the sum of 1 +1 and prints:</h3>
        <p> {{ 1 + 1 }} </p>

        <h3>There is also no problem resolving ternaries such as { true ? 'HELLO' : 'BYE' }.</h3>
        <p>{{true ? 'HELLO' : 'BYE'}}</p>

        <h3>But will not solve the resolution of If statements like { if(true) return 'Activ' }</h3>
    `,
});
// Mount the app to the DOM
app.mount('#myApp')