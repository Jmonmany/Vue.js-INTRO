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

const quotes = [
  {
    quote:
      "The night is darkest just before the dawn. And I promise you, the dawn is coming.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "I believe what doesn’t kill you simply makes you, stranger.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote:
      "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me",
    author: "Henri Ducard, Batman Begins",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "Harvey Dent, The Dark Knight",
  },
  {
    quote: "If you’re good at something, never do it for free.",
    author: "The Joker, The Dark Knight",
  },
  {
    quote: "Yes, father. I shall become a bat.",
    author: "Bruce Wayne/Batman, Batman: Year One",
  },
];

const app2 = Vue.createApp({
  data() {
    return {
      message: "Batman quotes",
      quotes, // this is the same as quotes: quotes, and works because,
      // the key and the value have the same name
    };
  },
});
app2.mount('#myApp2')