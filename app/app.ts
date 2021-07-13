import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});























/*function startGame() {
    // starting a new game
    try {
        let playerName: string | undefined = getInputValue('playername');
        logPlayer(playerName);

        postScore(80, playerName);
        postScore(-5, playerName);
    } catch (ex) {
        console.error(ex.message);
    }
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement | null = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement === null) {
        throw Error(`Invalid elementID ${elementID} was passed`);
    }

    if (inputElement.value === "") {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

//const logMessage = (message: string): void => console.log(message);
const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

const firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());










let myResult: Result = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};


let player: Person = {
    name: 'Daniel',
    formatName: () => 'Dan'
};

interface Employee {
    name: string;
    title: string;
    logID: () => string;
}

class Engineer implements Employee {
    name: string = 'Ruth';
    title: string = 'Mrs';
    logID() {
        return `${this.name}_${this.title}`;
    }
}

function dullFunc(value1, value2) {
    return "I'm boring and difficult. Don't be like me. ";
}

function funFunc(score: number, message: string): string {
    return "I've got personality and I'm helpful! Be like me!";
}

function sendGreeting(greeting: string = 'Good morning!'): void {
    console.log(greeting);
}*/