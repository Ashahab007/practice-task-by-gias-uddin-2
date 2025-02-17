//! Problem-01 :
/* 
Tax Calculator: Function Name Must be calculateTax() হারুণ একজন সফল হোটেল ব্যবসায়ী। তার হোটেল টি অনেক জনপ্রিয় হয়ে উঠছে এবং মাসের শেষে তার আয় ও খরচের একটি পরিস্কার ধারণা থাকা খুবই গুরুত্বপূর্ণ। তার মাসিক আয় এবং খরচ থেকে সঠিক ট্যাক্স ক্যালকুলেট করতে তাকে সাহায্য করার জন্য তুমি একটি ফাংশন তৈরি করবে। তোমার ফাংশনটি দুটি ইনপুট নিবে: মাসিক আয় - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক আয়কে প্রকাশ করে। মাসিক খরচ - একটি পজিটিভ সংখ্যা যা হারুণের মাসিক খরচকে প্রকাশ করে। ফাংশনটি আয় এবং খরচের পার্থক্যের ২০% হিসাব করবে এবং তা ট্যাক্স হিসেবে রিটার্ন করবে।

Input :
প্রথম ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক আয়। (0<=income ) দ্বিতীয় ইনপুট: একটি পজিটিভ সংখ্যা যা মাসিক খরচ। (0<=expense ) Income সবসময় expense থেকে সমান বা বেশি হবে। (income >=expense)

Output : ফাংশনটি ক্যালকুলেটেড ট্যাক্স রিটার্ন করবে। Output দশমিক সংখ্যা ও হতে পারে।

Challenge 📢 : যদি কোনো ইনপুট পজিটিভ সংখ্যা না হয় , অথবা expense এর পরিমান যদি income এর থেকে বেশি হয় তাহলে "Invalid Input" স্ট্রিং রিটার্ন করবে।

Hints 💡: income 10000 টাকা এবং expense 3000 টাকা হলে তাঁর আয় এবং খরচের পার্থ্যক্য হবে 10000-3000 = 7000 টাকা। সুতরাং তার ট্যাক্স হবে (7000 * .20) =1400 টাকা।

SAMPLE INPUT SAMPLE OUTPUT 10000, 3000 1400 34000, 1753 6449.400000000001 5000, 1500 700 7000, 7000 0 -5000, 2000 Invalid Input 6000, -1500 Invalid Input
*/

function taxCalculator(income, expense) {
  if (income >= 0 && expense >= 0) {
    if (income > expense) {
      let profit = income - expense;
      let taxToBePaid = profit * 0.2;

      return taxToBePaid;
    } else {
      return "Income must be greter than expense.";
    }
  } else {
    console.log("Invalid input.");
  }
}

let incomeTax = taxCalculator(-100, 3000);
console.log("Harun's Income tax is: ", incomeTax, "Tk");

//! Problem 02 :
/* 
Notification Generator: ⚠️ Function Name Must be sendNotification() তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল username অন্যটি domain name। যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম, gmail.com হলো ডোমেইন নেইম। তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে। ফাংশনের কাজ হবে, ইমেইলে থাকা username ও domain  name আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা username ও domain name অংশ ২টি ব্যবহার করে notification এর জন্য মেসেজ তৈরি করতে হবে । Output কি হবে সেটা নিচে ভাল করে দেখো।
Input : ইনপুট হবে একটি string, যা হবে একটি ইমেইল (যেমন, zihad@gmail.com) @ ক্যারেক্টার টি স্ট্রিং এ একবার ই থাকবে। এটা userName এবং DomainName এর মাঝখানে ই থাকবে।

Output: zihad.ph@gmail.com এই ইমেইলের জন্যে আউটপুট টি হবে ঠিক এরকম। zihad.ph sent you an email from gmail.com

Challenge 📢 : যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ "Invalid Email" রিটার্ন করবে।

Hints 💡: split() , indexOf() মেথড ব্যবহার করতে পারো।

SAMPLE INPUT SAMPLE OUTPUT zihad@gmail.com zihad sent you an email from gmail.com farhan34@yahoo.com farhan34 sent you an email from yahoo.com nadim.naem5@outlook.com nadim.naem5 sent you an email from outlook.com fahim234.hotmail.com Invalid Email sadia8icloud.com Invalid Email
*/

