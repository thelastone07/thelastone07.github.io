---
title: "My DSA Notes"
date: 2025-11-25
categories : ['DSA', 'cpp']    
layout: post
excerpt : 'My rough notes on mathematical modelling of problems and solving them by code'
---

## Introductory Problems

### Weird Algorithm

Go with brute force algorithm. The size of the variable may go larger than int. 

### Missing Number 

Sort the array. Have a O(n) pass. 

### Repetitions

Store the maximum till now. One forward pass.

### Increasing Array

Greedily increase the value of the current element as much as the last element.

### Permutations

With n > 4, creating such a permutation is simple. Skip index for the first pass and in the second pass fill the empty indices. Solution for n = 4 exist and could be calculated with a brute force method.

### Number Spiral

Note that even squares are on the first column and odd squares are on the first row. Also note that, alternately numbers are filled by columns and rows. 

Given to find the element of (r,c). Take the maximum of (r,c). If even, elements get filled by row otherwise column. The first element to be filled can be calculated using the fact that it is square(max(r,c) - 1). 

### Two knights

Calculate the number of attacks in edges, penultimate edges, corners.

### Two sets

It is always possible if the sum is even.

### Bit Strings

Sure, the answer is simple. 2^n. Calculate the modulus of the power by using the fact that 2^n = 2^(n/2) * 2^(n/2) (and * 2).

### Trailing Zeros

The number of 5s matter. Higher power of 5 will account for more zeros. 

###  Coin piles

After the difference of coins is settled, if it is divisible by 3, then it is possible

### Palindrome Reorder

Count each characters separately. There can be only one character of odd frequency. 

### Gray code

Gray code equivalent : i ^ (i >> 1)
OR
Given we have a list whose gray code is known for n, we can calculate for n+1 by adding 0 to the left of the strings, reversing the order of the original string and adding 1s.

### Tower of Hanoi

Interchange the meaning of right, left and middle.

### Creating Strings

next_permutation()

### Apple Division

n is 20. We can go through all permutations. 

### Chessboard and Queens

Place and backtrack when end condition is reached.

### Mex Grid Construction

The grid is symmetrical across its main diagonal. 

Strategy :
- Fill the first row with values incrementing with 1
- When filling the next row, elements left of diagonal can be retrieved from its mirror column
- To fill the next element of the row is simple. Hold the values that are seen till now. 

The whole algorithm takes O(n^3).

###  Knight Moves Grid 

Calculate the possible moves from (0,0) and iterate through them by pushing into a queue.

### Grid Coloring 1

Greedy solution would work. Constraints are always less than choices. 

### Digit Queries

Note that the digit would form a pattern : 9, 90, 900, and so on. 9 corresponds 1, 90 to 2-digit, 900 to 3 digit. 

Now, we need to map this to index. Check power of 10 to which the index corresponds to. Then, the rest could be calculated easily. 

### String Reorder

Greedy works. The only condition to check would be remaining length / 2 should not be greater than highest frequency. 

O(26*26*n)

## Sorting and Searching

### Distinct Numbers

Create a set.

### Apartments 

Sort both. Run iterators along both.

### Ferris Wheel

Sort. Fill from largest. If space remains, fit in smallest. Go in two directions. 

### Concert Tickets

The problem can be restated as given a list of numbers, for each query q, find a number that is <= q. This can be done by maintaining a set to find queries in log(n). The algorithm is m * log (n). A map is required to store frequency.

### Restaurant Customers

The start and end time could be considered as events. 

### Movie Festival

Starting with the valid movie which ends first will give us the most choices. 

### Sum of Two Values

Use map. 

### Maximum Subarray sum

Iterate. Add the current element if the oldSum + element > element, otherwise make newSum = element . Update the maximum sum. 

OR

Don't add the current element if newSum < 0. Make the newSum 0. This would not include the case where every element is negative. So set the maxSum = maximum element if all elements are negative. 

