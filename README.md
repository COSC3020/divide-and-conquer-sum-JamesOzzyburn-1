[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

# Answer
The slides state that the recurrence relation is $T(n) = 2 * T(n/2) + C$ where C is a constant for the summing of the parts for a merge sort splitting into two parts. When we split into three parts the recurrance relation simply becomes $T(n) = 3 * T(n/3) + C$ which we then follows the substitution steps to get $T(n) = 3 * (3 * T(n/3/3))$ which simplifies to $T(n) = 9 * T(n/9)$.

To get our $\Theta$ we can take our $T(n) = 3 * T(n/3) + C$ we can first drop the C and plug in $i$ to get $3^i * T(n/3^i)$ where $i$ is $i = log3(n)$. We can then simplify this to get $n * T(1)$ which just gives us $n$ we can then use this to get our final answer of $\Theta(n)$
