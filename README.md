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
The recurrence relation we have is $T(n) = 3T(\frac{n}{3}) + C$

There are two step to solve our recurrance relation 1. expand iteratively and 2. subtitute for i

For step 1 we expand iteratively which gets us:
$T(n) = 3^iT(\frac{n}{3^i}) + iC$

For step 2 we now need to substitute $i = log3(n)$ and in doing so we get:

$T(n) = 3^{log3(n)} T(1) + nC = nT(1) + nC$

From this we can see that this will lead to linear time asymptotically. So the time complexity of this algorithm is $\Theta(n)$. This also makes sense intuitivly as it sums all of the smaller subparts during the recursion, which has a linear time complexity.
