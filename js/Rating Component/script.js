const ratingBtns   = document.querySelectorAll('.rating-btn');
const submitBtn    = document.getElementById('submit-btn');
const ratingState  = document.getElementById('rating-state');
const thankyouState = document.getElementById('thankyou-state');
const selectedValue = document.getElementById('selected-value');

let selected = null;

// Select a rating
ratingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    ratingBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selected = btn.dataset.value;
  });
});

// Submit
submitBtn.addEventListener('click', () => {
  if (!selected) return; // do nothing if no rating chosen
  selectedValue.textContent = selected;
  ratingState.classList.add('hidden');
  thankyouState.classList.remove('hidden');
});