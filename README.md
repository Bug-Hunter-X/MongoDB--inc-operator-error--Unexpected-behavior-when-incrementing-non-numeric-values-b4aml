# MongoDB $inc operator error: Unexpected behavior when incrementing non-numeric values
This repository demonstrates an uncommon error related to the MongoDB $inc operator when incrementing non-numeric field values.

## Description
The `$inc` operator in MongoDB is used to increment or decrement a numeric field by a specified value. However, if you attempt to increment a field that is not a number (e.g., a string), MongoDB will not throw an error but will instead produce unexpected results.

## Bug
The provided `bug.js` file contains code that attempts to increment a string field using the `$inc` operator. This results in the field not being incremented correctly. 

## Solution
The `bugSolution.js` file provides the correct way to use the `$inc` operator, ensuring that the target field is a number.  This demonstrates how to handle potential data type issues before attempting to increment the value.