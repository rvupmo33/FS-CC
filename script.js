const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM Elements
const btn = document.querySelector(".btnOpen");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM Elements
factsList.innerHTML = "";

//Load data from supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://bkkiorylgxqsmujidqds.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJra2lvcnlsZ3hxc211amlkcWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MjQ3NDksImV4cCI6MjAzNDAwMDc0OX0.iTdzgjqUUgME-Qt71dQgC0mBPWFxfdSZqeOhLJ359lM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJra2lvcnlsZ3hxc211amlkcWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MjQ3NDksImV4cCI6MjAzNDAwMDc0OX0.iTdzgjqUUgME-Qt71dQgC0mBPWFxfdSZqeOhLJ359lM",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "science");

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Welcome</li>");
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">
    ${fact.category}</span>
  </li>`
  );

  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

// function calcFactAge(FactYear) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - FactYear;
//   return age;
// }
// console.log(`The fact is ${calcFactAge(2015)} years old`);
// console.log(`The fact is ${calcFactAge(2020)} years old`);

// let votesInteresting = 20;
// let votesMindblowing = 5;

// let votesFalse = 7;
// const totalUpVotes = votesInteresting + votesMindblowing;

// const message =
//   totalUpVotes > votesFalse
//     ? "The fact might be true"
//     : "The fact might be false";

// // console.log(message);

// const text = "Cow goes Moo";
// const upperText = text.toUpperCase();
// console.log(upperText);
// const str = `The current fact is "${text}"`;
// console.log(str);

// const fact = ["Cow goes Moo", 2015, true];
// console.log(fact);
// console.log(fact[2]);
// console.log(fact.length);
// console.log(fact[0].length);
// const [text, createdIn, isCorrect] = fact;
// console.log(text);

// const newFact = [...fact, "society"];
// console.log(newFact);

// const factObj = {
//   text: "Cow goes Moo",
//   category: "society",
//   createdIn: 2015,
//   isTrue: true,
//   createSummary: function () {
//     return `The fact "${this.text}"`;
//   },
// };

// console.log(factObj.createSummary());

// [2, 4, 6, 8].forEach((el) => {
//   // console.log(el);
// });

// const times10 = [3, 6, 9, 12].map((el) => {
//   return el * 10;
// });

// // console.log(times10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(FactYear) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - FactYear;
//   return age;
// }

// const factAge = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAge);
