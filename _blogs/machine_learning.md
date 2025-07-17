---
title: "Concepts of machine learning"
date: 2025-07-17
categories : ['ML', 'python']    
layout: post
excerpt : 'Tyring to explain machine learning concepts logically'
---

### Linear Regression

Let's start with simple linear regression. 

You have a set of $(X,y)$ points where the dimension of $X$ and $y$ are $1$. Simple linear regression takes these points and try to fit a line in between them. Why? So if there are some unknown $y$ for some $X$, I am able to predict it. 

$y = aX + b $, where we need to find $a$ and $b$

When we have just one point, the answer is trivial (i.e could be anything). We get a fixed solution when we have just 2 points. 

$y_1 = aX_1 + b$ and 
$y_2 = aX_2 + b$

We can solve this to get $a$ and $b$. Easy. Now, we introduce a third point $(X_3,y_3)$. (*scratches head*) How to proceed now?

$$
\hat{y_i} = aX_i + b \\
S = \sum_{i=1}^{n} (y - (aX_i+b))^2
$$
Consider the above equations $\hat{y_i}$ represents the predicted value. and S is square error across all predicted values. Let $S$ be a $f(a,b)$, then in order to minimize $S$ we need to find the minima (global minima in this case). Differentiate w.r.t. $a$ and $b$. We get 2 equations and 2 variables

$$
\sum X_iy_i - a\sum X_i^2 - b \sum X_i = 0 
\tag{1}
$$
$$
\sum y_i - a \sum X_i - nb = 0 \tag{2}
$$

Solving $(2)$ to get $b$ and putting in $(1)$, we get $a$

$$
a = \frac{n\sum X_i y_i - \sum X_i \sum y_i}{n \sum X_i ^2 - (\sum X_i)^2} $$
$$
b = \frac{\sum y_i - a\sum X_i}{n}
$$

Now, what happens when the dimension of $X$ is not 1.

![Domain Expansion](/assets/machine_learning/domain_expansion.jpg)

We expand our domain. We go into Vector/Matrix Calculus.

#### Normal Equation Solution



### References 

- For Matrix Calculus here 



