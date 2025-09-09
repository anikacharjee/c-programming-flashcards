const cards = [
  {
    front: "Comments",
    back: "Used to explain code. Syntax: // for single-line, /* */ for multi-line."
  },
  {
    front: "Variables",
    back: "Containers for storing data values. Example: int age = 25;"
  },
  {
    front: "Data Types",
    back: "Common types: int, float, char, double, void."
  },
  {
    front: "Operators",
    back: "Arithmetic (+, -, *, /), Relational (==, !=), Logical (&&, ||)."
  },
  {
    front: "if...else",
    back: "Conditional branching. Syntax: if (condition) { ... } else { ... }"
  },
  {
    front: "Loops",
    back: "for, while, do-while loops for iteration."
  },
  {
    front: "switch",
    back: "Multi-way branching. Useful for menu-driven programs."
  },
  {
    front: "break",
    back: "Exits loop or switch early."
  },
  {
    front: "continue",
    back: "Skips current iteration and continues loop."
  },
  {
    front: "Arrays",
    back: "Collection of elements of same type. Example: int nums[5];"
  },
  {
    front: "Functions",
    back: "Reusable blocks of code. Syntax: returnType name(parameters) { ... }"
  },
  {
    front: "Pointers",
    back: "Stores memory address. Example: int *ptr = &x;"
  },
  {
    front: "Structures",
    back: "Custom data types. Example: struct Student { int id; char name[20]; };"
  },
  {
    front: "File I/O",
    back: "Reading/writing files using fopen, fprintf, fscanf, fclose."
  },
  {
    front: "Dynamic Memory",
    back: "Use malloc, calloc, realloc, free for runtime memory allocation."
  }
];

let current = 0;
const card = document.getElementById("flashcard");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const progress = document.getElementById("progress");

function updateCard() {
  front.textContent = cards[current].front;
  let backContent = cards[current].back;
  backContent = backContent.replace("Syntax:", "<br><b>Syntax:</b>");
  backContent = backContent.replace("Example:", "<br><b>Example:</b>");
  back.innerHTML = backContent;
  progress.textContent = `Card ${current + 1} of ${cards.length}`;
  card.classList.remove("flipped");
}

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

function nextCard() {
  current = (current + 1) % cards.length;
  updateCard();
}

function prevCard() {
  current = (current - 1 + cards.length) % cards.length;
  updateCard();
}

updateCard();
