// ===== 1. Understanding Merge Sort =====
//Given the following list of numbers 

//What is the resulting list that will be sorted after 3 recursive calls to merge sort?
// first divide: L: 21, 1, 26, 45, 29, 28, 2, 9  |  R: 16, 49, 39, 27, 43, 34, 46, 40
// second divide/first recursive: L1: 21, 1, 26, 45  | R1: 29, 28, 2, 9
// third divide/second recursive: L2: 21, 1  |  R2: 26, 45
// fourth divide/third recursive: L3: 21 | R3: 1


//What is the resulting list that will be sorted after 16 recursive calls to merge sort?
// Inital: L: 21, 1, 26, 45, 29, 28, 2, 9  |  R: 16, 49, 39, 27, 43, 34, 46, 40
// 1st recursive: L1: 21, 1, 26, 45  | R1: 29, 28, 2, 9
// 2nd recursive: L2: 21, 1  |  R2: 26, 45
// 3rd recursive: L3: 21 | R3: 1  
// 4th recursive: L3.length = 1, return (L3: 21)
// 5th recursive: Now we're looking at R3, R3.length = 1, return (R3: 1)
// 6th recursive: Now we're looking at R2: [26, 45], L4: 26  |  R4: 45
// 7th recursive: L4.length = 1, return (L4(previosly R2): 26)
// 8th recursive: R4.length = 1, return (R4(previosly R2): 45)
// 9th recursive: Now we're looking at R1: 29, 28, 2, 9, L5: [29, 28] | R5: [2, 9]
// 10th recursive: Looking at L5, L6: 29 | R6: 28
// 11th recursive: L6.length = 1, return (L6: 29)
// 12th recursive: R6.length = 1, return R6: 28
// 13th recursive: Looking at R5, L7: 2 | R7: 9
// 14th recursive: L7.length = 1, return L7: 2
// 15th recursive: R7.legnth = 1, return R7: 9
// 16th recursive: Now we're looking at the original right side to divide in half?

// After the 16th recursive call we have the left half of the original array divided, but none sorted yet

//What are the first 2 lists to be merged?
//21 and 1? I'm not sure why, at first I thought the last two numbers because they are the last to be divided, but Tauhida's example shows the first two are merged first.  May have something to do with how we come out of recursion?  **Look more into**


//Which two lists would be merged on the 7th merge?
              21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 // merge 15
            21, 1, 26, 45, 29, 28, 2, 9 | // merge 13 and 14
           21, 1, 26, 45 | // merge 9 [1, 21, 26, 45], // merge 10 [2, 9, 28, 29]
        21, 1 | 
      21 | 1 | // merge 1 [1, 21]
              | 26, 45 |
              | 26 | 45 | // merge 2 [26, 45]
                        |29, 28 |
                        |29 | 28| // merge 3 [28, 29]
                                |2, 9 |
                                |2 | 9| // merge 4 [2, 9]
                                      |16, 49, 39, 27, 43, 34, 46, 40
                                      |16, 49, 39, 27 // merge 11 [16, 27, 39, 49]
                                      |16, 49|
                                      |16 | 49| // merge 5 [16, 49]
                                              |39, 27|
                                              |39 | 27| // merge 6 [27, 39]
                                                      |43, 34, 46, 40| // merge 12 [34, 40, 43, 46]
                                                      |43, 34|
                                                      |43 | 34| // merge 7 [34, 43]
                                                              |46, 40|
                                                              |46 | 40| // merge 8 [40, 46]

// ===== 2. Understandingl Quick Sort =====
// === Part A ===
// Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been 17, but could not have been 14
// The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17

// === Part B ===
// Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// When using the first item on the list as a pivot

// ===== 3. Implementing Quick Sort =====
// Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.

// ===== 4. Implementing Merge Sort =====
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

// ===== 5. Sorting a Linked List using Merge Sort =====
// Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

// ===== 6. Bucket Sort =====
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

// ===== 7. Sort in Place =====
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

// ===== 8. Sorting Books =====
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm.