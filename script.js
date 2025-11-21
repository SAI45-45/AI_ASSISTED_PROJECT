const appState = {
    currentQuestion: 0,
    answers: {},
    questions: [
        {
            id: 'age',
            text: 'What is your age?',
            type: 'single',
            options: [
                { value: '0', text: 'Under 30', icon: 'fas fa-user' },
                { value: '1', text: '30-40', icon: 'fas fa-user' },
                { value: '2', text: '41-50', icon: 'fas fa-user' },
                { value: '3', text: '51-60', icon: 'fas fa-user' },
                { value: '4', text: 'Over 60', icon: 'fas fa-user' }
            ]
        },
        {
            id: 'gender',
            text: 'What is your gender?',
            type: 'single',
            options: [
                { value: '0', text: 'Female', icon: 'fas fa-female' },
                { value: '1', text: 'Male', icon: 'fas fa-male' }
            ]
        },
        {
            id: 'chestPain',
            text: 'Do you experience chest pain?',
            type: 'single',
            options: [
                { value: '0', text: 'No', icon: 'fas fa-times' },
                { value: '1', text: 'Typical Angina', icon: 'fas fa-heartbeat' },
                { value: '2', text: 'Atypical Angina', icon: 'fas fa-heartbeat' },
                { value: '3', text: 'Non-Anginal Pain', icon: 'fas fa-heartbeat' }
            ]
        },
        {
            id: 'bp',
            text: 'What is your resting blood pressure? (mm Hg)',
            type: 'single',
            options: [
                { value: '0', text: 'Under 120', icon: 'fas fa-heart' },
                { value: '1', text: '120-129', icon: 'fas fa-heart' },
                { value: '2', text: '130-139', icon: 'fas fa-heart' },
                { value: '3', text: '140-179', icon: 'fas fa-heart' },
                { value: '4', text: '180 or higher', icon: 'fas fa-heart' }
            ]
        },
        {
            id: 'cholesterol',
            text: 'What is your cholesterol level? (mg/dl)',
            type: 'single',
            options: [
                { value: '0', text: 'Under 200', icon: 'fas fa-egg' },
                { value: '1', text: '200-239', icon: 'fas fa-egg' },
                { value: '2', text: '240-279', icon: 'fas fa-egg' },
                { value: '3', text: '280-319', icon: 'fas fa-egg' },
                { value: '4', text: 'Over 320', icon: 'fas fa-egg' }
            ]
        },
        {
            id: 'diabetes',
            text: 'Do you have diabetes?',
            type: 'single',
            options: [
                { value: '0', text: 'No', icon: 'fas fa-times' },
                { value: '1', text: 'Yes', icon: 'fas fa-check' }
            ]
        },
        {
            id: 'smoking',
            text: 'Are you a smoker?',
            type: 'single',
            options: [
                { value: '0', text: 'No', icon: 'fas fa-times' },
                { value: '1', text: 'Yes', icon: 'fas fa-smoking' }
            ]
        },
        {
            id: 'exercise',
            text: 'How often do you exercise?',
            type: 'single',
            options: [
                { value: '0', text: 'Never', icon: 'fas fa-couch' },
                { value: '1', text: 'Rarely', icon: 'fas fa-walking' },
                { value: '2', text: 'Occasionally', icon: 'fas fa-walking' },
                { value: '3', text: 'Regularly', icon: 'fas fa-running' },
                { value: '4', text: 'Daily', icon: 'fas fa-running' }
            ]
        },
        {
            id: 'familyHistory',
            text: 'Family history of heart disease?',
            type: 'single',
            options: [
                { value: '0', text: 'None', icon: 'fas fa-users' },
                { value: '1', text: 'One relative', icon: 'fas fa-user' },
                { value: '2', text: 'Multiple relatives', icon: 'fas fa-users' }
            ]
        },
        {
            id: 'stress',
            text: 'How would you rate your stress level?',
            type: 'single',
            options: [
                { value: '0', text: 'Very Low', icon: 'fas fa-smile' },
                { value: '1', text: 'Low', icon: 'fas fa-smile' },
                { value: '2', text: 'Moderate', icon: 'fas fa-meh' },
                { value: '3', text: 'High', icon: 'fas fa-frown' },
                { value: '4', text: 'Very High', icon: 'fas fa-frown' }
            ]
        },
        {
            id: 'diet',
            text: 'How would you describe your diet?',
            type: 'single',
            options: [
                { value: '0', text: 'Very Healthy', icon: 'fas fa-apple-alt' },
                { value: '1', text: 'Healthy', icon: 'fas fa-apple-alt' },
                { value: '2', text: 'Average', icon: 'fas fa-bread-slice' },
                { value: '3', text: 'Unhealthy', icon: 'fas fa-hamburger' },
                { value: '4', text: 'Very Unhealthy', icon: 'fas fa-hamburger' }
            ]
        },
        {
            id: 'alcohol',
            text: 'Alcohol consumption?',
            type: 'single',
            options: [
                { value: '0', text: 'None', icon: 'fas fa-times' },
                { value: '1', text: 'Occasional', icon: 'fas fa-wine-glass' },
                { value: '2', text: 'Weekly', icon: 'fas fa-wine-glass' },
                { value: '3', text: 'Daily', icon: 'fas fa-wine-glass-alt' }
            ]
        },
        {
            id: 'sleep',
            text: 'Hours of sleep per night?',
            type: 'single',
            options: [
                { value: '0', text: 'Less than 5', icon: 'fas fa-bed' },
                { value: '1', text: '5-6 hours', icon: 'fas fa-bed' },
                { value: '2', text: '7-8 hours', icon: 'fas fa-bed' },
                { value: '3', text: 'More than 8', icon: 'fas fa-bed' }
            ]
        }
    ]
};

