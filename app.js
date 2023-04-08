console.log(Vue)
const app = Vue.createApp({
//   template: `
//         <h1>Hello World</h1>
//         <p>From app.js</p>

//         <h2>Declaratory representation</h2>
//         <p>Vue renders the resolution of JavaScript code inside the double brackets {"{}"} with some limitations.</p>
        
//         <h3>the following paragraph solves the sum of 1 +1 and prints:</h3>
//         <p> {{ 1 + 1 }} </p>

//         <h3>There is also no problem resolving ternaries such as { true ? 'HELLO' : 'BYE' }.</h3>
//         <p>{{true ? 'HELLO' : 'BYE'}}</p>

//         <h3>But will not solve the resolution of If statements like { if(true) return 'Activ' }</h3>
//     `,
    data() {
        return {
            message: 'Hello World',
            author: 'Jorge',
            // we can also use this structure to create a variable,
            // and then use it in the template, or in the html document directly
            // but it is not reactive, so it will not be updated in the DOM,
            // and only will work if there is no template method
        }
    }, 
    methods: {
        // methods are reactive, so they will be updated in the DOM
        changeMessage(event){
            console.log('Hello World', event)
            this.message = 'Bye World'
            // this refers to the Vue instance, and will only refresh and change message!
            // if we press the button again, Vue will detect that the message did not change,
            // so it wont refresh the DOM, that is nice!
            this.capitalize()
            // here we call the capitalize method, and it will capitalize the author name
        },
        capitalize(){
            this.author = this.author.toUpperCase()
            // let's say we want to capitalize the author name, after we change the message
        }
    }
    // options API (old): way to create a Vue instance
    // methods: {},
    // watch: {},
    // // composition API (new): way to create a Vue instance with setup()
    // setup(){}
});
// Mount the app to the DOM
app.mount('#myApp')