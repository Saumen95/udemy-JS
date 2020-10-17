**Notes on promises**

## Where Used:

Asynchronus operations,Error handling. A promise can be:

1. fulfilled - The action relating to the promise succeeded
2. rejected - The action relating to the promise failed
3. pending - Hasn't fulfilled or rejected yet
4. settled - Has fulfilled or rejected

### Code Example
 
```
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
The promise constructor takes one argument, a callback with two parameters, resolve and reject.

then() takes two arguments, a callback for a success case, and another for the failure case.

## Chaining

We can chain thens together to transform values or run additional async actions one after another.

```
var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})
```
## Queuing

We can also chain thens to run async actions in sequence.1st then's value is called by next then.
```
getJSON('story.json').then(function(story) {
  return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
  console.log("Got chapter 1!", chapter1);
})
```
Here we make an async request to story.json, which gives us a set of URLs to request, then we request the first of those. This is when promises really start to stand out from simple callback patterns.

## Error Handling

```
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.log("Failed!", error);
})
```
We can Use catch to catch the error.
```
get('story.json').then(function(response) {
  console.log("Success!", response);
}).catch(function(error) {
  console.log("Failed!", error);
})
```
Catch is just then(undefined, func) thing.

## Exception & Promise

Rejections happen when a promise is explicitly rejected, but also implicitly if an error is thrown in the constructor callback
```
var jsonPromise = new Promise(function(resolve, reject) {
  // JSON.parse throws an error if you feed it some
  // invalid JSON, so this implicitly rejects:
  resolve(JSON.parse("This ain't JSON"));
});

jsonPromise.then(function(data) {
  // This never happens:
  console.log("It worked!", data);
}).catch(function(err) {
  // Instead, this happens:
  console.log("It failed!", err);
})
```
This means it's useful to do all your promise-related work inside the promise constructor callback, so errors are automatically caught and become rejections.