const thoughts = [
  "I want pizza 🍕",
  "I love rainy days 🌧️",
  "Tea tastes better with cookies 🍪",
  "I should organize my desk 📝",
  "I wonder what my cat is thinking 🐱",
  "Books are little worlds 📚",
  "Maybe I’ll bake something sweet 🍰",
  "Sunsets are magical 🌅",
  "I should adopt a tiny cactus 🌵",
  "Coffee first, everything else later ☕"
];

function newThought() {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  document.getElementById("thought").innerText = thoughts[randomIndex];
}
