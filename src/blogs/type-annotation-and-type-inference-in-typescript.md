---
title: Type Annotation and Type Inference in TypeScript
tags: typescript,fundamentals
slug: type-annotation-and-type-inference
date: 2022-03-03T14:09:11.402Z
summary: In this blog post we will go over an important concept in Typescript --
  Type annotation and Type inference.
---


> Typescript is a **typed** programming language and is a superset of JavaScript which you already know is **dynamically typed** programming language.

In this blog post we will go over an important concept in Typescript -- **Type annotation** and **Type inference**.

These are the two ways that TypeScript uses to attach a type to a specific variable.

## Type Annotation

Type annotation explicitly tells TypeScript compiler what type of data a variable can store.

TypeScript uses the syntax **: type** after an identifier as the type annotation, where **type** can be any valid type (primitive or non-primitive).

Once an identifier is annotated with a specific type, it can be used as that type only. Any attempt to assign a different value type will through compilation error.

### Type annotations in variables and constants

```typescript
let variableName: type;
let variableName: type = value;
const constName: type = value;
```

In this syntax the type annotation comes after the variable or constant name, and is preceded by a **:**.

The following example uses *number* annotation.

```typescript
let counter: number
```

After this, you can only assign number type to the counter variable.
If you assign a string or any other type to counter variable, it will throw an error at compile time.

```typescript
let counter: number;
counter = "Hello" // compile error
```

You can also assign a value at the time of declaration in a single statement as follow:

```typescript
let counter: number = 1;
```

Following are some other examples of primitive type annotations:

```typescript
let name: string = 'John';
let age: number = 25;
let active: boolean = true;
```

### Type annotations examples

* Array type

   

  ```typescript
  let arrayName: type[];
  ```

For example, the following declares array of strings.

```typescript
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
```

* Objects

To specify a type for an object, you use the object type annotation. For example:

```typescript
let person: {
    name: string;
    age: number
};
person = {
	   name: 'John',
       age: 25
}; // valid
```

In this example, the `person` object only accepts an object that has two properties: `name` with the `string` type and `age` with the `number` type.

* Function arguments and return type

The following shows a function annotation with parameter type annotation and return type annotation:

```typescript
let greeting : (name: string) => string;
```

In this example, you can assign any function that accepts a string and returns a string to the `greeting` variable:

```typescript
greeting = function (name: string) { 
	    return  `Hi ${name}`; 
 };
```

The following causes an error because the function that is assigned to the `greeting` variable doesn’t match with its function Type.

```typescript
greeting = function () {
    console.log('Hello');
};
```

};

Error:

```typescript
Type '() => void' is not assignable to type '(name: string) => string'. Type 'void' is not assignable to type 'string'.
```

## Type inference

Type inference is where the TypeScript compiler the type a variable will have instead of we explicitly assigning the type to the variable.

For example:
If we assign a number to counter variable, the TypeScript compiler will treat the counter variable with number type through out the program and any attempt to assign another type to counter variable will result in error.

```typescript
let counter = 0;
```

The above statement is equivalent to the following statement:

```typescript
let counter: number = 0;
```

If an identifier is not initialized neither with type annotation nor type inference, the variable will have **any** type.

So, when do you use type inference and type annotations?

In practice, you should always use the type inference as much as possible. And you use the type annotation in the following cases:

* When you declare a variable and assign it a value later.
* When you want a variable that can’t be inferred.
* When a function returns the  any  type and you need to clarify the value.