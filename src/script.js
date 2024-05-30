const anchors = document.querySelectorAll('a[href*="#"]')
const links = document.querySelectorAll('.head-links > a')
const navigation = document.querySelector('.nav')
const header = document.querySelector('header')
let isNavOpen = false

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

navigation.addEventListener("click", function(){
  if (!isNavOpen){
    navigation.classList.add("close-btn")
    header.style.height = '100vh'
  }else{
    navigation.classList.remove("close-btn")
    header.style.height = '100px'
  }
  isNavOpen = !isNavOpen
})

for (let link of links) {
  link.addEventListener('click', function (e) {
    navigation.classList.remove("close-btn")
    header.style.height = '100px'
    isNavOpen = false
  })
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

let phone = document.querySelector("#phone")
let link = document.querySelector("#link");
let maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: true
} 
let mask = new IMask(phone, maskOptions);

function rebute(){
  let Phone = phone.value;
  let Link = link.value;
  if (Link != "" && Link.substring(0, 1) == "@" && Phone != "" && Phone.length == 16){
    phone.style.background = "#d9d9d9";
    link.style.background = "#d9d9d9";
    alert("Заявка отправлена! Мы скоро свяжемся с Вами!");
  }else{
    phone.style.background = "#f7a1a1";
    link.style.background = "#f7a1a1";
  }
}

let form = document.querySelector("#form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  rebute();
});

