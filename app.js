/* ===== DATA ===== */
const ROWS=[["あいうえお","a i u e o"],["かきくけこ","ka ki ku ke ko"],["さしすせそ","sa shi su se so"],["たちつてと","ta chi tsu te to"],["なにぬねの","na ni nu ne no"],["はひふへほ","ha hi fu he ho"],["まみむめも","ma mi mu me mo"],["や_ゆ_よ","ya _ yu _ yo"],["らりるれろ","ra ri ru re ro"],["わ___を","wa _ _ _ wo"],["ん","n"]];
const DAK=[["がぎぐげご","ga gi gu ge go"],["ざじずぜぞ","za ji zu ze zo"],["だぢづでど","da ji zu de do"],["ばびぶべぼ","ba bi bu be bo"],["ぱぴぷぺぽ","pa pi pu pe po"]];
const kata=s=>[...s].map(c=>c>="ぁ"&&c<="ゖ"?String.fromCharCode(c.charCodeAt(0)+96):c).join("");
const build=(rows,k)=>rows.map(([s,r])=>{const R=r.split(" ");return[...s].map((c,i)=>({jp:k?kata(c):c,ro:R[i]}))});
const SETS={hiragana:{name:"ฮิรางะนะ",icon:"あ",groups:[["พื้นฐาน",build(ROWS)],["เสียงขุ่น / กึ่งขุ่น",build(DAK)]]},
katakana:{name:"คาตาคานะ",icon:"ア",groups:[["พื้นฐาน",build(ROWS,1)],["เสียงขุ่น / กึ่งขุ่น",build(DAK,1)]]}};
const VCATS=[["สัตว์","🐱","ねこ(猫)|neko|แมว/cat;いぬ(犬)|inu|หมา/dog/สุนัข;さかな(魚)|sakana|ปลา/fish;とり(鳥)|tori|นก/bird;うま(馬)|uma|ม้า/horse;うさぎ(兎)|usagi|กระต่าย/rabbit;ぞう(象)|zou|ช้าง/elephant;さる(猿)|saru|ลิง/monkey"],
["อาหารและเครื่องดื่ม","🍜","ごはん(ご飯)|gohan|ข้าว/rice/meal;みず(水)|mizu|น้ำ/water;おちゃ(お茶)|ocha|ชา/tea;パン|pan|ขนมปัง/bread;たまご(卵)|tamago|ไข่/egg;にく(肉)|niku|เนื้อ/meat;りんご(林檎)|ringo|แอปเปิล/apple;コーヒー|koohii|กาแฟ/coffee;ラーメン|raamen|ราเมง/ramen"],
["สิ่งของในบ้าน","🏠","いえ(家)|ie|บ้าน/house/home;へや(部屋)|heya|ห้อง/room;つくえ(机)|tsukue|โต๊ะ/desk;いす(椅子)|isu|เก้าอี้/chair;ベッド|beddo|เตียง/bed;ドア|doa|ประตู/door;まど(窓)|mado|หน้าต่าง/window;かさ(傘)|kasa|ร่ม/umbrella"],
["ครอบครัวและบุคคล","👨‍👩‍👧","かぞく(家族)|kazoku|ครอบครัว/family;おかあさん(お母さん)|okaasan|แม่/mother/mom;おとうさん(お父さん)|otousan|พ่อ/father/dad;あに(兄)|ani|พี่ชาย/older brother;あね(姉)|ane|พี่สาว/older sister;いもうと(妹)|imouto|น้องสาว/younger sister;ともだち(友達)|tomodachi|เพื่อน/friend;ひと(人)|hito|คน/person"],
["โรงเรียนและการเรียน","🎒","がっこう(学校)|gakkou|โรงเรียน/school;せんせい(先生)|sensei|ครู/teacher;がくせい(学生)|gakusei|นักเรียน/student;ほん(本)|hon|หนังสือ/book;えんぴつ(鉛筆)|enpitsu|ดินสอ/pencil;ノート|nooto|สมุด/notebook;しゅくだい(宿題)|shukudai|การบ้าน/homework;しけん(試験)|shiken|สอบ/exam/test"],
["ธรรมชาติและสภาพอากาศ","🌸","やま(山)|yama|ภูเขา/mountain;うみ(海)|umi|ทะเล/sea/ocean;かわ(川)|kawa|แม่น้ำ/river;き(木)|ki|ต้นไม้/tree;はな(花)|hana|ดอกไม้/flower;あめ(雨)|ame|ฝน/rain;ゆき(雪)|yuki|หิมะ/snow;かぜ(風)|kaze|ลม/wind;そら(空)|sora|ท้องฟ้า/sky"],
["สี","🎨","あか(赤)|aka|แดง/red;あお(青)|ao|น้ำเงิน/blue;きいろ(黄色)|kiiro|เหลือง/yellow;みどり(緑)|midori|เขียว/green;しろ(白)|shiro|ขาว/white;くろ(黒)|kuro|ดำ/black;ピンク|pinku|ชมพู/pink;むらさき(紫)|murasaki|ม่วง/purple"],
["เวลาและวัน","⏰","きょう(今日)|kyou|วันนี้/today;あした(明日)|ashita|พรุ่งนี้/tomorrow;きのう(昨日)|kinou|เมื่อวาน/yesterday;あさ(朝)|asa|เช้า/morning;ひる(昼)|hiru|กลางวัน/noon/daytime;よる(夜)|yoru|กลางคืน/night;いま(今)|ima|ตอนนี้/now;まいにち(毎日)|mainichi|ทุกวัน/every day"],
["คำกริยา","🏃","たべる(食べる)|taberu|กิน/to eat/eat;のむ(飲む)|nomu|ดื่ม/to drink/drink;いく(行く)|iku|ไป/to go/go;くる(来る)|kuru|มา/to come/come;みる(見る)|miru|ดู/to see/to watch/see/watch;きく(聞く)|kiku|ฟัง/to listen/to hear/listen;よむ(読む)|yomu|อ่าน/to read/read;かく(書く)|kaku|เขียน/to write/write"],
["ความรู้สึกและอารมณ์","😆","うれしい(嬉しい)|ureshii|ดีใจ/happy/glad;たのしい(楽しい)|tanoshii|สนุก/fun;かなしい(悲しい)|kanashii|เศร้า/sad;こわい(怖い)|kowai|น่ากลัว/scary/afraid;ねむい(眠い)|nemui|ง่วง/sleepy;すき(好き)|suki|ชอบ/like;きらい(嫌い)|kirai|เกลียด/dislike;はずかしい(恥ずかしい)|hazukashii|อาย/embarrassed/shy"],
["เกมและเทคโนโลยี","🎮","ゲーム|geemu|เกม/game;スマホ|sumaho|สมาร์ทโฟน/smartphone/phone;パソコン|pasokon|คอมพิวเตอร์/computer/pc;インターネット|intaanetto|อินเทอร์เน็ต/internet;アプリ|apuri|แอป/app;メール|meeru|อีเมล/email/mail;しゃしん(写真)|shashin|รูปถ่าย/photo;カメラ|kamera|กล้อง/camera"],
["การเดินทางและยานพาหนะ","🚆","くるま(車)|kuruma|รถ/car;でんしゃ(電車)|densha|รถไฟ/train;バス|basu|รถบัส/bus;ひこうき(飛行機)|hikouki|เครื่องบิน/airplane/plane;じてんしゃ(自転車)|jitensha|จักรยาน/bicycle/bike;タクシー|takushii|แท็กซี่/taxi;えき(駅)|eki|สถานี/station;ふね(船)|fune|เรือ/ship/boat"],
["เสื้อผ้าและเครื่องแต่งกาย","👗","ふく(服)|fuku|เสื้อผ้า/clothes;シャツ|shatsu|เสื้อเชิ้ต/shirt;ズボン|zubon|กางเกง/pants/trousers;くつ(靴)|kutsu|รองเท้า/shoes;ぼうし(帽子)|boushi|หมวก/hat/cap;めがね(眼鏡)|megane|แว่นตา/glasses;かばん(鞄)|kaban|กระเป๋า/bag;スカート|sukaato|กระโปรง/skirt"],
["สถานที่","📍","びょういん(病院)|byouin|โรงพยาบาล/hospital;みせ(店)|mise|ร้าน/shop/store;こうえん(公園)|kouen|สวนสาธารณะ/park;ぎんこう(銀行)|ginkou|ธนาคาร/bank;としょかん(図書館)|toshokan|ห้องสมุด/library;レストラン|resutoran|ร้านอาหาร/restaurant;トイレ|toire|ห้องน้ำ/toilet/restroom;くうこう(空港)|kuukou|สนามบิน/airport"],
["คำคุณศัพท์","✨","おおきい(大きい)|ookii|ใหญ่/big/large;ちいさい(小さい)|chiisai|เล็ก/small;あたらしい(新しい)|atarashii|ใหม่/new;ふるい(古い)|furui|เก่า/old;たかい(高い)|takai|แพง/สูง/expensive/high/tall;やすい(安い)|yasui|ถูก/cheap;おいしい(美味しい)|oishii|อร่อย/delicious/tasty;かわいい(可愛い)|kawaii|น่ารัก/cute"]];
const VOCAB=VCATS.flatMap(([n,e,t],ci)=>t.split(";").map(l=>{const[jp,ro,m]=l.split("|"),a=m.split("/");return{jp,ro,th:a[0],en:a.slice(1),alts:a,cat:ci}}));
const PART=`は|wa|ชี้หัวข้อของประโยค (ส่วนเรื่อง...)|わたしは たなかです。|watashi wa tanaka desu.|ฉันชื่อทานากะ|wa ta shi ha ta na ka de su|wa ta shi wa ta na ka de su|เมื่อ は เป็นคำช่วย จะไม่อ่านว่า "ฮะ (ha)" แต่อ่านว่า "วะ (wa)"
が|ga|ชี้ประธาน / สิ่งที่ชอบ-ทำได้|ねこが すきです。|neko ga suki desu.|ชอบแมว|||
を|o|ชี้กรรมของกริยา|みずを のみます。|mizu o nomimasu.|ดื่มน้ำ|||
に|ni|เวลา / จุดหมาย / ที่ที่อยู่|がっこうに いきます。|gakkou ni ikimasu.|ไปโรงเรียน|||
で|de|สถานที่ที่ทำกริยา / วิธีการ|うちで たべます。|uchi de tabemasu.|กินที่บ้าน|||
の|no|ของ (ความเป็นเจ้าของ)|わたしの ほん。|watashi no hon|หนังสือของฉัน|||
と|to|และ / กับ|ともだちと いきます。|tomodachi to ikimasu.|ไปกับเพื่อน|||
も|mo|ก็ / เหมือนกัน|わたしも がくせいです。|watashi mo gakusei desu.|ฉันก็เป็นนักเรียน|||
へ|e|ไปทางทิศ... |にほんへ いきます。|nihon e ikimasu.|ไปญี่ปุ่น|ni ho n he i ki ma su|ni ho n e i ki ma su|へ เป็นคำช่วยอ่านว่า "เอะ (e)" ไม่ใช่ "เฮะ (he)"
から|kara|จาก / เพราะ|タイから きました。|tai kara kimashita.|มาจากไทย|||
まで|made|จนถึง|ごじまで はたらきます。|goji made hatarakimasu.|ทำงานถึงห้าโมง|||
か|ka|ท้ายประโยคทำให้เป็นคำถาม|おげんきですか。|ogenki desu ka.|สบายดีไหม|||`.split("\n").map(l=>{const[p,rd,use,ex,exr,th,wr,ok,note]=l.split("|");return{p,rd,use,ex,exr,th,wr,ok,note}});
const flat=k=>SETS[k].groups.flatMap(g=>g[1].flat()).filter(x=>x.ro!=="_"&&x.jp!=="_");

