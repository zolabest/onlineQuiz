class Quiz {
    Questions = [
        {
            number: 1,
            question: "What year is it?",
            answers: [2021, 2022, 2023],
            answer: 1
        },
        {
            number: 2,
            question: "What country is Paris in?",
            answers: ['Germany', 'France', 'Italy'],
            answer: 1
        }
    ]
    constructor() { }
    get Questions() {
        return this.Questions;
    }
}
module.exports = Quiz;