const welcomeScreen = document.getElementById('welcome-screen');
const questionnaire = document.getElementById('questionnaire');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const questionTitle = document.getElementById('question-title');
const questionNumber = document.getElementById('question-number');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', startAssessment);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
restartBtn.addEventListener('click', restartAssessment);

function init() {
    renderQuestion();
    updateProgress();
}

function startAssessment() {
    welcomeScreen.classList.remove('active');
    questionnaire.classList.add('active');
    renderQuestion();
    updateProgress();
}

function renderQuestion() {
    const question = appState.questions[appState.currentQuestion];
    questionTitle.textContent = question.text;
    questionNumber.textContent = `Question ${appState.currentQuestion + 1} of ${appState.questions.length}`;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (appState.answers[question.id] === option.value) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <i class="${option.icon}"></i>
            <label>${option.text}</label>
            <input type="radio" name="${question.id}" value="${option.value}" class="option-input">
        `;
        
        optionElement.addEventListener('click', () => selectOption(question.id, option.value));
        optionsContainer.appendChild(optionElement);
    });
    
    prevBtn.disabled = appState.currentQuestion === 0;
    nextBtn.textContent = appState.currentQuestion === appState.questions.length - 1 ? 'See Results' : 'Next ';
    nextBtn.innerHTML = appState.currentQuestion === appState.questions.length - 1 ? 
        'See Results <i class="fas fa-chart-bar"></i>' : 
        'Next <i class="fas fa-arrow-right"></i>';
}

function selectOption(questionId, value) {
    appState.answers[questionId] = value;
    
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
}

function goToNextQuestion() {
    const currentQuestion = appState.questions[appState.currentQuestion];
    if (appState.answers[currentQuestion.id] === undefined) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    if (appState.currentQuestion < appState.questions.length - 1) {
        appState.currentQuestion++;
        renderQuestion();
        updateProgress();
    } else {
        calculateRisk();
        showResults();
    }
}

function goToPreviousQuestion() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        renderQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const percentage = ((appState.currentQuestion) / appState.questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

function calculateRisk() {
    let riskScore = 0;
    
    riskScore += parseInt(appState.answers.age || 0) * 2;
    riskScore += parseInt(appState.answers.gender || 0) * 3;
    riskScore += parseInt(appState.answers.chestPain || 0) * 4;
    riskScore += parseInt(appState.answers.bp || 0) * 3;
    riskScore += parseInt(appState.answers.cholesterol || 0) * 3;
    riskScore += parseInt(appState.answers.diabetes || 0) * 5;
    riskScore += parseInt(appState.answers.smoking || 0) * 4;
    riskScore += (4 - parseInt(appState.answers.exercise || 0)) * 2;
    riskScore += parseInt(appState.answers.familyHistory || 0) * 3;
    riskScore += parseInt(appState.answers.stress || 0) * 2;
    riskScore += parseInt(appState.answers.diet || 0) * 2;
    riskScore += parseInt(appState.answers.alcohol || 0) * 1;
    
    if (appState.answers.sleep === '0' || appState.answers.sleep === '1') {
        riskScore += 3;
    } else if (appState.answers.sleep === '3') {
        riskScore += 1;
    }
    
    const maxPossibleScore = 2*4 + 3*1 + 4*3 + 3*4 + 3*4 + 5*1 + 4*1 + 2*4 + 3*2 + 2*4 + 2*4 + 1*3 + 3*1;
    const normalizedRisk = Math.min(100, Math.max(0, Math.round((riskScore / maxPossibleScore) * 100)));
    
    appState.riskScore = normalizedRisk;
    
    if (normalizedRisk < 30) {
        appState.riskLevel = 'low';
        appState.riskLabel = 'Low Risk';
        appState.riskDescription = 'Based on your responses, your risk of heart disease appears to be low. Continue maintaining a healthy lifestyle.';
    } else if (normalizedRisk < 60) {
        appState.riskLevel = 'moderate';
        appState.riskLabel = 'Moderate Risk';
        appState.riskDescription = 'Your risk of heart disease is moderate. Consider making some lifestyle changes and consult with a healthcare provider.';
    } else {
        appState.riskLevel = 'high';
        appState.riskLabel = 'High Risk';
        appState.riskDescription = 'Your risk of heart disease is high. It\'s important to consult with a healthcare provider as soon as possible.';
    }
}

function showResults() {
    questionnaire.classList.remove('active');
    resultsScreen.classList.add('active');
    
    document.getElementById('risk-percentage').textContent = `${appState.riskScore}%`;
    document.getElementById('risk-label').textContent = appState.riskLabel;
    document.getElementById('risk-description').textContent = appState.riskDescription;
    
    const riskCircle = document.getElementById('risk-circle');
    if (appState.riskLevel === 'low') {
        riskCircle.style.background = 'conic-gradient(#50C878 0% 70%, #FFD700 70% 85%, #FF6B6B 85% 100%)';
    } else if (appState.riskLevel === 'moderate') {
        riskCircle.style.background = 'conic-gradient(#FFD700 0% 50%, #50C878 0% 70%, #FF6B6B 70% 100%)';
    } else {
        riskCircle.style.background = 'conic-gradient(#FF6B6B 0% 30%, #FFD700 30% 70%, #50C878 70% 100%)';
    }
    
    generateRecommendations();
}

function generateRecommendations() {
    const recommendationsList = document.getElementById('recommendations-list');
    recommendationsList.innerHTML = '';
    
    const recommendations = [];
    
    if (appState.answers.smoking === '1') {
        recommendations.push('Consider quitting smoking. Seek support from healthcare providers or smoking cessation programs.');
    }
    
    if (appState.answers.exercise === '0' || appState.answers.exercise === '1') {
        recommendations.push('Increase physical activity. Aim for at least 150 minutes of moderate exercise per week.');
    }
    
    if (appState.answers.diet === '3' || appState.answers.diet === '4') {
        recommendations.push('Improve your diet by incorporating more fruits, vegetables, whole grains, and lean proteins.');
    }
    
    if (appState.answers.bp === '3' || appState.answers.bp === '4') {
        recommendations.push('Monitor your blood pressure regularly and consult with a healthcare provider.');
    }
    
    if (appState.answers.cholesterol === '2' || appState.answers.cholesterol === '3' || appState.answers.cholesterol === '4') {
        recommendations.push('Have your cholesterol checked regularly and discuss management strategies with your doctor.');
    }
    
    if (appState.answers.diabetes === '1') {
        recommendations.push('Manage your diabetes effectively through medication, diet, and regular monitoring.');
    }
    
    if (appState.answers.sleep === '0' || appState.answers.sleep === '1') {
        recommendations.push('Prioritize sleep by aiming for 7-9 hours per night. Create a consistent bedtime routine.');
    }
    
    if (appState.answers.stress === '3' || appState.answers.stress === '4') {
        recommendations.push('Practice stress management techniques such as meditation, yoga, or deep breathing exercises.');
    }
    
    if (recommendations.length === 0) {
        recommendations.push('Maintain your healthy lifestyle habits and continue regular check-ups with your healthcare provider.');
        recommendations.push('Stay physically active with regular exercise and a balanced diet.');
        recommendations.push('Schedule regular health screenings to monitor your cardiovascular health.');
    }
    
    recommendations.push('Schedule regular check-ups with your healthcare provider for comprehensive health assessments.');
    
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });
}

function restartAssessment() {
    appState.currentQuestion = 0;
    appState.answers = {};
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}

// Ambient, minimal interactive background
// Drives CSS variables for an aurora-style gradient using pointer input and time
(function initAmbientBackground() {
    const root = document.documentElement;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let mx = targetX;
    let my = targetY;

    function setVars() {
        const xvw = (mx / window.innerWidth) * 100;
        const yvh = (my / window.innerHeight) * 100;
        root.style.setProperty('--mx', xvw.toFixed(2) + 'vw');
        root.style.setProperty('--my', yvh.toFixed(2) + 'vh');
    }

    let lastMoveAt = performance.now();
    const idleDelay = 2500;
    let interactive = false;

    function tick(t) {
        const hue = (t * 0.02) % 360;
        root.style.setProperty('--h', hue.toFixed(1));

        interactive = (performance.now() - lastMoveAt) <= idleDelay;
        if (!interactive) {
            const sec = t * 0.001;
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const ampX = Math.min(window.innerWidth, 1200) * 0.06;
            const ampY = Math.min(window.innerHeight, 1000) * 0.08;
            targetX = cx + Math.cos(sec * 0.25) * ampX + Math.sin(sec * 0.13) * ampX * 0.35;
            targetY = cy + Math.sin(sec * 0.20) * ampY;
        }

        const follow = interactive ? 0.08 : 0.04;
        mx += (targetX - mx) * follow;
        my += (targetY - my) * follow;
        setVars();
        requestAnimationFrame(tick);
    }

    function onInteract(x, y) {
        targetX = x;
        targetY = y;
        lastMoveAt = performance.now();
        interactive = true;
    }

    window.addEventListener('mousemove', (e) => onInteract(e.clientX, e.clientY));

    window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches.length) {
            onInteract(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    window.addEventListener('resize', () => {
        targetX = window.innerWidth / 2;
        targetY = window.innerHeight / 2;
    });

    setVars();
    requestAnimationFrame(tick);
})();

init();