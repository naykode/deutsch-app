/**
 * i18n.js — Artikel + Verben App
 * Languages: English, العربية, Türkçe, فارسی, Kurdî, پښتو
 */
(function(){
'use strict';

const LANGS = {
  en:'English', ar:'العربية', tr:'Türkçe',
  fa:'فارسی', ku:'Kurdî', ps:'پښتو'
};
const RTL = ['ar','fa','ps'];

const T_DATA = {
en:{
  statMastered:'✅ Mastered', statStreak:'🔥 Streak', statCorrect:'🎯 Correct',
  vocabSuffix:'Words', verbSuffix:'Verbs', statVocabSuffix:'Nouns',
  progressToday:"Today's Progress", progressWeekly:'📖 Weekly Review',
  reviewBanner:'📖 Weekly Review — all words from this week',
  exLabel:'📖 Example', nextBtn:'Weiter →',
  doneTodayBtn:'✓ Done for today', doneTodayMsg:'✓ See you tomorrow! 👋',
  nochmalBtn:'↺ Practice again',
  reviewBtn:(n)=>`✗ Review ${n} mistakes`,
  alreadyComplete:'Already Complete!',
  alreadyCompleteSub:"You finished today's session. Come back tomorrow!",
  keepPracticing:'Keep Practicing', keepPracticingSub:'Reviewing mistakes builds memory.',
  titlePerfect:'Perfect Session!', subPerfect:'Flawless — incredible!',
  titleGreat:'Great Job!', subGreat:(p)=>`${p}% correct — keep it up!`,
  titleGood:'Good Effort!', subGood:(p)=>`${p}% correct — review the mistakes!`,
  titleStudy:'Keep Practicing', subStudy:'Reviewing mistakes builds memory.',
  titleReview:'Mistake Review Done!', subReviewOk:'All cleared! Great work.',
  subReviewLeft:(n)=>`${n} words still need more practice.`,
  masteryNote:'★ Words master after 3 correct sessions in a row',
  scoreCorrect:'✓ Correct', scoreMistakes:'✗ Mistakes',
  scoreMastered:'★ Mastered', scoreDone:'∑ Done',
  settingsTitle:'Settings & Data',
  settingsDesc:'Export your progress as backup, or reset to start fresh.',
  exportBtn:'📤 Export progress (JSON)', resetBtn:'🗑️ Reset all progress', cancelBtn:'✕ Cancel',
  resetConfirm:'Reset ALL progress? This cannot be undone.',
  resetVerbConfirm:'Reset ALL verb progress? This cannot be undone.',
  loadingNouns:'Loading words...', loadingVerbs:'Loading verbs...',
  errorNouns:'Could not load vocabulary', errorVerbs:'Could not load verbs',
  retryBtn:'↺ Retry',
  kbNouns:'1 = der · 2 = die · 3 = das · Space = weiter',
  kbVerbs:'1–4 = choose answer · Space = weiter',
  navToVerbs:'Verben →', navToNouns:'← Nouns',
  feedbackOk:'✓ Richtig!',
  feedbackErr:(a,n)=>`✗ Falsch — es heißt: „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Falsch — es bedeutet: „${e}"`,
  maskLabel:'masc.', femLabel:'fem.', neutLabel:'neut.', langLabel:'Language',
},
ar:{
  statMastered:'✅ محفوظ', statStreak:'🔥 أيام متتالية', statCorrect:'🎯 صحيح',
  vocabSuffix:'كلمة', verbSuffix:'فعل', statVocabSuffix:'الأسماء',
  progressToday:'تقدم اليوم', progressWeekly:'📖 مراجعة أسبوعية',
  reviewBanner:'📖 مراجعة أسبوعية — جميع كلمات هذا الأسبوع',
  exLabel:'📖 مثال', nextBtn:'Weiter →',
  doneTodayBtn:'✓ تم الانتهاء لهذا اليوم', doneTodayMsg:'✓ أراك غداً! 👋',
  nochmalBtn:'↺ تدرب مرة أخرى',
  reviewBtn:(n)=>`✗ راجع ${n} أخطاء`,
  alreadyComplete:'تم الانتهاء منه بالفعل!',
  alreadyCompleteSub:'لقد أنهيت جلسة اليوم. عد غداً!',
  keepPracticing:'استمر في التدريب', keepPracticingSub:'مراجعة الأخطاء تُنمّي الذاكرة.',
  titlePerfect:'مثالي!', subPerfect:'بدون أخطاء — رائع!',
  titleGreat:'عمل رائع!', subGreat:(p)=>`${p}% صحيح — استمر!`,
  titleGood:'جهد جيد!', subGood:(p)=>`${p}% صحيح — راجع الأخطاء!`,
  titleStudy:'استمر في التدريب', subStudy:'مراجعة الأخطاء تقوي الذاكرة.',
  titleReview:'مراجعة الأخطاء انتهت!', subReviewOk:'تم الانتهاء من الجميع! عمل رائع!',
  subReviewLeft:(n)=>`${n} كلمة لا تزال تحتاج تدريباً.`,
  masteryNote:'★ إتقان الكلمات بعد 3 جلسات صحيحة',
  scoreCorrect:'✓ صحيح', scoreMistakes:'✗ الأخطاء',
  scoreMastered:'★ مُتقن', scoreDone:'∑ تم إنجاز',
  settingsTitle:'الإعدادات والبيانات',
  settingsDesc:'صدّر تقدمك أو أعد التشغيل من البداية.',
  exportBtn:'📤 تصدير التقدم (JSON)', resetBtn:'🗑️ إعادة ضبط', cancelBtn:'✕ يلغي',
  resetConfirm:'إعادة تعيين كل التقدم؟ لا يمكن التراجع.',
  resetVerbConfirm:'إعادة تعيين تقدم الأفعال؟',
  loadingNouns:'جارٍ تحميل الكلمات...', loadingVerbs:'جارٍ تحميل الأفعال...',
  errorNouns:'تعذر تحميل المفردات', errorVerbs:'تعذر تحميل الأفعال',
  retryBtn:'↺ إعادة المحاولة',
  kbNouns:'1=der · 2=die · 3=das · مسافة=التالي',
  kbVerbs:'1–4=اختر الإجابة · مسافة=التالي',
  navToVerbs:'← الأفعال', navToNouns:'الأسماء →',
  feedbackOk:'✓ صحيح!',
  feedbackErr:(a,n)=>`✗ خطأ — الصحيح „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ خطأ — المعنى „${e}"`,
  maskLabel:'مذ.', femLabel:'مؤن.', neutLabel:'محايد.', langLabel:'اللغة',
},
tr:{
  statMastered:'✅ Ustalaştı', statStreak:'🔥 Seri', statCorrect:'🎯 Doğru',
  vocabSuffix:'Kelimeler', verbSuffix:'Fiiller', statVocabSuffix:'İsimler',
  progressToday:'Bugünkü İlerleme', progressWeekly:'📖 Haftalık Değerlendirme',
  reviewBanner:'📖 Haftalık Özet — bu haftanın tüm sözleri',
  exLabel:'📖 Örnek', nextBtn:'Weiter →',
  doneTodayBtn:'✓ Bugünlük işimiz bitti', doneTodayMsg:'✓ Yarın görüşürüz! 👋',
  nochmalBtn:'↺ Tekrar pratik yapın',
  reviewBtn:(n)=>`✗ ${n} hatayı tekrar et`,
  alreadyComplete:'Tamamlandı bile!',
  alreadyCompleteSub:'Bugünkü oturumu tamamladınız. Yarın tekrar gelin!',
  keepPracticing:'Pratik yapmaya devam edin', keepPracticingSub:'Hataları gözden geçirmek hafızayı geliştirir.',
  titlePerfect:'Mükemmel!', subPerfect:'Hatasız — inanılmaz!',
  titleGreat:'Harika!', subGreat:(p)=>`%${p} doğru — devam et!`,
  titleGood:'İyi çaba!', subGood:(p)=>`%${p} doğru — hataları tekrar et!`,
  titleStudy:'Pratik yapmaya devam et', subStudy:'Hataları gözden geçirmek hafızayı güçlendirir.',
  titleReview:'Hata tekrarı tamamlandı!', subReviewOk:'Hepsi temizlendi! Harika!',
  subReviewLeft:(n)=>`${n} kelime daha pratik gerekiyor.`,
  masteryNote:'★ 3 doğru oturumdan sonra kelime bilgisi ustası',
  scoreCorrect:'✓ Doğru', scoreMistakes:'✗ Hatalar',
  scoreMastered:'★ Ustalaştı', scoreDone:'∑ Tamamlandı',
  settingsTitle:'Ayarlar ve Veri',
  settingsDesc:'İlerlemeyi dışa aktarın veya sıfırlayın.',
  exportBtn:'📤 İlerlemeyi dışa aktar (JSON)', resetBtn:'🗑️ Sıfırla', cancelBtn:'✕ İptal etmek',
  resetConfirm:'Tüm ilerleme sıfırlansın mı? Geri alınamaz.',
  resetVerbConfirm:'Fiil ilerlemesi sıfırlansın mı?',
  loadingNouns:'Kelimeler yükleniyor...', loadingVerbs:'Fiiller yükleniyor...',
  errorNouns:'Kelimeler yüklenemedi', errorVerbs:'Fiiller yüklenemedi',
  retryBtn:'↺ Tekrar dene',
  kbNouns:'1=der · 2=die · 3=das · Boşluk=devam',
  kbVerbs:'1–4=cevap seç · Boşluk=devam',
  navToVerbs:'Fiiller →', navToNouns:'← İsimler',
  feedbackOk:'✓ Doğru!',
  feedbackErr:(a,n)=>`✗ Yanlış — doğrusu „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Yanlış — anlamı „${e}"`,
  maskLabel:'erk.', femLabel:'diş.', neutLabel:'nötr.', langLabel:'Dil',
},
fa:{
  statMastered:'✅ مسلط', statStreak:'🔥 رگه', statCorrect:'🎯 صحیح',
  vocabSuffix:'کلمات', verbSuffix:'افعال', statVocabSuffix:'اسم‌ها',
  progressToday:'پیشرفت امروز', progressWeekly:'📖 مرور هفتگی',
  reviewBanner:'📖 مرور هفتگی — تمام کلمات این هفته',
  exLabel:'📖 مثال', nextBtn:'Weiter →',
  doneTodayBtn:'✓ برای امروز انجام شد', doneTodayMsg:'✓ فردا می‌بینمت! 👋',
  nochmalBtn:'↺ دوباره تمرین کنید',
  reviewBtn:(n)=>`✗ ${n} اشتباه را مرور کنید`,
  alreadyComplete:'قبلاً کامل شده!',
  alreadyCompleteSub:'جلسه امروزت تموم شد. فردا برگرد!',
  keepPracticing:'تمرین را ادامه دهید', keepPracticingSub:'مرور اشتباهات، حافظه را تقویت می‌کند.',
  titlePerfect:'عالی!', subPerfect:'بدون اشتباه — فوق‌العاده!',
  titleGreat:'کار خوب!', subGreat:(p)=>`${p}% درست — ادامه دهید!`,
  titleGood:'تلاش خوب!', subGood:(p)=>`${p}% درست — اشتباهات را مرور کنید!`,
  titleStudy:'تمرین را ادامه دهید', subStudy:'مرور اشتباهات، حافظه را تقویت می‌کند.',
  titleReview:'مرور اشتباهات انجام شد!', subReviewOk:'همه پاک شد! کار عالی!',
  subReviewLeft:(n)=>`${n} کلمه هنوز نیاز به تمرین دارد.`,
  masteryNote:'★ تسلط بر کلمات پس از ۳ جلسه صحیح',
  scoreCorrect:'✓ درست', scoreMistakes:'✗ اشتباهات',
  scoreMastered:'★ تسلط', scoreDone:'∑ انجام شد',
  settingsTitle:'تنظیمات و داده',
  settingsDesc:'پیشرفت خود را صادر کنید یا از نو شروع کنید.',
  exportBtn:'📤 صادر کردن پیشرفت (JSON)', resetBtn:'🗑️ تنظیم مجدد', cancelBtn:'✕ لغو',
  resetConfirm:'همه پیشرفت‌ها پاک شود؟ قابل بازگشت نیست.',
  resetVerbConfirm:'پیشرفت افعال پاک شود؟',
  loadingNouns:'در حال بارگذاری کلمات...', loadingVerbs:'در حال بارگذاری افعال...',
  errorNouns:'بارگذاری واژگان ناموفق بود', errorVerbs:'بارگذاری افعال ناموفق بود',
  retryBtn:'↺ دوباره تلاش کنید',
  kbNouns:'1=der · 2=die · 3=das · فاصله=بعدی',
  kbVerbs:'1–4=انتخاب جواب · فاصله=بعدی',
  navToVerbs:'← افعال', navToNouns:'اسم‌ها →',
  feedbackOk:'✓ درست!',
  feedbackErr:(a,n)=>`✗ اشتباه — درست: „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ اشتباه — معنی: „${e}"`,
  maskLabel:'مذکر', femLabel:'مؤنث', neutLabel:'خنثی', langLabel:'زبان',
},
ku:{
  statMastered:'✅ Serwerî', statStreak:'🔥 Xêz', statCorrect:'🎯 Rast e',
  vocabSuffix:'Peyv', verbSuffix:'Lêker', statVocabSuffix:'Navdêr',
  progressToday:'Pêşkeftina Îro', progressWeekly:'📖 Nirxandina Heftane',
  reviewBanner:'📖 Nirxandina Heftane - hemû peyvên vê hefteyê',
  exLabel:'📖 Mînak', nextBtn:'Weiter →',
  doneTodayBtn:'✓ Ji bo îro qediya', doneTodayMsg:'✓ Sibê hevdû dibînin! 👋',
  nochmalBtn:'↺ Dîsa pratîk bike',
  reviewBtn:(n)=>`✗ ${n} xeletiyan dubare bike`,
  alreadyComplete:'Jixwe temam bûye!',
  alreadyCompleteSub:'Te rûniştina îro qedand. Sibê dîsa were!',
  keepPracticing:'Berdewamiya pratîkê bike', keepPracticingSub:'Nirxandina şaşiyan bîranînê ava dike.',
  titlePerfect:'Bêkêmasî!', subPerfect:'Bê xeletî — ecêb!',
  titleGreat:'Xebata baş!', subGreat:(p)=>`${p}% rast — berdewam be!`,
  titleGood:'Hewldana baş!', subGood:(p)=>`${p}% rast — xeletiyan binirxîne!`,
  titleStudy:'Berdewamiya pratîkê bike', subStudy:'Nirxandina şaşiyan bîranînê ava dike.',
  titleReview:'Nirxandina xeletiyan qediya!', subReviewOk:'Hemû hat paqijkirin! Xebata baş!',
  subReviewLeft:(n)=>`${n} peyv hîn pratîk hewce dike.`,
  masteryNote:'★ Peyvên sereke piştî 3 rûniştinên rast',
  scoreCorrect:'✓ Rast e', scoreMistakes:'✗ Xeletî',
  scoreMastered:'★ Serdestkirî', scoreDone:'Done',
  settingsTitle:'Mîheng û Daneyan',
  settingsDesc:'Pêşkeftina xwe derxe an ji nû ve dest pê bike.',
  exportBtn:'📤 Pêşkeftinê derxe (JSON)', resetBtn:'🗑️ Vegerandin', cancelBtn:'✕ Bişûndekirin',
  resetConfirm:'Hemû pêşkeftin were vegerandin? Nayê paşvekişandin.',
  resetVerbConfirm:'Pêşkeftina lêkeran were vegerandin?',
  loadingNouns:'Peyvan barkirin...', loadingVerbs:'Lêker barkirin...',
  errorNouns:'Peyvan nekarîn bên barkirin', errorVerbs:'Lêker nekarîn bên barkirin',
  retryBtn:'↺ Dîsa biceribîne',
  kbNouns:'1=der · 2=die · 3=das · Cîh=pêş',
  kbVerbs:'1–4=bersivê hilbijêre · Cîh=pêş',
  navToVerbs:'Lêker →', navToNouns:'← Navdêr',
  feedbackOk:'✓ Rast e!',
  feedbackErr:(a,n)=>`✗ Xelet — rast: „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Xelet — watê: „${e}"`,
  maskLabel:'nêr.', femLabel:'mê.', neutLabel:'neut.', langLabel:'Ziman',
},
ps:{
  statMastered:'✅ ماسټر شوی', statStreak:'🔥 سټریک', statCorrect:'🎯 سمه ده',
  vocabSuffix:'کلمې', verbSuffix:'فعلونه', statVocabSuffix:'نومونه',
  progressToday:'د نن ورځې پرمختګ', progressWeekly:'📖 اونيزه کتنه',
  reviewBanner:'📖 اونيزه کتنه — د دې اونۍ ټول ټکي',
  exLabel:'📖 مثال', nextBtn:'Weiter →',
  doneTodayBtn:'✓ د نن ورځې لپاره بشپړ شو', doneTodayMsg:'✓ سبا به سره ګورو! 👋',
  nochmalBtn:'↺ بیا تمرین وکړئ',
  reviewBtn:(n)=>`✗ ${n} غلطۍ بیاکتنه وکړئ`,
  alreadyComplete:'لا دمخه بشپړ شوی!',
  alreadyCompleteSub:'تاسو د نن ورځې غونډه پای ته ورسوله. سبا بیرته راشه!',
  keepPracticing:'تمرین ته دوام ورکړئ', keepPracticingSub:'د غلطیو بیاکتنه حافظه جوړوي.',
  titlePerfect:'مکمل!', subPerfect:'بې له غلطیو — عالي!',
  titleGreat:'ښه کار!', subGreat:(p)=>`${p}% سم — دوام ورکړئ!`,
  titleGood:'ښه هڅه!', subGood:(p)=>`${p}% سم — غلطۍ بیاکتنه وکړئ!`,
  titleStudy:'تمرین ته دوام ورکړئ', subStudy:'د غلطیو بیاکتنه حافظه جوړوي.',
  titleReview:'د غلطیو بیاکتنه بشپړه شوه!', subReviewOk:'ټول پاک شول! ښه کار!',
  subReviewLeft:(n)=>`${n} کلمې لاهم تمرین ته اړتیا لري.`,
  masteryNote:'★ د دریو سمو غونډو وروسته د کلمو ماسټري',
  scoreCorrect:'✓ سم', scoreMistakes:'✗ تېروتنې',
  scoreMastered:'★ ماسټر شوی', scoreDone:'∑ بشپړ شوی',
  settingsTitle:'ترتیبات او ډاټا',
  settingsDesc:'خپل پرمختګ صادر کړئ یا له سره پیل وکړئ.',
  exportBtn:'📤 پرمختګ صادرول (JSON)', resetBtn:'🗑️ بیا تنظیمول', cancelBtn:'✕ لغوه کول',
  resetConfirm:'ټول پرمختګ له سره تنظیم شي؟ بیرته نه راتلل کیږي.',
  resetVerbConfirm:'د فعلونو ټول پرمختګ له سره تنظیم شي؟',
  loadingNouns:'کلمې بارېږي...', loadingVerbs:'فعلونه بارېږي...',
  errorNouns:'کلمې پورته نه شوې', errorVerbs:'فعلونه پورته نه شوې',
  retryBtn:'↺ بیا هڅه وکړئ',
  kbNouns:'1=der · 2=die · 3=das · ځای=بل',
  kbVerbs:'1–4=ځواب غوره کړئ · ځای=بل',
  navToVerbs:'← فعلونه', navToNouns:'نومونه →',
  feedbackOk:'✓ سم!',
  feedbackErr:(a,n)=>`✗ غلط — سم: „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ غلط — معنا: „${e}"`,
  maskLabel:'نارینه', femLabel:'ښځینه', neutLabel:'خنثی', langLabel:'ژبه',
},
};

// Public API
function detect(){
  const saved=localStorage.getItem('app_lang');
  if(saved&&T_DATA[saved]) return saved;
  const list=[...(navigator.languages||[]),navigator.language||'en'];
  for(const l of list){
    const code=l.split('-')[0].toLowerCase();
    if(T_DATA[code]) return code;
  }
  return 'en';
}

function t(key,...args){
  const lang=detect();
  const trans=T_DATA[lang]||T_DATA.en;
  const val=trans[key]??T_DATA.en[key]??key;
  return typeof val==='function'?val(...args):val;
}

function apply(){
  const lang=detect();
  document.documentElement.dir=RTL.includes(lang)?'rtl':'ltr';
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    const trans=T_DATA[lang]||T_DATA.en;
    const val=trans[key]??T_DATA.en[key];
    if(val&&typeof val==='string') el.textContent=val;
  });
}

