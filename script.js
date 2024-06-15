const btn = document.querySelector(".btnOpen");
const form = document.querySelector(".fact-form");

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
