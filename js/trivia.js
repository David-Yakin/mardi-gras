

/******************** מחלקה שיוצרת את הכפתורים *******************/
class TriviaAnswers {
    constructor(_question, _first, _second, _third, _fourth) {
        this.question = _question;
        this.firstAnswer = _first;
        this.secondAnswer = _second;
        this.thirdAnswer = _third;
        this.fourthAnswer = _fourth;
        this.correctAnswer = _first;

        this.renderHtml = function () {
            id_row.innerHTML = ""; // מוחק את הדיב של השורה שבתוכו הוא נמצא


            /********** יוצר דיב  שבתוכו יהיו הכותרת והלחצנים עם השאלות והתשובות  *********/
            var newDiv = document.createElement("div");
            newDiv.className = "question col-12 text-center";
            newDiv.innerHTML += `<h2 class="display-4">${this.question}</h2>`;
            newDiv.id = "id_newDiv";
            id_row.appendChild(newDiv);

            /*************** פונקציה רנדומלית כדי ליצור את הלחצנים  ****************/
            let answers_ar = [this.firstAnswer, this.secondAnswer, this.thirdAnswer, this.fourthAnswer]; // מערך תשובות

            shuffle(answers_ar); // מפעיל את פונקצית הערבוב על המערך

            for (let i in answers_ar) { // לולאה שתיצור את הלחצנים
                let item1 = answers_ar[i]; // שם את התשובה על הכפתור
                let newBtn1 = document.createElement("button"); // יוצר את הכפתור
                newBtn1.className = "answerBtn bg-primary col-5 p-2 m-2"; // שם עליו את המחלקות של ה 
                newBtn1.innerHTML += item1; // כותב עליו את התשובה
                newBtn1.addEventListener("click", function () { // מקשיב לפונציה של לחיצה על הכפתור שיצרתי

                    if (item1 == this.correctAnswer) { // בודק אם לחצנו על התשובה הנכונה - הוספנו במחלקה את השם הזה

                        onCorrectAnswerBtnClick();
                    } else {
                        onWrongAnswerBtnClick()
                        btn_ar.splice(q, 1);
                    }
                }.bind(this)) // כדי שהוא ידע שאני מתכוון למחלקה הזאת 
                newDiv.appendChild(newBtn1); // איפה הוא ייצור את הכפתור
            }

        }

    }
}

/*********************** ג'יסון של השאלות והתשובות ***************************/
var answer_ar = [{
        question: "In what city does the Mardi Gras Festival take place?",
        firstAnswer: "New Orleans",
        secondAnswer: "New York",
        thirdAnswer: "New Jersey",
        fourthAnswer: "Montreal"
    },
    {
        question: "Which social clubs was the earliest-established",
        firstAnswer: "The Mistick Krewe of Comus,",
        secondAnswer: "The Krewe of Chewbacchus",
        thirdAnswer: "The Krewe du Vieux",
        fourthAnswer: "The Krewe of Cork"
    },
    {
        question: "Float riders traditionally toss throws into the crowds. The most common throws are",
        firstAnswer: "strings of colorful plastic beads",
        secondAnswer: "Sweets",
        thirdAnswer: "lingerie",
        fourthAnswer: "Small stones"
    },
    {
        question: "The first record of Mardi Gras being celebrated in Louisiana was at",
        firstAnswer: "1699",
        secondAnswer: "1799",
        thirdAnswer: "1548",
        fourthAnswer: "1997"
    },
    {
        question: "In 1833 who raised money to fund an official Mardi Gras celebration?",
        firstAnswer: "Bernard Xavier de Marigny de Mandeville",
        secondAnswer: "Louis Philippe",
        thirdAnswer: "Armand de Gontaut, baron de Biron",
        fourthAnswer: "Gabriel de Rochechouart de Mortemart"
    },
    {
        question: "What color is not traditionally associated  with Mardi Gras in New Orleans?",
        firstAnswer: "blue",
        secondAnswer: "green",
        thirdAnswer: "Gold",
        fourthAnswer: "purple"
    },
    {
        question: "which date has been recognized as the start of the New Orleans Carnival season since at least 1900",
        firstAnswer: "January 6",
        secondAnswer: "January 5",
        thirdAnswer: "April 26",
        fourthAnswer: "April 28"
    },
    {
        question: "In New Orleans, whith parade rolls first",
        firstAnswer: "The Zulu parade",
        secondAnswer: "The Jefferson City Buzzards",
        thirdAnswer: "The Lyons Club",
        fourthAnswer: "The Irish Channel Corner Club"
    },

]

/* פונקציה שמתרחשת כשלוחצים על כפתור התחל ועל כפתורי התשובות */
function onStartBtnClick() {

    var i = Math.round(Math.random() * (answer_ar.length - 1));
    let item = answer_ar[i];

    var answer = new TriviaAnswers(item.question, item.firstAnswer, item.secondAnswer, item.thirdAnswer, item.fourthAnswer);
    answer.renderHtml();

    id_startBtn.className = "d-none";
    id_scoreBoard.className = "scoreBoard col-md-6 col-xl-2";

    answer_ar.splice(i, 1);

}

/************************* לוח התוצאות ***********************/
var questionNum = 5;
var score = 0;

/********* פונקיה שלוחצים על הלחצן עם התשובה הנכונה *********/
function onCorrectAnswerBtnClick() {

    if (questionNum > 1) {
        id_score.innerHTML = score += 10;

        if (score == 40) {
            id_score.innerHTML = score;
            alert("you win a free coupun num 3365254!");
            id_row.innerHTML = "";
            location.assign("../index.html#id_trivia");
        }
    } else {
        id_row.innerHTML = "";
        alert("Game Over!");
        location.assign("../index.html#id_trivia");
    }

    id_quastionNum.innerHTML = questionNum -= 1;
    onStartBtnClick();
}

/********* פונקיה שלוחצים על הלחצן עם התשובה השגויה *********/
function onWrongAnswerBtnClick() {
    if (questionNum > 1) {
        id_score.innerHTML = score;
        id_quastionNum.innerHTML = questionNum -= 1;


    } else {
        id_row.innerHTML = "";
        alert("Game Over!");
        location.assign("../index.html#id_trivia");
    }

    onStartBtnClick();
}

/************* פונקצית ערבוב *********************/

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}