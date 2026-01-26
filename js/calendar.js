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