/* ===== UTIL ===== */
const $=s=>document.querySelector(s),app=$("#app");
const norm=s=>s.toLowerCase().trim().replace(/\s+/g," ").replace(/\bsi\b/g,"shi").replace(/\bti\b/g,"chi").replace(/\btu\b/g,"tsu").replace(/\bhu\b/g,"fu").replace(/\b(zi|di)\b/g,"ji").replace(/\bdu\b/g,"zu").replace(/ou\b/g,"o").replace(/oo/g,"o");
// ตัดคันจิที่อยู่ในวงเล็บออกก่อนอ่านเสียง
const cleanJP = t => t
  .replace(/[(（][一-龯々〆ヵヶ]+[)）]/g, "")
  .replace(/\s+/g, " ")
  .trim();
/* ----- AUDIO (Safari-safe: ตัวเล่นเสียงตัวเดียว + ปลดล็อกตอนแตะครั้งแรก) ----- */
const au=new Audio();au.preload="auto";let unlocked=false;
const pickJa=re=>{const v=(window.speechSynthesis?.getVoices()||[]).filter(x=>x.lang.replace("_","-").startsWith("ja"));return v.find(x=>re.test(x.name))||v[0]};
const UA=navigator.userAgent,WK=/iP(ad|hone|od)/.test(UA)||(/Macintosh/.test(UA)&&navigator.maxTouchPoints>1)||(/Safari/.test(UA)&&!/Chrome|Chromium|Android/.test(UA));
const speak=(t,rate,pitch,re)=>{const S=window.speechSynthesis;if(!S)return;const u=new SpeechSynthesisUtterance(t);u.lang="ja-JP";u.rate=rate;u.pitch=pitch;const b=pickJa(re);if(b)u.voice=b;if(S.speaking||S.pending)S.cancel();S.speak(u)};
const tts=t=>speak(t,WK?.8:.8,1,/kyoko|google|nanami|haruka|o-ren/i);
const ttsK=t=>speak(t,WK?.75:.8,1.8,/kyoko|nanami|haruka|o-ren|google/i);
const G=t=>"https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q="+encodeURIComponent(t);
const playUrl=(url,rate,fail)=>{let f=false;const bad=()=>{if(f)return;f=true;fail()};au.pause();au.onerror=bad;au.defaultPlaybackRate=rate;au.preservesPitch=au.mozPreservesPitch=au.webkitPreservesPitch=rate===1;au.src=url;au.playbackRate=rate;const p=au.play();p&&p.catch(e=>{if(e&&e.name==="AbortError")return;bad()})};
const KBASE="voice/kitty/";
// Safari/iPad/iPhone: ใช้เสียงญี่ปุ่นในเครื่องตรงๆ (เล่นทันทีตอนแตะ) ส่วนเบราว์เซอร์อื่นใช้เสียง Google
const sayKfx=t=>{t=cleanJP(t);if(WK)return ttsK(t);playUrl(G(t),1.08,()=>ttsK(t))};
const sayK=t=>{t=cleanJP(t);if([...t].length>24)return sayKfx(t);playUrl(KBASE+encodeURIComponent(t)+".wav",1,()=>sayKfx(t))};
const say=sayK; 
const unlock=()=>{if(unlocked)return;unlocked=true;au.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";const p=au.play();p&&p.catch(()=>{});try{const u=new SpeechSynthesisUtterance(" ");u.volume=0;window.speechSynthesis.speak(u)}catch{}};
["pointerdown","touchstart","click","keydown"].forEach(e=>addEventListener(e,unlock,{once:true,passive:true}));
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
let best=store.get("best",0),streak=0;
let xp=store.get("xp",0);const lvl=()=>Math.floor(xp/100)+1;const addXp=n=>{xp+=n;store.set("xp",xp);hud()};
const hud=()=>{$("#hudStreak").textContent="🔥 "+streak+" · 🏆 "+best;$("#hudBest").textContent="⭐ Lv "+lvl()+" · "+(xp%100)+"/100"};
const rain=()=>{const r=$("#rain"),ch="あいうえおアイウエオ日月火水木金土桜愛夢";for(let i=0;i<22;i++){const s=document.createElement("span");s.textContent=ch[Math.floor(Math.random()*ch.length)];s.style.cssText=`left:${Math.random()*100}%;font-size:${20+Math.random()*50}px;animation-duration:${14+Math.random()*20}s;animation-delay:-${Math.random()*30}s`;r.append(s)}};

/* ===== VIEWS ===== */
const tile=(h,k,t,s,c="")=>`<a class="tile ${c}" href="${h}"><span class="kana">${k}</span><h2>${t}</h2><small>${s}</small></a>`;
const views={
learnKana:k=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">${SETS[k].name}</h1><p class="sub">กดที่ตัวอักษรเพื่อฟังเสียงอ่าน</p>`+SETS[k].groups.map(([n,rows])=>`<div class="sec">${n}</div><div class="grid">${rows.flat().map(x=>x.ro==="_"||x.jp==="_"?`<div class="card blank"></div>`:`<button class="card" data-s="${x.jp}">${x.jp}<small>${x.ro}</small></button>`).join("")}</div>`).join("")+`<a class="btn" href="#/test/${k}">ทดสอบเลย</a>`
};

/* ===== VIEWS V2 ===== */
const kname=k=>k==="vocab"?"คำศัพท์":SETS[k].name;
const T={learn:["แบบเรียน","เลือกหมวดที่อยากฝึก"],test:["แบบทดสอบ","เลือกหมวดที่อยากทดสอบ"],"play/match":["จับคู่การ์ด","เลือกหมวดที่อยากเล่น"],"play/speed":["สปีดรัน 30 วิ","เลือกหมวดที่อยากเล่น"]};
views.play=()=>`<a class="crumb" href="#/">← กลับ</a><h1 class="page">เกม</h1><p class="sub">เล่นสนุกแล้วได้ XP ด้วย</p><div class="tiles">${tile("#/play/match","🃏","จับคู่การ์ด","จับอักษรคู่กับคำอ่าน/คำแปล","red")}${tile("#/play/speed","⚡","สปีดรัน","30 วินาที ตอบให้ได้มากที่สุด","blue")}</div>`;

/* ===== QUIZ V2 ===== */
let run=0;
const lab=(q,k)=>k==="vocab"?q.en[0]+" · "+q.th:q.ro;
const mk=(q,pool,k,listen)=>{const f=listen?x=>x.jp:x=>lab(x,k),a=f(q),set=new Set([a]);for(const x of shuffle(pool)){if(set.size>=4)break;set.add(f(x))}return shuffle([...set]).map(t=>({t,ok:t===a}))};
const opts=(q,pool,k,l)=>`<div class="opts ${l?"jp":""}">${mk(q,pool,k,l).map(o=>`<button class="opt" data-ok="${o.ok}">${o.t}</button>`).join("")}</div>`;
const bump=()=>{if(streak>best){best=streak;store.set("best",best)}hud()};
const pickMode=k=>{app.innerHTML=`<a class="crumb" href="#/test">← กลับ</a><h1 class="page">เลือกวิธีตอบ</h1><p class="sub">${kname(k)}</p><div class="tiles">${tile(`#/test/${k}/choice`,"👆","แตะเลือก","4 ตัวเลือก เหมาะกับมือถือ")}${tile(`#/test/${k}/type`,"⌨️","พิมพ์ตอบเอง","พิมพ์โรมันจิ / คำแปล","red")}${tile(`#/test/${k}/listen`,"👂","ฟังแล้วเลือก","ฟังเสียง เลือกตัวที่ใช่","blue")}</div>`};
function quiz(kind,mode){
  if(!["choice","type","listen"].includes(mode))return pickMode(kind);
  const pool=kind==="vocab"?VOCAB:flat(kind),N=10,qs=shuffle(pool).slice(0,N),word=kind==="vocab",id=++run;let i=0,score=0,miss=[],locked=false;
  const ans=q=>word?q.en[0]+" / "+q.th:q.ro;
  const show=()=>{locked=false;const q=qs[i];
    const prompt=mode==="listen"?`<button class="q speak" id="snd" aria-label="ฟังเสียง">🔊</button><div class="hint">แตะเพื่อฟังอีกครั้ง แล้วเลือกตัวที่ได้ยิน</div>`:`<div class="q ${word?"word":""}">${q.jp}</div><div class="hint">${mode==="type"?(word?"พิมพ์ความหมาย (อังกฤษ/ไทย)":"พิมพ์โรมันจิ เช่น ka, shi")+" • ":""}<a href="#" id="snd">🔊 ฟังเสียง</a></div>`;
    const body=mode==="type"?`<input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="คำตอบ"><div class="fb" id="fb"></div><button class="btn" id="go">ตรวจคำตอบ</button><button class="btn ghost" id="skip">ข้าม</button>`:opts(q,pool,kind,mode==="listen")+`<div class="fb" id="fb"></div>`;
    app.innerHTML=`<div class="quiz"><a class="crumb" href="#/test/${kind}">← เปลี่ยนโหมด</a><div class="bar"><i style="width:${i/N*100}%"></i></div>${prompt}${body}</div>`;
    $("#snd").onclick=e=>{e.preventDefault();say(q.jp)};setTimeout(()=>say(q.jp),150);
    if(mode==="type"){const inp=$("#ans");inp.focus();$("#go").onclick=check;$("#skip").onclick=()=>{if(!locked)finish(false)};inp.onkeydown=e=>{if(e.key==="Enter")check()}}
    else document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(locked)return;const ok=b.dataset.ok==="true";b.classList.add(ok?"ok":"no");if(!ok)$('.opt[data-ok="true"]').classList.add("ok");finish(ok)});
  };
  const check=()=>{if(locked)return;const v=norm($("#ans").value);if(!v)return;const q=qs[i];finish(word?q.alts.some(a=>norm(a)===v)||norm(q.ro)===v:norm(q.ro)===v)};
  const finish=ok=>{locked=true;const q=qs[i];
    if(ok){score++;streak++;addXp(10)}else{streak=0;miss.push(`${q.jp} = ${ans(q)}`)}
    bump();if(mode==="type"){$("#ans").className=ok?"ok":"no";$("#go")?.remove();$("#skip")?.remove()}
    $("#fb").innerHTML=ok?`✅ ถูกต้อง! +10 XP`:`❌ เฉลย: <b>${ans(q)}</b>`;
    setTimeout(()=>{if(id!==run)return;i++;i<N?show():end()},ok?700:1500)};
  const end=()=>{addXp(score>=9?20:0);app.innerHTML=`<div class="quiz"><div class="score">${score}/${N}</div><h1 class="page">${score>=9?"สุดยอด! 🌸":score>=6?"เก่งมาก!":"ฝึกอีกนิดนะ สู้ๆ!"}</h1><p class="sub">${hudText()}</p>${miss.length?`<div class="sec">ที่ควรทบทวน</div><div class="wrong">${miss.map(m=>`<span>${m}</span>`).join("")}</div>`:""}<a class="btn" href="#/test/${kind}/${mode}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/learn/${kind}">กลับไปเรียน</a></div>`;$("#again").onclick=e=>{e.preventDefault();quiz(kind,mode)}};
  show();
}
const hudText=()=>`⭐ Lv ${lvl()} • สตรีคสูงสุด 🏆 ${best}`;