function sendNotification(email) {
  if (email.includes("@") && email.includes(".com")) {
    let arrOfEmail = email.split("@");
    let message = `${arrOfEmail[0]} sent you an email from ${arrOfEmail[1]}.`;
    return message;
  } else {
    return "Invaid email";
  }
  //   console.log(email);
}

let sender = sendNotification("zihad.ph@gmail.com");
let sender1 = sendNotification("farhan34@yahoo.com");
let sender2 = sendNotification("nadim.naem5@outlook.com");
let sender3 = sendNotification("fahim234.hotmail.com");

console.log(sender, sender1, sender2, sender3);

//! Problem-03:
/* 
Checking Digits Inside a Name ⚠️ Function Name Must be checkDigitsInName() রাজু পাসপোর্ট রেজিস্ট্রেশনের জন্যে নতুন একটা ওয়েবসাইট বানিয়েছে। সেখানে অনেকেই নাম ইনপুট দেয়ার সময় নামের পাশাপাশি বিভিন্ন নাম্বার ভুল করে দিয়ে ফেলছে। যেটা রাজু একদম ই চায়না। তাই রাজুকে তোমার হেল্প করতে হবে। তুমি checkDigitsInName() নামে একটি ফাংশন লিখবে যা একটি স্ট্রিং ইনপুট নেবে এবং নামের মধ্যে কোনো সংখ্যা আছে কিনা তা চেক করবে। যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false রিটার্ন করবে। ইনপুট যদি স্ট্রিং না হয়, তবে Invalid Input রিটার্ন করবে। Input : একটি স্ট্রিং ইনপুট হিসেবে নেবে।

Output : এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false যদি নামের ভিতরে কোনো সংখ্যা থাকে, তাহলে true রিটার্ন করবে। যদি কোনো সংখ্যা না থাকে, তবে false রিটার্ন করবে।

Challenge 📢 : ইনপুট যদি স্ট্রিং বাদে অন্য কিছু হয়, তবে "Invalid Input" রিটার্ন করবে।

SAMPLE INPUT SAMPLE OUTPUT Raj123 true n9ayeem true e1mu3 true Suman false Name2024 true !@# false ["Raj"] Invalid Input
*/

function checkDigitsInName(name) {
  if (typeof name === "string") {
    let hasNumber = "0123456789".split("").some((val) => name.includes(val));
    return `${name} ${hasNumber}`;
  } else {
    return `${name} Invalid Input`;
  }
}

let digitChecking = checkDigitsInName("Raj123");
let digitChecking1 = checkDigitsInName("n9ayeem");
let digitChecking2 = checkDigitsInName("e1mu3");
let digitChecking3 = checkDigitsInName("Suman");
let digitChecking4 = checkDigitsInName("Name2024");
let digitChecking5 = checkDigitsInName("!@#");
let digitChecking6 = checkDigitsInName(["Raj"]);

console.log(
  digitChecking,
  digitChecking1,
  digitChecking2,
  digitChecking3,
  digitChecking4,
  digitChecking5,
  digitChecking6
);

