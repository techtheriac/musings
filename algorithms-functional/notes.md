### List Comprehensions
  [x * x | x <- [1 .. 9], x `mod` 2 == 0]
   The above generates a the square of a list of even Integers.
   [(x, y) | x <- [1..7], y <- [0..4]]
   Try the above in a repl

### The (:) operator
  An infix operator also known as `cons` constructor. Appends its first argument (head) to the second argument (which becomes the tail) - A list
  1 : [2, 5, 7]
 Try the above in a repl 
