---
title: Implement your own JS Arrays
tags: javascript,fundamentals
slug: implement-your-own-js-arrays
date: 2022-03-02T17:06:06.048Z
summary: Ever wondered how JavaScript Arrays might work under the hood? In this
  blog post we will implement Arrays from scratch and also we will will see how
  you can create your own filter, push , pop functionality.
---


> Ever wondered how JavaScript Arrays might work under the hood?

In this blog post we will implement Arrays from scratch and also we will will see how you can create your own **filter**, **push** , **pop** functionality.

Before we move further let's see what should our final result should look like.

```javascript
const myArray = new MyArray(10,20,33,45,50);
console.log(myArray); //MyArray {0: 10, 1: 20, 2: 33, 3: 45, 4: 50, length: 5}
const odd = myArray.filter((item) => item%2 !== 0);
console.log(odd); //MyArray {2: 33, 3: 45, length: 2}
myArray.push(15);
console.log(myArray); //MyArray {0: 10, 1: 20, 2: 33, 3: 45, 4: 50, 5: 15 length: 5}
const elementRemoved = myArray.pop();
console.log(elementRemoved); //15
```

We wish to implement our own array - **MyArray** and attach your implementation of array methods, such as **filter**, **push** and **pop**.

You might already be aware that Arrays are basically objects under the hood with 0-indexed keys.
Let's implement a class **MyArray** as follows:

```javascript
class MyArray {
    // receive array elements as arguments to this constructor as below.
    constructor(...items) {
	    // items now contains array of arguments passed to it.
	    // attach properties to this class using this.
	    // here we attach length property so that all instances of MyArray can access it to get the length of the areray. 
	    this.length = 0;
	    for(let key in items) {
		    this[key] = items[key];
		    this.length ++;
		}
	}
}
const arr1 = new MyArray();
console.log(arr1) //MyArray {length: 0}
const myArray = new MyArray(10,20,33,45,50);
console.log(myArray); //MyArray {0: 10, 1: 20, 2: 33, 3: 45, 4: 50, length: 5}
```

Now that out class is ready, we now need to attach methods to it. We can use **prototype** that comes with all objects and attach methods to it. In this way properties under prototypes will be shared with all instances of objects.