//! Problem 04 :
/* 
Calculate Admission Final Score ⚠️ Function Name Must be calculateFinalScore() রাকিব একটি সফটওয়্যার কোম্পানিতে প্রোগ্রামার হিসেবে কাজ করছেন। তার ছোট ভাই, রাজিব, একটি বিখ্যাত বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষা দিয়েছে। ভর্তি পরীক্ষার ফলাফল বিভিন্ন মানদণ্ডের উপর ভিত্তি করে নির্ধারিত হবে। রাজিবের পরীক্ষার স্কোর, স্কুলের গ্রেড, এবং অভিভাবকের প্রোফেশন (যদি "farmer" হয়) সবকিছু মিলিয়ে তার ফাইনাল স্কোর বের করতে হবে।তুমি যেহেতু রাকিবের সহকর্মী এবং ভালো প্রোগ্রামার, তাই রাকিব চায় তুমি একটি ফাংশন calculateFinalScore() বানিয়ে দাও, যা রাজিবের বিভিন্ন তথ্য ইনপুট হিসেবে নিয়ে ফাইনাল স্কোর বের করবে। ফাইনাল স্কোর যদি ৮০ বা তার বেশি হয়, তাহলে সে ভর্তি হতে পারবে। অন্যথায়, সে ভর্তি হতে পারবে না। Scoring Criteria testScore: ৫০ পয়েন্ট সর্বোচ্চ schoolGrade : ৩০ পয়েন্ট সর্বোচ্চ Parent Profession: যদি "farmer" হয়, ২০ পয়েন্ট

Input : একটি অব্জেক্ট ইনপুট হিসেবে নেবে। অবজেক্ট এ অবশ্যই name, testScore, schoolGrade, isFFamily প্রোপার্টি গুলো থাকবে। যেখানে typeof name = string typeof testScore= number ( testScore <= 50) typeof schoolGrade = number ( schoolGrade <=30) typeof isFFamily = boolean

Output : এটা রিটার্ন করবে একটা বুলিয়ান ভ্যালু : true / false

Challenge 📢: যদি ইনপুট টি অব্জেক্ট না হয় তাহলে একটি এরর মেসেজ দেবে একটি "Invalid Input"

SAMPLE INPUT SAMPLE OUTPUT { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily : true } true { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily : false } false "hello" Invalid Input
{ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily : true } false
*/
const candidate = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};

const candidate1 = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: false,
};

const candidate2 = "hello";

const candidate3 = {
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};

function calculateFinalScore(candidate) {
  if (
    typeof candidate === "object" &&
    Array.isArray(candidate) === false &&
    candidate !== "string"
  ) {
    if (candidate.isFFamily === true) {
      let score = candidate.testScore + candidate.schoolGrade + 20;
      if (score >= 80) {
        return true;
      }
      return false;
    } else {
      let score = candidate.testScore + candidate.schoolGrade;
      if (score >= 80) {
        return true;
      }
      return false;
    }
    // console.log(candidate);
  } else {
    return "Invalid Input";
  }
}

let getScoreCand = calculateFinalScore(candidate);
let getScoreCand1 = calculateFinalScore(candidate1);
let getScoreCand2 = calculateFinalScore(candidate2);
let getScoreCand3 = calculateFinalScore(candidate3);

console.log(
  JSON.stringify(candidate),
  getScoreCand,
  JSON.stringify(candidate1),
  getScoreCand1,
  JSON.stringify(candidate2),
  getScoreCand2,
  JSON.stringify(candidate3),
  getScoreCand3
);

//! Problem 05:
/* 
Predict Avarage Waiting Time ⚠️ Function Name Must be waitingTime() ইসরাত একটি চাকরির ইন্টারভিউয়ের জন্য অপেক্ষা করছে। তার সিরিয়াল আসলে তাকে ডাকা হবে। দেয়ালে একটা স্ক্রিনে যারা যারা ইন্টারভিউ দিয়েছে তাদের লিস্ট এবং প্রত্যেকের কত মিনিট সময় লেগেছে তা দেখাচ্ছে। ইসরাত বুঝতে পারছেনা যে তাঁর আসলে আর কতক্ষন সময় লাগবে। তোমার কাজ হলো ইসরাতের আর কত সময় লাগবে তা ক্যালকুলেশন করে বের করার জন্য waitingTime() নামে একটা ফাংশন তৈরি করা। ফাংশন টি ২ টা input নেবে । ১ম টি হচ্ছে একটা number এর Array । যাদের ভাইভা হয়ে গেছে তাদের ইন্টারভিউ টাইম। ২য় টি হচ্ছে ইসরাতের সিরিয়াল নাম্বার। ফাংশন টি যাদের ভাইভা হয়ে গেছে তাদের সময়ের একটা এভারেজ বের করবে এবং বর্তমান সিরিয়ালের পর থেকে ইসরাতের আর কত সময় লাগবে সেটা বের করবে এবং আউটপুট হিসেবে রিটার্ন করবে।
Input : ফাংশন টি ২ টি ইনপুট নেবে ,
একটি হলো Array ( যাদের ভাইভা হয়েছে তাদের সময় ) , অন্যটি হলো ইসরাতের সিরিয়াল নাম্বার। Serial Number > length of array

Output : যাদের ভাইভা হয়েছে তাদের রাউন্ডেড এভারেজ বের করো। ইসরাতের আগে আর কয়জন বাকী আছে তা বের কর। এবং এই দুটো জিনিস দিয়ে ইসরাতের waiting time বের করে সেটাকে return করে দাও।
Example: array = [ 3, 5, 7, 11, 6 ] , serial Number = 10 তাহলে এখানে 5 জনের এভারেজ ইন্টারভিউ টাইম হলো 6 minute (rounded) ঈসরাতের সিরিয়াল নাম্বার ১০ এর মানে হলো যে তাঁর আগে আছে 10-1 = 9 জন।
যেহেতু ৫ জনের হয়ে গেছে সেহেতু ইসরাতের আগে আর ভাইবা বাকী আছে 4 জনের। এবার তুমি ই বলো যে ইসরাতের কত সময় লাগবে?

Challenge 📢 : যদি প্রথম ইনপুট Array না হয় এবং ২য় ইনপুট যদি নাম্বার না হয় তাহলে Invalid Input রিটার্ন করবে।

SAMPLE INPUT SAMPLE OUTPUT [ 3, 5, 7, 11, 6 ], 10 24; [13, 2], 6 24; [13, 2, 6, 7, 10], 6 0; [6], 4 12 7 , 10 Invalid Input "[6,2]", 9 Invalid Input [7, 8, 3, 4, 5], "9" Invalid Input
*/

