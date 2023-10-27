# Day 6 Oops

1. ***https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md*** [link](Class%20-%20Movie.js)
```md
# Class - Movie

The class Movie is stated below.
An instance of class Movie represents a film.
This class has the following three properties:

- title, which is a String representing the title of the movie
- studio, which is a String representing the studio that made the movie
- rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


```
2. ***https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md*** [link](Class-Circle.js)
```uml
Circle
________________________
-radius:double 1.0 
-color:String = "red"
________________________
+Circle()
+Circle (radius:double)
+Circle(radius: double, color: String)
+getRadius(): double
+setRadius (radius:double):void
+getColor(): String
+setColor(color:String):void
+toString(): String
+getArea(): double
+getCircumference (): double

```
3. Write a “person” class to hold all the details. [link](Write%20a%20“person”%20class%20to%20hold%20all%20the%20details.js)
4. write a class to calculate the uber price. [link](write%20a%20class%20to%20calculate%20the%20uber%20price.js)