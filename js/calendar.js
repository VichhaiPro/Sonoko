const checks = document.querySelectorAll('.wk');
const fill = document.getElementById('fill');

function update(){
 let done = 0;
 checks.forEach((c,i)=>{
  if(c.checked) done++;
  localStorage.setItem('w'+i,c.checked);
 });
 fill.style.width = (done/checks.length)*100 + '%';
}

checks.forEach((c,i)=>{
 c.checked = localStorage.getItem('w'+i) === 'true';
 c.addEventListener('change',update);
});
update();

<script>
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

// Lightbox
slides.forEach(slide=>{
  slide.querySelector('img').onclick = e =>{
    document.getElementById('lightbox-img').src = e.target.src;
    document.getElementById('lightbox').style.display = 'flex';
  }
});
</script>
