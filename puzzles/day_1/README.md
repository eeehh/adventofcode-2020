# Day 1: Report Repair

**Average execution times on my computer, in milliseconds:**

solution | part 1 | part 2
-------- | ------ | ------
a | 5.31 | 21.21
b | 0.23 | 3.74
c | 0.22 | 0.4

## Solutions

### Solution 1

Iterates over the array twice. For each combination, checks the sum. Returns the multiple if the sum matches 2020.

### Solution 2

Performance improvement from solution 1.

Rather than iterating over the array twice, the second iteration only checks the numbers before the position of the first iteration. This eliminates the checking of double values.

### Solution 3

Performance improvement from solution 2.

Firstly, the maximum possible value for the second number relative to the minimum possible value of the first number is used to restrict the dataset.

Secondly, the dataset is sorted in order from smallest to largest. Iterations of the second number are skipped once the sum reaches above 2020.
