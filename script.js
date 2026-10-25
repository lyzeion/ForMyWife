(function(){
  var $=function(i){return document.getElementById(i)};
  var store={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

  /* Nama */
  function setName(n){n=(n||'sayang').trim()||'sayang';$('nm').textContent=n;
    document.querySelectorAll('.nmx').forEach(function(e){e.textContent=n});}
  setName('Alifia Azzwa Arin');

  /* Hati melayang */
  function hearts(n){
    var set=['💗','💖','💕','🌷','✨'];
    for(var i=0;i<n;i++)(function(i){setTimeout(function(){
      var h=document.createElement('span');h.className='heart';
      h.textContent=set[Math.floor(Math.random()*set.length)];
      h.style.left=Math.random()*92+'vw';h.style.fontSize=(18+Math.random()*22)+'px';
      document.body.appendChild(h);setTimeout(function(){h.remove()},4100);
    },i*120)})(i);
  }

  /* Tombol buka */
  $('open').onclick=function(){hearts(16);$('surat').scrollIntoView({behavior:'smooth'})};



  /* Galeri foto */
var photos=[
  {src:'images/foto1.png',cap:'💗'},
  {src:'images/foto2.jpg',cap:'💗'},
  {src:'images/foto3.png',cap:'💗'},
  {src:'images/foto4.png',cap:'💗'},
  {src:'images/foto5.png',cap:'💗'},
  {src:'images/foto6.png',cap:'💗'}
];
var g=$('gallery');
photos.forEach(function(p){
  var b=document.createElement('button');b.type='button';b.className='ph';
  b.setAttribute('aria-label','Foto: '+p.cap);
  b.innerHTML='<span class="ph-in"><i>📷</i>'+p.cap+'</span>';
  if(p.src){
    var im=new Image();im.alt=p.cap;im.src=p.src;
    im.onload=function(){b.insertBefore(im,b.firstChild);b.classList.add('has')};
  }
 
  g.appendChild(b);
});


  /* Pesan semangat acak */
  var msgs=[
    'Kamu hebat, aku bangga banget sama kamu.',
    'Tarik napas dulu. Satu langkah kecil juga sudah maju.',
    'Kalau capek, bersandar saja di aku.',
    'Hari ini berat, tapi kamu lebih kuat dari yang kamu kira.',
    'Jangan lupa makan dan minum ya, sayang.',
    'Aku percaya kamu bisa. Selalu.',
    'Kamu tidak harus sempurna untuk dicintai.',
    'Apa pun hasilnya, kamu tetap juara di hatiku.',
    'Habis ini istirahat ya, aku peluk dari jauh. 🤍'
  ];
  var last=-1;
  $('boostBtn').onclick=function(){
    var i;do{i=Math.floor(Math.random()*msgs.length)}while(i===last);last=i;
    $('bubble').textContent=msgs[i];hearts(12);
  };
})();
