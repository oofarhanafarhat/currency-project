import inquirer from "inquirer";

let currency: any = {
  usd: 1,
  ukponds: 0.76,
  Euro: 0.9,
  pkr: 279,
  saudiRayal: 3.75,
  dinar: 1.309,
  dong: 24.276,
  INR: 83.94,
};

let user_answers = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "ENTER FROM CURRENCY  ",
    choices: [
      "usd",
      "ukpond",
      "Euro",
      "saoudiRiyal",
      "dinar",
      "dong",
      "INR",
      "pkr",
    ],
  },
  {
    name: "to",
    type: "list",
    message: "ENTER to CURRENCY  ",
    choices: [
      "usd",
      "ukpond",
      "Euro",
      "saoudiRiyal",
      "dinar",
      "dong",
      "INR",
      "pkr",
    ],
  },
  {
    name: "amount",
    type: "number",
    message: "ENTER YOUR AMOUNT",
  },
]);

let fromamount = currency[user_answers.from];
let toamount = currency[user_answers.to];
let amount = user_answers.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(Math.round(convertedamount));
