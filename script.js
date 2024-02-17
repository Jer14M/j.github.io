const wordsAndDefinitions = [
{ word: "abbagliare", definition: "Produrre un'abbagliante luce, accecare temporaneamente con un forte bagliore." },
{ word: "abbaglio", definition: "Fenomeno ottico che si verifica quando la luce si riflette su una superficie e raggiunge gli occhi in modo distorto." },
{ word: "abbandona", definition: "Lasciare qualcosa o qualcuno senza protezione o assistenza." },
{ word: "abbandonare", definition: "Lasciare definitivamente qualcosa o qualcuno." },
{ word: "abbandonato", definition: "Che è stato lasciato solo o senza assistenza." },
{ word: "abbandono", definition: "Atto di abbandonare qualcosa o qualcuno." },
{ word: "abbastanza", definition: "In quantità sufficiente, adeguata." },
{ word: "abbia", definition: "Forma congiuntiva del verbo 'avere' alla terza persona singolare." },
{ word: "abbiamo", definition: "Forma del verbo 'avere' alla prima persona plurale del presente indicativo." },
{ word: "abbiano", definition: "Forma congiuntiva del verbo 'avere' alla terza persona plurale." },
{ word: "abbiate", definition: "Forma congiuntiva del verbo 'avere' alla seconda persona plurale." },
{ word: "abbigliamento", definition: "Insieme di indumenti che si indossano per coprirsi e proteggersi dal freddo o per motivi estetici." },
{ word: "abbraccia", definition: "Terza persona singolare del verbo 'abbracciare', accogliere qualcuno tra le braccia." },
{ word: "abbracciare", definition: "Avvolgere qualcuno tra le braccia in segno di affetto o saluto." },
{ word: "abbraccio", definition: "Azione di abbracciare o risultato di tale azione, gesto affettuoso." },
{ word: "abbronzato", definition: "Che ha la pelle scura a causa dell'esposizione al sole." },
{ word: "abbreviazione", definition: "Riduzione di una parola o di una locuzione a una forma più breve." },
{ word: "abbreviato", definition: "Che è stato reso più breve rispetto alla forma originale." },
{ word: "abdicazione", definition: "Atto di rinunciare volontariamente a una posizione di autorità o di potere." },
{ word: "abete", definition: "Albero conifero dalle foglie aghiformi, comune nelle regioni montuose." },
{ word: "abile", definition: "Capace, esperto nell'esecuzione di determinate attività." },
{ word: "abilità", definition: "Capacità di fare qualcosa con destrezza e competenza." },
{ word: "abissale", definition: "Che è relativo agli abissi marini, molto profondo." },
{ word: "abitudine", definition: "Comportamento consolidato che si ripete regolarmente senza bisogno di riflessione." },
{ word: "abitabile", definition: "Che può essere abitato, adatto alla vita umana." },
{ word: "abitante", definition: "Persona che abita in un luogo." },
{ word: "abitare", definition: "Vivere in un luogo, risiedere." },
{ word: "abitato", definition: "Zona o insieme di edifici dove vivono persone." },
{ word: "abitazione", definition: "Luogo dove si abita, casa." },
{ word: "abituale", definition: "Che si verifica con regolarità, comune, consueto." },
{ word: "abituare", definition: "Abituare qualcuno a una certa condotta o situazione." },
{ word: "abituato", definition: "Che è abituato a qualcosa, che ha il consueto di fare qualcosa." },
{ word: "aborigeno", definition: "Che è originario del luogo in cui vive." },
{ word: "aborto", definition: "Interruzione precoce della gravidanza, naturale o provocata." },
{ word: "abrogare", definition: "Cancellare o eliminare una legge, una norma o un diritto." },
{ word: "abrogazione", definition: "Atto con cui si abroga una legge o una norma giuridica." },
{ word: "abruzzese", definition: "Che è originario o caratteristico dell'Abruzzo, regione italiana." },
{ word: "abruzzo", definition: "Regione italiana situata a sud-est di Roma." },
{ word: "abside", definition: "Parte absidale di una chiesa, solitamente semicircolare o poligonale." },
{ word: "absidiole", definition: "Piccola absidiola, cappella posta generalmente a lato del coro principale di una chiesa." },

{ word: "bacio", definition: "Contatto affettuoso tra le labbra." },
{ word: "barca", definition: "Imbarcazione adibita alla navigazione." },
{ word: "bambino", definition: "Bambino o neonato." },
{ word: "banco", definition: "Mobile o tavolo lungo e stretto." },
{ word: "barriera", definition: "Ostacolo fisico o mentale." },
{ word: "bagno", definition: "Stanza o ambiente con servizi igienici." },
{ word: "bagaglio", definition: "Insieme dei beni portati con sé durante un viaggio." },
{ word: "barista", definition: "Persona che lavora dietro al bancone di un bar." },
{ word: "ballare", definition: "Muoversi seguendo un ritmo musicale." },
{ word: "battere", definition: "Colpire con forza." },
{ word: "bicchiere", definition: "Contenitore per bere." },
{ word: "bicicletta", definition: "Mezzo di trasporto a due ruote." },
{ word: "biglietto", definition: "Documento che dà diritto a un servizio o ingresso." },
{ word: "birra", definition: "Bevanda alcolica ottenuta dalla fermentazione di malto e luppolo." },
{ word: "biscotto", definition: "Dolce secco e friabile." },
{ word: "bistecca", definition: "Fetta di carne cotta alla griglia o al forno." },
{ word: "borsa", definition: "Accessorio per trasportare oggetti." },
{ word: "bottega", definition: "Negozio di piccole dimensioni." },
{ word: "braccio", definition: "Parte del corpo umano che va dalla spalla alla mano." },
{ word: "briciola", definition: "Piccolo frammento di pane o cibo." },
{ word: "brutto", definition: "Di aspetto poco gradevole." },
{ word: "buono", definition: "Di qualità superiore." },
{ word: "buio", definition: "Assenza di luce." },
{ word: "buche", definition: "Scavi nel terreno o asfalto." },
{ word: "buongiorno", definition: "Saluto usato al mattino." },
{ word: "bianco", definition: "Colore privo di tonalità." },
{ word: "bisogno", definition: "Necessità impellente." },
{ word: "bolletta", definition: "Documento di pagamento." },
{ word: "borsello", definition: "Borsa piccola da uomo." },
{ word: "battaglia", definition: "Conflitto armato tra eserciti o gruppi." },
{ word: "bambù", definition: "Pianta tropicale ad alto fusto." },
{ word: "bevanda", definition: "Liquido da bere." },
{ word: "bene", definition: "Stato di salute o prosperità." },
{ word: "biancheria", definition: "Indumenti intimi o da letto." },
{ word: "biscia", definition: "Serpente di piccole dimensioni." },
{ word: "blocco", definition: "Insieme compatto di qualcosa." },
{ word: "bordo", definition: "Margine o limite di qualcosa." },
{ word: "bracciale", definition: "Accessorio indossato al polso." },
{ word: "bruciare", definition: "Consumare con il fuoco." },
    
{ word: "cacao", definition: "Seme di una pianta tropicale, usato per produrre cioccolato." },
{ word: "caffè", definition: "Bevanda ricavata dalla macinazione dei semi di caffè." },
{ word: "caldo", definition: "Temperatura elevata." },
{ word: "calendario", definition: "Sistema per dividere il tempo in periodi." },
{ word: "calma", definition: "Assenza di movimento o turbamento." },
{ word: "cane", definition: "Animale domestico da compagnia." },
{ word: "cappello", definition: "Indumento per coprire la testa." },
{ word: "carne", definition: "Tessuto muscolare degli animali, usato come alimento." },
{ word: "casa", definition: "Edificio abitativo." },
{ word: "cascata", definition: "Caduta d'acqua naturale." },
{ word: "cavolo", definition: "Pianta ortaggio della famiglia delle Crucifere." },
{ word: "cavalli", definition: "Animali da lavoro o da sella." },
{ word: "cellulare", definition: "Dispositivo elettronico per comunicare a distanza." },
{ word: "centrale", definition: "Che si trova al centro." },
{ word: "ceramica", definition: "Materiale ottenuto dalla cottura dell'argilla." },
{ word: "cetriolo", definition: "Pianta ortaggia della famiglia delle Cucurbitacee." },
{ word: "chitarra", definition: "Strumento musicale a corde." },
{ word: "cielo", definition: "Spazio visibile sopra la Terra." },
{ word: "cibo", definition: "Sostanza nutritiva assunta dagli organismi viventi." },
{ word: "ciliegia", definition: "Frutto della ciliegia." },
{ word: "cilindro", definition: "Forma geometrica tridimensionale." },
{ word: "cintura", definition: "Accessorio indossato attorno alla vita." },
{ word: "cipolla", definition: "Pianta ortaggia della famiglia delle Liliacee." },
{ word: "cipresso", definition: "Albero della famiglia delle Cupressacee." },
{ word: "circo", definition: "Spettacolo di intrattenimento con acrobati e animali." },
{ word: "città", definition: "Insediamento urbano di grandi dimensioni." },
{ word: "coccinella", definition: "Insetto della famiglia dei Coccinellidi." },
{ word: "colazione", definition: "Pasto consumato al mattino." },
{ word: "collina", definition: "Rilievo naturale di altezza media." },
{ word: "colomba", definition: "Uccello della famiglia dei Columbidi." },
{ word: "colore", definition: "Proprietà visiva degli oggetti." },
{ word: "cometa", definition: "Corpo celeste di forma luminosa e coda." },
{ word: "commercio", definition: "Scambio di beni e servizi tra individui o paesi." },
{ word: "compito", definition: "Mansione o lavoro da svolgere." },
{ word: "computatore", definition: "Dispositivo elettronico per l'elaborazione dati." },
{ word: "coniglio", definition: "Mammifero roditore della famiglia dei Leporidi." },
{ word: "contadino", definition: "Persona che lavora la terra." },
{ word: "conversazione", definition: "Scambio di parole tra due o più persone." },
{ word: "coraggio", definition: "Virtù che spinge a affrontare le difficoltà." },
{ word: "corridore", definition: "Persona che corre." },
{ word: "corsa", definition: "Azione di correre." },
{ word: "costellazione", definition: "Gruppo di stelle che formano una figura." },
{ word: "crema", definition: "Sostanza oleosa per la cura della pelle." },
{ word: "crisi", definition: "Momento di difficoltà o instabilità." },
{ word: "croce", definition: "Simbolo religioso a forma di 't'." },
{ word: "crostata", definition: "Dolce composto da pasta frolla e ripieno di marmellata." },
{ word: "cucina", definition: "Stanza o ambiente per preparare il cibo." },
{ word: "cugino", definition: "Figlio di uno zio o di una zia." },
{ word: "cultura", definition: "Conoscenze e tradizioni di un popolo." },

{ word: "dado", definition: "Cubo numerato usato nei giochi d'azzardo." },
{ word: "danza", definition: "Attività artistica che consiste in movimenti ritmici del corpo." },
{ word: "data", definition: "Informazione relativa a un momento temporale specifico." },
{ word: "decadimento", definition: "Processo di deterioramento o degrado." },
{ word: "decennio", definition: "Periodo di dieci anni." },
{ word: "dedizione", definition: "Atto di dedicarsi completamente a qualcosa." },
{ word: "definizione", definition: "Descrizione precisa e chiara di qualcosa." },
{ word: "delegato", definition: "Persona incaricata di rappresentare altri." },
{ word: "dente", definition: "Elemento duro presente nella bocca per la masticazione." },
{ word: "dentista", definition: "Professionista che si occupa della cura dei denti." },
{ word: "depilazione", definition: "Rimozione dei peli dal corpo umano." },
{ word: "deriva", definition: "Movimento causato dalla corrente o dal vento." },
{ word: "descrizione", definition: "Rappresentazione verbale o grafica di qualcosa." },
{ word: "deserto", definition: "Regioni terrestri caratterizzate da scarsa vegetazione e precipitazioni." },
{ word: "desiderio", definition: "Sentimento di volere qualcosa." },
{ word: "destinazione", definition: "Luogo verso il quale ci si dirige." },
{ word: "dettaglio", definition: "Particolare di un insieme." },
{ word: "diagnosi", definition: "Determinazione della natura di una malattia o di un problema." },
{ word: "diamante", definition: "Minerale di carbonio cristallizzato, usato come pietra preziosa." },
{ word: "diario", definition: "Registro personale degli eventi giornalieri." },
{ word: "diavolo", definition: "Figura demoniaca nella tradizione religiosa." },
{ word: "diceria", definition: "Rumore o voce che si diffonde senza fondamento." },
{ word: "dicotomia", definition: "Divisione in due parti contrapposte." },
{ word: "differenza", definition: "Disparità o distinzione tra due o più cose." },
{ word: "difficoltà", definition: "Problema o ostacolo che rende difficile un'azione." },
{ word: "digitale", definition: "Relativo ai numeri o alle informazioni rappresentate in forma binaria." },
{ word: "dilemma", definition: "Scelta difficile tra due alternative." },
{ word: "diluvio", definition: "Grande quantità di pioggia caduta in poco tempo." },
{ word: "dinamica", definition: "Studio dei movimenti dei corpi e delle forze che li causano." },
{ word: "dipendenza", definition: "Stato di necessità o assuefazione da una sostanza o da un comportamento." },
{ word: "direzione", definition: "Indicazione del cammino da seguire." },
{ word: "dirigente", definition: "Persona che ha autorità e responsabilità nella gestione di un'organizzazione." },
{ word: "disagio", definition: "Sensazione di malessere o scomodità." },
{ word: "disciplina", definition: "Regole di comportamento volte a mantenere l'ordine e il rispetto." },
{ word: "disegno", definition: "Rappresentazione grafica di oggetti o idee." },
{ word: "dispositivo", definition: "Strumento o apparecchio per svolgere una funzione specifica." },
{ word: "disprezzo", definition: "Sentimento di disistima o disprezzo verso qualcuno o qualcosa." },
{ word: "distorsione", definition: "Alterazione della forma o della verità." },
{ word: "distribuzione", definition: "Ripartizione di qualcosa tra più persone o luoghi." },
{ word: "divertimento", definition: "Attività piacevole che distrae e svaga." },
{ word: "dividendo", definition: "Parte degli utili di un'azienda distribuita agli azionisti." },
{ word: "documento", definition: "Supporto che contiene informazioni scritte o grafiche." },
{ word: "dolce", definition: "Cibo o bevanda zuccherata." },
{ word: "domanda", definition: "Richiesta di informazioni o beni." },
{ word: "domenica", definition: "Giorno della settimana." },
{ word: "dominio", definition: "Autorità o controllo su qualcosa." },
{ word: "dono", definition: "Regalo o donazione." },
{ word: "dormire", definition: "Stare in uno stato di riposo durante il sonno." },
{ word: "dottore", definition: "Professionista laureato in medicina." },

{ word: "ebbrezza", definition: "Stato di euforia causato dall'assunzione di alcolici o droghe." },
{ word: "eccellenza", definition: "Qualità di chi è eccellente, di chi si distingue per merito." },
{ word: "eccentrico", definition: "Che si discosta dalla norma, che è stravagante." },
{ word: "eccezione", definition: "Caso particolare che si discosta dalla regola generale." },
{ word: "eccezionale", definition: "Fuori dal comune, straordinario." },
{ word: "eccessivo", definition: "Che supera il limite normale o opportuno." },
{ word: "eccesso", definition: "Superamento del limite consentito o considerato normale." },
{ word: "eccitante", definition: "Che suscita eccitazione o stimola l'interesse." },
{ word: "eccitare", definition: "Provocare uno stato di agitazione o eccitazione." },
{ word: "eclissi", definition: "Oscuramento temporaneo di un astro dovuto all'interposizione di un altro corpo celeste." },
{ word: "economia", definition: "Scienza che studia la gestione delle risorse disponibili." },
{ word: "edificio", definition: "Costruzione destinata ad abitazione o ad altri usi." },
{ word: "educazione", definition: "Processo di insegnamento e apprendimento dei valori, delle norme e delle conoscenze." },
{ word: "effetto", definition: "Risultato prodotto da una causa o da un'azione." },
{ word: "efficace", definition: "Che produce l'effetto desiderato, che è efficace." },
{ word: "efficienza", definition: "Capacità di ottenere risultati con il minimo spreco di risorse." },
{ word: "egoismo", definition: "Tendenza a pensare solo al proprio interesse, senza curarsi degli altri." },
{ word: "egoista", definition: "Chi agisce pensando solo al proprio interesse." },
{ word: "eguaglianza", definition: "Stato di uguaglianza tra individui o gruppi." },
{ word: "elettricità", definition: "Forma di energia prodotta dal movimento di cariche elettriche." },
{ word: "elevazione", definition: "Aumento di quota, sollevamento." },
{ word: "elisir", definition: "Preparato magico o medicinale che si ritiene abbia poteri benefici o taumaturgici." },
{ word: "ellisse", definition: "Figura geometrica simile a una circonferenza ma allungata." },
{ word: "emergenza", definition: "Situzione di pericolo o di crisi che richiede interventi immediati." },
{ word: "emozione", definition: "Stato affettivo di intensità variabile." },
{ word: "empatia", definition: "Capacità di comprendere e condividere i sentimenti altrui." },
{ word: "emergere", definition: "Venire alla luce, rivelarsi." },
{ word: "emissione", definition: "Atto di emettere, di mandare fuori qualcosa." },
{ word: "emotivo", definition: "Relativo alle emozioni, che è suscettibile di essere influenzato dalle emozioni." },
{ word: "energia", definition: "Capacità di compiere un lavoro." },
{ word: "enfasi", definition: "Accento particolare dato a una parola o a una frase per sottolinearne il significato." },
{ word: "ente", definition: "Organizzazione o istituzione con uno scopo specifico." },
{ word: "entusiasmo", definition: "Stato di fervore e di eccitazione mentale." },
{ word: "epifania", definition: "Manifestazione improvvisa di una realtà o di una verità." },
{ word: "episodio", definition: "Fatto o avvenimento isolato all'interno di una serie." },
{ word: "epoca", definition: "Periodo storico o momento preciso nel tempo." },
{ word: "equilibrio", definition: "Stato di stabilità e armonia tra forze contrapposte." },
{ word: "equipaggiamento", definition: "Insieme di attrezzature necessarie per svolgere una certa attività." },
{ word: "equivalente", definition: "Che ha lo stesso valore o la stessa importanza di qualcos'altro." },
{ word: "errore", definition: "Mancanza di precisione o esattezza." },
{ word: "esagerare", definition: "Rendere eccessivo qualcosa, amplificarlo oltre misura." },
{ word: "esame", definition: "Valutazione delle conoscenze o delle capacità di una persona." },
{ word: "esaurimento", definition: "Consumazione totale o diminuzione delle riserve di qualcosa." },
{ word: "esempio", definition: "Caso o situazione che può essere usato per illustrare un concetto o un'idea." },
{ word: "esercizio", definition: "Attività fisica o mentale svolta per acquisire o mantenere una certa capacità." },
{ word: "esibizione", definition: "Atto di mostrare pubblicamente le proprie capacità o abilità." },
{ word: "esigenza", definition: "Necessità o bisogno impellente di qualcosa." },

{ word: "fabbrica", definition: "Stabilimento industriale dove vengono prodotti beni o merci." },
{ word: "fabbro", definition: "Artigiano specializzato nella lavorazione del ferro." },
{ word: "faccenda", definition: "Compito o incombenza da svolgere." },
{ word: "faccia", definition: "Parte anteriore del volto umano." },
{ word: "facile", definition: "Che si compie con facilità, senza difficoltà." },
{ word: "facilità", definition: "Condizione di semplicità o di agevolezza nell'esecuzione di un'azione." },
{ word: "falcata", definition: "Passo dell'animale consistente nell'avanzare contemporaneamente di entrambe le zampe dello stesso lato." },
{ word: "falco", definition: "Uccello rapace di medie e grandi dimensioni, dotato di artigli potenti." },
{ word: "fame", definition: "Sensazione di desiderio e bisogno di cibo." },
{ word: "famiglia", definition: "Gruppo di persone unite da legami di parentela o affettivi." },
{ word: "fanale", definition: "Dispositivo luminoso utilizzato per illuminare o segnalare." },
{ word: "fango", definition: "Miscela di terra e acqua, solitamente fangosa e viscida." },
{ word: "fantasia", definition: "Capacità di immaginare o creare situazioni, personaggi o eventi." },
{ word: "fantasma", definition: "Presunta apparizione di una persona morta." },
{ word: "farfalla", definition: "Insetto dal corpo coperto di scaglie e dotato di ali, che si nutre di nettare." },
{ word: "farmacia", definition: "Locale dove vengono venduti farmaci e prodotti sanitari." },
{ word: "fascia", definition: "Benda o striscia di tessuto avvolta intorno a una parte del corpo per scopi terapeutici o protettivi." },
{ word: "fascino", definition: "Attrattiva o seduzione esercitata su qualcuno." },
{ word: "fastidio", definition: "Sensazione di disagio o irritazione causata da qualcosa o qualcuno." },
{ word: "favola", definition: "Racconto breve di ambientazione fantastica, spesso con insegnamenti morali." },
{ word: "fazione", definition: "Gruppo di persone che condividono idee, interessi o obiettivi comuni." },
{ word: "fede", definition: "Credenza religiosa o convinta adesione a un principio o a un'ideologia." },
{ word: "fecondità", definition: "Capacità di produrre una quantità elevata di figli o di frutti." },
{ word: "felicità", definition: "Stato di gioia e soddisfazione interiore." },
{ word: "ferita", definition: "Lesione della pelle o dei tessuti sottostanti causata da un trauma." },
{ word: "fermare", definition: "Bloccare o impedire il movimento di qualcosa o qualcuno." },
{ word: "feroce", definition: "Che manifesta grande aggressività o ferocia." },
{ word: "ferro", definition: "Metallo di colore grigio-argenteo, duttile e malleabile." },
{ word: "fertilizzare", definition: "Arricchire il terreno con sostanze nutritive per favorire la crescita delle piante." },
{ word: "fertilità", definition: "Capacità di un terreno di produrre piante in abbondanza." },
{ word: "fervore", definition: "Intensità di un sentimento o di un'emozione." },
{ word: "festività", definition: "Giorni o periodi dedicati alla celebrazione di eventi religiosi o civili." },
{ word: "fiducia", definition: "Convinzione della verità o affidabilità di qualcosa o qualcuno." },
{ word: "figura", definition: "Rappresentazione grafica di una forma." },
{ word: "figlio", definition: "Persona nata dal rapporto genitoriale." },
{ word: "fila", definition: "Successione ordinata di persone o cose." },
{ word: "filo", definition: "Sottile corda o filamento." },
{ word: "filtro", definition: "Dispositivo per separare o eliminare particelle indesiderate da un liquido o da un gas." },
{ word: "finanza", definition: "Attività di gestione e controllo dei fondi e degli investimenti." },
{ word: "fine", definition: "Termine o scopo di un'azione o di un processo." },
{ word: "finestra", definition: "Apertura nel muro di un edificio, chiusa da vetri o altri materiali trasparenti." },
{ word: "finire", definition: "Giungere al termine di un'azione o di un processo." },
{ word: "fiore", definition: "Organo riproduttivo delle piante angiosperme." },
{ word: "fiscale", definition: "Relativo alle imposte o alla fiscalità." },
{ word: "fisico", definition: "Relativo al corpo o alle sue caratteristiche." },
{ word: "fisioterapia", definition: "Trattamento terapeutico basato sull'esercizio fisico e sulle manipolazioni." },
{ word: "fiume", definition: "Corso d'acqua naturale che scorre lungo un letto." },
{ word: "foglia", definition: "Organo delle piante, generalmente piatto e verde, deputato alla fotosintesi." },

{ word: "gabbia", definition: "Recinto di metallo o legno utilizzato per contenere animali." },
{ word: "gagliardo", definition: "Che è forte, vigoroso e coraggioso." },
{ word: "galassia", definition: "Sistema astronomico costituito da un insieme di stelle, nebulose, gas e polveri." },
{ word: "galleria", definition: "Passaggio sotterraneo o coperto, generalmente lungo e stretto." },
{ word: "gallo", definition: "Uccello domestico maschio della specie Gallus gallus." },
{ word: "gamba", definition: "Parte del corpo umano che va dalla coscia al piede." },
{ word: "gambo", definition: "Parte sottile e lunga di alcune piante che sostiene foglie, fiori o frutti." },
{ word: "gancio", definition: "Attrezzo metallico a forma di uncino, utilizzato per appendere o trattenere qualcosa." },
{ word: "garanzia", definition: "Promessa di riparazione o sostituzione di un bene nel caso in cui si verifichi un difetto." },
{ word: "gara", definition: "Concorso o competizione tra persone o gruppi." },
{ word: "garda", definition: "Parola utilizzata in alcune espressioni idiomatiche." },
{ word: "gareggiare", definition: "Partecipare a una gara sportiva o competitiva." },
{ word: "gargarismo", definition: "Procedura terapeutica che consiste nel risciacquo della bocca e della gola con liquidi." },
{ word: "gas", definition: "Stato della materia caratterizzato da bassa densità e scarsa coesione molecolare." },
{ word: "gatto", definition: "Mammifero carnivoro della famiglia dei felini, domestico o selvatico." },
{ word: "gaudio", definition: "Gioia intensa e profonda." },
{ word: "gazzetta", definition: "Periodico di informazione, solitamente di piccolo formato." },
{ word: "gelato", definition: "Dolce cremoso ottenuto dalla congelazione di latte, zucchero e altri ingredienti." },
{ word: "gelo", definition: "Congelamento dell'acqua o di altri liquidi." },
{ word: "gelosia", definition: "Sentimento di inquietudine causato dalla paura di perdere l'affetto o l'attenzione di qualcuno." },
{ word: "gemma", definition: "Germoglio di una pianta, generalmente protetto da una capsula o da una buccia." },
{ word: "generale", definition: "Che riguarda o interessa tutti gli elementi di un insieme." },
{ word: "generare", definition: "Produrre, dare origine a qualcosa." },
{ word: "genio", definition: "Persona dotata di straordinaria intelligenza o creatività." },
{ word: "genitore", definition: "Persona che ha generato un figlio." },
{ word: "genoa", definition: "Tipo di velatura utilizzata nelle imbarcazioni a vela." },
{ word: "gentile", definition: "Che si comporta con cortesia, educazione e rispetto verso gli altri." },
{ word: "geologia", definition: "Scienza che studia la composizione, la struttura e l'evoluzione della Terra." },
{ word: "gestione", definition: "Attività di organizzazione e controllo di risorse e processi." },
{ word: "gesto", definition: "Azione compiuta con il corpo per esprimere un'idea, un sentimento o un'intenzione." },
{ word: "gettare", definition: "Lanciare o lanciarsi in avanti con vigore." },
{ word: "ghepardo", definition: "Mammifero carnivoro della famiglia dei felini, noto per la sua velocità." },
{ word: "ghiaccio", definition: "Acqua congelata in forma solida." },
{ word: "ghiaia", definition: "Piccoli sassi o pietre di dimensioni variabili." },
{ word: "giallo", definition: "Colore che si trova tra il verde e l'arancione nello spettro visibile." },
{ word: "giardino", definition: "Area verde attrezzata per il relax e la coltivazione di piante ornamentali." },
{ word: "già", definition: "Indica tempo passato o presenza di qualcosa in un periodo precedente." },
{ word: "gigante", definition: "Persona o essere di straordinarie dimensioni." },
{ word: "gioia", definition: "Stato di felicità e soddisfazione interiore." },
{ word: "gioiello", definition: "Oggetto prezioso di valore ornamentale, come anelli, collane o orecchini." },
{ word: "giornale", definition: "Periodico che pubblica notizie e informazioni su eventi di attualità." },
{ word: "giorno", definition: "Periodo di tempo che va dall'alba al tramonto." },
{ word: "girovita", definition: "Circonferenza della parte più stretta del tronco umano." },
{ word: "giovane", definition: "Persona nella fase della vita che precede l'età adulta." },
{ word: "giovinezza", definition: "Periodo della vita che precede l'età adulta, caratterizzato da vitalità e crescita fisica." },

{ word: "habitat", definition: "Ambiente naturale in cui vive una determinata specie animale o vegetale." },
{ word: "hamburger", definition: "Piatto composto da carne tritata cotta alla griglia e servita tra due fette di pane." },
{ word: "hammam", definition: "Bagno turco, luogo di purificazione e relax diffuso in molti paesi musulmani." },
{ word: "handicap", definition: "Condizione di svantaggio che rende difficile per una persona eseguire determinate attività." },
{ word: "hard disk", definition: "Dispositivo di memorizzazione dati magnetico utilizzato nei computer." },
{ word: "hardware", definition: "Componenti fisici di un sistema informatico, come processori, schede madri e dispositivi di archiviazione." },
{ word: "hashtag", definition: "Parola o frase preceduta dal simbolo #, utilizzata nei social media per identificare argomenti o temi specifici." },
{ word: "hobby", definition: "Attività praticata per piacere o interesse personale, non necessariamente a fini professionali." },
{ word: "holding", definition: "Azienda o gruppo di aziende che detiene partecipazioni in altre società." },
{ word: "hotel", definition: "Struttura ricettiva che offre alloggio temporaneo, servizi e comfort ai viaggiatori." },
{ word: "html", definition: "Linguaggio di markup utilizzato per la creazione di pagine web." },
{ word: "hub", definition: "Dispositivo di rete utilizzato per collegare più dispositivi in una rete locale." },
{ word: "hula hoop", definition: "Gioco che consiste nel far ruotare un cerchio intorno alla vita." },
{ word: "hurricane", definition: "Tempesta tropicale caratterizzata da forti venti e intense precipitazioni." },
{ word: "husky", definition: "Razza di cane di taglia media con pelo folto e spesso originaria delle regioni artiche." },
{ word: "hygge", definition: "Concetto danese legato al benessere e al comfort, spesso associato a momenti di intimità e convivialità." },

{ word: "idea", definition: "Pensiero o concetto che nasce nella mente di una persona." },
{ word: "identità", definition: "Insieme di caratteristiche peculiari che distinguono una persona o una cosa da altre." },
{ word: "identificare", definition: "Riconoscere o determinare l'identità di qualcuno o qualcosa." },
{ word: "ideologia", definition: "Insieme di idee, credenze e valori che costituiscono il fondamento di un sistema politico, sociale o culturale." },
{ word: "ideologico", definition: "Relativo all'ideologia, ai suoi principi e valori." },
{ word: "idilliaco", definition: "Che è caratterizzato da un'atmosfera serena e romantica, tipica degli idilli." },
{ word: "idoneità", definition: "Qualità di ciò che è idoneo, adatto o appropriato per uno scopo specifico." },
{ word: "idoneo", definition: "Che ha le qualità adatte o necessarie per svolgere una determinata funzione o per ottenere un determinato risultato." },
{ word: "idrocarburo", definition: "Composto chimico costituito da carbonio e idrogeno." },
{ word: "idrogeno", definition: "Elemento chimico di simbolo H e numero atomico 1, il più leggero e abbondante nell'universo." },
{ word: "igiene", definition: "Insieme di pratiche e comportamenti finalizzati alla prevenzione delle malattie e al mantenimento della salute." },
{ word: "ignorare", definition: "Non sapere o non essere a conoscenza di qualcosa." },
{ word: "ignoranza", definition: "Mancanza di conoscenza o informazioni su un determinato argomento." },
{ word: "ignoto", definition: "Che non è conosciuto, di cui non si ha conoscenza." },
{ word: "ilare", definition: "Allegro, gioioso, euforico." },
{ word: "illecito", definition: "Che è contrario alla legge, vietato, non lecito." },
{ word: "illegale", definition: "Contrario alla legge, non permesso dalla normativa in vigore." },
{ word: "illudere", definition: "Ingannare qualcuno facendogli credere qualcosa di falso o irrealizzabile." },
{ word: "illusione", definition: "Percezione o concezione distorta della realtà, basata su false credenze o aspettative." },
{ word: "illustrare", definition: "Rappresentare graficamente qualcosa o spiegare dettagliatamente un concetto o un argomento." },
{ word: "immaginare", definition: "Formare un'immagine mentale di qualcosa o qualcuno che non è presente o reale." },
{ word: "immaginario", definition: "Che esiste solo nell'immaginazione o nella fantasia." },
{ word: "immagine", definition: "Rappresentazione visiva di qualcosa o qualcuno, sia reale che immaginario." },
{ word: "immediato", definition: "Che avviene subito, senza ritardo." },
{ word: "immenso", definition: "Di dimensioni estremamente grandi, enorme." },
{ word: "immigrato", definition: "Persona che si trasferisce in un paese straniero per stabilirsi definitivamente." },
{ word: "immigrato", definition: "Persona che si trasferisce in un paese straniero per stabilirsi definitivamente." },
{ word: "immigrazione", definition: "Movimento di persone che si trasferiscono da un paese straniero per stabilirsi definitivamente in un altro." },
{ word: "immissione", definition: "Atto o effetto di introdurre qualcosa in un determinato contesto o ambiente." },
{ word: "immissione", definition: "Atto o effetto di introdurre qualcosa in un determinato contesto o ambiente." },
{ word: "immissione", definition: "Atto o effetto di introdurre qualcosa in un determinato contesto o ambiente." },
{ word: "immissione", definition: "Atto o effetto di introdurre qualcosa in un determinato contesto o ambiente." },
{ word: "immondizia", definition: "Rifiuto solido o liquido di origine domestica, industriale o commerciale." },
{ word: "immorale", definition: "Contrario ai principi morali, alla decenza o alla virtù." },
{ word: "immortale", definition: "Che non può morire, che è eterno." },
{ word: "immotivato", definition: "Che non ha una ragione o una spiegazione logica." },
{ word: "immunità", definition: "Stato di resistenza o di protezione da una malattia o da un agente patogeno." },
{ word: "impacciato", definition: "Che si comporta in modo goffo o maldestro, privo di agilità o destrezza." },
{ word: "imparare", definition: "Acquisire conoscenze, competenze o abilità attraverso lo studio, l'esperienza o l'osservazione." },
{ word: "imparziale", definition: "Che agisce o giudica senza favoritismi o pregiudizi." },
{ word: "impastare", definition: "Lavorare un impasto di farina e acqua per ottenere una consistenza omogenea." },
{ word: "impasto", definition: "Materia ottenuta mescolando farina e acqua, utilizzata come base per preparare pane, pizza e altri prodotti da forno." },
{ word: "impatto", definition: "Forza esercitata da un corpo contro un altro quando entrano in contatto." },
{ word: "imperativo", definition: "Che è assolutamente necessario o indispensabile." },
{ word: "imperatore", definition: "Capo supremo di un impero, titolo di chi governa un vasto territorio." },
{ word: "imperiale", definition: "Relativo all'impero o all'imperatore." },
{ word: "impermeabile", definition: "Che non lascia passare l'acqua o altri liquidi." },
{ word: "impeto", definition: "Slancio irruento e impetuoso." },

{ word: "jabot", definition: "Parola di origine francese che indica una ruches a pieghe, posta in genere sotto il colletto di una camicia." },
{ word: "jazz", definition: "Genere musicale nato negli Stati Uniti agli inizi del XX secolo, caratterizzato da ritmi syncopati e improvvisazioni." },
{ word: "jeans", definition: "Pantaloni di tela di cotone, solitamente di colore blu, con cuciture rinforzate, nati come indumento da lavoro ma diventati popolari anche come abbigliamento casual." },
{ word: "jingle", definition: "Breve melodia o suono distintivo utilizzato in pubblicità, trasmissioni radiofoniche o televisive per scopi promozionali o identificativi." },
{ word: "journal", definition: "Termine di origine francese che indica una pubblicazione periodica, come un giornale o una rivista." },
{ word: "judo", definition: "Arte marziale di origine giapponese, basata su tecniche di proiezione e controllo dell'avversario." },
{ word: "jukebox", definition: "Macchina automatica che riproduce musica mediante l'inserimento di monete, comunemente presente nei bar o nei locali pubblici." },
{ word: "juta", definition: "Fibra tessile di origine vegetale, ottenuta dalla pianta della juta, utilizzata per la produzione di sacchi, tappeti e altri manufatti." },
{ word: "jazzista", definition: "Musicista che suona o si dedica al genere musicale jazz." },
{ word: "juventino", definition: "Sostenitore o tifoso della squadra di calcio Juventus." },

{ word: "kayak", definition: "Imbarcazione a remi, generalmente utilizzata per praticare sport acquatici." },
{ word: "kaiser", definition: "Titolo di imperatore in lingua tedesca." },
{ word: "kaki", definition: "Frutto dall'aspetto simile al pomodoro, dal sapore dolce e polposo." },
{ word: "kangaroo", definition: "Mammifero marsupiale originario dell'Australia, caratterizzato da grandi zampe posteriori adatte al salto." },
{ word: "karaoke", definition: "Attività di intrattenimento in cui una persona canta su una base musicale preregistrata." },
{ word: "karma", definition: "Concetto religioso e filosofico dell'induismo e del buddhismo, relativo alle azioni e alle conseguenze." },
{ word: "kebab", definition: "Piatto culinario composto da carne (solitamente di agnello) arrostita su uno spiedo verticale." },
{ word: "keniano", definition: "Che è originario del Kenya, paese dell'Africa orientale." },
{ word: "ketchup", definition: "Salsa di pomodoro condita con aceto, zucchero, sale e spezie." },
{ word: "kettlebell", definition: "Attrezzo utilizzato nel fitness, simile a una palla di ferro con un manico, per esercizi di sollevamento pesi." },
{ word: "khan", definition: "Titolo di sovrani e capi tribali in Asia centrale e orientale." },
{ word: "khmer", definition: "Popolo del sudest asiatico, e relativo al loro idioma e cultura." },
{ word: "kickboxing", definition: "Sport da combattimento che combina tecniche di pugilato e calci, praticato su un ring." },
{ word: "killer", definition: "Persona che uccide qualcuno, generalmente con premeditazione o in modo deliberato." },
{ word: "kimono", definition: "Indumento tradizionale giapponese, composto da una lunga veste avvolgente e da un obi, cintura." },
{ word: "kinetoterapia", definition: "Terapia che utilizza il movimento e l'esercizio fisico per recuperare la funzionalità motoria." },
{ word: "kite", definition: "Aquiloni adatti al volo, utilizzati come giocattoli o in competizioni sportive." },
{ word: "kitesurf", definition: "Sport acquatico che combina elementi del surf e del parapendio, utilizzando una tavola e un aquilone." },
{ word: "knight", definition: "Titolo nobiliare inglese, corrispondente al cavaliere." },
{ word: "kumquat", definition: "Frutto simile all'arancio, di piccole dimensioni, con buccia edibile e sapore agrodolce." },
{ word: "kung fu", definition: "Arte marziale cinese, caratterizzata da movimenti fluidi e rapidi." },
{ word: "kurta", definition: "Indumento tradizionale indiano, una sorta di tunica lunga indossata sopra i pantaloni." },
{ word: "kvas", definition: "Bevanda tradizionale russa a base di pane di segale fermentato." },
{ word: "kyudo", definition: "Arte marziale giapponese che consiste nel tiro con l'arco." },
{ word: "karst", definition: "Fenomeno geologico caratterizzato da terreni calcarei solubili, spesso associati a grotte e doline." },
{ word: "kit", definition: "Insieme di strumenti o materiali necessari per svolgere un'attività specifica." },
{ word: "koala", definition: "Mammifero marsupiale arboricolo originario dell'Australia, noto per la sua lentezza e il suo aspetto simpatico." },
{ word: "kombucha", definition: "Bevanda fermentata ottenuta da tè dolcificato e colonie di batteri e lieviti." },
{ word: "kosher", definition: "Termine ebraico che indica il rispetto delle leggi religiose ebraiche riguardo alla preparazione e al consumo di cibo." },
{ word: "karatè", definition: "Arte marziale originaria dell'isola di Okinawa, caratterizzata da tecniche di combattimento con colpi di pugno e calcio." },
{ word: "karstico", definition: "Che è relativo al fenomeno geologico del karst." },
{ word: "kendo", definition: "Arte marziale giapponese che prevede l'uso di spade di bambù (shinai) e armatura protettiva." },
{ word: "karma", definition: "Concetto religioso e filosofico dell'induismo e del buddhismo, relativo alle azioni e alle conseguenze." },
{ word: "khaki", definition: "Colore simile al beige, spesso utilizzato per uniformi militari e abbigliamento casual." },
{ word: "kilo", definition: "Unità di misura del Sistema Internazionale (SI) equivalente a mille." },
{ word: "kip", definition: "Valuta ufficiale del Laos." },
{ word: "kiwi", definition: "Frutto dalla polpa verde e dolce, originario della Nuova Zelanda." },
{ word: "knot", definition: "Unità di misura della velocità dei venti, corrispondente a un miglio nautico all'ora." },
{ word: "koan", definition: "Enigma o paradossale aforisma utilizzato come oggetto di meditazione nel buddhismo Zen." },
{ word: "kermesse", definition: "Manifestazione o festa popolare caratterizzata da giochi, spettacoli e divertimenti." },
{ word: "kettlebell", definition: "Attrezzo utilizzato nel fitness, simile a una palla di ferro con un manico, per esercizi di sollevamento pesi." },
{ word: "karaoke", definition: "Attività di intrattenimento in cui una persona canta su una base musicale preregistrata." },
{ word: "kickboxing", definition: "Sport da combattimento che combina tecniche di pugilato e calci, praticato su un ring." },
{ word: "kaki", definition: "Frutto dall'aspetto simile al pomodoro, dal sapore dolce e polposo." },
{ word: "kaiser", definition: "Titolo di imperatore in lingua tedesca." },
{ word: "kayak", definition: "Imbarcazione a remi, generalmente utilizzata per praticare sport acquatici." },

{ word: "labirinto", definition: "Intricato percorso di vie e passaggi." },
{ word: "laboratorio", definition: "Ambiente attrezzato per la ricerca o la sperimentazione." },
{ word: "lacrima", definition: "Goccia di liquido prodotta dagli occhi." },
{ word: "ladro", definition: "Persona che commette furti o rapine." },
{ word: "lago", definition: "Specchio d'acqua circondato da terraferma." },
{ word: "lampada", definition: "Dispositivo per illuminare un ambiente." },
{ word: "lanterna", definition: "Dispositivo di illuminazione portatile." },
{ word: "lavoro", definition: "Attività svolta per ottenere un compenso." },
{ word: "leggenda", definition: "Narrazione popolare di eventi o figure storiche." },
{ word: "lente", definition: "Strumento ottico per concentrare o deviare la luce." },
{ word: "lenza", definition: "Filo utilizzato per la pesca." },
{ word: "leone", definition: "Grande felino dalla criniera." },
{ word: "lepre", definition: "Mammifero erbivoro di piccola taglia." },
{ word: "lettera", definition: "Messaggio scritto da trasmettere a qualcuno." },
{ word: "libertà", definition: "Stato di essere libero." },
{ word: "libreria", definition: "Negozio o scaffale con libri in vendita." },
{ word: "libro", definition: "Opera stampata o manoscritta." },
{ word: "liceo", definition: "Scuola superiore." },
{ word: "limite", definition: "Confine o soglia massima o minima." },
{ word: "limone", definition: "Frutto giallo dalla polpa acida." },
{ word: "linea", definition: "Successione continua di punti nello spazio." },
{ word: "lingua", definition: "Organo del gusto e dell'articolo." },
{ word: "lira", definition: "Valuta italiana." },
{ word: "liquido", definition: "Materia che assume la forma del recipiente che la contiene." },
{ word: "lirica", definition: "Forma di espressione artistica." },
{ word: "litro", definition: "Unità di misura del volume." },
{ word: "lode", definition: "Elogio o encomio." },
{ word: "logica", definition: "Ramo della filosofia che studia il ragionamento." },
{ word: "lombare", definition: "Relativo alla regione bassa della schiena." },
{ word: "lontano", definition: "Distanziato nel tempo o nello spazio." },
{ word: "loro", definition: "Pronome personale di terza persona plurale." },
{ word: "lotta", definition: "Combattimento o scontro." },
{ word: "luce", definition: "Agente fisico che rende visibili gli oggetti." },
{ word: "lucido", definition: "Brillante e pulito." },
{ word: "lucchetto", definition: "Dispositivo per chiudere e aprire porte o casseforti." },
{ word: "lunare", definition: "Relativo alla luna." },
{ word: "lungo", definition: "Esteso in direzione orizzontale." },
{ word: "lupo", definition: "Animale carnivoro della famiglia dei canidi." },
{ word: "lusso", definition: "Eccesso di lusso o sfarzo." },
{ word: "lutto", definition: "Espressione di dolore per la morte di una persona." },
{ word: "lutto", definition: "Periodo di tempo in cui si manifesta il dolore per la perdita di una persona cara." },
{ word: "luce", definition: "Agente fisico che rende visibili gli oggetti." },
{ word: "lucido", definition: "Brillante e pulito." },
{ word: "lucchetto", definition: "Dispositivo per chiudere e aprire porte o casseforti." },
{ word: "lunare", definition: "Relativo alla luna." },
{ word: "lungo", definition: "Esteso in direzione orizzontale." },
{ word: "lupo", definition: "Animale carnivoro della famiglia dei canidi." },
{ word: "lusso", definition: "Eccesso di lusso o sfarzo." },
{ word: "lutto", definition: "Espressione di dolore per la morte di una persona." },
{ word: "lutto", definition: "Periodo di tempo in cui si manifesta il dolore per la perdita di una persona cara." },

{ word: "macchina", definition: "Dispositivo meccanico per compiere un lavoro." },
{ word: "madre", definition: "Genitrice di un individuo." },
{ word: "magia", definition: "Pratica o credenza nel soprannaturale." },
{ word: "maglia", definition: "Indumento a maglia." },
{ word: "magnete", definition: "Corpo che attira i metalli." },
{ word: "maggio", definition: "Quinto mese dell'anno." },
{ word: "magro", definition: "Che ha poco grasso." },
{ word: "maiale", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "maestro", definition: "Persona esperta in un'arte o disciplina." },
{ word: "magro", definition: "Che ha poco grasso." },
{ word: "maiale", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "maestro", definition: "Persona esperta in un'arte o disciplina." },
{ word: "maggio", definition: "Quinto mese dell'anno." },
{ word: "magro", definition: "Che ha poco grasso." },
{ word: "maiale", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "maestro", definition: "Persona esperta in un'arte o disciplina." },
{ word: "mago", definition: "Persona che pratica la magia." },
{ word: "maionese", definition: "Salsa a base di uova e olio." },
{ word: "malato", definition: "Persona affetta da malattia." },
{ word: "male", definition: "Contrario di bene." },
{ word: "mamma", definition: "Termine per riferirsi alla madre." },
{ word: "mano", definition: "Parte del corpo umano situata all'estremità del braccio." },
{ word: "mangiare", definition: "Ingerire cibo attraverso la bocca." },
{ word: "maniglia", definition: "Impugnatura di un oggetto." },
{ word: "mantello", definition: "Indumento lungo e ampio." },
{ word: "mappa", definition: "Rappresentazione grafica di un territorio." },
{ word: "mare", definition: "Grande massa d'acqua salata." },
{ word: "margherita", definition: "Fiore della famiglia delle Asteraceae." },
{ word: "marito", definition: "Coniuge maschile." },
{ word: "marmo", definition: "Rocca metamorfica cristallina." },
{ word: "martello", definition: "Strumento per battere o picchiare." },
{ word: "marzo", definition: "Terzo mese dell'anno." },
{ word: "maschera", definition: "Oggetto per coprire il viso." },
{ word: "maschio", definition: "Sessualmente maschile." },
{ word: "massa", definition: "Quantità di materia." },
{ word: "matita", definition: "Oggetto per scrivere o disegnare." },
{ word: "matrimonio", definition: "Unione legale tra due persone." },
{ word: "mattina", definition: "Parte del giorno che va dall'alba fino a mezzogiorno." },
{ word: "mazzo", definition: "Gruppo di fiori o piante legati insieme." },
{ word: "meccanico", definition: "Relativo alla meccanica." },
{ word: "medicina", definition: "Scienza e pratica del trattamento delle malattie." },
{ word: "medio", definition: "Che si trova nel mezzo." },
{ word: "melodia", definition: "Successione piacevole di suoni." },
{ word: "melone", definition: "Frutto dalla buccia dura e polpa dolce." },
{ word: "mente", definition: "Facoltà psichica del pensiero e della coscienza." },
{ word: "menta", definition: "Pianta aromatica." },
{ word: "mercato", definition: "Luogo dove si comprano e vendono merci." },
{ word: "mercoledì", definition: "Terzo giorno della settimana." },
{ word: "merenda", definition: "Spuntino consumato nel pomeriggio." },
{ word: "metà", definition: "Parte uguale di un tutto." },

{ word: "naso", definition: "Parte del viso umano." },
{ word: "nave", definition: "Imbarcazione marittima." },
{ word: "nazionale", definition: "Relativo a una nazione." },
{ word: "neonato", definition: "Bambino appena nato." },
{ word: "nero", definition: "Colore scuro." },
{ word: "neve", definition: "Precipitazione atmosferica." },
{ word: "nido", definition: "Struttura in cui gli uccelli depongono le uova e allevano i piccoli." },
{ word: "niente", definition: "Nulla." },
{ word: "nobile", definition: "Di elevato rango sociale." },
{ word: "nocciola", definition: "Frutto della nocciuola." },
{ word: "nocciuola", definition: "Pianta da frutto." },
{ word: "noleggio", definition: "Azione di noleggiare." },
{ word: "nome", definition: "Parola che identifica una persona, un animale o una cosa." },
{ word: "nonna", definition: "Madre del padre o della madre." },
{ word: "nonno", definition: "Padre del padre o della madre." },
{ word: "nord", definition: "Punto cardinale." },
{ word: "normale", definition: "Conforme alla norma." },
{ word: "nostalgia", definition: "Sentimento di malinconia per qualcosa che è stato perso o che appartiene al passato." },
{ word: "nota", definition: "Scritto breve." },
{ word: "notizia", definition: "Informazione su un evento." },
{ word: "novembre", definition: "Undicesimo mese dell'anno." },
{ word: "novità", definition: "Qualcosa di nuovo." },
{ word: "nozze", definition: "Matrimonio." },
{ word: "nuotare", definition: "Muoversi nell'acqua facendo uso delle braccia e delle gambe." },
{ word: "nuoto", definition: "Attività sportiva che consiste nel nuotare." },
{ word: "nutrire", definition: "Fornire cibo." },
{ word: "nuvola", definition: "Massa di vapore acqueo." },
{ word: "nuziale", definition: "Relativo al matrimonio." },
{ word: "nastro", definition: "Striscia di materiale." },
{ word: "naso", definition: "Organo del corpo umano." },
{ word: "nave", definition: "Imbarcazione." },
{ word: "neonato", definition: "Bambino appena nato." },
{ word: "nero", definition: "Colore scuro." },
{ word: "neve", definition: "Precipitazione atmosferica." },
{ word: "nido", definition: "Struttura dove gli uccelli depongono le uova e crescono i piccoli." },
{ word: "niente", definition: "Nulla." },
{ word: "nobile", definition: "Di elevato rango sociale." },
{ word: "nocciola", definition: "Frutto della nocciuola." },
{ word: "noleggio", definition: "Azione di noleggiare qualcosa." },
{ word: "nome", definition: "Parola che identifica una persona, un animale o una cosa." },
{ word: "nonna", definition: "Madre del padre o della madre." },
{ word: "nonno", definition: "Padre del padre o della madre." },
{ word: "nord", definition: "Punto cardinale." },
{ word: "normale", definition: "Conforme alla norma." },
{ word: "nostalgia", definition: "Sentimento di malinconia per qualcosa che è stato perso o che appartiene al passato." },
{ word: "nota", definition: "Scritto breve." },
{ word: "notizia", definition: "Informazione su un evento." },
{ word: "novembre", definition: "Undicesimo mese dell'anno." },
{ word: "novità", definition: "Qualcosa di nuovo." },
{ word: "nozze", definition: "Matrimonio." },

{ word: "obiettivo", definition: "Scopo o meta da raggiungere." },
{ word: "obbligo", definition: "Imposizione di fare qualcosa." },
{ word: "obiettivo", definition: "Scopo da raggiungere." },
{ word: "oblio", definition: "Dimenticanza." },
{ word: "obsoleto", definition: "Non più in uso o superato." },
{ word: "occasione", definition: "Momento favorevole per fare qualcosa." },
{ word: "occhio", definition: "Organo della vista." },
{ word: "occorrenza", definition: "Evento che si verifica in determinate circostanze." },
{ word: "occupare", definition: "Prendere possesso di un luogo o di una posizione." },
{ word: "occupato", definition: "Impegnato in un'attività." },
{ word: "oculare", definition: "Relativo agli occhi." },
{ word: "oculista", definition: "Medico specializzato nella cura degli occhi." },
{ word: "odio", definition: "Sentimento di avversione profonda verso qualcuno o qualcosa." },
{ word: "offendere", definition: "Ledere l'onore o la dignità di qualcuno." },
{ word: "offeso", definition: "Che si è sentito ferito nell'onore o nell'autostima." },
{ word: "offerta", definition: "Proposta di vendita di un prodotto o di un servizio." },
{ word: "officina", definition: "Locale dove si svolgono lavori di riparazione o manutenzione." },
{ word: "offrire", definition: "Presentare qualcosa a qualcuno in modo che lo possa accettare o rifiutare." },
{ word: "oggetto", definition: "Qualcosa di materiale che può essere toccato e percepito." },
{ word: "oggi", definition: "Nella giornata attuale." },
{ word: "olio", definition: "Sostanza grassa ottenuta dalla spremitura di alcuni frutti." },
{ word: "ombrellaio", definition: "Chi fabbrica o vende ombrelli." },
{ word: "ombrello", definition: "Struttura utilizzata come protezione dalla pioggia." },
{ word: "onda", definition: "Moto che si propaga su una superficie." },
{ word: "ondata", definition: "Moto d'acqua che si propaga con forza e velocità." },
{ word: "onore", definition: "Sentimento di rispetto e ammirazione verso qualcuno per le sue virtù o meriti." },
{ word: "opera", definition: "Lavoro o creazione artistica." },
{ word: "operazione", definition: "Azione di compiere un'attività o un intervento." },
{ word: "operativo", definition: "Che è pronto all'uso o all'azione." },
{ word: "opinione", definition: "Parere o giudizio su qualcosa o qualcuno." },
{ word: "opportunità", definition: "Circostanza favorevole per fare qualcosa." },
{ word: "opposizione", definition: "Contrasto o resistenza." },
{ word: "opposto", definition: "Che si trova di fronte o è contrario a qualcosa." },
{ word: "opzione", definition: "Scelta tra diverse possibilità." },
{ word: "orbita", definition: "Traiettoria seguita da un corpo celeste intorno a un altro corpo più grande." },
{ word: "ordine", definition: "Disposizione razionale di elementi o di persone." },
{ word: "organico", definition: "Che riguarda l'organismo vivente." },
{ word: "organizzare", definition: "Pianificare e dirigere un'attività o un evento." },
{ word: "orientamento", definition: "Indicazione della direzione." },
{ word: "originale", definition: "Che è il primo nel suo genere." },
{ word: "osare", definition: "Avere il coraggio di fare qualcosa." },
{ word: "ospedale", definition: "Struttura sanitaria dove vengono curati e ricoverati i malati." },
{ word: "ospite", definition: "Persona ricevuta nella propria casa o in un luogo." },
{ word: "ottagono", definition: "Poligono con otto lati e otto angoli." },
{ word: "ottanta", definition: "Numero che segue il settantanove e precede l'ottantuno." },
{ word: "ottavo", definition: "Che si trova in ottava posizione." },
{ word: "ottimale", definition: "Migliore possibile." },
{ word: "ottobre", definition: "Decimo mese dell'anno." },

{ word: "pace", definition: "Assenza di conflitti o guerre." },
{ word: "padre", definition: "Genitore maschio." },
{ word: "padrone", definition: "Proprietario di qualcosa o di qualcuno." },
{ word: "pagare", definition: "Dare denaro in cambio di beni o servizi ricevuti." },
{ word: "pagina", definition: "Foglio di un libro, rivista o giornale." },
{ word: "palazzo", definition: "Grande edificio abitativo o sede istituzionale." },
{ word: "palla", definition: "Oggetto sferico utilizzato in vari sport o giochi." },
{ word: "palmo", definition: "Misura di lunghezza corrispondente alla lunghezza della mano." },
{ word: "pancia", definition: "Parte dell'addome." },
{ word: "pane", definition: "Alimento fatto con farina, acqua e lievito, cotto al forno." },
{ word: "papà", definition: "Forma colloquiale per 'padre'." },
{ word: "paradiso", definition: "Luogo immaginario di felicità e beatitudine." },
{ word: "parco", definition: "Area verde pubblica." },
{ word: "parete", definition: "Superficie verticale di un edificio." },
{ word: "parlare", definition: "Comunicare oralmente." },
{ word: "parte", definition: "Porzione o sezione di qualcosa." },
{ word: "partenza", definition: "Azione di partire da un luogo." },
{ word: "partire", definition: "Iniziare un viaggio o un'azione." },
{ word: "partita", definition: "Incontro sportivo tra due squadre." },
{ word: "partito", definition: "Gruppo politico." },
{ word: "parto", definition: "Azione di dare alla luce un bambino." },
{ word: "passare", definition: "Muoversi da un luogo all'altro." },
{ word: "pasta", definition: "Alimento preparato con farina e acqua, solitamente cotto in acqua bollente." },
{ word: "pastore", definition: "Persona che guida e cura il bestiame." },
{ word: "patata", definition: "Pianta erbacea tuberosa, il cui tubero viene consumato come alimento." },
{ word: "patente", definition: "Documento che attesta il diritto di guidare un veicolo." },
{ word: "paziente", definition: "Persona che riceve cure mediche." },
{ word: "pazienza", definition: "Capacità di sopportare le difficoltà o le avversità con calma." },
{ word: "peccato", definition: "Azione contraria alla morale o alla legge religiosa." },
{ word: "pepe", definition: "Spezia aromatica di colore nero o bianco." },
{ word: "perdere", definition: "Non riuscire a mantenere o a ottenere qualcosa." },
{ word: "perdita", definition: "Azione o conseguenza di perdere qualcosa." },
{ word: "pericolo", definition: "Situazione che può causare danni o rischi alla vita o alla salute." },
{ word: "perla", definition: "Gemma di forma sferica, generalmente prodotta dagli ostriche." },
{ word: "persona", definition: "Essere umano." },
{ word: "pesare", definition: "Misurare il peso di qualcosa." },
{ word: "pesce", definition: "Animale acquatico vertebrato." },
{ word: "piano", definition: "Superficie orizzontale su cui si cammina." },
{ word: "pianta", definition: "Organismo vegetale con radici, fusto e foglie." },
{ word: "pianto", definition: "Azione di versare lacrime." },
{ word: "piatto", definition: "Utensile piatto e poco profondo, usato per mangiare." },
{ word: "piccolo", definition: "Di dimensioni ridotte." },
{ word: "piede", definition: "Parte inferiore dell'arto inferiore umano." },
{ word: "pieno", definition: "Che contiene tutto quello che può contenere." },
{ word: "pietra", definition: "Materiale solido di origine minerale." },
{ word: "pigiama", definition: "Indumento da notte, solitamente composto da una maglietta e un pantalone." },
{ word: "pila", definition: "Dispositivo che converte l'energia chimica in energia elettrica." },
{ word: "pilota", definition: "Persona che guida un veicolo o un aeroplano." },
{ word: "pineta", definition: "Bosco di pini." },
{ word: "pino", definition: "Albero conifero della famiglia delle Pinaceae." },

{ word: "quaderno", definition: "Libro di carta bianca o quadretti per scrivere o disegnare." },
{ word: "quadrato", definition: "Figura geometrica con quattro lati uguali e quattro angoli retti." },

{ word: "raccolta", definition: "Atto di raccogliere o insieme di cose raccolte." },
{ word: "raccogliere", definition: "Prendere e mettere insieme cose sparse." },
{ word: "racconto", definition: "Narrazione di fatti reali o immaginari." },
{ word: "rada", definition: "Spazio di mare libero dagli scogli o dagli ostacoli." },
{ word: "radiazione", definition: "Emissione e propagazione di energia sotto forma di onde o particelle." },
{ word: "radio", definition: "Apparecchio elettroacustico per la ricezione delle trasmissioni radiofoniche." },
{ word: "radice", definition: "Parte di una pianta che si trova sotto il terreno." },
{ word: "ragazza", definition: "Femmina giovane." },
{ word: "ragazzo", definition: "Maschio giovane." },
{ word: "ragione", definition: "Facoltà mentale che permette di capire, valutare e giudicare." },
{ word: "ramo", definition: "Parte di un albero che cresce lateralmente dal tronco." },
{ word: "rana", definition: "Anfibio dotato di zampe posteriori molto sviluppate." },
{ word: "rapido", definition: "Che si muove con velocità." },
{ word: "rapporto", definition: "Relazione che lega due o più elementi." },
{ word: "rappresentare", definition: "Esprimere graficamente o oralmente qualcosa." },
{ word: "raro", definition: "Che si verifica di rado, poco comune." },
{ word: "rasoio", definition: "Strumento per rasarsi la barba o i peli." },
{ word: "ratto", definition: "Mammifero roditore di piccole dimensioni." },
{ word: "ravanello", definition: "Pianta erbacea coltivata per il suo rizoma commestibile." },
{ word: "reale", definition: "Che esiste realmente, non immaginario." },
{ word: "regalo", definition: "Cosa che si dona a qualcuno per dimostrargli affetto o stima." },
{ word: "reggere", definition: "Sorreggere o tenere in piedi qualcosa." },
{ word: "regina", definition: "Femmina sovrana di uno stato." },
{ word: "registro", definition: "Libro o schedario in cui si registrano dati o informazioni." },
{ word: "regno", definition: "Territorio governato da un sovrano." },
{ word: "relazione", definition: "Descrizione di un fatto o di un avvenimento." },
{ word: "religione", definition: "Insieme di credenze e pratiche legate al divino." },
{ word: "reparto", definition: "Sezione o reparto di un'azienda o di un ospedale." },
{ word: "replicare", definition: "Ripetere qualcosa che è stato detto o fatto." },
{ word: "repubblica", definition: "Forma di governo in cui il capo di stato è eletto dal popolo." },
{ word: "resistere", definition: "Contrastare un'azione o un'oppressione." },
{ word: "respirare", definition: "Assorbire aria attraverso i polmoni." },
{ word: "restare", definition: "Rimanere in un luogo o in una situazione." },
{ word: "rete", definition: "Struttura composta da fili intrecciati utilizzata per catturare o contenere qualcosa." },
{ word: "retta", definition: "Linea retta, segmento di retta." },
{ word: "rettangolo", definition: "Figura geometrica piana con quattro lati e quattro angoli retti." },
{ word: "ricchezza", definition: "Grande quantità di beni o denaro." },
{ word: "ricciolo", definition: "Piccola ciocca di capelli ricci." },
{ word: "ricevere", definition: "Ottenere qualcosa da qualcuno." },
{ word: "ricetta", definition: "Istruzioni scritte per preparare un piatto." },
{ word: "richiesta", definition: "Domanda o istanza rivolta a qualcuno per ottenere qualcosa." },
{ word: "ricordo", definition: "Ricordare qualcosa del passato." },
{ word: "ridere", definition: "Esprimere gioia facendo suoni con la bocca e il viso." },
{ word: "riempire", definition: "Occupare completamente uno spazio vuoto." },

{ word: "sabbia", definition: "Materiale granulare costituito da piccoli frammenti di roccia." },
{ word: "sacco", definition: "Contenitore di tessuto o materiale plastico, chiuso da un laccio, usato per contenere merci o materiali." },
{ word: "saggio", definition: "Persona che ha acquisito una grande conoscenza in un determinato campo." },
{ word: "sala", definition: "Ambiente di una casa o di un edificio adibito a un uso specifico." },
{ word: "salire", definition: "Muoversi verso l'alto, ascendere." },
{ word: "salotto", definition: "Stanze della casa arredate con divani e poltrone, adibite a ricevere ospiti o a conversare." },
{ word: "saltare", definition: "Sollevarsi da terra con un balzo." },
{ word: "salute", definition: "Stato di benessere fisico, psichico e sociale." },
{ word: "salvare", definition: "Mettere in salvo qualcuno o qualcosa da un pericolo." },
{ word: "sapore", definition: "Sensazione percepita dalla lingua di un cibo o di una bevanda." },
{ word: "sapere", definition: "Conoscere qualcosa attraverso lo studio o l'esperienza." },
{ word: "saraceno", definition: "Che è relativo ai Saraceni o alla loro cultura." },
{ word: "sarto", definition: "Persona che confeziona abiti su misura." },
{ word: "sbalzo", definition: "Operazione di cesellatura o scolpitura in rilievo." },
{ word: "scacchi", definition: "Gioco da tavolo che si svolge su una scacchiera." },
{ word: "scala", definition: "Struttura composta da gradini, utilizzata per salire o scendere da un piano all'altro." },
{ word: "scaldare", definition: "Aumentare la temperatura di qualcosa." },
{ word: "scambio", definition: "Atto di dare qualcosa in cambio di qualcos'altro." },
{ word: "scappare", definition: "Fuggire da una situazione o da un luogo." },
{ word: "scatola", definition: "Contenitore rigido utilizzato per riporre o trasportare oggetti." },
{ word: "scatto", definition: "Movimento rapido e improvviso." },
{ word: "scelta", definition: "Azione di scegliere tra due o più opzioni." },
{ word: "scherzo", definition: "Azione o battuta fatta per divertire." },
{ word: "schermo", definition: "Superficie piana su cui vengono proiettate immagini." },
{ word: "scienza", definition: "Insieme di conoscenze organizzate e sistematizzate su un determinato argomento." },
{ word: "scolare", definition: "Far defluire un liquido da un contenitore." },
{ word: "scolaro", definition: "Persona che frequenta la scuola." },
{ word: "sconto", definition: "Riduzione del prezzo di un prodotto o di un servizio." },
{ word: "scoprire", definition: "Portare alla luce qualcosa che era nascosto o ignoto." },
{ word: "scorrere", definition: "Muoversi in modo continuo e fluido." },
{ word: "scossa", definition: "Movimento brusco e improvviso." },
{ word: "scritto", definition: "Qualcosa che è stato trascritto o redatto per iscritto." },
{ word: "scrivere", definition: "Comporre testi o segni su una superficie." },
{ word: "scuola", definition: "Istituzione educativa dove si impartisce istruzione e formazione." },
{ word: "scusa", definition: "Parola o gesto con cui ci si scusa per un errore o un comportamento scorretto." },
{ word: "secolo", definition: "Periodo di cento anni." },
{ word: "secondo", definition: "Misura del tempo corrispondente a sessanta secondi." },
{ word: "segno", definition: "Indicazione visibile che rappresenta qualcosa." },
{ word: "seguire", definition: "Andare dietro a qualcuno o a qualcosa." },
{ word: "selezione", definition: "Atto di selezionare o scegliere tra diverse opzioni." },
{ word: "sellare", definition: "Mettere la sella su un cavallo." },
{ word: "selvaggio", definition: "Che vive allo stato naturale, senza essere stato addomesticato." },
{ word: "semaforo", definition: "Dispositivo stradale che regola il traffico veicolare." },
{ word: "sembianza", definition: "Aspetto esteriore di una persona o di una cosa." },
{ word: "seme", definition: "Parte di una pianta da cui nasce una nuova pianta." },
{ word: "senso", definition: "Facoltà di percepire ciò che accade intorno a sé attraverso i sensi." },
{ word: "sentiero", definition: "Strada stretta e generalmente non asfaltata, adatta al passaggio a piedi o in bicicletta." },
{ word: "sentire", definition: "Percepire i suoni o le sensazioni attraverso gli organi dei sensi." },
{ word: "separare", definition: "Dividere in parti distinte o separare due o più elementi." },
{ word: "sepolcro", definition: "Tomba monumentale o sotterranea." },
{ word: "sera", definition: "Parte finale della giornata, compresa tra il tramonto e la notte." },

{ word: "tabaccaio", definition: "Commerciante che vende tabacco e articoli correlati." },
{ word: "tacco", definition: "Parte inferiore di una scarpa, su cui poggia il tallone." },
{ word: "tacere", definition: "Non parlare, rimanere in silenzio." },
{ word: "taciturno", definition: "Che ha un carattere riservato e poco incline alla conversazione." },
{ word: "tacito", definition: "Che è sottinteso ma non esplicitato." },
{ word: "taglia", definition: "Dimensione o misura di qualcosa." },
{ word: "tagliare", definition: "Dividere qualcosa con un utensile affilato." },
{ word: "taglio", definition: "Azione di tagliare o lo spazio prodotto da tale azione." },
{ word: "talento", definition: "Abilità naturale o capacità particolarmente sviluppata in un campo." },
{ word: "talpa", definition: "Piccolo mammifero insettivoro, dal corpo cilindrico e ricoperto di pelo morbido." },
{ word: "tamburo", definition: "Strumento musicale a percussione, costituito da una membrana tesa su una cornice circolare." },
{ word: "tana", definition: "Rifugio sotterraneo di alcuni animali, come le volpi." },
{ word: "tanto", definition: "In grande quantità o grado." },
{ word: "tappo", definition: "Dispositivo utilizzato per chiudere ermeticamente una bottiglia o un contenitore." },
{ word: "tardi", definition: "In un momento successivo rispetto a quello atteso o convenzionale." },
{ word: "targa", definition: "Piatto metallico con iscrizioni, utilizzato per segnalare o identificare qualcosa." },
{ word: "tariffa", definition: "Prezzo fissato per un servizio o un bene." },
{ word: "tassa", definition: "Somma di denaro dovuta al governo o a un'autorità per finanziare servizi pubblici." },
{ word: "tastiera", definition: "Insieme di tasti di un computer o di un pianoforte." },
{ word: "tavola", definition: "Piano orizzontale, generalmente rettangolare, su cui si mangia o si lavora." },
{ word: "tavolo", definition: "Mobile composto da un piano sostenuto da gambe, utilizzato per mangiare o lavorare." },
{ word: "teatro", definition: "Luogo destinato alla rappresentazione di spettacoli teatrali." },
{ word: "tedesco", definition: "Che è relativo alla Germania o alla sua lingua." },
{ word: "tegola", definition: "Elemento di copertura per tetti, generalmente in ceramica o cemento." },
{ word: "telefono", definition: "Dispositivo elettronico utilizzato per trasmettere la voce a distanza." },
{ word: "tema", definition: "Composizione scritta che espone le proprie idee su un determinato argomento." },
{ word: "temere", definition: "Provare paura o timore nei confronti di qualcosa o qualcuno." },
{ word: "temperare", definition: "Modificare la durezza o la consistenza di qualcosa." },
{ word: "tempesta", definition: "Fenomeno atmosferico caratterizzato da forti venti, pioggia e, talvolta, fulmini." },
{ word: "tempo", definition: "Misura dell'intervallo tra due eventi o momenti." },
{ word: "tenere", definition: "Trattenere qualcosa con la mano o con un'altra parte del corpo." },
{ word: "tenuta", definition: "Proprietà rurale destinata alla coltivazione di terreni agricoli." },
{ word: "teoria", definition: "Insieme di principi e regole che spiegano un fenomeno o un insieme di fenomeni." },
{ word: "terme", definition: "Stabilimento balneare dotato di strutture per bagni e trattamenti." },
{ word: "terminare", definition: "Portare a conclusione qualcosa." },
{ word: "termine", definition: "Parola o espressione che indica un concetto o un concetto." },
{ word: "terno", definition: "Insieme di tre elementi." },
{ word: "terra", definition: "Pianeta abitabile su cui viviamo." },
{ word: "terribile", definition: "Che suscita terrore o timore intenso." },
{ word: "testa", definition: "Parte superiore del corpo umano, che contiene il cervello e gli organi sensoriali." },
{ word: "testamento", definition: "Atto con cui una persona dispone dei propri beni per dopo la morte." },
{ word: "testo", definition: "Parole scritte o stampate che compongono un libro o un documento." },
{ word: "tetto", definition: "Parte superiore di un edificio che lo copre e lo protegge dalle intemperie." },
{ word: "tiglio", definition: "Albero ornamentale dal tronco slanciato e dai fiori profumati." },
{ word: "timido", definition: "Che ha difficoltà a relazionarsi con gli altri o a esprimere se stesso." },
{ word: "timone", definition: "Dispositivo di controllo che regola la direzione di un'imbarcazione." },
{ word: "timore", definition: "Sentimento di paura o apprensione." },
{ word: "tintarella", definition: "Abbronzatura della pelle causata dall'esposizione al sole." },
{ word: "tinta", definition: "Colore ottenuto mescolando pigmenti o sostanze coloranti." },
{ word: "tiro", definition: "Azione di lanciare o sparare qualcosa." },
{ word: "titolo", definition: "Nome di un'opera, di un documento o di un libro." },

{ word: "ubriaco", definition: "Che ha ecceduto nell'assunzione di bevande alcoliche, in stato di ebbrezza." },
{ word: "uccello", definition: "Animale vertebrato a sangue caldo, dotato di piume e ali, che depone le uova." },
{ word: "udienza", definition: "Incontro formale tra una persona e un'autorità giudiziaria o governativa." },
{ word: "ufficiale", definition: "Persona che svolge funzioni autorizzate da una pubblica autorità." },
{ word: "ufficio", definition: "Locale o ambiente in cui si svolgono attività amministrative o professionali." },
{ word: "uguale", definition: "Che ha le stesse caratteristiche, quantità o qualità di qualcos'altro." },
{ word: "ultimo", definition: "Che si trova alla fine di un elenco o di un periodo di tempo." },
{ word: "umano", definition: "Che appartiene all'uomo, relativo all'essere umano." },
{ word: "umido", definition: "Che è caratterizzato dalla presenza di umidità, leggermente bagnato." },
{ word: "unico", definition: "Che è uno solo, che non ha pari o simili." },
{ word: "unità", definition: "Quantità considerata come singola entità o elemento indivisibile." },
{ word: "università", definition: "Istituzione di istruzione superiore che offre corsi di laurea e post-laurea." },
{ word: "usanza", definition: "Pratica o comportamento consolidato all'interno di una comunità o di una società." },
{ word: "usare", definition: "Utilizzare qualcosa per uno scopo particolare." },
{ word: "utente", definition: "Persona che fa uso di un servizio o di un'applicazione." },
{ word: "utilità", definition: "Beneficio o vantaggio che si trae dall'uso di qualcosa." },

{ word: "vagabondo", definition: "Persona che vive senza una dimora fissa, girovago." },
{ word: "vagare", definition: "Muoversi senza una meta precisa, girovagare." },
{ word: "valle", definition: "Depressione del terreno delimitata da due catene montuose." },
{ word: "valore", definition: "Importanza o significato attribuito a qualcosa." },
{ word: "vampiro", definition: "Creature leggendaria che, secondo le tradizioni, succhia il sangue delle persone durante la notte." },
{ word: "vangelo", definition: "Libro sacro del cristianesimo che narra la vita e gli insegnamenti di Gesù Cristo." },
{ word: "vano", definition: "Che non produce risultati o soddisfazioni." },
{ word: "vaso", definition: "Contenitore generalmente di forma cilindrica o ovale, utilizzato per contenere liquidi o solidi." },
{ word: "vegetale", definition: "Che riguarda le piante o è di origine vegetale." },
{ word: "vegetariano", definition: "Che segue una dieta che esclude carne e pesce." },
{ word: "veleno", definition: "Sostanza tossica o velenosa per gli esseri viventi." },
{ word: "veloce", definition: "Che si muove rapidamente, con grande velocità." },
{ word: "velo", definition: "Tessuto leggero e trasparente che si usa per coprire il volto o il capo." },
{ word: "vendere", definition: "Scambiare qualcosa con denaro, cederlo in cambio di soldi." },
{ word: "vendetta", definition: "Azione di infliggere danni o punizioni a qualcuno in risposta a un torto subito." },
{ word: "venditore", definition: "Persona che vende merci o servizi." },
{ word: "venire", definition: "Muoversi o essere portato in un luogo specifico." },
{ word: "vento", definition: "Aria in movimento, corrente atmosferica." },
{ word: "verità", definition: "Corrispondenza tra ciò che si dice e la realtà dei fatti." },
{ word: "verde", definition: "Colore che si trova tra il blu e il giallo, associato alla natura e alla freschezza." },

{ word: "wow", definition: "Interiezione usata per esprimere sorpresa, stupore o ammirazione." },

{ word: "xilofono", definition: "Strumento musicale formato da una serie di barre di legno disposte in ordine di grandezza e colpite con dei martelletti." },

{ word: "yacht", definition: "Imbarcazione da diporto, solitamente di grandi dimensioni e lussuosa." },

{ word: "zabaione", definition: "Dolce cremoso a base di uova, zucchero e vino, solitamente servito caldo." },
{ word: "zaffiro", definition: "Pietra preziosa di colore blu trasparente." },
{ word: "zaino", definition: "Sacca o borsa portata sulle spalle con due cinghie, utilizzata per trasportare oggetti." },
{ word: "zampogna", definition: "Strumento musicale a fiato composto da canne di bambù o legno, diffuso soprattutto in Italia." },
{ word: "zanna", definition: "Dente canino degli animali, spesso associato agli elefanti." },
{ word: "zanzara", definition: "Insetto volante che succhia il sangue degli animali, tra cui gli esseri umani, e può trasmettere malattie." },
{ word: "zattera", definition: "Imbarcazione rudimentale costituita da tronchi legati tra loro, utilizzata per attraversare fiumi o laghi." },
{ word: "zebra", definition: "Mammifero erbivoro caratterizzato da strisce bianche e nere." },
{ word: "zelo", definition: "Entusiasmo o impegno fervente nel perseguire un obiettivo o un'attività." },
{ word: "zelante", definition: "Che agisce con zelo, impegno o dedizione." },
{ word: "zenzero", definition: "Pianta erbacea il cui rizoma viene utilizzato come spezia, dall'aroma pungente e leggermente piccante." },
{ word: "zero", definition: "Numero che rappresenta l'assenza di quantità o valore, corrispondente al punto di partenza su una scala graduata." },
{ word: "zibellino", definition: "Mammifero carnivoro della famiglia dei Mustelidi, noto per il suo prezioso pelo." },
{ word: "zio", definition: "Fratello del padre o della madre di una persona." },
{ word: "zoccolo", definition: "Parte inferiore del piede umano, composta da osso, muscoli e tessuto connettivo." },
{ word: "zolla", definition: "Porzione di terreno compatta e di forma irregolare." },
{ word: "zona", definition: "Area delimitata o regione specifica di un territorio." },
{ word: "zucchero", definition: "Sostanza dolce e cristallina ottenuta dalla lavorazione della canna da zucchero o della barbabietola da zucchero." },
{ word: "zucchina", definition: "Varietà di zucca con forma allungata e di colore verde, utilizzata come verdura in cucina." },
{ word: "zuffa", definition: "Rissa o lite violenta tra più persone." },
{ word: "zuppa", definition: "Piatto a base di brodo o acqua in cui vengono cotti vari ingredienti come verdure, carne, pesce o pasta." },
{ word: "zurlo", definition: "Grido o urlo acuto emesso da alcuni animali o persone." },
{ word: "zuzzurellone", definition: "Persona pigra o indolente, che evita di lavorare o di impegnarsi." }
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


