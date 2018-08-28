## Good Resources:
 - [Javascript. The Core.](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/)
 - [Eloquent JavaScript 3rd edition](https://eloquentjavascript.net/)
 - [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### Javascript Core
  - [ ] [Javascript inheritance behind the scene __proto__, [[prototype]] and prototype](https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29)
  - [ ] [Constructor Function](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#constructor)

  ![constructor](http://dmitrysoshnikov.com/wp-content/uploads/constructor-proto-chain.png)

  - [ ] What is Lexical Scope
    - [Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope](https://scotch.io/tutorials/understanding-scope-in-javascript#lexical-scope).
    - [Whenever you see a function within another function, the inner function has access to the scope in the outer function, this is called Lexical Scope or Closure - also referred to as Static Scope.](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/#lexical-scope)
  - [ ] [Closures](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#closures)
  - [ ] [This](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#this-value)
    - [While in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.](https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881)
    - [ES6 Lexical This](https://www.youtube.com/watch?v=lMeiBdt4kuE)
    - [MDN This](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
    - [Understand JavaScript’s “this” With Clarity, and Master It](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
    - [The this keyword’s value has nothing to do with the function itself, how the function is called determines the this value](https://toddmotto.com/understanding-the-this-keyword-in-javascript/)
  - [ ] [Currying]
    - > Named after Haskell Brooks Curry, currying is the process of breaking down a function into a series of functions that each take a single argument.
    - [Currying in JavaScript](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)
    - [Currying in JS](https://hackernoon.com/currying-in-js-d9ddc64f162e)
    - [how does Array.prototype.slice.call() work?](https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work)
  - [ ] [Higher Order Function]
    - > Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
    - [Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html)
  - [ ] [Javascript call() & apply() vs bind()?](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
    - [Difference between call and apply](http://hangar.runway7.net/javascript/difference-call-apply)
    - [Why would you pass 'null' to 'apply' or 'call'?](https://stackoverflow.com/questions/33640079/why-would-you-pass-null-to-apply-or-call)
    - > When using .call() or .apply(), null can be passed when you have no specific value that you want to set the this pointer to and you know that the function you are calling is not expecting this to have any specific value (e.g. it does not use this in its implementation).
  - [ ] [Promises](https://eloquentjavascript.net/11_async.html)
  - [ ] Event Loop
    - [Philip Roberts: What the heck is the event loop anyway?](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
    - [Understanding JS: The Event Loop](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
    - [JavaScript Closures: setTimeout Inside a For Loop](https://wsvincent.com/javascript-closure-settimeout-for-loop/)
  - [ ] Difference between process and thread
    - [Difference between Process and Thread](http://www.differencebetween.info/difference-between-process-and-thread)
  - [ ] Difference between let and var
    - [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
  - [ ] Error handlings in JS
    - [Proper Error Handling in JavaScript](https://scotch.io/tutorials/proper-error-handling-in-javascript)
    - [JavaScript Promises and Error Handling](https://hackernoon.com/promises-and-error-handling-4a11af37cb0e)
    - [Error Propagation in JavaScript with Error Translation Pattern](https://medium.com/front-end-hacking/error-propagation-in-javascript-with-error-translation-pattern-78cf7178fe92)
  - [ ] Browsers
    - [How Browsers Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
      - ![howbrowserswork](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/layers.png)
      - The rendering engine
      > responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
    - [JavaScript and the Browser](https://eloquentjavascript.net/13_browser.html)
        ```
        http://eloquentjavascript.net/13_browser.html
        |      |                      |               |
        protocol       server               path
        ```

  - [ ] Modules
    - [Modules](https://eloquentjavascript.net/10_modules.html)
    - CommonJS
      - [CommonJS](https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG)
  - [ ] [HTTP and Forms](https://eloquentjavascript.net/18_http.html)
    - > Communication must be stateless in nature [...] such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.
  - [ ] [Web APIs]
    - [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
    - [HTTP and Forms](https://eloquentjavascript.net/18_http.html)
  - [ ] Events
    - [Handling Events](https://eloquentjavascript.net/15_event.html)
  - [ ] Async/Await
    - [6 Reasons Why JavaScript’s Async/Await Blows Promises Away](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
  - [ ] Web Worker

  - [ ] Copying Arrays
    - [Copying an array in JavaScript](https://www.briangonzalez.org/post/copying-array-javascript)
    - [Copying array by value in JavaScript](https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript)
   ```javascript
    const names = [ 'Jon', 'Jacob', 'Jeff' ]
    // For references, strings and numbers (and not the actual object), 
    // slice copies object references into the new array. Both the original and new array 
    // refer to the same object. If a referenced object changes, 
    // the changes are visible to both the new and original arrays.
    const copy1 = names.slice()
    const copy2 = [].concat(names)
    const copy3 = Object.values(names)
    const copy4 = [...names]
    const copy5 = Array.of(...names)
    // The JSON.parse(JSON.stringify(myArray)) technique can be used to deep copy literal values (boolean, number, string) 
    // and literal structures (array, object), but not prototype objects.
    const copy6 = JSON.parse(JSON.stringify(names))
    const copy7 = names.map(i => i)
    const copy8 = Object.assign([], names)
  ```
