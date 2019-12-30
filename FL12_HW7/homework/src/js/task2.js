// Your code goes here
let minNumber = 0;
let maxNumber = 8;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let stepIncreaseRange = 4;
let stepIncreasePrize = 1;
let prizeFirstAttempt = 100;
let prizeSecondtAttempt = 50;
let prizeThirdAttempt = 25;
let totalPrize = 0;
let currentAttempt = 0;
let firstStep = 3;
let secondStep = 2;
let thirdStep = 1;
let startmaxNumber = 8;
let gameConfirm = confirm('Do you want to play a game?');
if (gameConfirm === false) {
    alert('You did not become a billionaire, but can.');
} else {
    let i = firstStep; // три спроби щоб вгадати
    while (i !== 0) {
        if (i === firstStep) {
            currentAttempt = prizeFirstAttempt;
        } else if (i === secondStep) {
            currentAttempt = prizeSecondtAttempt;
        } else if (i === thirdStep) {
            currentAttempt = prizeThirdAttempt;
        }
        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' + minNumber + ' to ' + maxNumber +
            '\nAttempts left: ' + i +
            '\nTotal prize: ' + totalPrize + '$' +
            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
        if (userNumber === randomNumber && i === firstStep) {
            alert('Your prize is: ' + currentAttempt + '$');
            totalPrize += currentAttempt;
            do {
                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                if (continueGame === true) {
                    let i = firstStep; // три спроби щоб вгадати
                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                    maxNumber += stepIncreaseRange; //збільшення діапазону
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            break;
                        } else if (userNumber === randomNumber && i === secondStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        } else if (userNumber === randomNumber && i === thirdStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        }
                        i--;
                    }
                } else {
                    alert('Гра завершена!');
                    totalPrize = 0;
                    maxNumber = startmaxNumber;
                    stepIncreasePrize = 1;
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt;
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt;
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt;
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            do {
                                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                                if (continueGame === true) {
                                    let i = firstStep; // три спроби щоб вгадати
                                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                                    maxNumber += stepIncreaseRange; //збільшення діапазону
                                    while (i !== 0) {
                                        if (i === firstStep) {
                                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === secondStep) {
                                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === thirdStep) {
                                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                                        }
                                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                                            minNumber + ' to ' + maxNumber +
                                            '\nAttempts left: ' + i +
                                            '\nTotal prize: ' + totalPrize + '$' +
                                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                                        if (userNumber === randomNumber && i === firstStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber === randomNumber && i === secondStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        } else if (userNumber === randomNumber && i === thirdStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        }
                                        i--;
                                    }
                                }
                            } while (userNumber === randomNumber);
                        }
                        i--;
                    }
                }
            } while (userNumber === randomNumber);
        } else if (userNumber !== randomNumber && i === thirdStep) { // якщо три спроби були невдалі 
            do {
                let playAgain = confirm('Do you want to play a game again ?');
                if (playAgain === true) {
                    let i = 3; // три спроби щоб вгадати
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt;
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt;
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt;
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            do {
                                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                                    totalPrize + '$. Do you want to continue?');
                                //запит на підтвердження гри
                                if (continueGame === false) {
                                    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                                    break;
                                } else {
                                    i = thirdStep; // кожного разу коли гравець виграв і хоче продовжити і знову даємо йому три спроби щоб вгадати
                                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                                    maxNumber += stepIncreaseRange; //збільшення діапазону
                                    while (i !== 0) {
                                        if (i === firstStep) {
                                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === secondStep) {
                                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === thirdStep) {
                                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                                        }
                                        let userNumber1 = parseInt(prompt('Choose a roulette pocket number from ' +
                                            minNumber + ' to ' + maxNumber +
                                            '\nAttempts left: ' + i +
                                            '\nTotal prize: ' + totalPrize + '$' +
                                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                                        if (userNumber1 === randomNumber && i === firstStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber1 === randomNumber && i === secondStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber1 === randomNumber && i === thirdStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber1 !== randomNumber && i === thirdStep) {
                                            totalPrize = 0;
                                            alert('Thank you for your participation. Your prize is: ' +
                                                totalPrize + '$');
                                            break;
                                        }
                                        i--;
                                    }
                                }
                            } while (userNumber === firstStep)
                            break;
                        }
                        i--;
                    }
                } else {
                    alert('Гра завершена!');
                    break;
                }
            } while (userNumber !== randomNumber && i === thirdStep);
        }
        if (userNumber === randomNumber && i === secondStep) {
            alert('Your prize is: ' + currentAttempt + '$');
            totalPrize += currentAttempt;
            do {
                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                if (continueGame === true) {
                    let i = firstStep; // три спроби щоб вгадати
                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                    maxNumber += stepIncreaseRange; //збільшення діапазону
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            break;
                        } else if (userNumber === randomNumber && i === secondStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        } else if (userNumber === randomNumber && i === thirdStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        }
                        i--;
                    }
                } else {
                    alert('Гра завершена!');
                    totalPrize = 0;
                    maxNumber = startmaxNumber;
                    stepIncreasePrize = 1;
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt;
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt;
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt;
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            do {
                                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                                if (continueGame === true) {
                                    let i = firstStep; // три спроби щоб вгадати
                                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                                    maxNumber += stepIncreaseRange; //збільшення діапазону
                                    while (i !== 0) {
                                        if (i === firstStep) {
                                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === secondStep) {
                                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === thirdStep) {
                                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                                        }
                                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                                            minNumber + ' to ' + maxNumber +
                                            '\nAttempts left: ' + i +
                                            '\nTotal prize: ' + totalPrize + '$' +
                                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                                        if (userNumber === randomNumber && i === firstStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber === randomNumber && i === secondStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        } else if (userNumber === randomNumber && i === thirdStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        }
                                        i--;
                                    }
                                }
                            } while (userNumber === randomNumber);
                        }
                        i--;
                    }

                }
            } while (userNumber === randomNumber);
        }
        if (userNumber === randomNumber && i === thirdStep) {
            alert('Your prize is: ' + currentAttempt + '$');
            totalPrize += currentAttempt;
            do {
                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                if (continueGame === true) {
                    let i = firstStep; // три спроби щоб вгадати
                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                    maxNumber += stepIncreaseRange; //збільшення діапазону
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            break;
                        } else if (userNumber === randomNumber && i === secondStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        } else if (userNumber === randomNumber && i === thirdStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                        }
                        i--;
                    }
                } else {
                    alert('Гра завершена!');
                    totalPrize = 0;
                    maxNumber = startmaxNumber;
                    stepIncreasePrize = 1;
                    while (i !== 0) {
                        if (i === firstStep) {
                            currentAttempt = prizeFirstAttempt;
                        } else if (i === secondStep) {
                            currentAttempt = prizeSecondtAttempt;
                        } else if (i === thirdStep) {
                            currentAttempt = prizeThirdAttempt;
                        }
                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                            minNumber + ' to ' + maxNumber +
                            '\nAttempts left: ' + i +
                            '\nTotal prize: ' + totalPrize + '$' +
                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                        if (userNumber === randomNumber && i === firstStep) {
                            alert('Your prize is: ' + currentAttempt + '$');
                            totalPrize += currentAttempt;
                            do {
                                let continueGame = confirm('Congratulation, you won!   Your prize is: ' +
                                    totalPrize + '$. Do you want to continue?'); //запит на підтвердження гри
                                if (continueGame === true) {
                                    let i = firstStep; // три спроби щоб вгадати
                                    stepIncreasePrize++; // збільшення кроку на який буду помножено початкова сума призу
                                    maxNumber += stepIncreaseRange; //збільшення діапазону
                                    while (i !== 0) {
                                        if (i === firstStep) {
                                            currentAttempt = prizeFirstAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === secondStep) {
                                            currentAttempt = prizeSecondtAttempt * stepIncreasePrize; //збільшеня призу 
                                        } else if (i === thirdStep) {
                                            currentAttempt = prizeThirdAttempt * stepIncreasePrize; //збільшеня призу 
                                        }
                                        let userNumber = parseInt(prompt('Choose a roulette pocket number from ' +
                                            minNumber + ' to ' + maxNumber +
                                            '\nAttempts left: ' + i +
                                            '\nTotal prize: ' + totalPrize + '$' +
                                            '\nPossible prize on current attempt: ' + currentAttempt + '$', ''));
                                        if (userNumber === randomNumber && i === firstStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                            break;
                                        } else if (userNumber === randomNumber && i === secondStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        } else if (userNumber === randomNumber && i === thirdStep) {
                                            alert('Your prize is: ' + currentAttempt + '$');
                                            totalPrize += currentAttempt;
                                        }
                                        i--;
                                    }
                                }
                            } while (userNumber === randomNumber);
                        }
                        i--;
                    }

                }
            } while (userNumber === randomNumber);
        }
        i--;
    }
}

