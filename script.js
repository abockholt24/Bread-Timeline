console.log("JavaScript is linked and working!");
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('game-content').innerHTML = 'The Bread Timeline!';
});
// Data for Readings
const readings = [
    { section: 1, content: "The mastery of fire by early humans was a groundbreaking achievement. It fundamentally changed the human diet and lifestyle. For bread, the control of fire meant the possibility of transforming simple ingredients into something more nutritious. Cooking food, including early forms of bread, made it easier to digest and unlocked nutrients that were otherwise inaccessible in raw grains." },
    { section: 2, content: "The first instances of humans grinding cereal grains was around 30,000 years ago. They likely used stones to grind a mixture of grains and roots into a paste. While it's unclear how this paste was used, it's likely that some of it was cooked on flat rocks heated by fire, giving rise to a primitive form of flatbread. This represents a large step in human culinary history, laying the foundation for more complex forms of bread." },
    { section: 3, content: "The oldest direct evidence of bread making comes from a site in Jordan dating back approximately 14,000 years. Archaeologists discovered charred remains of what seem to be breadcrumbs in stone fireplaces. This discovery suggests that pre-agricultural societies were collecting wild grains and developing basic methods of bread making, significantly predating the establishment of settled agriculture." },
    { section: 4, content: "The development of agriculture, particularly in the Levant region, was crucial in human history. The domestication of cereal crops like wheat and barley around 9500 BC provided a consistent supply of grains, which were essential for bread making. This era marks a shift from nomadic lifestyles to settled farming communities, significantly impacting human diet and culture." },
    { section: 5, content: "In ancient Greece around 1700 BC, there is evidence of the widespread use of small clay ovens, indicating that bread baking had likely become a common household practice. Additionally, the existence of commercial bakeries suggests that bread was not just a home produced food but also a product for trade." },
    { section: 6, content: "The Egyptians were known for their beer brewing and also were the pioneers in using yeast for bread. The discovery of yeast's leavening properties likely occurred through the brewing process. The earliest yeast breads were probably sourdough, made by retaining a piece of dough to ferment and be used in the next batch. This is a method similar to maintaining a sourdough starter today." },
    { section: 7, content: "During the Roman Empire, bread production was scaled up significantly. Roman bakeries were capable of feeding thousands, thanks to both the central role of bread in the Roman diet and the empire’s organizational structure. The variety in bread types also increased, catering to different social classes and professions." },
    { section: 8, content: "In medieval Europe, bread remained a staple food. Socioeconomic divisions were evident in bread consumption, with the upper classes eating lighter breads and the lower classes consuming darker loaves. Additionally, bread was used creatively like in the form of trenchers, which were thick slices of bread used as plates." },
    { section: 9, content: "The genius invention of the sandwich is attributed to John Montagu, 4th Earl of Sandwich. It’s said that he ordered meat tucked between two pieces of bread to eat without interrupting his gambling sessions, thus popularizing this convenient form of meal for hundreds of years to follow." },
];

// Data for Questions
const questions = [
    { 
        section: 1, 
        content: [
            { question: "The development of cooking including the creation of early forms of bread has influenced the modern diet by increasing the diversity of nutrients available in our food.", answer: true },
        ] 
    },
    { 
        section: 2, 
        content: [
            { question: "Grinding grains around 30,000 years ago has had little to no influence on the development of modern bread making techniques and varieties.", answer: false },
            // Add more questions for section 2
        ]
    },
    { 
        section: 3, 
        content: [
            { question: "Bread making practices in Jordan 14,000 years ago challenges the belief that bread making began only after the establishment of agriculture.", answer: true },
            // Add more questions for section 2
        ]
    },
    { 
        section: 4, 
        content: [
            { question: "Domesticating cereal crops around 9500 BC and the shift to farming did not significantly change the cultural significance of bread in emerging societies.", answer: false },
            // Add more questions for section 2
        ]
    },
    { 
        section: 5, 
        content: [
            { question: "Discoveries of small clay ovens and commercial bakeries in ancient Greece around 1700 BC implies that bread had become vastly important for the economy, influencing trade.", answer: true },
            // Add more questions for section 2
        ]
    },
    { 
        section: 6, 
        content: [
            { question: "The method of creating sourdough by saving a piece of dough for the next batch, as practiced by the ancient Egyptians, has no similarity to modern sourdough bread making techniques.", answer: false },
            // Add more questions for section 2
        ]
    },
    { 
        section: 7, 
        content: [
            { question: "The variety in bread types in Roman bakeries catering to different social classes had no influence on the development of specialized breads in modern bread making.", answer: false },
            // Add more questions for section 2
        ]
    },
    { 
        section: 8, 
        content: [
            { question: "Unlike in medieval Europe, with light or dark bread consumption depending on social class, no modern bread types are associated with specific social or economic groups.", answer: false },
            // Add more questions for section 2
        ]
    },
    { 
        section: 9, 
        content: [
            { question: "The invention of the sandwich by John Montagu has had a major impact on global cuisine, spreading across the globe with numerous variations.", answer: true },
            // Add more questions for section 2
        ]
    },
    // ... Add more sections with their questions
];

function showReading(sectionNumber) {
    const currentSection = document.getElementById('section' + sectionNumber);
    let readingContent = currentSection.querySelector('.reading');

    if (readingContent) {
        // Toggle visibility
        readingContent.style.display = readingContent.style.display === 'none' ? 'block' : 'none';
    } else {
        // Create and show the reading for the first time
        const reading = readings.find(r => r.section === sectionNumber);
        if (reading) {
            currentSection.innerHTML += `<div class="reading">${reading.content}</div>`;
        }
    }
}
function showQuestions(sectionNumber) {
    const currentSection = document.getElementById('section' + sectionNumber);
    let questionsContent = currentSection.querySelector('.questions');

    if (questionsContent) {
        // Toggle visibility
        questionsContent.style.display = questionsContent.style.display === 'none' ? 'block' : 'none';
    } else {
        // Create and show the questions for the first time
        const sectionQuestions = questions.find(q => q.section === sectionNumber);
        if (sectionQuestions) {
            let questionsHTML = `<div class="questions">`;

            sectionQuestions.content.forEach(q => {
                questionsHTML += `
                    <div class="question">
                        <p>${q.question}</p>
                        <button onclick="checkAnswer(${sectionNumber}, '${q.question}', true)">True</button>
                        <button onclick="checkAnswer(${sectionNumber}, '${q.question}', false)">False</button>
                    </div>
                `;
            });

            questionsHTML += `</div>`;
            currentSection.innerHTML += questionsHTML;
        }
    }
}

        sectionQuestions.content.forEach(q => {
            questionsHTML += `
                <div class="question">
                    <p>${q.question}</p>
                    <button onclick="checkAnswer(${sectionNumber}, '${q.question}', true)">True</button>
                    <button onclick="checkAnswer(${sectionNumber}, '${q.question}', false)">False</button>
                </div>
            `;
        });

        questionsHTML += `</div>`;
        currentSection.innerHTML += questionsHTML;
        currentSection.style.display = 'block';
    


function checkAnswer(sectionNumber, questionText, userAnswer) {
    // Find the correct answer
    const sectionQuestions = questions.find(q => q.section === sectionNumber);
    const question = sectionQuestions.content.find(q => q.question === questionText);

    if (question) {
        if (question.answer === userAnswer) {
            alert("Correct!");
        } else {
            alert("Incorrect!");
        }
    } else {
        alert("Question not found.");
    }
}