### Stick Lengths

Sort and median. 

### Missing coin sum

Sort. Store a sum till now. If the element is more than sum, ans is sum + 1. Otherwise, the answer is total sum + 1.

### Collecting Numbers

The range of the numbers is well-defined. So, we can map value -> index. Iterate through this array will give us the number of element where element - 1 has greater index. 

### Collecting Numbers 2

The 2 numbers that are being swapped will affect a_i, a_i+1, a_i - 1. First, undo the round due to this. Then calculate new rounds after swap.

### Playlist

2 pointers. When duplicate found, retract logic should update all elements that are removed. 

OR

We have to set left boundary given we are including current element. 

### Towers

We need a data structure that would find the >= in an array that allows to store multiple elements. Create new element otherwise. Answer would be the size of this data structure. 

### Traffic Lights

Creating a set with 0 and n initially and finding the left and right boundary of the element and comparing with the maximum. 

### Distinct Values Subarrays

Number of sub-arrays of size n is n*(n+1) / 2;
Keep a map to store last seen and find a set using pointers. Subtract nos of intersecting arrays.

### Distinct values Subsequences

Every occurrence is a different instance. Hence, the number of ways would be * (c+1), where c is the frequency of a number. This way would include the empty subsequence as well. 

### Josephus Problem 1 & 2

We track a pos and find the position of that index in an array. How can one delete in log(n) and find index in log(n)? Using tree structure.

### Nested Ranges Check

Sort first number by asc, second by desc. Track the maximum second number while iterating. This will give us contained. 

Iterate opposite direction and store the minimum right boundary. This will give contains.

### Nested Ranges Count

Sort by first number asc, second number desc. Now create a new pair with (second number, i) where i is a new index. i E [1,N]. sort the new array of pairs (ASC, DESC). Extract the second number of the pair and create a new array.

Use policy-based DS or fenwick tree now to find contains & contained. 

### Room Allocation 

Create a new single array based on arrival departure events (day, event). sort (ASC, arrival < dep).

### Factory Machines 

Binary Search

### Task and Deadlines

Sort on starting time. This is optimal way of solving. Finishing time matters only matters on starting time. Shorter starting time task should be done first.

### Reading Books

Maximum element is greater than half then 2 * max otherwise, sum.

### Sum of three values

Sort after pairing with index. Now, for every O(n2) iteration we have a different sum = x - a[i] and different range [i+1,n].

### Sum of four values

### Nearest Smaller Values

Push into stack if empty or element greater than top. While the element is smaller than top, remove the top. 

### Subarray Sum I

Two pointer

### Subarray Sum II

Prefix array

### Subarray Divisibility

Prefix array with mod

### Dinstinct Values Subarray II

Create a normal iteration with left right boundaries. Boundary condition is defined. Push the number of elements. Answer would be n*(n+1) / 2 - size-1 of the list.

### Array Division

Binary Search

### Movie Festival II

Sort by ending time and greedily assign movies to member i.

### Maximum Subarray Sum II

The real optimization question is how to calculate the minimum value in range [a,b] starting from j in the opposite direction in the prefix sum array.

## Dynamic Programming

### Dice Combinations

ways[j] = sum over i {ways[j-i]} where 1 <= i <= 6


### Minimizing Coins

ways[j] = iterate through min(ways[j],ways[j-a[i]])
ways[0] = 0, rest = 1e9

### Coins Combination I

For finding ways[i], iterate through the list and keep adding ways[i-a[j]]

### Coin Combination II

The order matters. Coin i can't be added after coin i+1.

Inner loop must be value, outer loop must be coin value. 

### Removing Digits

### Grid Paths I

Very apparent

### Book Shop

Outer loop books. Inner loop money in reverse order.

### Array Description

The first element is the base case. It could be either x[1] otherwise it could be anything from 1 to m.

We can maintain an array n*m. 

Then we can populate the complete array.

### Counting Towers

