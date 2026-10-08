# COMP3123 Lab Test 1

Student ID: 101568492

## Requirements
Node.js must be installed. No external packages are required.

## Run instructions
Open a terminal in the project root folder.

### Question 1: ES6 Features
node question1/lowerCaseWords.js

The lowerCaseWords function returns a Promise, filters out
non-string values, and converts the remaining strings to lowercase.
Non-array input rejects the Promise.

### Question 2: Promises
node question2/promises.js

resolvedPromise resolves a success message after 500 ms.
rejectedPromise rejects an error message after 500 ms.
Both Promises are called separately, and their results are handled.

### Question 3: File Module
node question3/add.js

Creates the Logs directory, changes the working directory to Logs,
writes text into ten files, and prints their filenames.

node question3/remove.js

Prints each filename before deleting it, then removes Logs.
If Logs does not exist, the script exits without an error.

## Output evidence
The separate screenshots document contains output for Question 1,
Question 2, log creation, and log removal.