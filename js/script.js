// variable used in question 7 and 8.

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1.

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2.

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3.

heading.style.fontSize = "2em";

// Question 4.

heading.innerHTML += `<h4>Subheading</h4>`;

// Question 5.

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6.

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background: yellow">New paragraph</p>`;

// Question 7.

function findNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(`The cats name is: ${list[i].name}`);
  }
}

findNames(cats);

// Question 8.

function createCats(cats) {
  let catsList = "";

  for (let i = 0; i < cats.length; i++) {
    let catsAge = "age unknown";

    if (cats[i].age) {
      catsAge = cats[i].age;
    }

    catsList = catsList += `<div><h5>Name: ${cats[i].name}</h5> <p>Age: ${catsAge}</div>`;
  }

  const newHtml = catsList;
  return newHtml;
}

const finalHtml = createCats(cats);
const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = finalHtml;
