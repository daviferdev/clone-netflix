const btnEntry = document.querySelector('.btn');

btnEntry.addEventListener('click', () => {
  window.location.href = './pages/login.html';
});

const questionCards = document.querySelectorAll('.questions__content');

questionCards.forEach((question) => {
  const description = question.querySelector('.question__description');

  question.addEventListener('click', () => {
    console.log(description.style.display);

    if (description.style.display === "" || description.style.display === "none") {
      description.style.display = 'block';
      return;
    }

    if (description.style.display === "block") {
      description.style.display = 'none';
      return;
    }

   
  });
});
