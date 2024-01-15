//Example 1

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();





//Example 2
//Example of how much time a function took to run a program

// function calculateSum() {
//   let a = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     a = a + i;
//   }
// }
// const beforeDate = new Date();
// const beforeDateInMilliseconds = beforeDate.getTime();
// calculateSum();
// const afterDate = new Date();
// const afterDateInMilliseconds = afterDate.getTime();

// console.log(
//   (afterDateInMilliseconds - beforeDateInMilliseconds) / 1000 + " seconds"
// );
