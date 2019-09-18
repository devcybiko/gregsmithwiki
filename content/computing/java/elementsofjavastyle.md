# Elements of Java Style

(Alan Vermeulen, Scott W. Ambler, Greg Bumgardner, Eldon Meltz, Trevor Misefeldt, Jim Shur, Patrick Thompson)
(Cambridge University Press - 2000 - ISBN: 0-521-77768-2)

$(toc)

## 1. General Principles $(gotoc)
1. Adhere to the style of the original
2. Adhere to the Principle of Least Astonishment (Least Surprise)
3. Do it right the first time
4. Document any deviations

## 2. Formatting Conventions
5. Indent nested code
6. Break up long lines
7. Include white space
8. Do not use "hard" tabs

## 3. Naming Conventions
9. Use meaningful names
10. Use familiar names
11. Question excessively long names
12. Join the vowel generation (don't shorten names by omitting vowels)
13. Capitalize only the first letter of acronyms
14. Do not use names that differ only in case
### 3.1 Package Names: 
15. Use the reserved, lowercase form of your organization's Internet domain for as the root qualifier for your package name.
### 3.2 Class/Interface Names: 
16. Use a single, lowercase word as the root name of each package
17. Use the same name for a new version of a package, but only if that new version is still _binary compatible_ with the previous version, otherwise, use a new name.
18. Capitalize the first letter of each word that appears in a class or interface name.
19. Use nouns when naming classes
20. Pluralize the names of classes that group related attributes, static services, or constants
21. Use nouns or adjectives when naming interfaces
### 3.3 Method Names
22. User lowercase for the first word and capitalize only the first letter of each subsequent word that appears in a method name (use camelCase).
23. Use verbs when naming methods
24. Follow the JavaBeans&trade; conventions for naming property accessor methods (get*, set*, is*)
### 3.4 Variable Names
25. User lowercase for the first word and capitalize only the first letter of each subsequent word that appears in a variable name (use camelCase).
26. Use nouns to name variables
27. Pluralize the names of collective references
28. Establish and use a set of standard names for "throwaway" variables

| DataType | Variable |
|-------------:|:-------:|
| Character | c, d, e |
| Coordinates | x, y, z |
| Exception | e, ex, exc |
| Graphics | g |
| Loops | i, j, k, *(l)?*, m, n |
| Object | o, obj |
| Stream | in, out, err, inOut |
| String | s, str |

### 3.5 Field Names
29. Qualify Field variables with "this" to distinguish them from local variables
### 3.6 Paramameter Names
30. When a constructor or "setter" method assigns a parameter to a field, give that parameter the same name as the field.
### 3.7 Constant Names
32. Use uppercase letters for each word and separate each pair of words with an underscore when naming constants

## 4. Documentation Conventions
32. Write documentation for those who must use your code and those who must maintain it
33. Keep comments and code in sync
34. Use the active voice and omit needless words
35. Use documentation to describe the programming interface
36. Use standard comments to hide the code without removing it
37. Use one-line comments to explain implementation details
38. Describe the programming interface before you write the code
39. Document public, private. protected, and package members
40. Provide a summary description and overview for each package
41. Provide a summary description and overview for application and group of packages
### 4.1 Comment Style
42. Use a single consistent format and organization for all documentation comments
43. Wrap keywords, identifiers, and constants with `<code>` tags
44. Wrap code with `<pre>` tags
45. Consider marking the first occurance of an identifier with the `@link` tag.
46. Establish and use a fixed ordering for JavaDoc tags
47. Write in the third-person narrative form
48. Write summary descriptions that stand alone
49. Omit the subject in summary descriptions of actions or services
50. Omit the subject and the verb in summary descriptions of things
51. Use "this" rather than "the" when referring to instances of the current class
52. Do not add parenthesis to a method or constructor name unless you want to specify a particular signature.
### 4.2 Comment Content
53. Provide a summary description for each class, interface, field, and method
54. Fully describe the signature of each method
55. Include examples
56. Document preconditions, postconditions, and invariant conditions
57. Document known defects and deficiencies
58. Document synchronization symantics
### 4.3 Internal Comments
59. Add internal comment only if the will aid others in understanding your code
60. Describe **why** the code is doing what it does, no **what** it is doing
61. Avoid the use of end-line comments
62. Explain local variable declarations with an end-line comment
63. Establish the use of a set of keywords to flag unresolved issues (eg: TODO, :UNRESOLVED:, etc...)
64. Label closing braces in highly nested control structures
65. Add a "fall through" comment between two case labels, if no `break` statement separates those labels
66. Label empty statements

## 5. Programming Conventions

67. Consider declaring classes representing fundamental data tyeps as `final`.
68. Build concrete types from navite types and other concrete types.
69. Define small classes and small methods
70. Define subclasses so they may be used anywhere their superclasses may be used
71. Make all fields private
72. Use polymorphism instead of instanceof

### 5.1 Type Safety

73. Wrap general-purpose classes that operating on `java.lang.Object` to provide static type checking.
74. Encapsulate enumerations as classes.

### 5.2 Statements and Experessions

75. Replace repeated nontrivial expressions with equivalent methods.
76. Use block statments instead of expression statements in control flow constructs.
77. Clarify the order of operations with parenthesis
78. Always code a `break` statement in the last case of a `switch` statement.
79. Use `equals()`, not `==` to test for equality of objects.

### 5.3 Construction

80. Always construct objects in a valid state.
81. Do not call nonfinal methods from within a constructor.
82. Use nested constructors to eliminate redundant code

### 5.4 Exception Handling

83. Use unchecked, run-time exceptions to report serious unexpected errors that may indicate an error in the program's logic.
84. Use checked expeptions to report errors that may occur, owever rarely, under normal program operation.
85. Use return codes to report expected state changes.
86. Only convert excpetions to add information.
87. Do not silently absorb a run-time error or error exception.
88. Use a `finally` block to release resources.

### 5.5 Assertions

89. Program by contract.
90. Use dead code elimination to implement assertions.
91. Use assertions to catch logic errors in your code.
92. Use assertions to test pre- and post-conditions ofa method.

### 5.6 Concurrency

93. Use threads only where appropriate

### 5.7 Synchronization

94. Avoid synchronization.
95. Use synchronized wrappers to provide synchronized interfaces.
96. Do not synchronize an entire method if the method contains significant operations that do not need synchronization.
97. Avoid unnecessary synchronization when reading or writing instance variables.
98. Consider usint `notify()` instead of `notifyAll()`.
99. Use the double-check pattern for synchronized initialization.

### 5.8 Efficiency

100. Use lazy initialization.
101. Avoid creating unnecessary objects,
102. Reinitialize and reuse objects to avoid new object construction.
103. Leave optimization for last.
	* First rule of optimization: Don't do it
	* Second rule of optimization: Don't do it yet.
	* Remember: 20% of code uses 80% of the resources.

## 6. Packaging Conventions

104. Place types that are commonly used, changed, and released together, or manually dependent on each other into the same package.
	* The Common Reuse Principle: A package consists of classes you reuse together. If you use one of the classes in the package you use all of them.
	* The Reuse/Release Equivalence Principle
	* The Acyclic Dependencies Principle
105. Isolate volatile classes and interfaces in separate packages
106. Avoid making packages that are difficult to change dependent on packages that are easy to change,
    * The Stable Dependencies Principle
107. Maximize abstraction to maximize stability.
108. Capture high-level design and architypes as stable abstractions organized into stable packages.

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA0OTI3MDIyNSwtMTIwODc2NjYxNSwtMT
A0NzgyODQ2NiwxMTI1NzEyNzAwXX0=
-->