function setLang(code){
  if(!T_DATA[code]) return;
  localStorage.setItem('app_lang',code);
  location.reload();
}

function buildPicker(){
  const ov=document.createElement('div');
  ov.id='langOv';
  ov.style.cssText='display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:300;align-items:flex-end;justify-content:center;';
  const sheet=document.createElement('div');
  sheet.style.cssText='background:var(--card);border-radius:20px 20px 0 0;padding:20px 18px 32px;width:100%;max-width:480px;animation:shUp .27s ease;';
  const handle=document.createElement('div');
  handle.style.cssText='width:38px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 16px;cursor:pointer;';
  handle.onclick=()=>ov.style.display='none';
  const title=document.createElement('p');
  const cur=detect();
  title.style.cssText='font-size:.8rem;font-weight:700;color:var(--ink3);letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;';
  title.textContent=(T_DATA[cur]||T_DATA.en).langLabel;
  const grid=document.createElement('div');
  grid.style.cssText='display:grid;grid-template-columns:repeat(2,1fr);gap:8px;';
  Object.entries(LANGS).forEach(([code,name])=>{
    const btn=document.createElement('button');
    const active=code===cur;
    btn.style.cssText=`padding:11px 14px;border-radius:10px;border:2px solid ${active?'var(--acc,#7048E8)':'var(--border)'};background:${active?'var(--acc-bg,#F3F0FF)':'var(--card2)'};color:var(--ink);font-size:.95rem;font-weight:700;text-align:center;cursor:pointer;transition:all .15s;font-family:inherit;`;
    btn.textContent=(active?'✓ ':'')+name;
    btn.onclick=()=>setLang(code);
    grid.appendChild(btn);
  });
  sheet.append(handle,title,grid);
  ov.appendChild(sheet);
  ov.addEventListener('click',e=>{ if(e.target===ov) ov.style.display='none'; });
  document.body.appendChild(ov);
  const hdrBtns=document.querySelector('.hdr-btns');
  if(hdrBtns&&!document.getElementById('langBtn')){
    const lb=document.createElement('button');
    lb.id='langBtn';lb.className='hdr-btn';lb.title='Language';lb.textContent='🌐';
    lb.onclick=()=>{ ov.style.display='flex'; };
    hdrBtns.insertBefore(lb,hdrBtns.firstChild);
  }
}

window.i18n={detect,t,apply,setLang,LANGS,T_DATA};
window.T=t;
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>{apply();buildPicker();});
}else{
  apply();buildPicker();
}
})();
