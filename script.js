const wordsAndDefinitions = [
{ word: "ABATE", definition: "Superiore religioso, a capo di un monastero o di una congregazione religiosa." },
{ word: "ABBAGLIARE", definition: "Produrre un'abbagliante luce, accecare temporaneamente con un forte bagliore." },
{ word: "ABBAGLIO", definition: "Fenomeno ottico che si verifica quando la luce si riflette su una superficie e raggiunge gli occhi in modo distorto." },
{ word: "ABBAIA", definition: "Azione del cane di emettere suoni acuti e ripetuti." },
{ word: "ABBAIO", definition: "Il suono emesso dal cane quando abbaia." },
{ word: "ABBANDONA", definition: "Lasciare qualcosa o qualcuno senza protezione o assistenza." },
{ word: "ABBANDONARE", definition: "Lasciare definitivamente qualcosa o qualcuno." },
{ word: "ABBANDONATO", definition: "Che è stato lasciato solo o senza assistenza." },
{ word: "ABBANDONO", definition: "Atto di abbandonare qualcosa o qualcuno." },
{ word: "ABBASTANZA", definition: "In quantità sufficiente, adeguata." },
{ word: "ABBIA", definition: "Forma congiuntiva del verbo 'avere' alla terza persona singolare." },
{ word: "ABBIAMO", definition: "Forma del verbo 'avere' alla prima persona plurale del presente indicativo." },
{ word: "ABBIANO", definition: "Forma congiuntiva del verbo 'avere' alla terza persona plurale." },
{ word: "ABBIATE", definition: "Forma congiuntiva del verbo 'avere' alla seconda persona plurale." },
{ word: "ABBIGLIAMENTO", definition: "Insieme di indumenti che si indossano per coprirsi e proteggersi dal freddo o per motivi estetici." },
{ word: "ABBRACCIA", definition: "Terza persona singolare del verbo 'abbracciare', accogliere qualcuno tra le braccia." },
{ word: "ABBRACCIARE", definition: "Avvolgere qualcuno tra le braccia in segno di affetto o saluto." },
{ word: "ABBRACCIO", definition: "Azione di abbracciare o risultato di tale azione, gesto affettuoso." },
{ word: "ABBRONZATO", definition: "Che ha la pelle scura a causa dell'esposizione al sole." },
{ word: "ABBREVIAZIONE", definition: "Riduzione di una parola o di una locuzione a una forma più breve." },
{ word: "ABBREVIATO", definition: "Che è stato reso più breve rispetto alla forma originale." },
{ word: "ABDICAZIONE", definition: "Atto di rinunciare volontariamente a una posizione di autorità o di potere." },
{ word: "ABETE", definition: "Albero conifero dalle foglie aghiformi, comune nelle regioni montuose." },
{ word: "ABILE", definition: "Capace, esperto nell'esecuzione di determinate attività." },
{ word: "ABILITÀ", definition: "Capacità di fare qualcosa con destrezza e competenza." },
{ word: "ABISSALE", definition: "Che è relativo agli abissi marini, molto profondo." },
{ word: "ABITUDINE", definition: "Comportamento consolidato che si ripete regolarmente senza bisogno di riflessione." },
{ word: "ABITABILE", definition: "Che può essere abitato, adatto alla vita umana." },
{ word: "ABITANTE", definition: "Persona che abita in un luogo." },
{ word: "ABITARE", definition: "Vivere in un luogo, risiedere." },
{ word: "ABITATO", definition: "Zona o insieme di edifici dove vivono persone." },
{ word: "ABITAZIONE", definition: "Luogo dove si abita, casa." },
{ word: "ABITUALE", definition: "Che si verifica con regolarità, comune, consueto." },
{ word: "ABITUARE", definition: "Abituare qualcuno a una certa condotta o situazione." },
{ word: "ABITUATO", definition: "Che è abituato a qualcosa, che ha il consueto di fare qualcosa." },
{ word: "ABITUÉ", definition: "Persona abituale frequentatrice di un determinato luogo o ambiente." },
{ word: "ABORIGENO", definition: "Che è originario del luogo in cui vive." },
{ word: "ABORTO", definition: "Interruzione precoce della gravidanza, naturale o provocata." },
{ word: "ABROGARE", definition: "Cancellare o eliminare una legge, una norma o un diritto." },
{ word: "ABROGAZIONE", definition: "Atto con cui si abroga una legge o una norma giuridica." },
{ word: "ABRUZZESE", definition: "Che è originario o caratteristico dell'Abruzzo, regione italiana." },
{ word: "ABRUZZO", definition: "Regione italiana situata a sud-est di Roma." },
{ word: "ABSIDE", definition: "Parte absidale di una chiesa, solitamente semicircolare o poligonale." },
{ word: "ABSIDIOLE", definition: "Piccola absidiola, cappella posta generalmente a lato del coro principale di una chiesa." },
{ word: "ASSICURAZIONE", definition: "Contratto con cui un soggetto si impegna a corrispondere un premio per ottenere la copertura di determinati rischi." },
{ word: "ASSIDUITÀ", definition: "Costanza e regolarità nell'esecuzione di un'attività." },
{ word: "ASSIEME", definition: "Insieme, contemporaneamente." },
{ word: "ASSIOMA", definition: "Proposizione ritenuta evidente e indimostrabile, su cui si fonda un sistema logico o matematico." },
{ word: "ASSISTENTE", definition: "Persona addetta a prestare assistenza in determinati ambiti." },
{ word: "ASSISTENZA", definition: "Aiuto o sostegno fornito a qualcuno in difficoltà o in situazioni di bisogno." },
{ word: "ASSISTERE", definition: "Essere presente in un luogo o in una situazione per fornire aiuto o supporto." },
{ word: "ASSISTITO", definition: "Persona che ha ricevuto assistenza o supporto." },
{ word: "ASSOCIARE", definition: "Collegare due o più elementi tra loro, stabilendo una relazione di reciproca dipendenza." },
{ word: "ASSOCIATO", definition: "Che fa parte di un'associazione o che è collegato a qualcosa o qualcuno." },
{ word: "ASSOCIAZIONE", definition: "Unione di persone o enti che si associano per un fine comune." },
{ word: "ASSOLATO", definition: "Esposto direttamente al sole, illuminato intensamente dal sole." },
{ word: "ASSOLUTO", definition: "Che è completo, totale, privo di limiti o condizioni." },
{ word: "ASSOMIGLIARE", definition: "Avere somiglianze con qualcuno o qualcosa." },
{ word: "ASSORBENTE", definition: "Che è in grado di assorbire liquidi, umidità o sostanze." },
{ word: "ASSORBIMENTO", definition: "Processo attraverso il quale un materiale assorbe una sostanza liquida o gassosa." },
{ word: "ASSORDANTE", definition: "Che produce un suono molto forte, che può provocare sordità temporanea." },
{ word: "ASSUEFATTO", definition: "Che è abituato a qualcosa, che ha sviluppato una dipendenza da qualcosa." },
{ word: "ASSUEFAZIONE", definition: "Processo di abituazione a una sostanza, che porta alla necessità di consumarla sempre di più per ottenere lo stesso effetto." },
{ word: "ASSUEFAZIONE", definition: "Abituarsi gradualmente a una situazione o a un comportamento." },
{ word: "ASSUNZIONE", definition: "Atto o processo di assumere qualcosa, come cibo, bevande o farmaci." },
{ word: "ASSURDO", definition: "Che è privo di senso logico, che contraddice la ragione." },
{ word: "ASSUMERE", definition: "Prendere su di sé un incarico, una responsabilità o un'obbligazione." },
{ word: "ASSUNTO", definition: "Persona che è stata assunta in un lavoro o in una posizione." },
{ word: "ASSUMERE", definition: "Prendere su di sé un incarico, una responsabilità o un'obbligazione." },
{ word: "ASSUMERSI", definition: "Prendere su di sé la responsabilità di qualcosa." },
{ word: "ASSUMERSI", definition: "Prendere su di sé la responsabilità di qualcosa." },
{ word: "ASSUNZIONE", definition: "Atto o processo di assumere qualcosa, come cibo, bevande o farmaci." },
{ word: "ASSUNTO", definition: "Persona che è stata assunta in un lavoro o in una posizione." },
{ word: "ASTENERSI", definition: "Rinunciare volontariamente a fare qualcosa." },
{ word: "ASTENZIONE", definition: "Atto o effetto di astenersi, di non partecipare o di non agire." },
{ word: "ASTIO", definition: "Sentimento di ostilità, avversione, antipatia verso qualcuno." },
{ word: "ASTRATTO", definition: "Che non ha una forma concreta o materiale, ma esiste solo come concetto o idea." },
{ word: "ASTRAZIONE", definition: "Processo mentale di distacco da ciò che è concreto o reale, per concentrarsi solo sugli aspetti concettuali o generali." },
{ word: "ASTUCCIO", definition: "Contenitore rigido, solitamente di forma allungata, usato per conservare matite, penne o altri strumenti da scrivere o da disegno." },
{ word: "ASTUZIA", definition: "Intelligenza pratica e abilità nel trovare soluzioni o escamotage per raggiungere un obiettivo." },
{ word: "ASTUTO", definition: "Che è molto intelligente, furbo, accorto." },
{ word: "ASSE", definition: "Pezzo di legno, metallo o altro materiale, lungo e rettangolare, utilizzato come sostegno o come elemento di connessione." },
{ word: "ASSEGNARE", definition: "Attribuire qualcosa a qualcuno, assegnare un compito, un incarico o una responsabilità." },
{ word: "ASSEGNATO", definition: "Che è stato dato a qualcuno in modo definitivo." },
{ word: "ASSEGNO", definition: "Documento di pagamento, emesso da una banca o da un privato, che autorizza il prelievo di una somma di denaro da un conto corrente." },
{ word: "ASSEDIO", definition: "Blocco militare di una città o di una fortezza da parte di un esercito nemico." },
{ word: "ASSERIRE", definition: "Affermare con decisione e sicurezza qualcosa." },
{ word: "ASSERZIONE", definition: "Affermazione o dichiarazione di qualcosa." },
{ word: "ASSICURARE", definition: "Garantire o promettere qualcosa con sicurezza." },
{ word: "ASSICURATO", definition: "Persona che ha stipulato un contratto di assicurazione." },
{ word: "ASSICURAZIONE", definition: "Contratto con cui un soggetto si impegna a corrispondere un premio per ottenere la copertura di determinati rischi." },
{ word: "ASSIDUO", definition: "Che è costante, che si verifica con regolarità." },
{ word: "ASSENTO", definition: "Approvazione o consenso a qualcosa." },
{ word: "ASSENTIRE", definition: "Concordare, acconsentire a qualcosa." },
{ word: "ASSILLARE", definition: "Preoccupare o tormentare continuamente qualcuno." },
{ word: "ASSILLO", definition: "Preoccupazione o tormento che assale continuamente la mente di qualcuno." },
{ word: "ASSORTIMENTO", definition: "Insieme di oggetti o merci di diverso tipo, disponibili per la vendita o per l'uso." },
{ word: "ASSORTO", definition: "Che è immerso completamente in una riflessione o in una situazione, distratto." },
{ word: "ASSUEFATTO", definition: "Che è abituato a qualcosa, che ha sviluppato una dipendenza da qualcosa." },
{ word: "ASSUEFAZIONE", definition: "Processo di abituazione a una sostanza, che porta alla necessità di consumarla sempre di più per ottenere lo stesso effetto." },
{ word: "ASSUEFAZIONE", definition: "Abituarsi gradualmente a una situazione o a un comportamento." },
{ word: "ASSUEFAZIONE", definition: "Processo di abituazione a una sostanza, che porta alla necessità di consumarla sempre di più per ottenere lo stesso effetto." },
{ word: "ASSUNZIONE", definition: "Atto o processo di assumere qualcosa, come cibo, bevande o farmaci." },
{ word: "ASSURDO", definition: "Che è privo di senso logico, che contraddice la ragione." },
{ word: "ASSUMERE", definition: "Prendere su di sé un incarico, una responsabilità o un'obbligazione." },
{ word: "ASSUNTO", definition: "Persona che è stata assunta in un lavoro o in una posizione." },
{ word: "ASSUMERE", definition: "Prendere su di sé un incarico, una responsabilità o un'obbligazione." },
{ word: "ASSUMERSI", definition: "Prendere su di sé la responsabilità di qualcosa." },
{ word: "ASSUMERSI", definition: "Prendere su di sé la responsabilità di qualcosa." },
{ word: "ASSUNZIONE", definition: "Atto o processo di assumere qualcosa, come cibo, bevande o farmaci." },
{ word: "ASSUNTO", definition: "Persona che è stata assunta in un lavoro o in una posizione." },
{ word: "ASTENERSI", definition: "Rinunciare volontariamente a fare qualcosa." },
{ word: "ASTENZIONE", definition: "Atto o effetto di astenersi, di non partecipare o di non agire." },
{ word: "ASTENUTO", definition: "Che si è astenuto, che ha rinunciato volontariamente a fare qualcosa." }
];

