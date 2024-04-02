//TODO
- retrieve dockeruser name / password from env variables ✅
-  set docker username/password in GIT ✅
-  Make a snyk project?
-  Add Dockerfile to the cookie cutter ⚡

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