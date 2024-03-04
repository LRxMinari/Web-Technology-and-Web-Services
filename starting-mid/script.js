const data = [
  {
    code: "01355101",
    subject: "English for Everyday Life",
    grade: "B",
    credit: 3,
  },
  {
    code: "01361101",
    subject: "Introductory Thai Usage",
    grade: "C",
    credit: 3,
  },
  { code: "01417111", subject: "Calculus I", grade: "C+", credit: 3 },
  {
    code: "01418111",
    subject: "Introduction to Computer Science",
    grade: "C",
    credit: 2,
  },
  {
    code: "01418112",
    subject: "Fundamental Programming Concepts",
    grade: "B",
    credit: 3,
  },
  {
    code: "01418141",
    subject: "Intellectual Properties and Professional Ethics",
    grade: "B+",
    credit: 3,
  },
  { code: "01999111", subject: "Knowledge of the Land", grade: "B", credit: 2 },
  {
    code: "02999144",
    subject: "Life Skill for Undergraduate Student",
    grade: "C+",
    credit: 1,
  },
];

const gradeValues = {
  A: 4.0,
  "B+": 3.5,
  B: 3.0,
  "C+": 2.5,
  C: 2.0,
  "D+": 1.5,
  D: 1.0,
  F: 0.0,
};

const gpa__value = document.querySelector(".gpa__value");
const transcript__code = document.querySelector(".transcript__code");
const transcript__subject = document.querySelector(".transcript__subject");
const transcript__grade = document.querySelector(".transcript__grade");
const transcript__credit = document.querySelector(".transcript__credit");
const containerTranscript = document.querySelector(".transcript");

const containerTotal__value = document.querySelector(".total__value");
const containerGrade__value = document.querySelector(".gpa__value");

const displayTranscript = (transcripts) => {
  containerTranscript.innerHTML = "";

  transcripts.forEach((transcripts) => {
    const html = `<div class="transcript__row">
    <div class="transcript__code">${transcripts.code}</div>
    <div class="transcript__subject">
      ${transcripts.subject}
    </div>
    <div class="transcript__grade">${transcripts.grade}</div>
    <div class="transcript__credit">${transcripts.credit}</div>
  </div>`;
    containerTranscript.insertAdjacentHTML("afterbegin", html);
  });
};

displayTranscript(data);

const displayCredit = (transcripts) => {
  containerTotal__value.innerHTML = "";
  var sumCredit = 0;
  var i = 0;
  transcripts.forEach((transcripts) => {
    /*const Credit = data[0,i].credit;*/
    const Credit = transcripts.credit;
    sumCredit += Credit;
    i++;
  });

  const html = `<p class="total_value">Total Credits:${sumCredit}</p>`;

  containerTotal__value.insertAdjacentHTML("afterbegin", html);
};

displayCredit(data);

const gradeCal = (grade) => {
  switch (true) {
    case grade === "A":
      gscore = 4;
      break;
    case grade === "B+":
      gscore = 3.5;
      break;
    case grade === "B":
      gscore = 3;
      break;
    case grade === "C+":
      gscore = 2.5;
      break;
    case grade === "C":
      gscore = 2;
      break;
    case grade === "D+":
      gscore = 1.5;
      break;
    case grade === "D":
      gscore = 1;
      break;
    case grade === "F":
      gscore = 0;
      break;
    default:
      return 0;
  }
  return gscore;
};

const displayGrade = (transcripts) => {
  containerGrade__value.innerHTML = "";
  var sumGrade = 0;
  var cgvalue = 0;
  var sumncg = 0;
  var sumcredit = 0;
  var countSubject = 0;
  var i = 0;
  transcripts.forEach((transcripts) => {
    cgvalue = transcripts.credit * gradeValues[transcripts.grade];
    sumncg += cgvalue;
    cgvalue = 0;
    sumcredit += transcripts.credit;
    /*sumGrade = sumGrade+gradeCal(data[0,i].grade);
      countSubject++;
      console.log(sumcredit)
      i++;*/
  });

  /*const gpa = sumGrade/countSubject;

  var GPA = Math.round(gpa * 100) / 100;

  const html = `<p class="gpa__value">${GPA}</p>`;*/

  var sumgpa = (sumncg / sumcredit).toFixed(2);

  const html = `<p class="gpa__value">${sumgpa}</p>`;

  containerGrade__value.insertAdjacentHTML("afterbegin", html);
};

displayGrade(data);

console.log(gradeValues["A"]);
console.log(gradeValues["C+"]);
