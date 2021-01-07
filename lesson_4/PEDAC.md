# The PEDAC Process

## P: [Understand the] Problem

- Establish the rules and define the boundaries of the problem.
  - Analyze all available information.
  - Restate Explicit Requirements
  - Identify Implicit Requirements
- Spend enough time. Don't rush this step! <br> <br>

**General Example**

Given a string, produce a new string with every other word removed.

- **Explicit requirements**:

  - Input: string
  - Output: string
  - Remove every other word from the input string.

- **Questions**:

  - What do we mean by every other word?
  - How do we define a word in this context?
    - Words are delimited by spaces.

- **How do we get answers**?
  - Depends on context:
    - Ask interviewer
    - Examine provided test cases.

## E: Examples and Test Cases

- Can confirm or refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries of a problem.

## D: Data Structures

- Help to reason with data logically.
- Help us to interact with data at an implementation level.
- Thinking in terms of data structures is part of the problem solving process.
- Data Structures are closely linked to algorithms.
  - Set of steps from input to output.
    - These steps generally involve structuring data in a certain way.

## A: Algorithm

- A logical sequence of steps for accomplishing a task or objective.
  - Closely linked to data structures.
  - Series of steps to structure data to produce the required output.
- Stay abstract/high-level.
  - Avoid implementation detail
  - Don't worry about efficiency for now.
- If a specific step is overly complex, we can extract it out at repeat the
  process.

## C: [Implementing a Solution in] Code

- Translating solution algorithm to code.
- Think about the algorithm in the context of the programming language we're
  using.
  - Language features and constraints.
  - Characteristics of data structures.
  - Built-in functions and methods.
  - Syntax and coding patterns.
- Create test cases.
- Code with intent.

## Case Study: Sum Even Number Rows

Imagine a sequence of consecutive even integers beginning with 2. The integers
are grouped in rows, with the first row containing one integer, the second row
two integers, the third row three integers, and so on. Given an integer
representing the number of a particular row, return an integer representing the
sum of all the integers in that row.

**Rules/Requirements**

- Sequence of even integers
- Sequence begins with two
- Integers are consecutive
- Sequence is grouped into rows
- Each row is incrementally larger than the last: 1, 2, 3, ...
- Row 'number' equals the number oof elements in the row.
  - Row #1 has one element, row #2 has two elements, ...
- **Input**: A single integer.
  - The integer identifies a 'row', which is a subset of a sequence of integers.
- **Output**: A single integer.

  - The integer is the sum of the integers in the row identified.

- **Example Sequence**: 2, 4, 6, 8, 10, 12, 14, 16, 18, ...

  - 2
  - 4, 6
  - 8, 10, 12
  - 14, 16, 18, 20
  - ...

  - How do we create the structure?

**Examples**

- row number: 1 --> sum of integers in row: 2
- row number: 2 --> sum of integers in row: 10
- row number: 4 --> sum of integers in row: 68

- 2 --> 2
- 4, 6 --> 10
- 14, 16, 18, 20 --> 68

**Data Structures**

- Overall structure representing sequence as a whole.
- Within that structure, we have individual rows.
- The individual rows are in a set order in context of sequence.
- Individual rows contain integers.
- Can assume that integers are in a set order in the context of the sequence.

Based on this information, it's likely that a **nested array** would be a likely
choice for implementation.

[ [2], [4, 6], [8, 10, 12], [14, 16, 18, 20], ... ]

**Algorithm**

1. Create an empty 'rows' array to contain all of the rows.
2. Create a 'row' array and add it to the overall 'rows' array.
3. Repeat step 2 until all the necessary rows have been created.

- A) all the rows have been created when the length of the 'rows' array is equal
  to the input.

4. Sum the final row.
5. Return the sum of the final row.

**Code**

- Additionally: See PEDAC-walkthrough.js

**Sub-Problem #1: Create a Row**

**Rules**

- Row is an array
- Arrays contain integers
- Integers are consecutive even numbers.
- Integers in each row form part of an overall larger sequence.
- Rows are of different lengths.

- **_Input_**: the information needed to create the output

  - What information do we need to know?
    - The starting integer
    - Length of the row

- **_Output_**: the row itself.

**Examples**

start: 2, length: 1 --> [2]

start: 4, length: 2 --> [4, 6]

start: 8, length: 3 --> [8, 10, 12]

**Data Structure**

- An array of integers

**Algorithm**

1. Create an empty 'row' array to contain the integers.
2. Add the starting integer.
3. Increment the starting integer by two to get the next integer in the
   sequence.
4. Repeat steps 2 & 3 until the array has reached the correct length.
5. Return the array.

**Code**

- See PEDAC-walkthrough.js

## Final Thoughts

- PEDAC is not a completely linear process.
  - Be prepared to move back and forward between the steps.
  - Switch between implementation mode to abstract problem-solving mode when
    necessary.
- Don't try to problem-solve at the code level.