let currentWord;
let revealedLetters = 1;
let player1Timer = 6000; // 60 secondi * 100 (per i centesimi di secondo)
let player2Timer = 6000; // 60 secondi * 100 (per i centesimi di secondo)
let currentPlayer = 1;
let gamePaused = false;
let player1Score = 0;
let player2Score = 0;

const wordDisplay = document.getElementById('word');
const player1TimerDisplay = document.getElementById('player1-timer');
const player2TimerDisplay = document.getElementById('player2-timer');
const playerInput = document.getElementById('player-input');
const guessButton = document.getElementById('guess-button');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const pauseButton = document.getElementById('pause-button');
const definitionDisplay = document.getElementById('definition');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');
const player1NameInput = document.getElementById('player1-name');
const player2NameInput = document.getElementById('player2-name');
const player1Title = document.getElementById('player1-title');
const player2Title = document.getElementById('player2-title');

let wordInterval;
let timerInterval;

function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 6000);
    const seconds = Math.floor((milliseconds % 6000) / 100);
    const deciseconds = Math.floor((milliseconds % 100) / 10);
    const centiseconds = milliseconds % 10;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${deciseconds}${centiseconds}`;
}

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordsAndDefinitions.length);
    return wordsAndDefinitions[randomIndex];
}

function displayWord() {
    const displayedWord = currentWord.substring(0, revealedLetters) + "-".repeat(currentWord.length - revealedLetters);
    wordDisplay.textContent = displayedWord;
}

function addLetter() {
    if (!gamePaused && revealedLetters < currentWord.length - 1) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * currentWord.length);
        } while (wordDisplay.textContent[randomIndex] !== '-' || currentWord.charAt(randomIndex) === '-');
        
        const letterToAdd = currentWord.charAt(randomIndex);
        const wordArray = wordDisplay.textContent.split('');
        wordArray[randomIndex] = letterToAdd;
        wordDisplay.textContent = wordArray.join('');
        revealedLetters++;
    }
}

function startTimer() {
    clearInterval(timerInterval); // Cancella l'intervallo precedente, se presente
    if (currentPlayer === 1) {
        timerInterval = setInterval(() => {
            if (!gamePaused) {
                player1Timer--;
                player1TimerDisplay.textContent = formatTime(player1Timer);
                if (player1Timer === 0) {
                    clearInterval(timerInterval);
                    alert('Tempo scaduto! Il giocatore 1 ha perso.');
                    switchTurn();
                }
            }
        }, 10); // Intervallo di 10 millisecondi per i centesimi di secondo
    } else {
        timerInterval = setInterval(() => {
            if (!gamePaused) {
                player2Timer--;
                player2TimerDisplay.textContent = formatTime(player2Timer);
                if (player2Timer === 0) {
                    clearInterval(timerInterval);
                    alert('Tempo scaduto! Il giocatore 2 ha perso.');
                    switchTurn();
                }
            }
        }, 10); // Intervallo di 10 millisecondi per i centesimi di secondo
    }
}

function switchTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    playerInput.value = '';
    playerInput.placeholder = `Inserisci la parola, ${currentPlayer === 1 ? player1NameInput.value : player2NameInput.value}`;
    clearInterval(wordInterval);
    clearInterval(timerInterval); // Cancella l'intervallo del timer prima di passare al nuovo turno
    gamePaused = true; // Mette il gioco in pausa
    pauseButton.textContent = 'Riprendi'; // Modifica il testo del pulsante in "Riprendi"
}

function togglePause() {
    gamePaused = !gamePaused;
    if (gamePaused) {
        pauseButton.textContent = 'Riprendi';
      clearInterval(timerInterval);
      clearInterval(wordInterval);
    } else {
        pauseButton.textContent = 'Pausa';
        startGame(); // Se il gioco viene ripreso, avvia nuovamente il timer e il display delle parole
    }
}

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordsAndDefinitions.length);
    const selectedWord = wordsAndDefinitions[randomIndex];
    
    definitionDisplay.textContent = selectedWord.definition;
    definitionDisplay.classList.remove('hidden');
    currentWord = selectedWord.word;
    revealedLetters = 1;
    displayWord();
    clearInterval(wordInterval); // Cancella l'intervallo precedente, se presente
    wordInterval = setInterval(addLetter, 2100); // Imposta un nuovo intervallo per la visualizzazione delle lettere
    startTimer(); // Avvia il timer
    if (annyang) {
        var commands = {
            '*word': function(word) {
                playerInput.value = word.toLowerCase().replace(/\.$/, '').replace(/\?$/, '');
                checkAnswer();
            }
        };
        annyang.addCommands(commands);
        annyang.setLanguage('it-IT'); // Imposta la lingua italiana
        annyang.start();
    } else {
        alert('Il riconoscimento vocale non è supportato dal tuo browser.');
    }
}


function checkAnswer() {
    const playerGuess = playerInput.value.trim().toUpperCase();
    if (playerGuess === currentWord) {
        if (currentPlayer === 1) {
            player1Score++;
            player1ScoreDisplay.textContent = player1Score;
        } else {
            player2Score++;
            player2ScoreDisplay.textContent = player2Score;
        }
        switchTurn();
    } else {
        alert('Risposta sbagliata! Prova di nuovo.'); 
     } 
}

function resetGame() {
    player1Timer = 6000;
    player2Timer = 6000;
    player1TimerDisplay.textContent = formatTime(player1Timer);
    player2TimerDisplay.textContent = formatTime(player2Timer);
    player1Score = 0;
    player2Score = 0;
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
    clearInterval(timerInterval);
    clearInterval(wordInterval);
    pauseButton.textContent = 'Pausa';
    startButton.classList.remove('hidden');
    restartButton.classList.add('hidden');
    pauseButton.classList.add('hidden');
    playerInput.value = '';
    definitionDisplay.textContent = '';
    definitionDisplay.classList.add('hidden');
    player1Title.textContent = player1NameInput.value || 'Giocatore 1';
    player2Title.textContent = player2NameInput.value || 'Giocatore 2';
}


// Aggiungi questa funzione per gestire l'evento "keydown" sull'input dell'utente
playerInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer(); // Invia la parola se l'utente preme "Invio"
    }
});

guessButton.addEventListener('click', checkAnswer);

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    pauseButton.classList.remove('hidden');
    player1Title.textContent = player1NameInput.value || 'Giocatore 1'; 
    player2Title.textContent = player2NameInput.value || 'Giocatore 2'; 
    startGame();
});

restartButton.addEventListener('click', () => {
    resetGame(); 
    startButton.classList.remove('hidden');
});

pauseButton.addEventListener('click', togglePause);


