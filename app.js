/**
 * Human Body Systems - Application Logic
 * Premium Educational Resource
 */

const app = {
    // --- Configuration ---
    apiKey: "", // USER: Insert your Gemini API Key here
    data: [
        { id: 1, system: 'Respiratory', termEn: 'The Respiratory System', termAr: 'الجهاز التنفسي', descEn: 'It includes the nose, mouth, throat, voice box, windpipe, and lungs. Air enters the respiratory system through the nose or the mouth.', descAr: 'يشمل الأنف، الفم، الحلق، الحنجرة، القصبة الهوائية، والرئتين. يدخل الهواء عبر الأنف أو الفم لتتم تدفئته وترطيبه.', icon: 'fa-lungs', color: 'from-sky-400 to-blue-500', bg: 'bg-sky-50' },
        { id: 2, system: 'Respiratory', termEn: 'Nose', termAr: 'الأنف', descEn: 'The prominent structure between the eyes that serves as the entrance to the respiratory tract.', descAr: 'الهيكل البارز الموجود بين العينين والذي يعمل كمدخل لمجرى التنفس ويحتوي على عضو الشم.', icon: 'fa-face-smile', color: 'from-sky-300 to-sky-500', bg: 'bg-sky-50' },
        { id: 3, system: 'Respiratory', termEn: 'Pharynx', termAr: 'البلعوم', descEn: 'The hollow tube inside the neck that starts behind the nose and ends at the top of the trachea.', descAr: 'الأنبوب المجوف داخل الرقبة الذي يبدأ خلف الأنف وينتهي في الجزء العلوي من القصبة الهوائية والمريء.', icon: 'fa-head-side-cough', color: 'from-sky-300 to-sky-500', bg: 'bg-sky-50' },
        { id: 4, system: 'Respiratory', termEn: 'Trachea', termAr: 'القصبة الهوائية', descEn: 'The airway that leads from the larynx (voice box) to the bronchi.', descAr: 'مجرى الهواء الذي يؤدي من الحنجرة (صندوق الصوت) إلى الشُعب الهوائية.', icon: 'fa-wind', color: 'from-sky-300 to-sky-500', bg: 'bg-sky-50' },
        { id: 5, system: 'Respiratory', termEn: 'Bronchi', termAr: 'الشُعب الهوائية', descEn: 'The two large tubes that carry air from your windpipe to your lungs.', descAr: 'الأنبوبان الكبيران اللذان يحملان الهواء من القصبة الهوائية مباشرة إلى الرئتين.', icon: 'fa-leaf', color: 'from-sky-300 to-sky-500', bg: 'bg-sky-50' },
        { id: 6, system: 'Respiratory', termEn: 'Lungs', termAr: 'الرئتان', descEn: 'The pair of spongy, pinkish-grey organs in your chest.', descAr: 'زوج من الأعضاء الإسفنجية ذات اللون الرمادي المائل للوردي تعمل على تبادل الغازات.', icon: 'fa-lungs', color: 'from-sky-300 to-sky-500', bg: 'bg-sky-50' },
        
        { id: 7, system: 'Cardiovascular', termEn: 'The Cardiovascular System', termAr: 'الجهاز القلبي الوعائي', descEn: 'The heart and blood vessels that circulate blood throughout the body.', descAr: 'يتكون من القلب والأوعية الدموية التي تضمن دوران الدم في جميع أنحاء الجسم بشكل مستمر.', icon: 'fa-heartbeat', color: 'from-rose-400 to-red-600', bg: 'bg-rose-50' },
        { id: 8, system: 'Cardiovascular', termEn: 'Heart', termAr: 'القبل', descEn: 'The muscular organ that pumps blood through the circulatory system.', descAr: 'العضو العضلي الذي يعمل كمضخة حيوية لدفع الدم عبر شبكة الأوعية الدموية.', icon: 'fa-heart', color: 'from-rose-400 to-red-500', bg: 'bg-rose-50' },
        { id: 9, system: 'Cardiovascular', termEn: 'Atrium & Ventricle', termAr: 'الأُذين والبطين', descEn: 'The upper and lower chambers of the heart that manage blood flow.', descAr: 'الحجرات الداخلية للقلب؛ الأذين يستقبل الدم والبطين يضخه بقوة نحو الجسم.', icon: 'fa-layer-group', color: 'from-rose-400 to-red-500', bg: 'bg-rose-50' },
        { id: 10, system: 'Cardiovascular', termEn: 'Arteries & Veins', termAr: 'الشرايين والأوردة', descEn: 'Arteries carry blood away from heart; veins return blood to heart.', descAr: 'الشرايين تحمل الدم الغني بالأكسجين بعيداً عن القلب، والأوردة تعيد الدم المحمل بالفضلات إليه.', icon: 'fa-project-diagram', color: 'from-rose-400 to-red-500', bg: 'bg-rose-50' },
        
        { id: 11, system: 'Digestive', termEn: 'The Digestive System', termAr: 'الجهاز الهضمي', descEn: 'The organs that break down food into usable energy and nutrients.', descAr: 'مجموعة الأعضاء المسؤولة عن تحويل الطعام والسوائل إلى طاقة ومواد غذائية يحتاجها الجسم.', icon: 'fa-apple-whole', color: 'from-emerald-400 to-teal-600', bg: 'bg-emerald-50' },
        { id: 12, system: 'Digestive', termEn: 'Stomach', termAr: 'المعدة', descEn: 'A muscular organ where major part of digestion occurs.', descAr: 'عضو عضلي يشبه الكيس، يتم فيه خلط الطعام بالعصارات الهاضمة لتفكيكه.', icon: 'fa-utensils', color: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50' },
        { id: 13, system: 'Digestive', termEn: 'Small Intestine', termAr: 'الأمعاء الدقيقة', descEn: 'Where most of the absorption of food nutrients takes place.', descAr: 'الجزء الأطول من الجهاز الهضمي، وفيه يتم امتصاص معظم العناصر الغذائية إلى الدم.', icon: 'fa-wave-square', color: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50' },
        
        { id: 14, system: 'Exercises', termEn: 'Blood Pump Exercise', termAr: 'تمرين مضخة الدم', descEn: 'Identify the organ responsible for pumping blood. (Answer: Heart)', descAr: 'تعرف على العضو المسؤول عن ضخ الدم في شبكة الأوعية الدموية. (الإجابة: القلب)', icon: 'fa-clipboard-check', color: 'from-indigo-400 to-purple-600', bg: 'bg-indigo-50' },
        { id: 15, system: 'Exercises', termEn: 'Oxygen Exchange', termAr: 'تمرين تبادل الأكسجين', descEn: 'Which system is responsible for taking in oxygen? (Answer: Respiratory)', descAr: 'أي جهاز هو المسؤول عن إدخال الأكسجين وتخليص الجسم من ثاني أكسيد الكربون؟ (الإجابة: التنفسي)', icon: 'fa-clipboard-check', color: 'from-indigo-400 to-purple-600', bg: 'bg-indigo-50' }
    ],
    systemInfo: {
        'Respiratory': { title: 'الجهاز التنفسي', icon: 'fa-lungs', theme: 'sky' },
        'Cardiovascular': { title: 'الجهاز الدوري', icon: 'fa-heartbeat', theme: 'rose' },
        'Digestive': { title: 'الجهاز الهضمي', icon: 'fa-apple-whole', theme: 'emerald' },
        'Exercises': { title: 'التمارين والمراجعة', icon: 'fa-clipboard-check', theme: 'indigo' }
    },

    // --- State ---
    currentFilter: 'All',

    // --- Initialization ---
    init() {
        console.log("App Initialized");
        this.renderCards('All');
        this.setupEventListeners();
        
        // Handle Loader Transition
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('initial-loader');
                const appMain = document.getElementById('app');
                
                if (loader) loader.style.opacity = '0';
                if (appMain) appMain.style.opacity = '1';
                
                // Allow scrolling after loader
                document.body.classList.remove('overflow-hidden');
                
                setTimeout(() => {
                    if (loader) loader.style.display = 'none';
                }, 700);
            }, 800);
        });
    },

    setupEventListeners() {
        // Sticky header logic or extra animations can go here
    },

    // --- Core Logic ---
    renderCards(filter) {
        this.currentFilter = filter;
        const container = document.getElementById('content-container');
        container.innerHTML = '';

        const sections = filter === 'All' ? Object.keys(this.systemInfo) : [filter];

        sections.forEach(sysKey => {
            const systemData = this.data.filter(item => item.system === sysKey);
            if (systemData.length === 0) return;

            const info = this.systemInfo[sysKey];
            const sectionDiv = document.createElement('section');
            sectionDiv.className = 'fade-in';
            
            let html = `
                <div class="flex items-center justify-between mb-8 pb-4 border-b-2 border-${info.theme}-100">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-${info.theme}-500 text-white flex items-center justify-center shadow-lg">
                            <i class="fas ${info.icon} text-xl"></i>
                        </div>
                        <h2 class="text-3xl font-extrabold text-slate-800">${info.title}</h2>
                    </div>
                    <span class="bg-${info.theme}-50 text-${info.theme}-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Section ${sysKey}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            `;

            systemData.forEach(item => {
                html += `
                    <div class="system-card group">
                        <div class="card-icon-wrapper bg-gradient-to-br ${item.color} text-white">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <div class="p-8 flex-grow flex flex-col">
                            <div class="flex justify-between items-center mb-1">
                                <h3 class="text-lg font-bold text-slate-400 font-mono tracking-tight" dir="ltr">${item.termEn}</h3>
                                <div class="w-2 h-2 rounded-full bg-${item.bg.replace('bg-', '')}-500"></div>
                            </div>
                            <h4 class="text-3xl font-black text-slate-800 mb-6">${item.termAr}</h4>
                            
                            <div class="space-y-4 mb-8 text-sm md:text-base leading-relaxed">
                                <p class="text-slate-600 border-r-4 border-blue-400 pr-4">${item.descAr}</p>
                                <p class="text-slate-400 italic" dir="ltr"><strong class="text-slate-500 not-italic">EN:</strong> ${item.descEn}</p>
                            </div>

                            <div class="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                                <button onclick="app.simplify('${item.termAr}', ${item.id})" class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition">
                                    <i class="fas fa-sparkles"></i> تبسيط
                                </button>
                                <button onclick="app.getMnemonic('${item.termAr}', ${item.id})" class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition">
                                    <i class="fas fa-lightbulb"></i> سر الحفظ
                                </button>
                                <div id="ai-res-${item.id}" class="w-full hidden"></div>
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
            sectionDiv.innerHTML = html;
            container.appendChild(sectionDiv);
        });
    },

    filterSystem(system, btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderCards(system);
        window.scrollTo({ top: document.querySelector('nav').offsetTop, behavior: 'smooth' });
    },

    // --- AI Features ---
    async askGemini(prompt, isJson = false) {
        if (!this.apiKey) {
            alert("يرجى إدخال مفتاح Gemini API في ملف app.js لاستخدام ميزات الذكاء الاصطناعي.");
            throw new Error("Missing API Key");
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`;
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: "أنت معلم أحياء محترف ومبدع. أجب باللغة العربية المختصرة والمفيدة." }] }
        };

        if (isJson) {
            payload.generationConfig = {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        question: { type: "STRING" },
                        options: { type: "ARRAY", items: { type: "STRING" } },
                        answerIndex: { type: "INTEGER" },
                        explanation: { type: "STRING" }
                    },
                    required: ["question", "options", "answerIndex", "explanation"]
                }
            };
        }

        const response = await fetch(url, { method: 'POST', body: JSON.stringify(payload) });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    },

    async simplify(term, id) {
        const resDiv = document.getElementById(`ai-res-${id}`);
        resDiv.innerHTML = '<div class="ai-bubble flex items-center gap-2"><div class="btn-loader border-blue-500"></div> جاري التبسيط...</div>';
        resDiv.classList.remove('hidden');

        try {
            const result = await this.askGemini(`اشرح مصطلح "${term}" المتعلق بجسم الإنسان في جملتين بسيطتين جداً للأطفال.`);
            resDiv.innerHTML = `<div class="ai-bubble"><strong><i class="fas fa-robot text-blue-500"></i> الشرح المبسط:</strong><br>${result}</div>`;
        } catch (e) {
            resDiv.innerHTML = '';
            resDiv.classList.add('hidden');
        }
    },

    async getMnemonic(term, id) {
        const resDiv = document.getElementById(`ai-res-${id}`);
        resDiv.innerHTML = '<div class="ai-bubble flex items-center gap-2"><div class="btn-loader border-emerald-500"></div> جاري ابتكار سر الحفظ...</div>';
        resDiv.classList.remove('hidden');

        try {
            const result = await this.askGemini(`أعطني جملة أو قصة قصيرة مضحكة تساعدني على حفظ مصطلح وربط وظيفة "${term}" في جسم الإنسان.`);
            resDiv.innerHTML = `<div class="ai-bubble"><strong><i class="fas fa-magic text-emerald-500"></i> سر الحفظ:</strong><br>${result}</div>`;
        } catch (e) {
            resDiv.innerHTML = '';
            resDiv.classList.add('hidden');
        }
    },

    // --- Quiz Logic ---
    openQuizModal() {
        document.getElementById('quiz-modal').classList.remove('hidden');
        this.generateQuiz();
    },

    closeQuizModal() {
        document.getElementById('quiz-modal').classList.add('hidden');
    },

    async generateQuiz() {
        const body = document.getElementById('quiz-body');
        body.innerHTML = '<div class="flex flex-col items-center py-10"><div class="loader-spinner mb-4"></div><p>يتم الآن تأليف سؤال ذكي لك...</p></div>';

        try {
            const jsonText = await this.askGemini(`أنشئ سؤال MCQ واحد لاختبار المعلومات حول "${this.currentFilter === 'All' ? 'أجهزة جسم الإنسان' : this.currentFilter}".`, true);
            const quiz = JSON.parse(jsonText);
            
            let optionsHtml = '';
            quiz.options.forEach((opt, index) => {
                optionsHtml += `
                    <button onclick="app.checkAnswer(${index}, ${quiz.answerIndex}, '${quiz.explanation.replace(/'/g, "\\'")}', this)" class="w-full text-right p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-400 font-bold text-slate-700 transition flex justify-between items-center group">
                        <span>${opt}</span>
                        <i class="far fa-circle text-slate-300 group-hover:text-indigo-400"></i>
                    </button>
                `;
            });

            body.innerHTML = `
                <div class="space-y-6">
                    <h4 class="text-2xl font-black text-slate-800 leading-tight">${quiz.question}</h4>
                    <div class="space-y-3" id="quiz-options-list">${optionsHtml}</div>
                    <div id="quiz-feedback" class="hidden p-6 rounded-2xl border-2"></div>
                    <button onclick="app.generateQuiz()" class="w-full py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition">سؤال آخر</button>
                </div>
            `;
        } catch (e) {
            body.innerHTML = '<p class="text-center text-rose-500">حدث خطأ أثناء الاتصال. يرجى التأكد من مفتاح الـ API.</p>';
        }
    },

    checkAnswer(selected, correct, explanation, btn) {
        const list = document.getElementById('quiz-options-list');
        const feedback = document.getElementById('quiz-feedback');
        
        [...list.children].forEach(b => b.disabled = true);

        if (selected === correct) {
            btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-700');
            btn.querySelector('i').className = 'fas fa-check-circle text-emerald-500';
            feedback.className = 'p-6 rounded-2xl border-2 bg-emerald-50 border-emerald-200 text-emerald-800 hidden';
        } else {
            btn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-700');
            btn.querySelector('i').className = 'fas fa-times-circle text-rose-500';
            list.children[correct].classList.add('border-emerald-500', 'bg-emerald-50');
        }

        feedback.innerHTML = `<strong><i class="fas fa-info-circle"></i> شرح علمي:</strong><br>${explanation}`;
        feedback.classList.remove('hidden');
    },

    // --- Diagnosis Game ---
    openDiagnosisGame() {
        document.getElementById('diagnosis-modal').classList.remove('hidden');
        this.generateDiagnosis();
    },

    closeDiagnosisGame() {
        document.getElementById('diagnosis-modal').classList.add('hidden');
    },

    async generateDiagnosis() {
        const body = document.getElementById('diagnosis-body');
        body.innerHTML = '<div class="flex flex-col items-center py-10"><div class="loader-spinner mb-4 border-emerald-500"></div><p>يتم الآن تجهيز حالة مريض طبية...</p></div>';

        try {
            const prompt = `أنت بروفيسور طب. أنشئ "حالة مجهولة" لمريض يعاني من أعراض تتعلق بـ "${this.currentFilter === 'All' ? 'أعضاء الجسم' : this.currentFilter}".`;
            const jsonText = await this.askGemini(prompt, true);
            const caseData = JSON.parse(jsonText);

            let optionsHtml = '';
            caseData.options.forEach((opt, index) => {
                optionsHtml += `
                    <button onclick="app.checkDiagnosis(${index}, ${caseData.answerIndex}, '${caseData.explanation.replace(/'/g, "\\'")}', this)" class="w-full text-right p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-400 font-bold text-slate-700 transition flex justify-between items-center group">
                        <span>${opt}</span>
                        <i class="far fa-circle text-slate-300"></i>
                    </button>
                `;
            });

            body.innerHTML = `
                <div class="space-y-6">
                    <div class="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <span class="text-xs font-black text-emerald-600 uppercase mb-2 block">الحالة السريرية:</span>
                        <p class="text-lg font-bold text-slate-800 italic">"${caseData.question}"</p>
                    </div>
                    <p class="font-black text-slate-700">ما هو التشخيص الأقرب؟</p>
                    <div class="space-y-3" id="diagnosis-options-list">${optionsHtml}</div>
                    <div id="diagnosis-feedback" class="hidden p-6 rounded-2xl border-2"></div>
                    <button onclick="app.generateDiagnosis()" class="w-full py-4 rounded-xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition">مريض جديد</button>
                </div>
            `;
        } catch (e) {
            body.innerHTML = '<p class="text-center text-rose-500">فشل تحميل التحدي.</p>';
        }
    },

    checkDiagnosis(selected, correct, explanation, btn) {
        const list = document.getElementById('diagnosis-options-list');
        const feedback = document.getElementById('diagnosis-feedback');
        [...list.children].forEach(b => b.disabled = true);

        if (selected === correct) {
            btn.classList.add('bg-emerald-100', 'border-emerald-500');
            feedback.className = 'p-6 rounded-2xl border-2 bg-emerald-50 border-emerald-200 text-emerald-800';
            feedback.innerHTML = `<strong>تشخيص دقيق!</strong><br>${explanation}`;
        } else {
            btn.classList.add('bg-rose-50', 'border-rose-500');
            list.children[correct].classList.add('border-emerald-500', 'bg-emerald-50');
            feedback.className = 'p-6 rounded-2xl border-2 bg-rose-50 border-rose-200 text-rose-800';
            feedback.innerHTML = `<strong>تشخيص خاطئ.</strong><br>${explanation}`;
        }
        feedback.classList.remove('hidden');
    },

    // --- PDF Generation ---
    async generatePDF(btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<div class="btn-loader"></div> جاري المعالجة...';
        btn.disabled = true;

        const tempDiv = document.createElement('div');
        tempDiv.style.padding = '40px';
        tempDiv.style.direction = 'rtl';
        tempDiv.style.fontFamily = "'Cairo', sans-serif";
        tempDiv.style.backgroundColor = '#ffffff';
        tempDiv.style.width = '800px';
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';

        let html = `
            <div style="text-align: center; border-bottom: 4px solid #1e3a8a; padding-bottom: 20px; margin-bottom: 40px;">
                <h1 style="color: #1e3a8a; font-size: 32px; margin-bottom: 10px;">ملزمة دراسة أجهزة جسم الإنسان</h1>
                <p style="color: #64748b;">Interactive Human Body Systems Guide</p>
            </div>
        `;

        const sections = this.currentFilter === 'All' ? Object.keys(this.systemInfo) : [this.currentFilter];

        sections.forEach(sysKey => {
            const data = this.data.filter(i => i.system === sysKey);
            const info = this.systemInfo[sysKey];
            
            html += `<h2 style="color: #2563eb; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px;">${info.title}</h2>`;
            
            data.forEach(item => {
                html += `
                    <div style="page-break-inside: avoid; border: 1px solid #f1f5f9; padding: 20px; margin: 15px 0; border-radius: 12px; background: #fafafa;">
                        <h3 style="margin: 0; color: #1e293b;">${item.termAr} (${item.termEn})</h3>
                        <p style="color: #475569; font-size: 14px;">${item.descAr}</p>
                    </div>
                `;
            });
        });

        tempDiv.innerHTML = html;
        document.body.appendChild(tempDiv);

        const opt = {
            margin: 10,
            filename: `Human_Body_Guide_${this.currentFilter}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(tempDiv).save();
        } finally {
            document.body.removeChild(tempDiv);
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }
};

// Start the app
document.addEventListener('DOMContentLoaded', () => app.init());
