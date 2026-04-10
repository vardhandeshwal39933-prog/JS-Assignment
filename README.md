# JavaScript Assignment

This repository contains solutions to all 6 questions given in the assignment.
All programs are written in plain JavaScript using `prompt()` for input and `alert()` for output, as instructed.



## Question 1 – Digit Gatekeeper

**Approach:**
I used a loop to go through all numbers from L to R. For each number, I checked:

* if it is divisible by K
* if it contains digit 0 (skipped those numbers)
* calculated sum of digits and checked if that sum is a prime number

If all conditions are satisfied, I increased the count.

**Time Complexity:**
Roughly O(N), since we check each number in the range.



## Question 2 – Roll-Seed Lock

**Approach:**
I repeated the given operation exactly 3 times:

* if number is even → divide by 2 and add seed
* if odd → multiply by 3 and subtract seed

After that, I checked:

* if the number is a 3-digit number
* if its middle digit is equal to seed

Based on this, I printed YES or NO along with the final number.

**Time Complexity:**
O(1), since operations are fixed (only 3 steps).



## Question 3 – Mirror Corridor

**Approach:**
I tried values of X from 0 to 100000.
For each X:

* calculated N + X
* checked if it is a palindrome
* checked if it is divisible by K

The first X satisfying both conditions is printed. If none found, print -1.

**Time Complexity:**
O(100000), since we may check all values up to the limit.



## Question 4 – Fare Calculator

**Approach:**
I followed the steps given in the question:

* calculated initial fare
* added late fee if applicable
* added 10% if distance > 10
* adjusted fare based on seed (odd/even)
* finally rounded the result up to nearest multiple of 5

**Time Complexity:**
O(1), since only simple calculations are done.



## Question 5 – Skipping Numbers

**Approach:**
I kept adding numbers starting from 1.
While adding:

* skipped numbers divisible by (seed + 2)
* kept track of the sum

Stopped when the sum became greater than or equal to N, and printed m and sum.

**Time Complexity:**
Depends on m, generally O(m).



## Question 6 – Contest Score Judge

**Approach:**

* calculated score using formula: 3a + b − 2c
* if score became negative, set it to 0
* if total attempts > 50, reduced score by 10
* finally checked if score ≥ 60 for PASS, otherwise FAIL

**Time Complexity:**
O(1)



## Notes

* No hardcoding is used in any solution
* All inputs are taken using `prompt()`
* All outputs are displayed using `alert()`
* Code is written using basic JavaScript concepts as taught in class

---
