//Bookshelf Book Filters

$(document).ready(function(){
  $('.filter-item').click(function(){
    const value = $(this).attr('data-filter')
    if(value == 'all'){
      $('.book-box').show('1000');
    }
    else{
      $('.book-box').not('.' + value).hide('1000');
      $('.book-box').filter('.' + value).show('1000');
    }
  })
  $('.filter-item').click(function(){
    $(this).addClass("active-filter").siblings().removeClass("active-filter")
  })
})




// Parallax Effect

let text= document.getElementById('text')
let leaf= document.getElementById('leaf')
let hill1= document.getElementById('hill1')
let hill5= document.getElementById('hill5')
let hill4= document.getElementById('hill4')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

})

// Typing Text

const words = ['Yutika','Developer','Runner', 'Product Geek', 'Writer', 'Climate Activist', 'Reader' ]; // Add your own words here
let currentIndex = 0;


function typeNextWord() {
  const typingText = document.getElementById('typing-text');
  typingText.textContent = '';
  const word = words[currentIndex];
  let charIndex = 0;

  const typingInterval = setInterval(() => {
    typingText.textContent += word[charIndex];
    charIndex++;

    if (charIndex >= word.length) {
      clearInterval(typingInterval);
      setTimeout(eraseWord, 1000); // Change the delay before erasing as desired
    }
  }, 100); // Change the typing speed (in milliseconds) as desired
}

function eraseWord() {
  const typingText = document.getElementById('typing-text');
  let word = typingText.textContent;
  let charIndex = word.length - 1;

  const erasingInterval = setInterval(() => {
    typingText.textContent = word.substr(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      clearInterval(erasingInterval);
      currentIndex = (currentIndex + 1) % words.length;
      setTimeout(typeNextWord, 1000); // Change the delay between words as desired
    }
  }, 50); // Change the erasing speed (in milliseconds) as desired
}

typeNextWord();

// Contact form

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var mailtoLink = "mailto:yutika.subandh@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);

  window.location.href = mailtoLink;
});

// Bookshelf Grid/List View