let interviewCandidateTime = [3, 5, 7, 11, 6];
let serialNum = 10;

function waitingTime(arr, num) {
  if (Array.isArray(arr) && typeof num === "number") {
    // Calculating the total time of candidate
    let total = 0;
    for (const time of arr) {
      total += time;
    }
    // Calculating the average time of candidate
    let candidateAvgTime = Math.round(total / arr.length);

    // Calculating the existing candidate

    let existingCandidate = serialNum - arr.length - 1;

    // Calculating the existing candidate average time

    /* let existingCandidateAvgTime = Math.round(
      (candidateAvgTime * existingCandidate) / arr.length
    ); */
    let timeRequired = candidateAvgTime * existingCandidate;
    return `Waiting time is ${timeRequired} minutes.`;
  } else {
    return "Invalid Input";
  }
}

let calculatedTime = waitingTime(interviewCandidateTime, serialNum);
console.log(calculatedTime);

//! Problem 06 (from conceptual session):
/*  
Remove the duplicate from an object array

const relatives = [
    { name: "Alice", member: 1 },
    { name: "Bob", member: 2 },
    { name: "Charlie", member: 3 },
    { name: "Alice", member: 1 },
    { name: "David", member: 4 },
    { name: "Eve", member: 5 },
    { name: "Bob", member: 2 },
    { name: "Frank", member: 6 },
    { name: "Grace", member: 7 },
    { name: "Alice", member: 1 }
 ];
*/

const relatives = [
  { name: "Alice", member: 1 },
  { name: "Bob", member: 2 },
  { name: "Charlie", member: 3 },
  { name: "Alice", member: 1 },
  { name: "David", member: 4 },
  { name: "Eve", member: 5 },
  { name: "Bob", member: 2 },
  { name: "Frank", member: 6 },
  { name: "Grace", member: 7 },
  { name: "Alice", member: 1 },
];

function removeDuplicate(mainlist) {
  let newDawatList = [];

  for (const relative of mainlist) {
    let isUnique = true;
    for (const newRelative of newDawatList) {
      if (relative.name === newRelative.name) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      newDawatList.push(relative);
    }
  }
  return newDawatList;
  console.log(mainlist);
}

let removedList = removeDuplicate(relatives);
console.log(removedList);

// using includes method

function removeDuplicate2(mainlist) {
  let newDawatList = [];
  for (const relative of mainlist) {
    if (newDawatList.includes(relative.name) === false) {
      newDawatList.push(relative.name);
    }
  }
  return newDawatList;
}

const newList = removeDuplicate2(relatives);
console.log(newList);
