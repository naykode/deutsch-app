/**
 * i18n.js — Auto language detection for Artikel + Verben
 * Supported: en my zh ja ko tr ar hi fr es pt de ru th vi id
 * Auto-detects from browser/device language settings.
 * User can also manually pick language via 🌐 button.
 */
(function(){
'use strict';

// ═══════════════════════════════════════
//  SUPPORTED LANGUAGES (native names)
// ═══════════════════════════════════════
const LANGS = {
  en:'English', my:'မြန်မာ', zh:'中文', ja:'日本語', ko:'한국어',
  tr:'Türkçe', ar:'العربية', hi:'हिंदी', fr:'Français', es:'Español',
  pt:'Português', de:'Deutsch', ru:'Русский', th:'ภาษาไทย', vi:'Tiếng Việt', id:'Indonesia'
};
const RTL = ['ar'];

// ═══════════════════════════════════════
//  TRANSLATIONS
// ═══════════════════════════════════════
const T_DATA = {
en:{
  statMastered:'✅ Mastered', statStreak:'🔥 Streak', statCorrect:'🎯 Correct',
  vocabSuffix:'Words', verbSuffix:'Verbs',
  progressToday:"Today's Progress", progressWeekly:'📖 Weekly Review',
  reviewBanner:'📖 Weekly Review — all words from this week',
  exLabel:'📖 Example', nextBtn:'Weiter →',
  doneTodayBtn:'✓ Done for today', doneTodayMsg:'✓ See you tomorrow! 👋',
  nochmalBtn:'↺ Noch einmal – Practice again',
  reviewBtn:(n)=>`✗ Review ${n} mistakes now`,
  titlePerfect:'Perfect Session!', subPerfect:'Flawless — incredible!',
  titleGreat:'Great Job!',   subGreat:(p)=>`${p}% correct — keep it up!`,
  titleGood:'Good Effort!',  subGood:(p)=>`${p}% correct — review the mistakes!`,
  titleStudy:'Keep Practicing', subStudy:'Reviewing mistakes builds memory.',
  titleReview:'Mistake Review Done!', subReviewOk:'All cleared! Great work.',
  subReviewLeft:(n)=>`${n} words still need more practice.`,
  masteryNote:'★ Words master after 3 correct sessions in a row',
  scoreCorrect:'✓ Correct', scoreMistakes:'✗ Mistakes',
  scoreMastered:'★ Mastered', scoreDone:'∑ Done',
  settingsTitle:'Settings & Data',
  settingsDesc:'Export your learning progress as a backup, or reset everything to start fresh.',
  exportBtn:'📤 Export progress (JSON)', resetBtn:'🗑️ Reset all progress', cancelBtn:'✕ Cancel',
  resetConfirm:'Reset ALL progress? This cannot be undone.',
  resetVerbConfirm:'Reset ALL verb progress? This cannot be undone.',
  loadingNouns:'Loading vocabulary…', loadingVerbs:'Loading verbs…',
  errorNouns:'Could not load vocabulary', errorVerbs:'Could not load verbs',
  retryBtn:'↺ Retry',
  kbNouns:'1 = der · 2 = die · 3 = das · Space = weiter',
  kbVerbs:'1–4 = choose answer · Space = weiter',
  navToVerbs:'Verben →', navToNouns:'← Nouns',
  feedbackOk:'✓ Richtig!',
  feedbackErr:(a,n)=>`✗ Falsch — es heißt: „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Falsch — es bedeutet: „${e}"`,
  maskLabel:'mask.', femLabel:'fem.', neutLabel:'neut.',
  langLabel:'Language',
},
my:{
  statMastered:'✅ တတ်မြောက်', statStreak:'🔥 ဆက်တိုက်', statCorrect:'🎯 မှန်ကန်',
  vocabSuffix:'စကားလုံး', verbSuffix:'ကြိယာ',
  progressToday:'ဒီနေ့ တိုးတက်မှု', progressWeekly:'📖 အပတ်စဉ် ပြန်လေ့ကျင့်',
  reviewBanner:'📖 အပတ်စဉ် ပြန်လေ့ကျင့် — ဤအပတ် စကားလုံးအားလုံး',
  exLabel:'📖 ဥပမာ', nextBtn:'ဆက်ရန် →',
  doneTodayBtn:'✓ ဒီနေ့ ပြီးပြီ', doneTodayMsg:'✓ မနက်ဖြန် ပြန်တွေ့မည် 👋',
  nochmalBtn:'↺ တစ်ကြိမ်ထပ် လေ့ကျင့်',
  reviewBtn:(n)=>`✗ မှားသော ${n} လုံး ပြန်လေ့ကျင့်`,
  titlePerfect:'ပြည့်စုံသော လေ့ကျင့်ချိန်!', subPerfect:'အမှားမရှိ — ထူးချွန်သည်!',
  titleGreat:'အလွန်ကောင်းသည်!', subGreat:(p)=>`${p}% မှန်ကန် — ဆက်ကြိုးစားပါ!`,
  titleGood:'ကြိုးစားမှု ကောင်းသည်!', subGood:(p)=>`${p}% မှန်ကန် — မှားသည်များ ပြန်လေ့ကျင့်ပါ!`,
  titleStudy:'ဆက်လက် လေ့ကျင့်ပါ', subStudy:'မှားသည်များ ပြန်လေ့ကျင့်ခြင်းဖြင့် မှတ်ဉာဏ် တည်ဆောက်သည်။',
  titleReview:'မှားသည်များ ပြန်လေ့ကျင့်မှု ပြီးပြီ!', subReviewOk:'အားလုံး ရှင်းပြီ! ကောင်းသည်!',
  subReviewLeft:(n)=>`${n} လုံး ထပ်မံ လေ့ကျင့်ရန် လိုသေးသည်။`,
  masteryNote:'★ ၃ ကြိမ်ဆက်တိုက် မှန်မှသာ တတ်မြောက်ရာ ရောက်မည်',
  scoreCorrect:'✓ မှန်ကန်', scoreMistakes:'✗ မှားကန်',
  scoreMastered:'★ တတ်မြောက်', scoreDone:'∑ ပြီးဆုံး',
  settingsTitle:'ဆက်တင်နှင့် ဒေတာ',
  settingsDesc:'တိုးတက်မှုကို backup ထုတ်ပါ သို့မဟုတ် အစကနေ ပြန်စပါ။',
  exportBtn:'📤 တိုးတက်မှု ထုတ်ယူ (JSON)', resetBtn:'🗑️ အားလုံး ပြန်ဆိုင်း', cancelBtn:'✕ မလုပ်တော့',
  resetConfirm:'တိုးတက်မှုအားလုံး ဖျက်မည်လား? ပြန်မရနိုင်ပါ။',
  resetVerbConfirm:'ကြိယာ တိုးတက်မှုအားလုံး ဖျက်မည်လား? ပြန်မရနိုင်ပါ။',
  loadingNouns:'ဝေါဟာရများ တင်နေသည်…', loadingVerbs:'ကြိယာများ တင်နေသည်…',
  errorNouns:'ဝေါဟာရများ မတင်နိုင်ပါ', errorVerbs:'ကြိယာများ မတင်နိုင်ပါ',
  retryBtn:'↺ ထပ်ကြိုးစား',
  kbNouns:'1 = der · 2 = die · 3 = das · Space = ဆက်ရန်',
  kbVerbs:'1–4 = ရွေးချယ် · Space = ဆက်ရန်',
  navToVerbs:'ကြိယာများ →', navToNouns:'← နာမ်များ',
  feedbackOk:'✓ မှန်ကန်သည်!',
  feedbackErr:(a,n)=>`✗ မှားသည် — "${a} ${n}" ဖြစ်သည်`,
  feedbackVerbErr:(e)=>`✗ မှားသည် — "${e}" ဟု အဓိပ္ပာယ်ရသည်`,
  maskLabel:'ကျား', femLabel:'မ', neutLabel:'နျူ.',
  langLabel:'ဘာသာစကား',
},
zh:{
  statMastered:'✅ 已掌握', statStreak:'🔥 连续天数', statCorrect:'🎯 正确',
  vocabSuffix:'词', verbSuffix:'动词',
  progressToday:'今日进度', progressWeekly:'📖 每周复习',
  reviewBanner:'📖 每周复习 — 本周所有单词',
  exLabel:'📖 例句', nextBtn:'继续 →',
  doneTodayBtn:'✓ 今天完成', doneTodayMsg:'✓ 明天见！👋',
  nochmalBtn:'↺ 再练一次',
  reviewBtn:(n)=>`✗ 复习 ${n} 个错误`,
  titlePerfect:'完美！', subPerfect:'满分 — 太棒了！',
  titleGreat:'很好！', subGreat:(p)=>`${p}% 正确 — 继续加油！`,
  titleGood:'不错的努力！', subGood:(p)=>`${p}% 正确 — 复习错误吧！`,
  titleStudy:'继续练习', subStudy:'复习错误有助于记忆。',
  titleReview:'错误复习完成！', subReviewOk:'全部通过！太好了！',
  subReviewLeft:(n)=>`还有 ${n} 个词需要练习。`,
  masteryNote:'★ 连续3次正确即可掌握',
  scoreCorrect:'✓ 正确', scoreMistakes:'✗ 错误', scoreMastered:'★ 已掌握', scoreDone:'∑ 完成',
  settingsTitle:'设置和数据', settingsDesc:'导出学习进度或重置所有数据。',
  exportBtn:'📤 导出进度 (JSON)', resetBtn:'🗑️ 重置所有进度', cancelBtn:'✕ 取消',
  resetConfirm:'重置所有进度？此操作不可撤销。', resetVerbConfirm:'重置所有动词进度？',
  loadingNouns:'加载词汇中…', loadingVerbs:'加载动词中…',
  errorNouns:'无法加载词汇', errorVerbs:'无法加载动词', retryBtn:'↺ 重试',
  kbNouns:'1=der · 2=die · 3=das · 空格=继续', kbVerbs:'1–4=选择答案 · 空格=继续',
  navToVerbs:'动词 →', navToNouns:'← 名词',
  feedbackOk:'✓ 正确！', feedbackErr:(a,n)=>`✗ 错误 — 应为 „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ 错误 — 意思是 „${e}"`,
  maskLabel:'阳性', femLabel:'阴性', neutLabel:'中性', langLabel:'语言',
},
ja:{
  statMastered:'✅ 習得', statStreak:'🔥 連続日数', statCorrect:'🎯 正解',
  vocabSuffix:'語', verbSuffix:'動詞',
  progressToday:'今日の進捗', progressWeekly:'📖 週次復習',
  reviewBanner:'📖 週次復習 — 今週の全単語',
  exLabel:'📖 例文', nextBtn:'次へ →',
  doneTodayBtn:'✓ 今日は終了', doneTodayMsg:'✓ また明日！👋',
  nochmalBtn:'↺ もう一度練習',
  reviewBtn:(n)=>`✗ ${n}個のミスを復習`,
  titlePerfect:'完璧！', subPerfect:'ミスなし — 素晴らしい！',
  titleGreat:'よくできました！', subGreat:(p)=>`${p}%正解 — その調子！`,
  titleGood:'よく頑張りました！', subGood:(p)=>`${p}%正解 — ミスを復習しましょう！`,
  titleStudy:'練習を続けよう', subStudy:'ミスの復習が記憶を強化します。',
  titleReview:'ミス復習完了！', subReviewOk:'全部クリア！よくできました！',
  subReviewLeft:(n)=>`あと${n}語の練習が必要です。`,
  masteryNote:'★ 3回連続正解で習得完了',
  scoreCorrect:'✓ 正解', scoreMistakes:'✗ ミス', scoreMastered:'★ 習得', scoreDone:'∑ 完了',
  settingsTitle:'設定とデータ', settingsDesc:'進捗をエクスポートするか、リセットします。',
  exportBtn:'📤 進捗をエクスポート (JSON)', resetBtn:'🗑️ 全進捗をリセット', cancelBtn:'✕ キャンセル',
  resetConfirm:'全進捗をリセットしますか？この操作は取り消せません。', resetVerbConfirm:'動詞の進捗をリセットしますか？',
  loadingNouns:'語彙を読み込み中…', loadingVerbs:'動詞を読み込み中…',
  errorNouns:'語彙を読み込めませんでした', errorVerbs:'動詞を読み込めませんでした', retryBtn:'↺ 再試行',
  kbNouns:'1=der · 2=die · 3=das · スペース=次へ', kbVerbs:'1–4=答えを選択 · スペース=次へ',
  navToVerbs:'動詞 →', navToNouns:'← 名詞',
  feedbackOk:'✓ 正解！', feedbackErr:(a,n)=>`✗ 不正解 — 正しくは „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ 不正解 — 意味は „${e}"`,
  maskLabel:'男性', femLabel:'女性', neutLabel:'中性', langLabel:'言語',
},
ko:{
  statMastered:'✅ 습득', statStreak:'🔥 연속 일수', statCorrect:'🎯 정답',
  vocabSuffix:'단어', verbSuffix:'동사',
  progressToday:'오늘의 진도', progressWeekly:'📖 주간 복습',
  reviewBanner:'📖 주간 복습 — 이번 주 모든 단어',
  exLabel:'📖 예문', nextBtn:'다음 →',
  doneTodayBtn:'✓ 오늘 완료', doneTodayMsg:'✓ 내일 봐요！👋',
  nochmalBtn:'↺ 다시 연습',
  reviewBtn:(n)=>`✗ 틀린 ${n}개 복습`,
  titlePerfect:'완벽해요！', subPerfect:'실수 없음 — 대단해요！',
  titleGreat:'잘했어요！', subGreat:(p)=>`${p}% 정답 — 계속 화이팅！`,
  titleGood:'수고했어요！', subGood:(p)=>`${p}% 정답 — 틀린 것 복습하세요！`,
  titleStudy:'계속 연습하세요', subStudy:'틀린 것을 복습하면 기억이 강해집니다。',
  titleReview:'오답 복습 완료！', subReviewOk:'전부 통과！잘했어요！',
  subReviewLeft:(n)=>`${n}개 단어를 더 연습해야 합니다。`,
  masteryNote:'★ 3번 연속 정답 시 습득 완료',
  scoreCorrect:'✓ 정답', scoreMistakes:'✗ 오답', scoreMastered:'★ 습득', scoreDone:'∑ 완료',
  settingsTitle:'설정 및 데이터', settingsDesc:'학습 진도를 내보내거나 초기화합니다。',
  exportBtn:'📤 진도 내보내기 (JSON)', resetBtn:'🗑️ 전체 초기화', cancelBtn:'✕ 취소',
  resetConfirm:'모든 진도를 초기화할까요？되돌릴 수 없습니다。', resetVerbConfirm:'동사 진도를 모두 초기화할까요？',
  loadingNouns:'어휘 불러오는 중…', loadingVerbs:'동사 불러오는 중…',
  errorNouns:'어휘를 불러올 수 없습니다', errorVerbs:'동사를 불러올 수 없습니다', retryBtn:'↺ 다시 시도',
  kbNouns:'1=der · 2=die · 3=das · 스페이스=다음', kbVerbs:'1–4=답 선택 · 스페이스=다음',
  navToVerbs:'동사 →', navToNouns:'← 명사',
  feedbackOk:'✓ 정답！', feedbackErr:(a,n)=>`✗ 오답 — 정답은 „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ 오답 — 뜻은 „${e}"`,
  maskLabel:'남성', femLabel:'여성', neutLabel:'중성', langLabel:'언어',
},
tr:{
  statMastered:'✅ Öğrenildi', statStreak:'🔥 Seri', statCorrect:'🎯 Doğru',
  vocabSuffix:'Kelime', verbSuffix:'Fiil',
  progressToday:'Bugünkü İlerleme', progressWeekly:'📖 Haftalık Tekrar',
  reviewBanner:'📖 Haftalık Tekrar — bu haftanın tüm kelimeleri',
  exLabel:'📖 Örnek', nextBtn:'Devam →',
  doneTodayBtn:'✓ Bugün tamamlandı', doneTodayMsg:'✓ Yarın görüşürüz！👋',
  nochmalBtn:'↺ Tekrar pratik yap',
  reviewBtn:(n)=>`✗ ${n} hatayı tekrar et`,
  titlePerfect:'Mükemmel！', subPerfect:'Hatasız — inanılmaz！',
  titleGreat:'Harika！', subGreat:(p)=>`%${p} doğru — devam et！`,
  titleGood:'İyi çaba！', subGood:(p)=>`%${p} doğru — hataları tekrar et！`,
  titleStudy:'Pratik yapmaya devam et', subStudy:'Hataları tekrar etmek hafızayı güçlendirir。',
  titleReview:'Hata tekrarı tamamlandı！', subReviewOk:'Hepsi temizlendi！Harika！',
  subReviewLeft:(n)=>`${n} kelime daha pratik gerekiyor。`,
  masteryNote:'★ 3 ardışık doğru cevapla öğrenilir',
  scoreCorrect:'✓ Doğru', scoreMistakes:'✗ Hata', scoreMastered:'★ Öğrenildi', scoreDone:'∑ Tamamlandı',
  settingsTitle:'Ayarlar ve Veri', settingsDesc:'İlerlemeyi dışa aktarın veya sıfırlayın。',
  exportBtn:'📤 İlerlemeyi dışa aktar (JSON)', resetBtn:'🗑️ Tüm ilerlemeyi sıfırla', cancelBtn:'✕ İptal',
  resetConfirm:'Tüm ilerleme sıfırlansın mı？Geri alınamaz。', resetVerbConfirm:'Fiil ilerlemesi sıfırlansın mı？',
  loadingNouns:'Kelimeler yükleniyor…', loadingVerbs:'Fiiller yükleniyor…',
  errorNouns:'Kelimeler yüklenemedi', errorVerbs:'Fiiller yüklenemedi', retryBtn:'↺ Tekrar dene',
  kbNouns:'1=der · 2=die · 3=das · Boşluk=devam', kbVerbs:'1–4=cevap seç · Boşluk=devam',
  navToVerbs:'Fiiller →', navToNouns:'← İsimler',
  feedbackOk:'✓ Doğru！', feedbackErr:(a,n)=>`✗ Yanlış — doğrusu „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Yanlış — anlamı „${e}"`,
  maskLabel:'erk.', femLabel:'diş.', neutLabel:'nötr.', langLabel:'Dil',
},
ar:{
  statMastered:'✅ محفوظ', statStreak:'🔥 أيام متتالية', statCorrect:'🎯 صحيح',
  vocabSuffix:'كلمة', verbSuffix:'فعل',
  progressToday:'تقدم اليوم', progressWeekly:'📖 مراجعة أسبوعية',
  reviewBanner:'📖 مراجعة أسبوعية — جميع كلمات هذا الأسبوع',
  exLabel:'📖 مثال', nextBtn:'التالي ←',
  doneTodayBtn:'✓ انتهيت اليوم', doneTodayMsg:'✓ إلى اللقاء غداً！ 👋',
  nochmalBtn:'↺ تدرب مرة أخرى',
  reviewBtn:(n)=>`✗ راجع ${n} أخطاء`,
  titlePerfect:'مثالي！', subPerfect:'بدون أخطاء — رائع！',
  titleGreat:'عمل رائع！', subGreat:(p)=>`${p}% صحيح — استمر！`,
  titleGood:'جهد جيد！', subGood:(p)=>`${p}% صحيح — راجع الأخطاء！`,
  titleStudy:'استمر في التدريب', subStudy:'مراجعة الأخطاء تقوي الذاكرة。',
  titleReview:'مراجعة الأخطاء انتهت！', subReviewOk:'تم الانتهاء من الجميع！عمل رائع！',
  subReviewLeft:(n)=>`${n} كلمة لا تزال تحتاج تدريباً。`,
  masteryNote:'★ تُحفظ الكلمة بعد 3 إجابات صحيحة متتالية',
  scoreCorrect:'✓ صحيح', scoreMistakes:'✗ أخطاء', scoreMastered:'★ محفوظ', scoreDone:'∑ تم',
  settingsTitle:'الإعدادات والبيانات', settingsDesc:'صدّر تقدمك أو أعد التشغيل من البداية。',
  exportBtn:'📤 تصدير التقدم (JSON)', resetBtn:'🗑️ إعادة تعيين كل التقدم', cancelBtn:'✕ إلغاء',
  resetConfirm:'إعادة تعيين كل التقدم؟ لا يمكن التراجع。', resetVerbConfirm:'إعادة تعيين تقدم الأفعال؟',
  loadingNouns:'جارٍ تحميل المفردات…', loadingVerbs:'جارٍ تحميل الأفعال…',
  errorNouns:'تعذر تحميل المفردات', errorVerbs:'تعذر تحميل الأفعال', retryBtn:'↺ إعادة المحاولة',
  kbNouns:'1=der · 2=die · 3=das · مسافة=التالي', kbVerbs:'1–4=اختر الإجابة · مسافة=التالي',
  navToVerbs:'← الأفعال', navToNouns:'الأسماء →',
  feedbackOk:'✓ صحيح！', feedbackErr:(a,n)=>`✗ خطأ — الصحيح „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ خطأ — المعنى „${e}"`,
  maskLabel:'مذ.', femLabel:'مؤن.', neutLabel:'محايد.', langLabel:'اللغة',
},
hi:{
  statMastered:'✅ सीखा', statStreak:'🔥 लगातार दिन', statCorrect:'🎯 सही',
  vocabSuffix:'शब्द', verbSuffix:'क्रिया',
  progressToday:'आज की प्रगति', progressWeekly:'📖 साप्ताहिक समीक्षा',
  reviewBanner:'📖 साप्ताहिक समीक्षा — इस सप्ताह के सभी शब्द',
  exLabel:'📖 उदाहरण', nextBtn:'अगला →',
  doneTodayBtn:'✓ आज के लिए हो गया', doneTodayMsg:'✓ कल मिलते हैं！ 👋',
  nochmalBtn:'↺ फिर से अभ्यास करें',
  reviewBtn:(n)=>`✗ ${n} गलतियाँ दोहराएं`,
  titlePerfect:'परफेक्ट！', subPerfect:'कोई गलती नहीं — शानदार！',
  titleGreat:'बहुत बढ़िया！', subGreat:(p)=>`${p}% सही — जारी रखें！`,
  titleGood:'अच्छा प्रयास！', subGood:(p)=>`${p}% सही — गलतियाँ दोहराएं！`,
  titleStudy:'अभ्यास जारी रखें', subStudy:'गलतियाँ दोहराने से याददाश्त मजबूत होती है।',
  titleReview:'गलतियों की समीक्षा पूरी！', subReviewOk:'सब साफ！बहुत अच्छा！',
  subReviewLeft:(n)=>`${n} शब्दों को और अभ्यास चाहिए।`,
  masteryNote:'★ लगातार 3 बार सही होने पर सीखा जाता है',
  scoreCorrect:'✓ सही', scoreMistakes:'✗ गलत', scoreMastered:'★ सीखा', scoreDone:'∑ पूरा',
  settingsTitle:'सेटिंग और डेटा', settingsDesc:'प्रगति निर्यात करें या रीसेट करें।',
  exportBtn:'📤 प्रगति निर्यात करें (JSON)', resetBtn:'🗑️ सभी प्रगति रीसेट', cancelBtn:'✕ रद्द करें',
  resetConfirm:'सारी प्रगति रीसेट करें? यह वापस नहीं होगा।', resetVerbConfirm:'सभी क्रिया प्रगति रीसेट करें?',
  loadingNouns:'शब्दावली लोड हो रही है…', loadingVerbs:'क्रियाएं लोड हो रही हैं…',
  errorNouns:'शब्दावली लोड नहीं हो सकी', errorVerbs:'क्रियाएं लोड नहीं हो सकीं', retryBtn:'↺ दोबारा प्रयास',
  kbNouns:'1=der · 2=die · 3=das · स्पेस=अगला', kbVerbs:'1–4=उत्तर चुनें · स्पेस=अगला',
  navToVerbs:'क्रियाएं →', navToNouns:'← संज्ञाएं',
  feedbackOk:'✓ सही！', feedbackErr:(a,n)=>`✗ गलत — सही है „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ गलत — मतलब है „${e}"`,
  maskLabel:'पुं.', femLabel:'स्त्री.', neutLabel:'नपुं.', langLabel:'भाषा',
},
fr:{
  statMastered:'✅ Maîtrisé', statStreak:'🔥 Jours consécutifs', statCorrect:'🎯 Correct',
  vocabSuffix:'mots', verbSuffix:'verbes',
  progressToday:"Progrès d'aujourd'hui", progressWeekly:'📖 Révision hebdomadaire',
  reviewBanner:"📖 Révision hebdomadaire — tous les mots de cette semaine",
  exLabel:'📖 Exemple', nextBtn:'Suivant →',
  doneTodayBtn:"✓ Terminé pour aujourd'hui", doneTodayMsg:'✓ À demain！👋',
  nochmalBtn:'↺ Refaire la pratique',
  reviewBtn:(n)=>`✗ Revoir ${n} erreurs`,
  titlePerfect:'Parfait！', subPerfect:'Sans faute — incroyable！',
  titleGreat:'Excellent！', subGreat:(p)=>`${p}% correct — continuez！`,
  titleGood:'Bon effort！', subGood:(p)=>`${p}% correct — révisez les erreurs！`,
  titleStudy:'Continuez à pratiquer', subStudy:'Réviser les erreurs renforce la mémoire.',
  titleReview:'Révision des erreurs terminée！', subReviewOk:'Tout effacé！Bravo！',
  subReviewLeft:(n)=>`${n} mots nécessitent plus de pratique.`,
  masteryNote:'★ Maîtrisé après 3 réponses correctes consécutives',
  scoreCorrect:'✓ Correct', scoreMistakes:'✗ Erreurs', scoreMastered:'★ Maîtrisé', scoreDone:'∑ Terminé',
  settingsTitle:'Paramètres et données', settingsDesc:'Exportez vos progrès ou réinitialisez.',
  exportBtn:'📤 Exporter les progrès (JSON)', resetBtn:'🗑️ Réinitialiser tout', cancelBtn:'✕ Annuler',
  resetConfirm:'Réinitialiser tous les progrès？Irréversible.', resetVerbConfirm:'Réinitialiser les progrès en verbes？',
  loadingNouns:'Chargement du vocabulaire…', loadingVerbs:'Chargement des verbes…',
  errorNouns:'Impossible de charger le vocabulaire', errorVerbs:'Impossible de charger les verbes', retryBtn:'↺ Réessayer',
  kbNouns:'1=der · 2=die · 3=das · Espace=suivant', kbVerbs:'1–4=choisir la réponse · Espace=suivant',
  navToVerbs:'Verbes →', navToNouns:'← Noms',
  feedbackOk:'✓ Richtig！', feedbackErr:(a,n)=>`✗ Faux — c'est „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Faux — ça signifie „${e}"`,
  maskLabel:'masc.', femLabel:'fém.', neutLabel:'neut.', langLabel:'Langue',
},
es:{
  statMastered:'✅ Dominado', statStreak:'🔥 Días seguidos', statCorrect:'🎯 Correcto',
  vocabSuffix:'palabras', verbSuffix:'verbos',
  progressToday:'Progreso de hoy', progressWeekly:'📖 Repaso semanal',
  reviewBanner:'📖 Repaso semanal — todas las palabras de esta semana',
  exLabel:'📖 Ejemplo', nextBtn:'Siguiente →',
  doneTodayBtn:'✓ Terminado por hoy', doneTodayMsg:'✓ ¡Hasta mañana！👋',
  nochmalBtn:'↺ Practicar de nuevo',
  reviewBtn:(n)=>`✗ Repasar ${n} errores`,
  titlePerfect:'¡Perfecto！', subPerfect:'Sin errores — ¡increíble！',
  titleGreat:'¡Excelente！', subGreat:(p)=>`${p}% correcto — ¡sigue así！`,
  titleGood:'¡Buen esfuerzo！', subGood:(p)=>`${p}% correcto — ¡repasa los errores！`,
  titleStudy:'Sigue practicando', subStudy:'Repasar errores refuerza la memoria.',
  titleReview:'¡Repaso de errores completado！', subReviewOk:'¡Todo despejado！¡Bien hecho！',
  subReviewLeft:(n)=>`${n} palabras necesitan más práctica.`,
  masteryNote:'★ Se domina tras 3 respuestas correctas seguidas',
  scoreCorrect:'✓ Correcto', scoreMistakes:'✗ Errores', scoreMastered:'★ Dominado', scoreDone:'∑ Hecho',
  settingsTitle:'Ajustes y datos', settingsDesc:'Exporta tu progreso o reinicia todo.',
  exportBtn:'📤 Exportar progreso (JSON)', resetBtn:'🗑️ Reiniciar todo el progreso', cancelBtn:'✕ Cancelar',
  resetConfirm:'¿Reiniciar todo el progreso？No se puede deshacer.', resetVerbConfirm:'¿Reiniciar el progreso de verbos？',
  loadingNouns:'Cargando vocabulario…', loadingVerbs:'Cargando verbos…',
  errorNouns:'No se pudo cargar el vocabulario', errorVerbs:'No se pudieron cargar los verbos', retryBtn:'↺ Reintentar',
  kbNouns:'1=der · 2=die · 3=das · Espacio=siguiente', kbVerbs:'1–4=elegir respuesta · Espacio=siguiente',
  navToVerbs:'Verbos →', navToNouns:'← Sustantivos',
  feedbackOk:'✓ ¡Correcto！', feedbackErr:(a,n)=>`✗ Incorrecto — es „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Incorrecto — significa „${e}"`,
  maskLabel:'masc.', femLabel:'fem.', neutLabel:'neut.', langLabel:'Idioma',
},
pt:{
  statMastered:'✅ Dominado', statStreak:'🔥 Dias seguidos', statCorrect:'🎯 Correto',
  vocabSuffix:'palavras', verbSuffix:'verbos',
  progressToday:'Progresso de hoje', progressWeekly:'📖 Revisão semanal',
  reviewBanner:'📖 Revisão semanal — todas as palavras desta semana',
  exLabel:'📖 Exemplo', nextBtn:'Próximo →',
  doneTodayBtn:'✓ Concluído por hoje', doneTodayMsg:'✓ Até amanhã！👋',
  nochmalBtn:'↺ Praticar novamente',
  reviewBtn:(n)=>`✗ Revisar ${n} erros`,
  titlePerfect:'Perfeito！', subPerfect:'Sem erros — incrível！',
  titleGreat:'Ótimo trabalho！', subGreat:(p)=>`${p}% correto — continue assim！`,
  titleGood:'Bom esforço！', subGood:(p)=>`${p}% correto — revise os erros！`,
  titleStudy:'Continue praticando', subStudy:'Revisar erros fortalece a memória.',
  titleReview:'Revisão de erros concluída！', subReviewOk:'Tudo limpo！Ótimo trabalho！',
  subReviewLeft:(n)=>`${n} palavras ainda precisam de prática.`,
  masteryNote:'★ Dominado após 3 respostas corretas seguidas',
  scoreCorrect:'✓ Correto', scoreMistakes:'✗ Erros', scoreMastered:'★ Dominado', scoreDone:'∑ Feito',
  settingsTitle:'Configurações e Dados', settingsDesc:'Exporte seu progresso ou reinicie.',
  exportBtn:'📤 Exportar progresso (JSON)', resetBtn:'🗑️ Redefinir todo o progresso', cancelBtn:'✕ Cancelar',
  resetConfirm:'Redefinir todo o progresso？Não pode ser desfeito.', resetVerbConfirm:'Redefinir o progresso dos verbos？',
  loadingNouns:'Carregando vocabulário…', loadingVerbs:'Carregando verbos…',
  errorNouns:'Não foi possível carregar o vocabulário', errorVerbs:'Não foi possível carregar os verbos', retryBtn:'↺ Tentar novamente',
  kbNouns:'1=der · 2=die · 3=das · Espaço=próximo', kbVerbs:'1–4=escolher resposta · Espaço=próximo',
  navToVerbs:'Verbos →', navToNouns:'← Substantivos',
  feedbackOk:'✓ Correto！', feedbackErr:(a,n)=>`✗ Incorreto — é „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Incorreto — significa „${e}"`,
  maskLabel:'masc.', femLabel:'fem.', neutLabel:'neut.', langLabel:'Idioma',
},
de:{
  statMastered:'✅ Gelernt', statStreak:'🔥 Tage hintereinander', statCorrect:'🎯 Richtig',
  vocabSuffix:'Wörter', verbSuffix:'Verben',
  progressToday:'Heutiger Fortschritt', progressWeekly:'📖 Wöchentliche Wiederholung',
  reviewBanner:'📖 Wöchentliche Wiederholung — alle Wörter dieser Woche',
  exLabel:'📖 Beispiel', nextBtn:'Weiter →',
  doneTodayBtn:'✓ Für heute fertig', doneTodayMsg:'✓ Bis morgen！👋',
  nochmalBtn:'↺ Noch einmal üben',
  reviewBtn:(n)=>`✗ ${n} Fehler wiederholen`,
  titlePerfect:'Perfekt！', subPerfect:'Keine Fehler — unglaublich！',
  titleGreat:'Sehr gut！', subGreat:(p)=>`${p}% richtig — weiter so！`,
  titleGood:'Gute Arbeit！', subGood:(p)=>`${p}% richtig — Fehler wiederholen！`,
  titleStudy:'Weiter üben', subStudy:'Fehler wiederholen stärkt das Gedächtnis.',
  titleReview:'Fehlerwiederholung abgeschlossen！', subReviewOk:'Alles geschafft！Gut gemacht！',
  subReviewLeft:(n)=>`${n} Wörter brauchen noch Übung.`,
  masteryNote:'★ Gelernt nach 3 aufeinanderfolgenden richtigen Antworten',
  scoreCorrect:'✓ Richtig', scoreMistakes:'✗ Fehler', scoreMastered:'★ Gelernt', scoreDone:'∑ Erledigt',
  settingsTitle:'Einstellungen & Daten', settingsDesc:'Fortschritt exportieren oder zurücksetzen.',
  exportBtn:'📤 Fortschritt exportieren (JSON)', resetBtn:'🗑️ Alles zurücksetzen', cancelBtn:'✕ Abbrechen',
  resetConfirm:'Alles zurücksetzen？Nicht rückgängig zu machen.', resetVerbConfirm:'Verb-Fortschritt zurücksetzen？',
  loadingNouns:'Vokabeln werden geladen…', loadingVerbs:'Verben werden geladen…',
  errorNouns:'Vokabeln konnten nicht geladen werden', errorVerbs:'Verben konnten nicht geladen werden', retryBtn:'↺ Erneut versuchen',
  kbNouns:'1=der · 2=die · 3=das · Leertaste=weiter', kbVerbs:'1–4=Antwort wählen · Leertaste=weiter',
  navToVerbs:'Verben →', navToNouns:'← Nomen',
  feedbackOk:'✓ Richtig！', feedbackErr:(a,n)=>`✗ Falsch — es heißt „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Falsch — es bedeutet „${e}"`,
  maskLabel:'mask.', femLabel:'fem.', neutLabel:'neut.', langLabel:'Sprache',
},
ru:{
  statMastered:'✅ Усвоено', statStreak:'🔥 Дней подряд', statCorrect:'🎯 Правильно',
  vocabSuffix:'слов', verbSuffix:'глаголов',
  progressToday:'Прогресс сегодня', progressWeekly:'📖 Еженедельное повторение',
  reviewBanner:'📖 Еженедельное повторение — все слова этой недели',
  exLabel:'📖 Пример', nextBtn:'Далее →',
  doneTodayBtn:'✓ На сегодня готово', doneTodayMsg:'✓ До завтра！👋',
  nochmalBtn:'↺ Повторить упражнение',
  reviewBtn:(n)=>`✗ Повторить ${n} ошибок`,
  titlePerfect:'Отлично！', subPerfect:'Без ошибок — невероятно！',
  titleGreat:'Хорошая работа！', subGreat:(p)=>`${p}% правильно — продолжайте！`,
  titleGood:'Хорошее усилие！', subGood:(p)=>`${p}% правильно — повторите ошибки！`,
  titleStudy:'Продолжайте практиковаться', subStudy:'Повторение ошибок укрепляет память.',
  titleReview:'Повторение ошибок завершено！', subReviewOk:'Всё пройдено！Отлично！',
  subReviewLeft:(n)=>`${n} слов ещё требуют практики.`,
  masteryNote:'★ Усваивается после 3 правильных ответов подряд',
  scoreCorrect:'✓ Правильно', scoreMistakes:'✗ Ошибки', scoreMastered:'★ Усвоено', scoreDone:'∑ Готово',
  settingsTitle:'Настройки и данные', settingsDesc:'Экспортируйте прогресс или сбросьте всё.',
  exportBtn:'📤 Экспорт прогресса (JSON)', resetBtn:'🗑️ Сбросить весь прогресс', cancelBtn:'✕ Отмена',
  resetConfirm:'Сбросить весь прогресс？Отменить нельзя.', resetVerbConfirm:'Сбросить прогресс по глаголам？',
  loadingNouns:'Загрузка словаря…', loadingVerbs:'Загрузка глаголов…',
  errorNouns:'Не удалось загрузить словарь', errorVerbs:'Не удалось загрузить глаголы', retryBtn:'↺ Повторить попытку',
  kbNouns:'1=der · 2=die · 3=das · Пробел=далее', kbVerbs:'1–4=выбрать ответ · Пробел=далее',
  navToVerbs:'Глаголы →', navToNouns:'← Существительные',
  feedbackOk:'✓ Правильно！', feedbackErr:(a,n)=>`✗ Неверно — правильно „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Неверно — означает „${e}"`,
  maskLabel:'муж.', femLabel:'жен.', neutLabel:'ср.', langLabel:'Язык',
},
th:{
  statMastered:'✅ เชี่ยวชาญ', statStreak:'🔥 วันต่อเนื่อง', statCorrect:'🎯 ถูกต้อง',
  vocabSuffix:'คำ', verbSuffix:'กริยา',
  progressToday:'ความคืบหน้าวันนี้', progressWeekly:'📖 ทบทวนรายสัปดาห์',
  reviewBanner:'📖 ทบทวนรายสัปดาห์ — คำทั้งหมดในสัปดาห์นี้',
  exLabel:'📖 ตัวอย่าง', nextBtn:'ถัดไป →',
  doneTodayBtn:'✓ เสร็จวันนี้แล้ว', doneTodayMsg:'✓ แล้วพบกันพรุ่งนี้！👋',
  nochmalBtn:'↺ ฝึกอีกครั้ง',
  reviewBtn:(n)=>`✗ ทบทวน ${n} ข้อผิดพลาด`,
  titlePerfect:'สมบูรณ์แบบ！', subPerfect:'ไม่มีข้อผิดพลาด — ยอดเยี่ยม！',
  titleGreat:'ทำได้ดีมาก！', subGreat:(p)=>`ถูกต้อง ${p}% — สู้ต่อไป！`,
  titleGood:'ความพยายามดี！', subGood:(p)=>`ถูกต้อง ${p}% — ทบทวนข้อผิดพลาด！`,
  titleStudy:'ฝึกต่อไป', subStudy:'การทบทวนข้อผิดพลาดช่วยเสริมความจำ',
  titleReview:'ทบทวนข้อผิดพลาดเสร็จแล้ว！', subReviewOk:'ผ่านหมดแล้ว！ทำได้ดี！',
  subReviewLeft:(n)=>`ยังต้องฝึก ${n} คำอีก`,
  masteryNote:'★ เชี่ยวชาญหลังตอบถูก 3 ครั้งติดต่อกัน',
  scoreCorrect:'✓ ถูก', scoreMistakes:'✗ ผิด', scoreMastered:'★ เชี่ยวชาญ', scoreDone:'∑ เสร็จ',
  settingsTitle:'การตั้งค่าและข้อมูล', settingsDesc:'ส่งออกความคืบหน้าหรือรีเซ็ต',
  exportBtn:'📤 ส่งออกความคืบหน้า (JSON)', resetBtn:'🗑️ รีเซ็ตทั้งหมด', cancelBtn:'✕ ยกเลิก',
  resetConfirm:'รีเซ็ตทั้งหมด？ไม่สามารถยกเลิกได้', resetVerbConfirm:'รีเซ็ตความคืบหน้ากริยา？',
  loadingNouns:'กำลังโหลดคำศัพท์…', loadingVerbs:'กำลังโหลดกริยา…',
  errorNouns:'ไม่สามารถโหลดคำศัพท์ได้', errorVerbs:'ไม่สามารถโหลดกริยาได้', retryBtn:'↺ ลองอีกครั้ง',
  kbNouns:'1=der · 2=die · 3=das · สเปซ=ถัดไป', kbVerbs:'1–4=เลือกคำตอบ · สเปซ=ถัดไป',
  navToVerbs:'กริยา →', navToNouns:'← คำนาม',
  feedbackOk:'✓ ถูกต้อง！', feedbackErr:(a,n)=>`✗ ผิด — ถูกต้องคือ „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ ผิด — หมายถึง „${e}"`,
  maskLabel:'ชาย', femLabel:'หญิง', neutLabel:'กลาง', langLabel:'ภาษา',
},
vi:{
  statMastered:'✅ Đã thuộc', statStreak:'🔥 Ngày liên tiếp', statCorrect:'🎯 Đúng',
  vocabSuffix:'từ', verbSuffix:'động từ',
  progressToday:'Tiến độ hôm nay', progressWeekly:'📖 Ôn tập hàng tuần',
  reviewBanner:'📖 Ôn tập hàng tuần — tất cả từ trong tuần này',
  exLabel:'📖 Ví dụ', nextBtn:'Tiếp theo →',
  doneTodayBtn:'✓ Xong hôm nay', doneTodayMsg:'✓ Hẹn gặp lại ngày mai！👋',
  nochmalBtn:'↺ Luyện tập lại',
  reviewBtn:(n)=>`✗ Ôn ${n} lỗi sai`,
  titlePerfect:'Hoàn hảo！', subPerfect:'Không có lỗi — tuyệt vời！',
  titleGreat:'Rất tốt！', subGreat:(p)=>`${p}% đúng — tiếp tục phát huy！`,
  titleGood:'Cố gắng tốt！', subGood:(p)=>`${p}% đúng — ôn lại lỗi sai！`,
  titleStudy:'Tiếp tục luyện tập', subStudy:'Ôn lỗi sai giúp củng cố trí nhớ.',
  titleReview:'Ôn lỗi sai xong！', subReviewOk:'Tất cả đã xong！Tuyệt vời！',
  subReviewLeft:(n)=>`Còn ${n} từ cần luyện thêm.`,
  masteryNote:'★ Thuộc sau 3 lần trả lời đúng liên tiếp',
  scoreCorrect:'✓ Đúng', scoreMistakes:'✗ Sai', scoreMastered:'★ Đã thuộc', scoreDone:'∑ Hoàn thành',
  settingsTitle:'Cài đặt & Dữ liệu', settingsDesc:'Xuất tiến độ hoặc đặt lại từ đầu.',
  exportBtn:'📤 Xuất tiến độ (JSON)', resetBtn:'🗑️ Đặt lại tất cả tiến độ', cancelBtn:'✕ Hủy',
  resetConfirm:'Đặt lại tất cả tiến độ？Không thể hoàn tác.', resetVerbConfirm:'Đặt lại tiến độ động từ？',
  loadingNouns:'Đang tải từ vựng…', loadingVerbs:'Đang tải động từ…',
  errorNouns:'Không thể tải từ vựng', errorVerbs:'Không thể tải động từ', retryBtn:'↺ Thử lại',
  kbNouns:'1=der · 2=die · 3=das · Cách=tiếp theo', kbVerbs:'1–4=chọn câu trả lời · Cách=tiếp theo',
  navToVerbs:'Động từ →', navToNouns:'← Danh từ',
  feedbackOk:'✓ Đúng！', feedbackErr:(a,n)=>`✗ Sai — đúng là „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Sai — nghĩa là „${e}"`,
  maskLabel:'đực', femLabel:'cái', neutLabel:'trung', langLabel:'Ngôn ngữ',
},
id:{
  statMastered:'✅ Dikuasai', statStreak:'🔥 Hari beruntun', statCorrect:'🎯 Benar',
  vocabSuffix:'kata', verbSuffix:'kata kerja',
  progressToday:'Kemajuan hari ini', progressWeekly:'📖 Ulangan mingguan',
  reviewBanner:'📖 Ulangan mingguan — semua kata minggu ini',
  exLabel:'📖 Contoh', nextBtn:'Lanjut →',
  doneTodayBtn:'✓ Selesai untuk hari ini', doneTodayMsg:'✓ Sampai jumpa besok！👋',
  nochmalBtn:'↺ Latihan lagi',
  reviewBtn:(n)=>`✗ Ulangi ${n} kesalahan`,
  titlePerfect:'Sempurna！', subPerfect:'Tanpa kesalahan — luar biasa！',
  titleGreat:'Bagus sekali！', subGreat:(p)=>`${p}% benar — terus semangat！`,
  titleGood:'Usaha bagus！', subGood:(p)=>`${p}% benar — ulangi kesalahannya！`,
  titleStudy:'Terus berlatih', subStudy:'Mengulang kesalahan memperkuat ingatan.',
  titleReview:'Ulangan kesalahan selesai！', subReviewOk:'Semua sudah beres！Hebat！',
  subReviewLeft:(n)=>`${n} kata masih butuh latihan.`,
  masteryNote:'★ Dikuasai setelah 3 jawaban benar berturut-turut',
  scoreCorrect:'✓ Benar', scoreMistakes:'✗ Salah', scoreMastered:'★ Dikuasai', scoreDone:'∑ Selesai',
  settingsTitle:'Pengaturan & Data', settingsDesc:'Ekspor kemajuan atau reset ulang.',
  exportBtn:'📤 Ekspor kemajuan (JSON)', resetBtn:'🗑️ Reset semua kemajuan', cancelBtn:'✕ Batal',
  resetConfirm:'Reset semua kemajuan？Tidak bisa dibatalkan.', resetVerbConfirm:'Reset kemajuan kata kerja？',
  loadingNouns:'Memuat kosakata…', loadingVerbs:'Memuat kata kerja…',
  errorNouns:'Gagal memuat kosakata', errorVerbs:'Gagal memuat kata kerja', retryBtn:'↺ Coba lagi',
  kbNouns:'1=der · 2=die · 3=das · Spasi=lanjut', kbVerbs:'1–4=pilih jawaban · Spasi=lanjut',
  navToVerbs:'Kata Kerja →', navToNouns:'← Kata Benda',
  feedbackOk:'✓ Benar！', feedbackErr:(a,n)=>`✗ Salah — seharusnya „${a} ${n}"`,
  feedbackVerbErr:(e)=>`✗ Salah — artinya „${e}"`,
  maskLabel:'mask.', femLabel:'fem.', neutLabel:'neut.', langLabel:'Bahasa',
},
};

// ═══════════════════════════════════════
//  PUBLIC API
// ═══════════════════════════════════════
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
  // RTL support
  document.documentElement.dir=RTL.includes(lang)?'rtl':'ltr';
  document.documentElement.lang=lang;
  // Apply data-i18n elements
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

// Build & inject language picker modal
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
    btn.style.cssText=`padding:11px 14px;border-radius:10px;border:2px solid ${code===cur?'var(--acc,#7048E8)':'var(--border)'};background:${code===cur?'var(--acc-bg,#F3F0FF)':'var(--card2)'};color:var(--ink);font-size:.88rem;font-weight:700;text-align:left;cursor:pointer;transition:all .15s;font-family:inherit;`;
    btn.textContent=(code===cur?'✓ ':'')+name;
    btn.onclick=()=>setLang(code);
    grid.appendChild(btn);
  });

  sheet.append(handle,title,grid);
  ov.appendChild(sheet);
  ov.addEventListener('click',e=>{ if(e.target===ov) ov.style.display='none'; });
  document.body.appendChild(ov);

  // Add 🌐 button to header if not already there
  const hdrBtns=document.querySelector('.hdr-btns');
  if(hdrBtns&&!document.getElementById('langBtn')){
    const lb=document.createElement('button');
    lb.id='langBtn';lb.className='hdr-btn';lb.title='Language';lb.textContent='🌐';
    lb.onclick=()=>{ ov.style.display='flex'; };
    hdrBtns.insertBefore(lb,hdrBtns.firstChild);
  }
}

// Expose globally
window.i18n={detect,t,apply,setLang,LANGS,T_DATA};
window.T=t; // shorthand

// Auto-apply on DOM ready
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>{apply();buildPicker();});
}else{
  apply();buildPicker();
}
})();