// ===== 1. How Many Searches? =====
// === Part A ===
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

// Step 1: The function will find the middle/index by adding the start index and end index / 2 (10/2 = 5)

// Step 2: check if arr[index] is the item we're searching for (12 =/= 8)

// Step 3: 12 > 8, so we move back on index and call the search again to search for numbers less than 12.

// Step 4: We're now dealing with the dataset: 3, 5, 6, 8, 11, the new middle is arr[2] (6)

// Step 5: Check if arr[index] is the item we're searching for (6 =/= 8)

// Step 6: 6 < 8, so we move up an index and call the search again to search for numbers more than 6.

// Step 7: We're now dealing with the dataset: 8, 11, the new middle is arr[3] (8)

// Step 8: Check if arr[index] is the item we're searching for (8 = 8), so return 8.

// === Part B ===
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

// Step 1: Middle = arr[5] (12)
// Step 2: Check for match (12 =/= 16)
// Step 3: Choose new search params, (12 < 16) index + 1
// Step 4: New dataset: 14, 15, 17, 18
// Step 5: Middle = arr[8] (17)
// Step 6: Check for match (17 =/= 16)
// Step 7: Choose new search params, (17 > 16) index -1
// Step 8: New dataset: 14, 15
// Step 9: Middle = arr[6] (14)
// Step 10: Check for match (14 =/= 16)
// Step 11: Choose new search params, (14 < 16) index + 1
// Step 12: New dataset: 15
// Step 13: Middle = arr[7] (15)
// Step 14: Check for match (15 =/= 16)
// Step 15: No more to check, return -1

// ===== 2. Adding a React UI =====
// (in different project: searching-app)

// ===== 3. Find a Book =====
// Imagine you are looking for a book in a library with a Dewey Decimal index.  How would you go about it?  Can you express this process as a search algorithm?  Implement your algorithm to find a book whose Dewey and book title is provided.

// 1. You go to the hundreds place value section, i.e. 400-499 = Languages
// 2. Look at the hundreds and tens place value and compare to the current books/bookshelves you are looking at and find books that are within that range
// 3. Look at the ones place and repeat
// 4. if decimals repeat
// 5. Look for author's name/book title
// 6. Match author's name and book title to your search


// ===== 4. Searching in a BST =====
// *** No coding is needed for these drills ***

// === Part A ===
// Given a binary search tree whose in-order and pre-order traversals are respectively 14, 15, 19, 25, 27, 35, 79, 89, 90, 91 and 35, 25, 15, 14, 19, 27, 89, 79, 91, 90.  What would be its postorder traversal?



// === Part B ===
// The post order traversal of a binary search tree is 5, 7, 6, 9, 11, 10, 8.  What is its pre-order traversal?



// ===== 5. Implement different tree traversals =====
// Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22.  Then implement inOrder(), preOrder(), and postOrder() functions.  Test your functions with the following datasets.

// a pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

// ===== 6. Find the next commanding officer =====
// Suppose you ahve a tree representing a command structure of the Starship USS Enterprise.
//                                  Captian Picard
//                              /                 \
//                    Commander Riker          Commander Data
//              /             \                           \
//     Lt. Cmdr. Worf   Lt. Cmdr. LaForge              Lt. Cmdr. Crusher
//        /                                           /
//  Lt. security-officer                      Lt. Selar    

// This tree is meant to represent who is in charge of lower-ranking officers. For example, Commander Riker is directly responsible for Worf and LaForge. People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right). Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person to take over command.

// ===== 7. Max Profit =====
// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a following day, write an algorithm to work out what the maximum profit you could make would be.

// ===== 8. Egg Drop (optional) =====
// This is a fun exercise to do - consider this optional after you are done with all the exercises above. Imagine that you wanted to find the highest floor of a 100 story building that you could drop an egg from without the egg breaking. But you only have 2 eggs. Write an algorithm to find out in the most efficient way which floors you should drop the eggs from. After you have understood the question and made some attempts to solve the problem, go through this reading before you start coding: http://datagenetics.com/blog/july22012/index.html.