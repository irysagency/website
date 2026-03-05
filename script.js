document.addEventListener('DOMContentLoaded',()=>{

  /* Cursor glow */
  const g=document.getElementById('glow');
  let mx=0,my=0,gx=0,gy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  (function loop(){gx+=(mx-gx)*.08;gy+=(my-gy)*.08;g.style.left=gx+'px';g.style.top=gy+'px';requestAnimationFrame(loop)})();
  // Hide on mobile
  if('ontouchstart' in window)g.style.display='none';

  /* Nav scroll */
  const nav=document.getElementById('nav');
  const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>50);
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* Hamburger */
  const ham=document.getElementById('ham'),mob=document.getElementById('mob');
  ham.addEventListener('click',()=>{const o=ham.classList.toggle('on');mob.classList.toggle('on');document.body.classList.toggle('locked',o)});
  mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ham.classList.remove('on');mob.classList.remove('on');document.body.classList.remove('locked')}));

  /* Smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==='#')return;e.preventDefault();const t=document.querySelector(id);if(t){const y=t.getBoundingClientRect().top+window.scrollY-nav.offsetHeight-16;window.scrollTo({top:y,behavior:'smooth'})}}));

  /* Reveal */
  const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.rv').forEach(el=>ro.observe(el));

  /* Stat counters */
  const nums=document.querySelectorAll('.stats__num');let done=false;
  const fmt=(n,sep)=>sep?n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,sep):n.toString();
  const anim=el=>{const t=+el.dataset.target,p=el.dataset.prefix||'',s=el.dataset.suffix||'',sp=el.dataset.sep||'';const dur=2000,st=performance.now();(function u(now){const pr=Math.min((now-st)/dur,1),ea=1-Math.pow(1-pr,3),c=Math.round(ea*t);el.textContent=p+fmt(c,sp)+s;if(pr<1)requestAnimationFrame(u)})(st)};
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;nums.forEach((el,i)=>setTimeout(()=>anim(el),i*150));so.disconnect()}}),{threshold:.5});
  if(nums.length)so.observe(nums[0].closest('.stats__in')||nums[0]);

  /* Portfolio filters */
  const fils=document.querySelectorAll('.pf-f'),items=document.querySelectorAll('.pf-item');
  fils.forEach(f=>f.addEventListener('click',()=>{fils.forEach(b=>b.classList.remove('on'));f.classList.add('on');const v=f.dataset.filter;items.forEach(i=>{i.classList.toggle('hide',v!=='all'&&i.dataset.cat!==v)})}));

  /* Video overlay */
  const vid=document.getElementById('vid'),vf=document.getElementById('vid-f'),vx=vid.querySelector('.vid__x');
  const openV=id=>{vf.innerHTML=`<iframe src="https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0" allow="autoplay;fullscreen" allowfullscreen></iframe>`;vid.classList.add('on');document.body.classList.add('locked')};
  const closeV=()=>{vid.classList.remove('on');document.body.classList.remove('locked');setTimeout(()=>vf.innerHTML='',300)};
  items.forEach(i=>i.addEventListener('click',()=>{const id=i.dataset.vimeo;if(id)openV(id)}));
  vx.addEventListener('click',closeV);
  vid.addEventListener('click',e=>{if(e.target===vid)closeV()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&vid.classList.contains('on'))closeV()});

  /* FAQ */
  document.querySelectorAll('.faq__item').forEach(item=>{const q=item.querySelector('.faq__q');q.addEventListener('click',()=>{const open=item.classList.contains('on');document.querySelectorAll('.faq__item').forEach(o=>{if(o!==item){o.classList.remove('on');o.querySelector('.faq__q').setAttribute('aria-expanded','false')}});item.classList.toggle('on');q.setAttribute('aria-expanded',!open)})});

  /* Calendly lazy */
  const cal=document.getElementById('cal-container');
  if(cal){const co=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cal.innerHTML=`<iframe src="https://calendly.com/irysagency?hide_gdpr_banner=1&background_color=0d0d0d&text_color=f5f0e8&primary_color=e63946" style="width:100%;height:680px;border:none;border-radius:16px" loading="lazy"></iframe>`;co.disconnect()}}),{rootMargin:'200px'});co.observe(cal)}

});
