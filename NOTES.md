Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 

# TDD

 Return false if triangle has a value of 0
   ✅ - 0,2,3 -> false
 Return false if triangle has a negative value
   ✅ - 3,-2,3 -> false
 Return true if it is able to make a triangle with the given parameters
   ✅ - 1,2,2 -> true

# Refactor

   ✅ Modified first describe to a more concrete story
   ✅ Improve isTriangle function
   ✅ 100% code coverage

# Feedback Peer review

Notes niet correct bijgehouden. Bijhouden per pomodoro.
Complexity te hoog
Testen lezen niet als een boek
De units zelf worden niet getest, alleen de hoofdfunctie
Testen lijken niet in lijn met de code
eslint disable?
Naamgeving komt niet overeen met wat de code doet, kan ook beter

  
# Pomodoro 1
   Refactor test description, function names and code complexity
    ✅ - Improve text
    🤲 - Reduce code complexity 
    ✅ - Rename function names

# Pomodoro 2 
  - ✅ Refactor: unit test all functions, not only main function
       ✅ - unit test all functions 

  - ✅ Refactor: Reduce code complexity
       🤲 - Refactor functions with complexity higher then 8

  - ✅ Gain 100% code coverage

# Pomodoro 3
  ✅ Cover all testcases (codewars)
  ✅ Refactor twoOrAllParametersEquals function