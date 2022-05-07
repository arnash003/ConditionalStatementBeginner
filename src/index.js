import "./styles.css";

// Explaining Conditional Statments
// Get the Current Hour and Depending on its Value greet the user with a different message
// If hour between 6am and 12pm: Good Morning
// If hour between 12pm AND 6PM : Good Afternoon 
// Otherwise: Good evening
let hour = 13;

if (hour >= 6 && hour < 12) 
  console.log('Good Morning');
else if (hour >= 12 && hour < 18)
  console.log('Good Afternoon');
else
console.log('Good Evening');





document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