/* ===== GAMES ===== */
function match(kind){
  const pool=kind==="vocab"?VOCAB:flat(kind),ps=shuffle(pool).slice(0,6);run++;
  const cards=shuffle(ps.flatMap((p,n)=>[{id:n,t:p.jp,j:1},{id:n,t:lab(p,kind),j:0}]));
  let sel=null,done=0,moves=0;const t0=Date.now();
  app.innerHTML=`<a class="crumb" href="#/play/match">← กลับ</a><h1 class="page">จับคู่การ์ด</h1><p class="sub">แตะอักษรกับคำอ่าน/คำแปลที่ตรงกัน • <b id="mv">0</b> ครั้ง</p><div class="mgrid">${cards.map((c,n)=>`<button class="mc ${c.j?"jp":""}">${c.t}</button>`).join("")}</div>`;
  document.querySelectorAll(".mc").forEach((b,n)=>b.onclick=()=>{
    const c=cards[n];if(b.classList.contains("hit")||b.classList.contains("bad")||(sel&&sel.b===b))return;
    if(c.j)say(c.t);b.classList.add("on");if(!sel){sel={b,c};return}
    const s=sel;sel=null;moves++;$("#mv").textContent=moves;
    if(s.c.id===c.id&&s.c.j!==c.j){[s.b,b].forEach(x=>{x.classList.remove("on");x.classList.add("hit")});streak++;bump();if(++done===6)win()}
    else{[s.b,b].forEach(x=>x.classList.add("bad"));streak=0;hud();setTimeout(()=>[s.b,b].forEach(x=>x.classList.remove("on","bad")),500)}});
  const win=()=>{const xpg=Math.max(20,70-moves*3);addXp(xpg);setTimeout(()=>{app.innerHTML=`<div class="quiz"><div class="score">🎉</div><h1 class="page">จับคู่ครบแล้ว!</h1><p class="sub">${moves} ครั้ง • ${Math.round((Date.now()-t0)/1000)} วินาที • +${xpg} XP</p><a class="btn" href="#/play/match/${kind}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();match(kind)}},500)};
}
function speed(kind){
  const pool=kind==="vocab"?VOCAB:flat(kind),id=++run,key="sp_"+kind,hi=store.get(key,0);let t=30,score=0,q;
  app.innerHTML=`<div class="quiz"><a class="crumb" href="#/play/speed">← กลับ</a><div class="bar"><i id="tb" style="width:100%"></i></div><div class="hud2"><span>⏱ <b id="tm">30</b></span><span>คะแนน <b id="sc">0</b></span><span>🏆 ${hi}</span></div><div class="q ${kind==="vocab"?"word":""}" id="sq"></div><div id="so"></div><p class="hint">ตอบผิดเสียเวลา 2 วินาที</p></div>`;
  const next=()=>{q=pool[Math.floor(Math.random()*pool.length)];$("#sq").textContent=q.jp;$("#so").innerHTML=opts(q,pool,kind,false)};
  $("#so").onclick=e=>{const b=e.target.closest(".opt");if(!b||b.disabled)return;
    if(b.dataset.ok==="true"){score++;$("#sc").textContent=score;streak++;bump();next()}else{streak=0;hud();t=Math.max(0,t-2);b.disabled=true;b.classList.add("no")}};
  const iv=setInterval(()=>{if(id!==run){clearInterval(iv);return}t--;$("#tm").textContent=t;$("#tb").style.width=t/30*100+"%";if(t<=0){clearInterval(iv);over()}},1000);
  const over=()=>{const nb=score>hi;if(nb)store.set(key,score);addXp(score*3);app.innerHTML=`<div class="quiz"><div class="score">${score}</div><h1 class="page">${nb?"สถิติใหม่! 🔥":"หมดเวลา!"}</h1><p class="sub">+${score*3} XP • สถิติสูงสุด ${Math.max(score,hi)}</p><a class="btn" href="#/play/speed/${kind}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();speed(kind)}};
  next();
}

/* ===== V3: mascot, vocab cats, particles, writing ===== */
T.write=["ฝึกเขียน","เลือกชุดอักษรที่อยากฝึกเขียนตามเส้น"];
const PH=[["こんにちは！","สวัสดี!"],["がんばって！","สู้ๆ นะ!"],["すごい！","เก่งมากเลย!"],["だいすき！","รักที่สุดเลย!"],["いっしょにあそぼう！","มาเล่นด้วยกันนะ!"],["おなかすいた","หิวจังเลย"],["かわいい！","น่ารักจัง!"]];
const SK='<g stroke="#5a2145" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">',EK="</g>";
const EYES='<ellipse cx="68" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/><ellipse cx="132" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/>';
const CHEEK='<circle cx="48" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/><circle cx="152" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/>';
const svgOf=(n,body)=>`<svg id="mas" viewBox="0 0 200 190" role="img" aria-label="${n}">${SK}${body}${EK}</svg>`;
const MASCOTS={
 kitty:{e:"🐱",name:"คิตตี้จัง",svg:`<svg id="mas" viewBox="0 0 200 190" role="img" aria-label="คิตตี้จัง"><g stroke="#5a2145" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M38 78 L44 14 L88 46Z M162 78 L156 14 L112 46Z" fill="#fff"/><ellipse cx="100" cy="108" rx="80" ry="64" fill="#fff"/><path d="M52 62 L50 34 L72 50Z" fill="#ffc2da" stroke="none"/><ellipse cx="68" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/><ellipse cx="132" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/><ellipse cx="100" cy="120" rx="9" ry="6" fill="#ffb703" stroke-width="3"/><path d="M90 132q10 9 20 0" fill="none" stroke-width="4"/><path d="M12 112l34 6M12 130l34-4M188 112l-34 6M188 130l-34-4" fill="none" stroke-width="3"/><circle cx="48" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/><circle cx="152" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/><path d="M138 40 L172 22 L168 62Z M138 40 L110 20 L116 60Z" fill="#ff4f8b"/><circle cx="140" cy="40" r="10" fill="#ff8fb8"/></g></svg>`},
 bunny:{e:"🐰",name:"อุซางิจัง",svg:svgOf("อุซางิจัง",`<ellipse cx="68" cy="40" rx="16" ry="38" fill="#fff"/><ellipse cx="132" cy="40" rx="16" ry="38" fill="#fff"/><ellipse cx="68" cy="46" rx="7" ry="25" fill="#ffc2da" stroke="none"/><ellipse cx="132" cy="46" rx="7" ry="25" fill="#ffc2da" stroke="none"/><ellipse cx="100" cy="116" rx="74" ry="60" fill="#fff"/>${EYES}<ellipse cx="100" cy="122" rx="8" ry="5" fill="#ff8fb8" stroke-width="3"/><path d="M90 133q10 10 10 0q0 10 10 0" fill="none" stroke-width="4"/>${CHEEK}`)},
 shiba:{e:"🐶",name:"โชจัง",svg:svgOf("โชจัง",`<path d="M34 92 L36 22 L84 56Z M166 92 L164 22 L116 56Z" fill="#f5a04a"/><path d="M46 70 L46 40 L68 56Z M154 70 L154 40 L132 56Z" fill="#ffe0b8" stroke="none"/><ellipse cx="100" cy="112" rx="78" ry="62" fill="#f5a04a"/><ellipse cx="100" cy="134" rx="46" ry="30" fill="#fff3df" stroke="none"/>${EYES}<ellipse cx="100" cy="120" rx="10" ry="7" fill="#5a2145" stroke-width="3"/><path d="M100 127v6M88 136q12 10 12 -3q0 13 12 3" fill="none" stroke-width="4"/><path d="M96 140q4 14 8 0Z" fill="#ff7a9a" stroke-width="3"/>${CHEEK}`)},
 bear:{e:"🐻",name:"คุมะจัง",svg:svgOf("คุมะจัง",`<circle cx="42" cy="58" r="28" fill="#b97a4a"/><circle cx="158" cy="58" r="28" fill="#b97a4a"/><circle cx="42" cy="58" r="13" fill="#e8b08a" stroke="none"/><circle cx="158" cy="58" r="13" fill="#e8b08a" stroke="none"/><ellipse cx="100" cy="112" rx="78" ry="64" fill="#b97a4a"/><ellipse cx="100" cy="132" rx="36" ry="28" fill="#f3d3b5" stroke="none"/>${EYES}<ellipse cx="100" cy="122" rx="10" ry="7" fill="#5a2145" stroke-width="3"/><path d="M100 129v5M90 138q10 8 10 -4q0 12 10 4" fill="none" stroke-width="4"/>${CHEEK}`)},
 penguin:{e:"🐧",name:"เพนจัง",svg:svgOf("เพนจัง",`<ellipse cx="100" cy="108" rx="76" ry="66" fill="#4a5a8a"/><ellipse cx="100" cy="126" rx="52" ry="42" fill="#fff" stroke="none"/><circle cx="68" cy="98" r="14" fill="#fff" stroke-width="3"/><circle cx="132" cy="98" r="14" fill="#fff" stroke-width="3"/><ellipse cx="70" cy="100" rx="6" ry="9" fill="#5a2145" class="eye"/><ellipse cx="130" cy="100" rx="6" ry="9" fill="#5a2145" class="eye"/><path d="M86 114 L114 114 L100 132Z" fill="#ffb703" stroke-width="4"/><path d="M12 120q-6 30 22 40M188 120q6 30 -22 40" fill="none" stroke-width="5"/><circle cx="50" cy="122" r="9" fill="#ff8fb8" stroke="none" opacity=".7"/><circle cx="150" cy="122" r="9" fill="#ff8fb8" stroke="none" opacity=".7"/>`)}
};
let mkey=store.get("mascot","kitty");if(!MASCOTS[mkey])mkey="kitty";
const MC=()=>MASCOTS[mkey];
views.home=()=>`<section class="hero"><div class="hl"><h1>เรียนภาษาญี่ปุ่น</h1><p>อ่าน ฟัง เขียนตามเส้น เล่นเกม สะสม XP เลเวลอัปไปกับ${MC().name}</p><div class="tiles">${tile("#/learn","学","แบบเรียน","อักษร • คำศัพท์ • คำช่วย")}${tile("#/write","✏️","ฝึกเขียน","ลากนิ้วเขียนตามเส้น","blue")}${tile("#/read","知","ความรู้ทั่วไป","บทความสั้น • ฮิรางะนะล้วน")}${tile("#/speak","🎤","ฝึกพูด","ฟังแล้วพูดตามทีละประโยค","blue")}${tile("#/test","試","แบบทดสอบ","แตะ • พิมพ์ • ฟัง","red")}${tile("#/play","遊","เกม","จับคู่ • สปีดรัน • เกมบทอ่าน")}</div></div>
<div class="mwrap"><div class="bub" id="bub"><b>こんにちは！</b><small>${MC().name}เอง กดที่ตัวฉันสิ~</small></div>${MC().svg}<div class="mpick" aria-label="เลือกตัวละคร">${Object.entries(MASCOTS).map(([k,m])=>`<button data-k="${k}" class="${k===mkey?"on":""}" aria-label="${m.name}" title="${m.name}">${m.e}</button>`).join("")}</div><button class="btn" id="mplay">🎮 เล่นกับ${MC().name}</button></div></section>`;
views.menu=m=>{const t=T[m],L=[["hiragana","あ","ฮิรางะนะ","46 ตัว + เสียงขุ่น"],["katakana","ア","คาตาคานะ","คำต่างชาติ"]];if(m!=="write")L.push(["vocab","語","คำศัพท์",VCATS.length+" หมวด • "+VOCAB.length+" คำ"]);if(m==="learn")L.push(["particle","は","คำช่วย 助詞","は を へ อ่านยังไง"]);
 return `<a class="crumb" href="${m.startsWith("play/")?"#/play":"#/"}">← กลับ</a><h1 class="page">${t[0]}</h1><p class="sub">${t[1]}</p><div class="tiles">${L.map(l=>tile(`#/${m}/${l[0]}`,l[1],l[2],l[3])).join("")}</div>`};
views.vcats=()=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">คำศัพท์</h1><p class="sub">เลือกหมวดที่อยากเรียน</p><div class="cats">${VCATS.map(([n,e],i)=>`<a class="cat" href="#/learn/vocab/${i}"><span>${e}</span>${n}<small>${VOCAB.filter(v=>v.cat===i).length} คำ</small></a>`).join("")}</div><a class="btn" href="#/test/vocab">ทดสอบคำศัพท์ทั้งหมด</a>`;
views.learnVocab=i=>`<a class="crumb" href="#/learn/vocab">← หมวดคำศัพท์</a><h1 class="page">${VCATS[i][1]} ${VCATS[i][0]}</h1><p class="sub">กดการ์ดเพื่อฟังเสียงและพลิกดูความหมาย</p><div class="vgrid">${VOCAB.filter(v=>v.cat===i).map(v=>`<button class="flip" data-s="${v.jp}"><div><span class="face front"><b>${v.jp}</b><span>${v.ro}</span></span><span class="face back">${v.th}<small>${v.en[0]||""}</small></span></div></button>`).join("")}</div>`;
views.particle=()=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">คำช่วย 助詞</h1><p class="sub">ตัวเล็กๆ ที่บอกหน้าที่ของคำในประโยค กดตัวอักษรหรือประโยคเพื่อฟังเสียง</p>${PART.map(p=>`<article class="pcard"><div class="pk" data-s="${p.p}">${p.p}<small>อ่านว่า ${p.rd}</small></div><div><b>${p.use}</b><div class="ex" data-s="${p.ex}">${p.ex} 🔊<br><span>${p.exr}</span><br><i>${p.th}</i></div>${p.wr?`<div class="wrong2"><p class="x">✗ อ่านผิด: ${p.wr}</p><p class="v">✓ อ่านถูก: ${p.ok}</p><small>${p.note}</small></div>`:""}</div></article>`).join("")}`;

function mochi(){
  const el=$("#bub"),m=$("#mas"),pool=flat("hiragana");if(!el||!m)return;
  const heart=()=>{const r=m.getBoundingClientRect();for(let i=0;i<5;i++){const h=document.createElement("span");h.className="heart";h.textContent=["💖","✨","🌸","💗"][i%4];h.style.cssText=`left:${r.left+Math.random()*r.width}px;top:${r.top+r.height/2}px`;document.body.append(h);setTimeout(()=>h.remove(),1100)}};
  const react=(jp,th)=>{el.innerHTML=`<b>${jp}</b><small>${th}</small>`;sayK(jp.replace(/[！…]/g,""));m.classList.remove("hop");void m.offsetWidth;m.classList.add("hop");heart()};
  const ask=()=>{if(!$("#bub"))return;const q=pool[Math.floor(Math.random()*pool.length)];el.innerHTML=`<b>${q.jp}</b><small>${MC().name}ถาม: อ่านว่าอะไรน้า?</small><div class="mopts">${mk(q,pool,"hiragana").map(o=>`<button data-ok="${o.ok}">${o.t}</button>`).join("")}</div>`;sayK(q.jp);
    el.querySelectorAll("button").forEach(b=>b.onclick=()=>{if(b.dataset.ok==="true"){addXp(5);streak++;bump();react("やった！","ถูกต้อง! +5 XP");setTimeout(ask,1600)}else{streak=0;hud();react("ざんねん…","เฉลยคือ "+q.ro+" ลองใหม่นะ");setTimeout(ask,1900)}})};
  m.onclick=()=>{const p=PH[Math.floor(Math.random()*PH.length)];react(p[0],p[1])};$("#mplay").onclick=ask;document.querySelectorAll(".mpick button").forEach(b=>b.onclick=()=>{mkey=b.dataset.k;store.set("mascot",mkey);route();setTimeout(()=>$("#mas")?.click(),60)});
}

function writePage(k){
  const full=SETS[k].groups.flatMap(g=>g[1].flat()),code=c=>c.codePointAt(0).toString(16).padStart(5,"0");
  let cur=full[0],strokes=[],si=0,pts=[],drawing=false,awarded=false,tk=0;
  app.innerHTML=`<a class="crumb" href="#/write">← กลับ</a><h1 class="page">ฝึกเขียน ${SETS[k].name}</h1><p class="sub">ล็อกทีละเส้น ต้องเริ่มที่จุดทองแล้วลากทับเส้นที่สว่างให้สุดและถูกทิศ เส้นที่ไม่ตรงจะไม่ผ่าน</p>
  <div class="wbox"><div class="pad" id="pad"><svg id="gs" viewBox="0 0 109 109"><g id="guides"></g><g id="inked"></g><polyline id="live"/><circle id="start" class="start" r="5.5" cx="-20" cy="-20"/></svg></div>
  <div class="wside"><div class="wch" id="wch"></div><div class="wprog" id="wprog">กำลังโหลดเส้น</div><p class="wstat" id="wstat"></p><button class="btn" id="wplay">▶ ดูทิศเส้นนี้</button><button class="btn ghost" id="wsay">🔊 ฟังเสียง</button><button class="btn ghost" id="wredo">↺ เขียนตัวนี้ใหม่</button><button class="btn" id="wnext" disabled>ตัวถัดไป</button></div></div>
  <div class="grid wsel">${full.map((x,n)=>x.ro==="_"||x.jp==="_"?`<div class="card blank"></div>`:`<button class="card" data-n="${n}">${x.jp}</button>`).join("")}</div>`;
  const gs=$("#gs"),pad=$("#pad"),live=$("#live"),start=$("#start");
  pad.style.touchAction="none";
  const hypot=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const setStat=(t,bad,good)=>{$("#wstat").className="wstat"+(bad?" bad":good?" good":"");$("#wstat").textContent=t};
  const shake=()=>{pad.classList.remove("shake");void pad.offsetWidth;pad.classList.add("shake")};
  const vb=e=>{const r=gs.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*109,y:(e.clientY-r.top)/r.height*109}};
  const samples=el=>{const L=el.getTotalLength(),n=32,pts=[];for(let i=0;i<n;i++){const p=el.getPointAtLength(L*i/(n-1));pts.push({x:p.x,y:p.y})}return{pts,len:L}};
  const resample=ps=>{if(ps.length<2)return null;const seg=[0];for(let i=1;i<ps.length;i++)seg.push(seg[i-1]+hypot(ps[i],ps[i-1]));const len=seg.at(-1);if(len<7)return null;const n=32,out=[];for(let i=0;i<n;i++){const t=len*i/(n-1);let j=1;while(j<seg.length-1&&seg[j]<t)j++;const a=ps[j-1],b=ps[j],u=Math.min(1,(t-seg[j-1])/(seg[j]-seg[j-1]||1));out.push({x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u})}return{pts:out,len}};
  const avg=(a,b)=>a.reduce((s,_,i)=>s+hypot(a[i],b[i]),0)/a.length;
  const cover=(tpl,user,rad)=>{let hit=0;for(const t of tpl){let best=1e9;for(const u of user)best=Math.min(best,hypot(t,u));if(best<=rad)hit++}return hit/tpl.length};
  const paint=()=>live.setAttribute("points",pts.map(p=>p.x.toFixed(1)+","+p.y.toFixed(1)).join(" "));
  const reveal=p=>{const L=p.getTotalLength();p.style.transition="none";p.style.strokeDasharray=L;p.style.strokeDashoffset=L;requestAnimationFrame(()=>requestAnimationFrame(()=>{p.style.transition="stroke-dashoffset .7s linear";p.style.strokeDashoffset="0"}))};
  const show=()=>{
    strokes.forEach((p,i)=>{p.classList.remove("now","done","wait");p.style.cssText="";p.classList.add(i<si?"done":i===si?"now":"wait")});
    live.classList.remove("bad");live.setAttribute("points","");pts=[];
    if(si>=strokes.length){start.style.display="none";$("#wprog").textContent=`ครบ ${strokes.length} เส้น`;$("#wnext").disabled=false;setStat("ครบทุกเส้นและตรงตามรอย +8 XP",0,1);if(!awarded){awarded=true;streak++;addXp(8);bump()}return}
    const p=strokes[si],a=p.getPointAtLength(0);
    start.style.display="";start.setAttribute("cx",a.x);start.setAttribute("cy",a.y);reveal(p);
    $("#wprog").textContent=`เส้น ${si+1} / ${strokes.length}`;$("#wnext").disabled=true;
    setStat("เริ่มที่จุดทอง แล้วลากทับเส้นชมพูให้สุดปลาย ตามทิศที่เส้นวิ่ง");
  };
  const fail=msg=>{pts=[];paint();live.classList.remove("bad");setStat(msg,1);shake()};
  const judge=()=>{
    const p=strokes[si];if(!p)return;
    const tpl=samples(p),user=resample(pts);
    if(!user)return fail("ลากให้ยาวตามเส้น ยังสั้นไป");
    const fwd=avg(user.pts,tpl.pts),rev=avg(user.pts,[...tpl.pts].reverse());
    const sd=hypot(user.pts[0],tpl.pts[0]),ed=hypot(user.pts.at(-1),tpl.pts.at(-1));
    const loose=tpl.len<32,tol=loose?17:14.5;
    if(rev+4<fwd&&fwd>11)return fail("ทิศกลับกัน ดูเส้นวิ่งแล้วลากตามลูกศร");
    if(sd>(loose?26:22))return fail("ต้องเริ่มชิดจุดทอง ห้ามเริ่มกลางเส้น");
    if(ed>(loose?26:21))return fail("ยังไม่สุดปลายเส้น ลากให้จบ");
    if(user.len<tpl.len*(loose?0.42:0.55))return fail("เส้นสั้นกว่าต้นแบบ ลากให้ครบช่วง");
    if(user.len>tpl.len*2.4)return fail("ลากยาวเกินเส้น ลองทับเส้นชมพูให้สนิท");
    if(cover(tpl.pts,user.pts,tol)<.78)return fail("ออกนอกเส้น ต้องเขียนทับรอยชมพู");
    if(fwd>tol+1)return fail("ยังไม่ตรงเส้น ลองช้าลงแล้วลากทับให้สนิท");
    const pl=document.createElementNS("http://www.w3.org/2000/svg","polyline");
    pl.setAttribute("points",pts.map(q=>q.x.toFixed(1)+","+q.y.toFixed(1)).join(" "));pl.setAttribute("class","committed");
    $("#inked").append(pl);si++;show();
  };
  const load=async x=>{
    cur=x;const id=++tk;si=0;awarded=false;drawing=false;strokes=[];$("#inked").innerHTML="";
    $("#wch").innerHTML=`${x.jp}<small>${x.ro}</small>`;$("#wnext").disabled=true;setStat("กำลังโหลดลำดับเส้น…");say(x.jp);
    document.querySelectorAll(".wsel .card").forEach(c=>c.classList.toggle("sel",full[+c.dataset.n]===x));
    try{
      const r=await fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${code(x.jp)}.svg`);if(!r.ok)throw 0;
      const d=new DOMParser().parseFromString(await r.text(),"image/svg+xml");if(id!==tk)return;
      const nodes=[...d.querySelectorAll('[id*="StrokePaths"] path')];
      const use=nodes.length?nodes:[...d.querySelectorAll("path")];
      $("#guides").innerHTML=use.map(p=>`<path d="${p.getAttribute("d")}" class="gp wait"/>`).join("");
      strokes=[...$("#guides").querySelectorAll(".gp")];
      if(!strokes.length)throw 0;show();
    }catch{if(id!==tk)return;$("#guides").innerHTML=`<text x="54.5" y="72" font-size="64" text-anchor="middle" class="gt">${x.jp}</text>`;setStat("โหลดเส้นไม่สำเร็จ ตรวจเน็ตแล้วเลือกตัวนี้อีกครั้ง",1)}
  };
  const next=()=>{const i=full.indexOf(cur);let n=i+1;while(full[n]&&(full[n].ro==="_"||full[n].jp==="_"))n++;load(full[n]||full[0])};
  document.querySelectorAll(".wsel .card[data-n]").forEach(c=>c.onclick=()=>load(full[+c.dataset.n]));
  $("#wplay").onclick=()=>{if(strokes[si])reveal(strokes[si])};
  $("#wsay").onclick=()=>say(cur.jp);$("#wredo").onclick=()=>load(cur);$("#wnext").onclick=next;
  pad.onpointerdown=e=>{
    if(!strokes[si]||si>=strokes.length)return;e.preventDefault();
    const p=vb(e),a=strokes[si].getPointAtLength(0);
    if(hypot(p,a)>24){setStat("เริ่มที่จุดทองที่กระพริบก่อน แล้วค่อยลาก",1);shake();return}
    drawing=true;pts=[p];try{pad.setPointerCapture(e.pointerId)}catch{}paint();
  };
  pad.onpointermove=e=>{
    if(!drawing)return;const p=vb(e);const last=pts.at(-1);if(hypot(p,last)<1.1)return;pts.push(p);paint();
    const tpl=samples(strokes[si]);let best=1e9;for(const t of tpl.pts)best=Math.min(best,hypot(p,t));
    live.classList.toggle("bad",best>18);
  };
  pad.onpointerup=pad.onpointercancel=()=>{if(!drawing)return;drawing=false;judge()};
  load(cur);
}
/* ===== READING (แบบบทความ ฮิรางะนะล้วน) ===== */
// {คำ|ความหมาย} = คำที่แตะดูความหมายได้ | f = รูปประกอบ (a = อีโมจิ หรือใส่ src:"img/xxx.jpg" เพื่อใช้รูปจริง)
const READ=[
{e:"🍵",t:"ちゃどう",th:"พิธีชงชา",
 f:[{a:"🍵🍡",c:"ชาเขียวกับขนมหวาน"},{a:"🏯🎋",c:"ห้องชงชาแบบญี่ปุ่น",after:1}],
 p:[["にほんの {ちゃどう|พิธีชงชา} は、おちゃを いれて のむ ぶんかです。 むかしから、おてらや いえで おこなわれて きました。 いまも たくさんの ひとが ならって います。","ชาโดคือวัฒนธรรมการชงและดื่มชา มีมาตั้งแต่สมัยก่อนในวัดและบ้าน ปัจจุบันก็ยังมีคนเรียนกันมาก"],
    ["ちゃしつに はいる まえに、てを あらいます。 そして、しずかに すわります。 さいしょに {おかし|ขนมหวาน} を たべます。 おかしは あまくて、おちゃの にがい あじと よく あいます。","ก่อนเข้าห้องชงชาจะล้างมือแล้วนั่งอย่างเงียบสงบ เริ่มด้วยการกินขนมหวาน ซึ่งหวานเข้ากับรสขมของชา"],
    ["つぎに、{おちゃわん|ถ้วยชา} に おゆを いれて、おちゃを たてます。 おちゃを もらったら、おちゃわんを にかい まわして のみます。 のんだ あとで、「きれいですね」と いいます。","จากนั้นเทน้ำร้อนใส่ถ้วยแล้วตีชา เมื่อได้รับชาจะหมุนถ้วยสองรอบแล้วดื่ม ดื่มเสร็จก็ชมว่าถ้วยสวย"],
    ["ちゃどうで いちばん だいじな ものは、{こころ|จิตใจ} です。 しずかな こころで、いっぱいの おちゃを たのしみます。","สิ่งที่สำคัญที่สุดในชาโดคือจิตใจ เพลิดเพลินกับชาหนึ่งถ้วยด้วยใจที่สงบ"]]},
{e:"👘",t:"きもの",th:"กิโมโน",
 f:[{a:"👘🌸",c:"กิโมโนลายซากุระ"},{a:"👡🎐",c:"ยูกาตะกับเกี๊ยะ",after:1}],
 p:[["{きもの|กิโมโน} は にほんの むかしからの ふくです。 ながい ふくで、{おび|สายคาดเอว} を しめて きます。 いろや もようが たくさん あって、とても きれいです。","กิโมโนคือเสื้อผ้าดั้งเดิมของญี่ปุ่น เป็นชุดยาวที่คาดด้วยโอบิ มีสีและลายมากมาย สวยมาก"],
    ["けっこんしきや そつぎょうしきで きる ひとが います。 なつの おまつりでは、{ゆかた|ยูกาตะ} を きます。 ゆかたは きものより かるくて、すずしいです。","มีคนสวมในงานแต่งหรือพิธีรับปริญญา ส่วนเทศกาลหน้าร้อนจะสวมยูกาตะ ซึ่งเบากว่าและเย็นสบายกว่ากิโมโน"],
    ["あしには {げた|เกี๊ยะไม้} や {ぞうり|รองเท้าแตะโซริ} を はきます。 あるく ときは、ちいさく ゆっくり あるきます。 きものを きると、きもちが しゃんと します。","เท้าสวมเกี๊ยะหรือโซริ เวลาเดินจะก้าวสั้นๆ ช้าๆ พอสวมกิโมโนแล้วรู้สึกตัวตรงขึ้นมาเอง"]]},
{e:"🎋",t:"たなばた",th:"เทศกาลทานาบาตะ",
 f:[{a:"🎋⭐",c:"กิ่งไผ่ประดับแถบคำอธิษฐาน"},{a:"🌌💫",c:"ทางช้างเผือก",after:1}],
 p:[["{たなばた|ทานาบาตะ} は しちがつ なのかの おまつりです。 むかしばなしが あります。 おりひめと ひこぼしは、{ほし|ดาว} の なまえです。","ทานาบาตะคือเทศกาลวันที่ 7 กรกฎาคม มีนิทานเล่าว่าโอริฮิเมะกับฮิโคโบชิคือชื่อของดวงดาว"],
    ["ふたりは なかよしでしたが、あそんでばかりで しごとを しませんでした。 それで、かみさまは ふたりを あまのがわの りょうがわに はなしました。 いまは いちねんに いちどだけ あえます。","ทั้งสองรักกันดีแต่เอาแต่เล่นไม่ทำงาน เทพจึงแยกไว้คนละฝั่งของทางช้างเผือก ตอนนี้พบกันได้ปีละครั้งเท่านั้น"],
    ["ひとびとは {たんざく|แถบกระดาษ} に ねがいごとを かいて、{ささ|ไผ่} に かざります。 ほしを みあげて、ねがいが かなうのを まちます。","ผู้คนเขียนคำอธิษฐานลงแถบกระดาษแล้วแขวนบนกิ่งไผ่ มองดาวและรอให้ความปรารถนาเป็นจริง"]]},
{e:"💃",t:"ぼんおどり",th:"รำบงโอโดริ",
 f:[{a:"🏮💃",c:"เต้นรำใต้โคมไฟ"},{a:"🥁🎆",c:"เสียงกลองกับดอกไม้ไฟ",after:1}],
 p:[["{ぼんおどり|รำบงโอโดริ} は なつの おまつりで おどる おどりです。 はちがつの ころ、まちや こうえんで ひらかれます。 みんなで {やぐら|หอสูงกลางลาน} の まわりを まわって おどります。","บงโอโดริคือการเต้นรำในเทศกาลฤดูร้อน จัดราวเดือนสิงหาคมในเมืองและสวนสาธารณะ ทุกคนเต้นวนรอบหอสูง"],
    ["{たいこ|กลอง} の おおきな おとが ひびきます。 おどりの うごきは かんたんなので、はじめての ひとも すぐに おぼえられます。 こどもも おとなも、ゆかたを きて たのしみます。","เสียงกลองดังก้อง ท่าเต้นง่ายคนมาครั้งแรกก็จำได้เร็ว เด็กและผู้ใหญ่สวมยูกาตะมาสนุกด้วยกัน"],
    ["ぼんおどりは、{ごせんぞさま|บรรพบุรุษ} を おもう ぎょうじでも あります。 ひとびとは かんしゃの きもちを こめて おどります。 よるの ひかりの なかで、みんなが わに なります。","บงโอโดริยังเป็นงานระลึกถึงบรรพบุรุษ ผู้คนเต้นด้วยความรู้สึกขอบคุณ และทุกคนรวมเป็นวงกลมกลางแสงยามค่ำคืน"]]},
{e:"🌸",t:"にほんの しき",th:"ฤดูกาลของญี่ปุ่น",
 f:[{a:"🌸🌿",c:"ซากุระบานในฤดูใบไม้ผลิ"},{a:"🍁⛄",c:"ใบเมเปิลกับหิมะ",after:1}],
 p:[["にほんには {よっつの きせつ|สี่ฤดู} が あります。 はるには {さくら|ซากุระ} が さきます。 ひとびとは さくらの したで ごはんを たべて、はなを みます。 これを はなみと いいます。","ญี่ปุ่นมีสี่ฤดู ฤดูใบไม้ผลิซากุระบาน ผู้คนนั่งกินข้าวใต้ต้นซากุระและชมดอกไม้ เรียกว่าฮานามิ"],
    ["なつは あつくて、うみや おまつりが たのしいです。 よるには {はなび|ดอกไม้ไฟ} を みます。 あきには {もみじ|ใบเมเปิล} が あかく なって、やまが きれいに なります。","ฤดูร้อนอากาศร้อน สนุกกับทะเลและเทศกาล ตกค่ำดูดอกไม้ไฟ ฤดูใบไม้ร่วงใบเมเปิลแดงทำให้ภูเขาสวยงาม"],
    ["ふゆは さむくて、きたの まちでは {ゆき|หิมะ} が たくさん ふります。 きせつごとに たべものも ちがいます。 にほんの ひとは、きせつを かんじる ことを たいせつに して います。","ฤดูหนาวอากาศหนาว เมืองทางเหนือหิมะตกหนัก อาหารก็เปลี่ยนตามฤดู คนญี่ปุ่นให้ความสำคัญกับการสัมผัสฤดูกาล"]]}
];
const rjp=s=>s.replace(/\{([^|}]+)\|[^}]+\}/g,"$1");
const rhtml=s=>s.replace(/\{([^|}]+)\|([^}]+)\}/g,'<span class="wd" data-s="$1" data-m="$2">$1</span>');
const rfig=f=>`<figure class="rfig">${f.src?`<img src="${f.src}" alt="${f.c}" loading="lazy">`:`<div class="rart">${f.a}</div>`}<figcaption>${f.c}</figcaption></figure>`;
views.readList=()=>`<a class="crumb" href="#/">← กลับ</a><h1 class="page">ความรู้ทั่วไป</h1><p class="sub">อ่านบทความสั้นๆ แตะคำสีชมพูเพื่อดูความหมาย</p><div class="cats"><a class="btn" href="#/speak">🎤 โหมดฝึกพูด</a>${READ.map((r,i)=>`<a class="cat" href="#/read/${i}"><span>${r.e}</span>${r.t}<small>${r.th} • ${r.p.length} ย่อหน้า</small></a>`).join("")}</div>`;
views.readPage=i=>{const r=READ[i];
 return `<a class="crumb" href="#/read">← ความรู้ทั่วไป</a><article class="rart-wrap"><h1 class="page">${r.t}</h1><p class="sub">${r.th}</p>${rfig(r.f[0])}
<a class="btn ghost" href="#/speak/${i}">🎤 ฝึกพูดบทนี้</a><div class="rctl"><button class="btn" data-s="${r.p.map(x=>rjp(x[0])).join(" ")}">🔊 ฟังทั้งบท</button><button class="btn ghost" onclick="this.closest('article').classList.toggle('hideth')">👁 ซ่อน/แสดงคำแปล</button></div>
${r.p.map((x,n)=>`<section class="rp"><p class="rj">${rhtml(x[0])}</p><button class="rsay" data-s="${rjp(x[0])}" aria-label="ฟังย่อหน้า">🔊</button><p class="rth">${x[1]}</p></section>${r.f.filter(f=>f.after===n).map(rfig).join("")}`).join("")}
<p class="sub" style="margin-top:6px">💡 แตะคำสีชมพูเพื่อฟังเสียงและดูความหมาย</p></article>
<a class="btn" href="#/read${READ[i+1]?"/"+(i+1):""}" style="margin-top:14px">${READ[i+1]?"บทถัดไป ▶":"กลับไปรายการ"}</a>`};
app.addEventListener("click",e=>{const w=e.target.closest(".wd");if(!w)return;
 let t=$("#wtip");if(!t){t=document.createElement("div");t.id="wtip";document.body.append(t)}
 t.innerHTML=`<b>${w.dataset.s}</b><span>${w.dataset.m}</span>`;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),2800);
 document.querySelectorAll(".wd.on").forEach(x=>x.classList.remove("on"));w.classList.add("on")});

 /* ===== หน้าเกม + เกมบทอ่าน ===== */
const chunks=s=>s.replace(/、/g,"、 ").split(/\s+/).filter(Boolean);
const gsent=i=>READ[i].p.flatMap(x=>rjp(x[0]).split("。").map(s=>s.trim()).filter(Boolean).map(s=>s+"。"));
const FW=[...new Set(READ.flatMap(r=>r.p.flatMap(x=>[...x[0].matchAll(/\{([^|}]+)\|[^}]+\}/g)].map(m=>m[1]))))].filter(w=>!/\s/.test(w));

views.play=()=>`<a class="crumb" href="#/">← กลับ</a><h1 class="page">เกม</h1><p class="sub">เล่นสนุกแล้วได้ XP ด้วย</p><div class="tiles">${tile("#/play/match","🃏","จับคู่การ์ด","จับอักษรคู่กับคำอ่าน/คำแปล","red")}${tile("#/play/speed","⚡","สปีดรัน","30 วินาที ตอบให้ได้มากที่สุด","blue")}${tile("#/play/order","🧩","เรียงประโยค","ฟังแล้วเรียงคำจากบทอ่าน")}${tile("#/play/fill","✍️","เติมคำ","เลือกคำที่หายไปในประโยค")}</div>`;
views.gameList=k=>`<a class="crumb" href="#/play">← เกม</a><h1 class="page">${k==="order"?"เรียงประโยค":"เติมคำ"}</h1><p class="sub">เลือกบทที่อยากเล่น</p><div class="cats">${READ.map((r,i)=>`<a class="cat" href="#/play/${k}/${i}"><span>${r.e}</span>${r.t}<small>${r.th}</small></a>`).join("")}</div>`;
views.speakList=()=>`<a class="crumb" href="#/">← กลับ</a><h1 class="page">ฝึกพูดตาม</h1><p class="sub">เลือกบทที่อยากฝึก ฟังต้นแบบแล้วพูดตามทีละประโยค</p><div class="cats">${READ.map((r,i)=>`<a class="cat" href="#/speak/${i}"><span>${r.e}</span>${r.t}<small>${r.th}</small></a>`).join("")}</div>`;

function orderGame(i){
  const id=++run,Q=shuffle(gsent(i).filter(s=>{const c=chunks(s).length;return c>=3&&c<=9})).slice(0,5),N=Q.length;let n=0,score=0;
  const end=()=>{addXp(score===N?15:0);app.innerHTML=`<div class="quiz"><div class="score">${score}/${N}</div><h1 class="page">${score===N?"สุดยอด! 🌸":"ฝึกอีกนิดนะ!"}</h1><p class="sub">${hudText()}</p><a class="btn" href="#/play/order/${i}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();orderGame(i)}};
  const show=()=>{
    if(n>=N)return end();
    const s=Q[n],ch=chunks(s);let bank=shuffle(ch.map((t,k)=>({t,k}))),ans=[],locked=false;
    app.innerHTML=`<a class="crumb" href="#/play/order">← เลือกบท</a><div class="quiz"><div class="bar"><i style="width:${n/N*100}%"></i></div><p class="sub">ฟังประโยค แล้วแตะคำเรียงให้ถูก (${n+1}/${N})</p><button class="btn ghost" id="osnd">🔊 ฟังประโยค</button><div class="ozone" id="oa"></div><div class="ozone bank" id="ob"></div><div class="fb" id="fb"></div><button class="btn ghost" id="orst">↺ เริ่มเรียงใหม่</button></div>`;
    const draw=()=>{
      $("#ob").innerHTML=bank.map(b=>`<button class="chip" data-k="${b.k}">${b.t}</button>`).join("");
      $("#oa").innerHTML=ans.map(b=>`<button class="chip on" data-k="${b.k}">${b.t}</button>`).join("")||`<span class="ph">แตะคำด้านล่างเรียงตามลำดับ</span>`;
    };
    const check=()=>{locked=true;const ok=ans.map(b=>b.t).join("")===ch.join("");
      if(ok){score++;streak++;addXp(10)}else streak=0;bump();
      $("#oa").classList.add(ok?"ok":"no");$("#fb").innerHTML=ok?"✅ ถูกต้อง! +10 XP":`❌ เฉลย: <b>${s}</b>`;say(s);
      setTimeout(()=>{if(id!==run)return;n++;show()},ok?1400:2600)};
    const take=(from,to,k)=>{const x=from.findIndex(b=>b.k===k);if(x<0)return;to.push(...from.splice(x,1));draw();if(!bank.length)check()};
    $("#ob").onclick=e=>{const b=e.target.closest(".chip");if(b&&!locked)take(bank,ans,+b.dataset.k)};
    $("#oa").onclick=e=>{const b=e.target.closest(".chip");if(b&&!locked)take(ans,bank,+b.dataset.k)};
    $("#orst").onclick=()=>{if(locked)return;bank=shuffle([...bank,...ans]);ans=[];draw()};
    $("#osnd").onclick=()=>say(s);setTimeout(()=>say(s),200);
    draw();
  };
  show();
}

function fillGame(i){
  const id=++run,Q=[];
  READ[i].p.forEach(x=>x[0].split("。").forEach(s=>{s=s.trim();const m=[...s.matchAll(/\{([^|}]+)\|([^}]+)\}/g)].find(m=>!/\s/.test(m[1]));if(m)Q.push({blank:rjp(s.replace(m[0],"＿＿"))+"。",full:rjp(s)+"。",a:m[1],th:m[2]})}));
  const qs=shuffle(Q).slice(0,6),N=qs.length;let n=0,score=0;
  const end=()=>{addXp(score===N?15:0);app.innerHTML=`<div class="quiz"><div class="score">${score}/${N}</div><h1 class="page">${score===N?"สุดยอด! 🌸":"ฝึกอีกนิดนะ!"}</h1><p class="sub">${hudText()}</p><a class="btn" href="#/play/fill/${i}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();fillGame(i)}};
  const show=()=>{
    if(n>=N)return end();
    const q=qs[n],o=shuffle([...new Set([q.a,...shuffle(FW.filter(w=>w!==q.a)).slice(0,3)])]);let locked=false;
    app.innerHTML=`<a class="crumb" href="#/play/fill">← เลือกบท</a><div class="quiz fill"><div class="bar"><i style="width:${n/N*100}%"></i></div><div class="spk"><div class="spj" id="fs">${q.blank.replace("＿＿",'<span class="blk">＿＿</span>')}</div><div class="spt">คำที่หายไปแปลว่า: <b>${q.th}</b></div></div><div class="opts">${o.map(t=>`<button class="opt" data-ok="${t===q.a}">${t}</button>`).join("")}</div><div class="fb" id="fb"></div></div>`;
    document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
      if(locked)return;locked=true;const ok=b.dataset.ok==="true";
      b.classList.add(ok?"ok":"no");if(!ok)$('.opt[data-ok="true"]').classList.add("ok");
      if(ok){score++;streak++;addXp(10)}else streak=0;bump();
      $("#fs").innerHTML=q.full.replace(q.a,`<span class="blk">${q.a}</span>`);
      $("#fb").textContent=ok?"✅ ถูกต้อง! +10 XP":"❌ ลองจำคำนี้ไว้นะ";say(q.full);
      setTimeout(()=>{if(id!==run)return;n++;show()},ok?1500:2400)});
  };
  show();
}

/* ===== ROUTER ===== */
function route(){
  const [,m,k,x]=(location.hash||"#/").split("/"),ok=z=>z==="vocab"||z in SETS,set=h=>app.innerHTML=h,H=()=>{set(views.home());mochi()};scrollTo(0,0);run++;window.speechSynthesis?.cancel();au.pause();
  document.querySelectorAll(".dock a").forEach(a=>a.classList.toggle("act",a.dataset.m===(m||"")));
  if(m==="learn"){if(!k)set(views.menu("learn"));else if(k==="particle")set(views.particle());else if(k==="vocab")set(VCATS[+x]?views.learnVocab(+x):views.vcats());else if(k in SETS)set(views.learnKana(k));else H()}
  else if(m==="test")!k?set(views.menu("test")):ok(k)?quiz(k,x):H();
  else if(m==="write")!k?set(views.menu("write")):k in SETS?writePage(k):H();
  else if(m==="play"&&(k==="order"||k==="fill"))READ[+x]?(k==="order"?orderGame:fillGame)(+x):set(views.gameList(k));
  else if(m==="play"){if(!k)set(views.play());else if(!["match","speed"].includes(k))H();else if(!x)set(views.menu("play/"+k));else if(ok(x))(k==="match"?match:speed)(x);else H()}
  else if(m==="read")set(READ[+k]?views.readPage(+k):views.readList());
  else if(m==="speak")READ[+k]?speakPage(+k):set(views.speakList());
  else H();
}
app.addEventListener("click",e=>{const c=e.target.closest("[data-s]");if(!c)return;say(c.dataset.s);
  if(c.classList.contains("flip"))c.classList.toggle("on");else if(c.classList.contains("card")){c.classList.remove("pop");void c.offsetWidth;c.classList.add("pop")}});
addEventListener("hashchange",route);rain();hud();route();

/* ===== SPEAKING (ฝึกพูดตาม) ===== */
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;let curRec=null;
// แปลงคันจิที่ระบบรู้จำเสียงชอบพิมพ์กลับมา ให้เป็นฮิรางะนะ ก่อนเทียบคะแนน
const KM=[["茶道","ちゃどう"],["茶室","ちゃしつ"],["茶碗","ちゃわん"],["お茶","おちゃ"],["お菓子","おかし"],["日本","にほん"],["文化","ぶんか"],["沢山","たくさん"],["人々","ひとびと"],["結婚式","けっこんしき"],["卒業式","そつぎょうしき"],["七月","しちがつ"],["七日","なのか"],["7月","しちがつ"],["7日","なのか"],["天の川","あまのがわ"],["両側","りょうがわ"],["一年","いちねん"],["一度","いちど"],["四つ","よっつ"],["季節","きせつ"],["桜","さくら"],["花火","はなび"],["紅葉","もみじ"],["雪","ゆき"],["星","ほし"],["太鼓","たいこ"],["盆踊り","ぼんおどり"],["踊り","おどり"],["浴衣","ゆかた"],["着物","きもの"],["下駄","げた"],["草履","ぞうり"],["短冊","たんざく"],["笹","ささ"],["願い事","ねがいごと"],["櫓","やぐら"],["先祖","せんぞ"],["様","さま"],["心","こころ"],["昔","むかし"],["今","いま"],["春","はる"],["夏","なつ"],["秋","あき"],["冬","ふゆ"]].sort((a,b)=>b[0].length-a[0].length);
const k2h=s=>[...s].map(c=>c>="ァ"&&c<="ヶ"?String.fromCharCode(c.charCodeAt(0)-96):c).join("");
const sn=s=>{s=k2h(s);for(const[a,b]of KM)s=s.split(a).join(b);return s.replace(/[\s。、，．,.「」『』！？!?・ー〜~]/g,"")};
const lcsHit=(a,b)=>{const n=a.length,m=b.length,d=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)d[i][j]=a[i]===b[j]?d[i+1][j+1]+1:Math.max(d[i+1][j],d[i][j+1]);
  const hit=new Set();let i=0,j=0;while(i<n&&j<m){if(a[i]===b[j]){hit.add(i);i++;j++}else if(d[i+1][j]>=d[i][j+1])i++;else j++}return hit};
const grade=(target,heard)=>{const t=[...sn(target)],h=[...sn(heard)],hit=lcsHit(t,h);
  const kj=h.filter(c=>/[一-龯々]/.test(c)).length,den=Math.max(4,t.length-kj*2);
  return{sc:Math.min(100,Math.round(Math.min(hit.size,den)/den*100)),t,hit}};
addEventListener("hashchange",()=>{try{curRec&&curRec.abort()}catch{}});

views.speakList=()=>`<a class="crumb" href="#/read">← บทอ่าน</a><h1 class="page">ฝึกพูดตาม</h1><p class="sub">เลือกบทที่อยากฝึก ฟังต้นแบบแล้วพูดตามทีละประโยค</p><div class="cats">${READ.map((r,i)=>`<a class="cat" href="#/speak/${i}"><span>${r.e}</span>${r.t}<small>${r.th}</small></a>`).join("")}</div>`;

function speakPage(i){
  const r=READ[i],S=r.p.flatMap((x,pi)=>rjp(x[0]).split("。").map(s=>s.trim()).filter(Boolean).map(s=>({jp:s+"。",th:x[1]})));
  let n=0,listening=false,done=false,passed=0;
  const show=(s,b)=>{const ok=b.sc>=70;
    if(ok&&!done){done=true;passed++;streak++;addXp(5);bump()}else if(!ok){streak=0;hud()}
    $("#sr").innerHTML=`<div class="sscore ${ok?"good":"bad"}">${b.sc}%</div><p class="sline">${b.t.map((c,k)=>`<span class="${b.hit.has(k)?"gd":"bd"}">${c}</span>`).join("")}</p><p class="sheard">ที่ระบบได้ยิน: ${b.h||"—"}</p><p class="sfb ${ok?"good":"bad"}">${ok?"ผ่านแล้ว! +5 XP":"ลองอีกครั้ง ฟังต้นแบบแล้วพูดช้าๆ ชัดๆ"}</p>`;
    if(ok)$("#sn").textContent="ประโยคถัดไป ▶"};
  const draw=()=>{
    if(n>=S.length){app.innerHTML=`<div class="quiz"><div class="score">🎤</div><h1 class="page">พูดครบแล้ว!</h1><p class="sub">ผ่าน ${passed}/${S.length} ประโยค</p><a class="btn" href="#/speak/${i}" id="again">ฝึกอีกรอบ</a><a class="btn ghost" href="#/read/${i}">กลับไปอ่าน</a></div>`;$("#again").onclick=e=>{e.preventDefault();speakPage(i)};return}
    const s=S[n];done=false;
    app.innerHTML=`<a class="crumb" href="#/read/${i}">← กลับไปบทอ่าน</a><h1 class="page">ฝึกพูด ${r.t}</h1><p class="sub">ประโยคที่ ${n+1} / ${S.length} • ฟังต้นแบบ แล้วกดไมค์พูดตาม</p>
    ${SR?"":`<p class="sfb bad">เบราว์เซอร์นี้ไม่รองรับการรู้จำเสียง ลองใช้ Chrome, Edge หรือ Safari (iOS 14.5+)</p>`}
    <div class="quiz"><div class="bar"><i style="width:${n/S.length*100}%"></i></div>
    <div class="spk"><div class="spj">${s.jp}</div><div class="spt">${s.th}</div></div>
    <div class="spb"><button class="btn ghost" id="sl">🔊 ฟังต้นแบบ</button><button class="btn" id="sm">🎤 กดแล้วพูดตาม</button></div>
    <div id="sr" class="sres"></div><button class="btn ghost" id="sn">ข้ามประโยคนี้ ▶</button></div>`;
    $("#sl").onclick=()=>say(s.jp);setTimeout(()=>say(s.jp),200);
    $("#sn").onclick=()=>{try{curRec&&curRec.abort()}catch{}n++;draw()};
    $("#sm").onclick=()=>{
      if(!SR)return;if(listening){try{curRec.stop()}catch{}return}
      window.speechSynthesis?.cancel();au.pause();
      const rc=curRec=new SR();rc.lang="ja-JP";rc.interimResults=false;rc.maxAlternatives=5;
      listening=true;$("#sm").textContent="⏹ กำลังฟัง… (แตะเพื่อหยุด)";$("#sm").classList.add("rec");$("#sr").textContent="";
      rc.onresult=e=>{let b=null;for(const a of e.results[0]){const g=grade(s.jp,a.transcript);if(!b||g.sc>b.sc){b=g;b.h=a.transcript}}if(b)show(s,b)};
      rc.onerror=e=>{const el=$("#sr");if(el)el.innerHTML=`<p class="sfb bad">${e.error==="not-allowed"||e.error==="service-not-allowed"?"ยังไม่ได้อนุญาตไมโครโฟน ตรวจสิทธิ์ในเบราว์เซอร์":e.error==="no-speech"?"ไม่ได้ยินเสียง ลองพูดให้ดังขึ้นอีกนิด":"เกิดข้อผิดพลาด: "+e.error}</p>`};
      rc.onend=()=>{listening=false;const m=$("#sm");if(m){m.textContent="🎤 กดแล้วพูดตาม";m.classList.remove("rec")}};
      try{rc.start()}catch{listening=false}
    };
  };
  draw();
}