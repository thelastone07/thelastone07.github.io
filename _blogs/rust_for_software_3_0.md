---
title: "Rust Basics for Software 3.0 Developers"
date: 2025-10-01
categories : ['rust', 'backend']    
layout: post
excerpt : 'The bare minimum Rust knowledge you require if you are working with AI editors'
---

Recently, I have had the necessity to work with Rust. So, I scoured through some internet resources and read about Rust, programmed in Rust for 2 days and now I feel comfortable to go in with a tortoise's pace for writing Rust but understanding the code is a whole different game. I shall discuss my notes of what I had taken during my learning. Hope this helps. 

With the advent of [Software 3.0](https://www.youtube.com/watch?v=LCEmiRjPEtQ), my approach to build products with code has changed. I believe in coming up with an algorithm to solve a mini-problem in your product and iterating the solution with current best practices and making a copilot write it and review the code. If your approach aligns somewhat with mine, my notes will be sufficient.


## Memory Management
The first thing that I noticed about Rust that it is very stingy about its memory, as it should be. It demands to free up memory of variables that has run out of scope. For multi-threaded processes, Rust has features to prevent race conditions at run-time. This makes Rust powerful when handling multi-processing code.

Every program has two types of memory associated with it.

### Stack Memory
This kind of memory works as a stack of plate does. Last in, first out. Fixed size variables rest here. Pointers to the non-fixed size variables also stay here. 

### Heap Memory

Any complex variables (like string, Box) can have variable size. Unlike real life where you can scooch in a plate in between, Rust is not that forgivable. Your data structure rests in heap and its address pointer in stack. 

## Ownerhsip


### Pointers

Before jumping into what this brand new term Ownership is, it is imperative to have some pointer knowledges. If you are familiar with C, then you must have come across terms like pointers, memory and references and it must have been hell. Watch this [video](https://www.youtube.com/watch?v=2ybLD6_2gKM) by Low Level if you are completely unfamiliar with pointers. 

My interpretation of pointers is very simple and I find them very logical. Imagine what happens when you copy a value from one variable to other. If it is an integer, float, double, boolean, all is good, you copy the bits from the one address to another. Just 8 bytes of data. What happens when you have to copy 120 bytes of data ? Copying the whole data is just inefficient and your RAM is limited. Pointer solves this problem by passing the address (8 bytes or 4 bytes depending on system configuration).

### Variable types and ownership

Consider data being some sort of secret. The one who was assigned in the beginning is the owner of the data. Once the owner dies (goes out of scope), the memory (and the value) is freed. Variables in stack memory is dropped automatically. Variables in heap memory has to implement a drop implemenation. Modern version of Rusts implements this for most of the inbuilt complex types. Incase, you are building a custom type, make sure to implement drop.

### Moving and borrowing
This is one of the most fundamental concepts in Rust. It deals with moving/borrowing values from one variable to other. 

Stack variables (the smaller ones, the memory cheap ones) when assigned to another variable or passed as a parameter, copies their value to a new address scope. Heap variables (the costly ones, the memory eaters) when assinged to another variable or passed as a parameter, gets the ownership of the variable. The previous holder of ownerhsip is dropped and can't use the value anymore. 

When you own some object, you can lend it to some other person. This concept is called borrowing and also exitst in Rust. When you borrow something in real life, I hope you make sure how the object is being used. Similarly, you have to define how the borrowed object will be used in Rust.

Borrowing avoids moving of the data for complex variable. When you lend data, you have to ensure whether they are being changed or not. Therefore, borrowed variable are either mutable or immutable. There can be multiple immutable variables and just one mutable variable. Both can't exist at same time. This rule comes into picture to avoid race conditions where two different processes try to edit the same value. There are certain tools that can be used to deal with mutability in multiple processes which I'll be talking about later. 

### Lifetimes

Lifetimes are used in Rust to ensure that the owner of the borrowed variables don't go out of scope while the variable is still in use. It is a very practical use case. Similar to how banks need to collateral when you take loan, Rust function, struct, etc takes ```<`a>``` in the parameter to define lifetimes. More on the syntax later. 

## Some Data Structures

Most of the following variables are wrappers
```rust
let a = 0u32; //declares a variable of value 0 with a type u32
let b = Box<0u32>; // Box<> is a wrapper with some special properties
let c = Cell<10u32>; // another wrapper with different properties 
```

Depending on your use case, you can evolve your primitive or complex variable to have some special properties.

(insert pokemon evolve gif) 

### Box 
- Returns a pointer to a heap memory
- Implements drop automatically
- You can have primitive data in heap memory  

### Arc
- allows shared ownership between multiple threads/processes
- more expensive than <Rc> because of atomic operations that it supports
- <Rc> passes reference, <Arc> has ownership
```rust
let a = Arc::new(5); // create
let b = Arc::clone(&a); // copy
*a += 1; // throws error
```
### Mutex
- Mutal Exclusion Lock
- enables to handle thread safe data properly
- often paired with Arc
```rust
let a = Mutex::new(5);
{
    let mut num = a.lock().unwrap() // acquire the lock
    *num += 1; // modifies safely
    // a.lock() is a Option/Result object (more on this later)
}
print("{:?}",a); // 6
```
```rust

let counter = Arc::new(Mutex::new(5));
let fake_counter = Arc::clone(&counter); // Arc lets you have multiple owner
{
    let mut num1 = fake_counter.lock().unwrap();
    *num1 += 1;
    let mut num2 = counter.lock().unwrap(); // creates deadlock
    *num2 += 2;
}
print("{:?}",counter);
```
The second case creates a deadlock because I am trying to access the lock in the same process. The process will release the Mutex gaurd once the process finishes but I am waiting to get the lock to finish the process. Hence, the deadlock. Therefore, Mutex is generally used in different threads.

### Enums
- used for state managment
- each filed in Enums can carry further information
- used with matches and if-lets (more on this later)
```rust
enum Direction {
    Up,
    Down {x : i32, y : i32},
    Left,
    Right,
}
```
### Options and Results
- Options and Result are Enums
- Option has 2 fields : Some(T) and None
- Result also has 2 fields : Ok(T) and Err(E) : String
- They are often used to handle requests or return values from a function 

## Some good to know syntax

### <>
- generic type parameter
- trait bounds <T: someFn>(x : &T); tells Rust thta T implements someFn
- lifetime declaration
```rust
//Generic type parameter
struct Point<T> {
    x : T,
    y : T,
}

fn print_value<T : std::fmt::Debug> (val:T) {
    println!("{:?}",val); // :? tells rust to use Debug trait NOT Display trait
}

// Trait declaration

trait Summary<T> {
    fn summary(&self, item : T) -> String;
}

struct Article {
    title : String,
}

impl Summary<&str> for Article {
    fn summary(&self, item : &str) -> String {
        format!("{}:{}", self.title, item)
    }
}

let article1 = Article {title : String::from{"Hello World"}};
println!({}, art.summary("DJ")); //prints Hello World:DJ

//Liftime example

fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {s1} else {s2}
}
```
For the last example of lifetime, the declaration tells Rust that the returned reference will exist in the memory as long as the parameters. This is an assurance for Rust that something bad won't happen at Runtime. 

### FROM & INTO
- From<T> implemented from a type defines how to create it from another type
```rust
struct MyType(i32);

impl From<i32> for MyType {
    fn from(item : i32) -> Self {
        MyType(item)
    }
}

let x = MyType::from(2i32); // convert 2i32 to MyType
``` 
- Into is the reciprocal of From
```rust
let x = 42;
let my_type : MyType = x.into(); 
```

### MATCH 
```rust
//Basic matches
enum Direction {
    Up, Down, Left, Right
}

let dir = Direction::Up;

match dir {
    Direction::Up => println!("U"),
    Direction::Down => println!("D"),
    Direction::Right => println!("R"),
    Direction::Left => println!("L"),
}

//matching with references
let x = Some(42);
let y = &x;
match y {
    Some(v) => println!("Value"), // doesn't match
    None => println!("None")
} // prints None

match y {
    &Some(v) => println!("value"),
    None => println!("None")
} // prints value

match y {
    Some(ref v) => println!("value"), 
    None => println!("None")
} // prints value

// another use case of ref - instead of moving, passes reference
let s = String::from("hello");
match msg {
    ref t => println!("string value"),
    _ => ()
}

println!("{}",s); // s still can be used here. 
// if ref was not passed, ownership would have moved to t

// handling mutable variable

let mut num = Some(42);
match &mut num { // we are passing reference to mut num 
    Some(x) => *x += 5, // so x is &mut i32, *x accesses the value
    None => (),
}
println!("{}",num) // prints a nice prime number
```

### IF LET 
Instead of 
```rust
let x = Some(42);
match x {
    Some(val) => println!("{}",val),
    None => ()
}
```
We can do this
```rust
if let Some(val) = x {
    println!("{}",val);
}
```
- Often used when dealing with Option enum, if-else, matching only certain fields of enums.

### ? 
- it is a shorthand operator for handling errors. Heavily used in handling Api calls. 

Instead of 
```rust
let x = fn(); // let fn() return some Result or Option
match x {
    Ok(v) => v,
    Err(e) => return Err(e),
} // x equals v or returns an Err(e)
```
we can do this
```rust
let x = fn()?;
```
The ? at the end handles the ```match``` code. If there is an error, x holds value if fn() returns some value or the function throws an error Err(e) automically and exits. 

### range

```rust
1..10 // means 1 to 10(exclusive)
1..=42 // means 1 to 42(inclusive)
```

### || and move

- || are called closures. It is used to declare inline function
- closures can capture variables from outer scope as well
- closures can be Fn, FnMut, FnOnce 
```rust
// basic example
let give_five = |x:i32| -> i32 {x + 5};
println!("{}",give_five(42));

// you can also write
let y = 5
let add_y = |x| x+y; // returns x+y, annotations can be dropped if compiler is comfortable
```
x is passed by value but what about y? y can be mutable reference or move depending on the type of function closure is - fn, fnMut, fnOnce.
- Fn : borrows immutably
- FnMut : borrows mutably
- FnOnce : takes ownership (using move)
- compiler chooses automatically what kind of function your closure is
```rust
//explicit definitions

let mut x = 5
let mut mod_x = |y| x += y; // FnMut
mod_x(5);

let s = String::from("hello");
let fnOnce = move || println!("{} world",s); // prints hello world
println!("{}",s); // throws error, ownerhsip has passed using move
```
## Some weird and tips

- No references can be returned in a function unless they are the passed reference.
- You can't pass more than one mutable reference in a scope or immutable reference along with a mutable one.
- Remember to use ```?``` to handle Error<>.
- You can change mutability while changing ownership.
- You can implement functions that are not defined in the struct body using ```impl```.
- In match, iter, etc the pattern/variable takes ownership if used directly.
- In order to avoid passing ownership in ```match```, use ```ref```. & cannot be used instead.(Newer version isn't strict about this and handles automatically; careful while working with older versions)
- Use & infront of variable in order to match references. 
- ```let ref a = b;``` and 
```let a = &b;``` does the same thing.
- Unused variable warnings can be suppressed by deadcode config and starting the variable with an underscore.
- Variable shadowing is allowed (same var name in inner scope).
- Arrays let others borrow their slices.
- The last statement, if without a semicolon, is returned.
- Scared of references and pointers? Handle them during compile time.

## References
1. https://huonw.github.io/blog/2025/03/rust-fallthrough/ - talks about ```match``` very extensively
2. https://doc.rust-lang.org/rust-by-example/ - the official rust tutorial. It is very well documented and thorough
3. https://www.integralist.co.uk/posts/rust-ownership/ - my starter place