const wordsAndDefinitions = [
{ word: "ABBAGLIARE", definition: "Produrre un'abbagliante luce, accecare temporaneamente con un forte bagliore." },
{ word: "ABBAGLIO", definition: "Fenomeno ottico che si verifica quando la luce si riflette su una superficie e raggiunge gli occhi in modo distorto." },
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
{ word: "ABORIGENO", definition: "Che è originario del luogo in cui vive." },
{ word: "ABORTO", definition: "Interruzione precoce della gravidanza, naturale o provocata." },
{ word: "ABROGARE", definition: "Cancellare o eliminare una legge, una norma o un diritto." },
{ word: "ABROGAZIONE", definition: "Atto con cui si abroga una legge o una norma giuridica." },
{ word: "ABRUZZESE", definition: "Che è originario o caratteristico dell'Abruzzo, regione italiana." },
{ word: "ABRUZZO", definition: "Regione italiana situata a sud-est di Roma." },
{ word: "ABSIDE", definition: "Parte absidale di una chiesa, solitamente semicircolare o poligonale." },
{ word: "ABSIDIOLE", definition: "Piccola absidiola, cappella posta generalmente a lato del coro principale di una chiesa." },

{ word: "BACIO", definition: "Contatto affettuoso tra le labbra." },
{ word: "BARCA", definition: "Imbarcazione adibita alla navigazione." },
{ word: "BAMBINO", definition: "Bambino o neonato." },
{ word: "BANCO", definition: "Mobile o tavolo lungo e stretto." },
{ word: "BARRIERA", definition: "Ostacolo fisico o mentale." },
{ word: "BAGNO", definition: "Stanza o ambiente con servizi igienici." },
{ word: "BAGAGLIO", definition: "Insieme dei beni portati con sé durante un viaggio." },
{ word: "BARISTA", definition: "Persona che lavora dietro al bancone di un bar." },
{ word: "BALLARE", definition: "Muoversi seguendo un ritmo musicale." },
{ word: "BATTERE", definition: "Colpire con forza." },
{ word: "BICCHIERE", definition: "Contenitore per bere." },
{ word: "BICICLETTA", definition: "Mezzo di trasporto a due ruote." },
{ word: "BIGLIETTO", definition: "Documento che dà diritto a un servizio o ingresso." },
{ word: "BIRRA", definition: "Bevanda alcolica ottenuta dalla fermentazione di malto e luppolo." },
{ word: "BISCOTTO", definition: "Dolce secco e friabile." },
{ word: "BISTECCA", definition: "Fetta di carne cotta alla griglia o al forno." },
{ word: "BORSA", definition: "Accessorio per trasportare oggetti." },
{ word: "BOTTEGA", definition: "Negozio di piccole dimensioni." },
{ word: "BRACCIO", definition: "Parte del corpo umano che va dalla spalla alla mano." },
{ word: "BRICIOLA", definition: "Piccolo frammento di pane o cibo." },
{ word: "BRUTTO", definition: "Di aspetto poco gradevole." },
{ word: "BUONO", definition: "Di qualità superiore." },
{ word: "BUIO", definition: "Assenza di luce." },
{ word: "BUCHE", definition: "Scavi nel terreno o asfalto." },
{ word: "BUONGIORNO", definition: "Saluto usato al mattino." },
{ word: "BIANCO", definition: "Colore privo di tonalità." },
{ word: "BISOGNO", definition: "Necessità impellente." },
{ word: "BOLLETTA", definition: "Documento di pagamento." },
{ word: "BORSELLO", definition: "Borsa piccola da uomo." },
{ word: "BATTAGLIA", definition: "Conflitto armato tra eserciti o gruppi." },
{ word: "BAMBÙ", definition: "Pianta tropicale ad alto fusto." },
{ word: "BEVANDA", definition: "Liquido da bere." },
{ word: "BENE", definition: "Stato di salute o prosperità." },
{ word: "BIANCHERIA", definition: "Indumenti intimi o da letto." },
{ word: "BISCIA", definition: "Serpente di piccole dimensioni." },
{ word: "BLOCCO", definition: "Insieme compatto di qualcosa." },
{ word: "BORDO", definition: "Margine o limite di qualcosa." },
{ word: "BRACCIALE", definition: "Accessorio indossato al polso." },
{ word: "BRUCIARE", definition: "Consumare con il fuoco." },

{ word: "CACAO", definition: "Seme di una pianta tropicale, usato per produrre cioccolato." },
{ word: "CAFFÈ", definition: "Bevanda ricavata dalla macinazione dei semi di caffè." },
{ word: "CALDO", definition: "Temperatura elevata." },
{ word: "CALENDARIO", definition: "Sistema per dividere il tempo in periodi." },
{ word: "CALMA", definition: "Assenza di movimento o turbamento." },
{ word: "CANE", definition: "Animale domestico da compagnia." },
{ word: "CAPPELLO", definition: "Indumento per coprire la testa." },
{ word: "CARNE", definition: "Tessuto muscolare degli animali, usato come alimento." },
{ word: "CASA", definition: "Edificio abitativo." },
{ word: "CASCAT", definition: "Caduta d'acqua naturale." },
{ word: "CAVOLO", definition: "Pianta ortaggio della famiglia delle Crucifere." },
{ word: "CAVALLI", definition: "Animali da lavoro o da sella." },
{ word: "CELLULARE", definition: "Dispositivo elettronico per comunicare a distanza." },
{ word: "CENTRALE", definition: "Che si trova al centro." },
{ word: "CERAMICA", definition: "Materiale ottenuto dalla cottura dell'argilla." },
{ word: "CETRIOLO", definition: "Pianta ortaggia della famiglia delle Cucurbitacee." },
{ word: "CHITARRA", definition: "Strumento musicale a corde." },
{ word: "CIELO", definition: "Spazio visibile sopra la Terra." },
{ word: "CIBO", definition: "Sostanza nutritiva assunta dagli organismi viventi." },
{ word: "CILIEGIA", definition: "Frutto della ciliegia." },
{ word: "CILINDRO", definition: "Forma geometrica tridimensionale." },
{ word: "CINTURA", definition: "Accessorio indossato attorno alla vita." },
{ word: "CIPOLLA", definition: "Pianta ortaggia della famiglia delle Liliacee." },
{ word: "CIPRESSO", definition: "Albero della famiglia delle Cupressacee." },
{ word: "CIRCO", definition: "Spettacolo di intrattenimento con acrobati e animali." },
{ word: "CITTÀ", definition: "Insediamento urbano di grandi dimensioni." },
{ word: "COCCINELLA", definition: "Insetto della famiglia dei Coccinellidi." },
{ word: "COLAZIONE", definition: "Pasto consumato al mattino." },
{ word: "COLLINA", definition: "Rilievo naturale di altezza media." },
{ word: "COLOMBA", definition: "Uccello della famiglia dei Columbidi." },
{ word: "COLORE", definition: "Proprietà visiva degli oggetti." },
{ word: "COMETA", definition: "Corpo celeste di forma luminosa e coda." },
{ word: "COMMERCIO", definition: "Scambio di beni e servizi tra individui o paesi." },
{ word: "COMPITO", definition: "Mansione o lavoro da svolgere." },
{ word: "COMPUTATORE", definition: "Dispositivo elettronico per l'elaborazione dati." },
{ word: "CONIGLIO", definition: "Mammifero roditore della famiglia dei Leporidi." },
{ word: "CONTADINO", definition: "Persona che lavora la terra." },
{ word: "CONVERSAZIONE", definition: "Scambio di parole tra due o più persone." },
{ word: "CORAGGIO", definition: "Virtù che spinge a affrontare le difficoltà." },
{ word: "CORRIDORE", definition: "Persona che corre." },
{ word: "CORSA", definition: "Azione di correre." },
{ word: "COSTELLAZIONE", definition: "Gruppo di stelle che formano una figura." },
{ word: "CREMA", definition: "Sostanza oleosa per la cura della pelle." },
{ word: "CRISI", definition: "Momento di difficoltà o instabilità." },
{ word: "CROCE", definition: "Simbolo religioso a forma di 't'." },
{ word: "CROSTATA", definition: "Dolce composto da pasta frolla e ripieno di marmellata." },
{ word: "CUCINA", definition: "Stanza o ambiente per preparare il cibo." },
{ word: "CUGINO", definition: "Figlio di uno zio o di una zia." },
{ word: "CULTURA", definition: "Conoscenze e tradizioni di un popolo." },

{ word: "DANZA", definition: "Attività artistica che consiste in movimenti ritmici del corpo." },
{ word: "DATA", definition: "Informazione relativa a un momento temporale specifico." },
{ word: "DECADIMENTO", definition: "Processo di deterioramento o degrado." },
{ word: "DECENNIO", definition: "Periodo di dieci anni." },
{ word: "DEDIZIONE", definition: "Atto di dedicarsi completamente a qualcosa." },
{ word: "DEFINIZIONE", definition: "Descrizione precisa e chiara di qualcosa." },
{ word: "DELEGATO", definition: "Persona incaricata di rappresentare altri." },
{ word: "DENTE", definition: "Elemento duro presente nella bocca per la masticazione." },
{ word: "DENTISTA", definition: "Professionista che si occupa della cura dei denti." },
{ word: "DEPILAZIONE", definition: "Rimozione dei peli dal corpo umano." },
{ word: "DERIVA", definition: "Movimento causato dalla corrente o dal vento." },
{ word: "DESCRIZIONE", definition: "Rappresentazione verbale o grafica di qualcosa." },
{ word: "DESERTO", definition: "Regioni terrestri caratterizzate da scarsa vegetazione e precipitazioni." },
{ word: "DESIDERIO", definition: "Sentimento di volere qualcosa." },
{ word: "DESTINAZIONE", definition: "Luogo verso il quale ci si dirige." },
{ word: "DETTAGLIO", definition: "Particolare di un insieme." },
{ word: "DIAGNOSI", definition: "Determinazione della natura di una malattia o di un problema." },
{ word: "DIAMANTE", definition: "Minerale di carbonio cristallizzato, usato come pietra preziosa." },
{ word: "DIARIO", definition: "Registro personale degli eventi giornalieri." },
{ word: "DIAVOLO", definition: "Figura demoniaca nella tradizione religiosa." },
{ word: "DICERIA", definition: "Rumore o voce che si diffonde senza fondamento." },
{ word: "DICOTOMIA", definition: "Divisione in due parti contrapposte." },
{ word: "DIFFERENZA", definition: "Disparità o distinzione tra due o più cose." },
{ word: "DIFFICOLTÀ", definition: "Problema o ostacolo che rende difficile un'azione." },
{ word: "DIGITALE", definition: "Relativo ai numeri o alle informazioni rappresentate in forma binaria." },
{ word: "DILEMMA", definition: "Scelta difficile tra due alternative." },
{ word: "DILUVIO", definition: "Grande quantità di pioggia caduta in poco tempo." },
{ word: "DINAMICA", definition: "Studio dei movimenti dei corpi e delle forze che li causano." },
{ word: "DIPENDENZA", definition: "Stato di necessità o assuefazione da una sostanza o da un comportamento." },
{ word: "DIREZIONE", definition: "Indicazione del cammino da seguire." },
{ word: "DIRIGENTE", definition: "Persona che ha autorità e responsabilità nella gestione di un'organizzazione." },
{ word: "DISAGIO", definition: "Sensazione di malessere o scomodità." },
{ word: "DISCIPLINA", definition: "Regole di comportamento volte a mantenere l'ordine e il rispetto." },
{ word: "DISEGNO", definition: "Rappresentazione grafica di oggetti o idee." },
{ word: "DISPOSITIVO", definition: "Strumento o apparecchio per svolgere una funzione specifica." },
{ word: "DISPREZZO", definition: "Sentimento di disistima o disprezzo verso qualcuno o qualcosa." },
{ word: "DISTORSIONE", definition: "Alterazione della forma o della verità." },
{ word: "DISTRIBUZIONE", definition: "Ripartizione di qualcosa tra più persone o luoghi." },
{ word: "DIVERTIMENTO", definition: "Attività piacevole che distrae e svaga." },
{ word: "DIVIDENDO", definition: "Parte degli utili di un'azienda distribuita agli azionisti." },
{ word: "DOCUMENTO", definition: "Supporto che contiene informazioni scritte o grafiche." },
{ word: "DOLCE", definition: "Cibo o bevanda zuccherata." },
{ word: "DOMANDA", definition: "Richiesta di informazioni o beni." },
{ word: "DOMENICA", definition: "Giorno della settimana." },
{ word: "DOMINIO", definition: "Autorità o controllo su qualcosa." },
{ word: "DONO", definition: "Regalo o donazione." },
{ word: "DORMIRE", definition: "Stare in uno stato di riposo durante il sonno." },
{ word: "DOTTORE", definition: "Professionista laureato in medicina." },

{ word: "EBBREZZA", definition: "Stato di euforia causato dall'assunzione di alcolici o droghe." },
{ word: "ECCELLENZA", definition: "Qualità di chi è eccellente, di chi si distingue per merito." },
{ word: "ECCENTRICO", definition: "Che si discosta dalla norma, che è stravagante." },
{ word: "ECCEZIONE", definition: "Caso particolare che si discosta dalla regola generale." },
{ word: "ECCEZIONALE", definition: "Fuori dal comune, straordinario." },
{ word: "ECESSIVO", definition: "Che supera il limite normale o opportuno." },
{ word: "ECESSO", definition: "Superamento del limite consentito o considerato normale." },
{ word: "ECCITANTE", definition: "Che suscita eccitazione o stimola l'interesse." },
{ word: "ECCITARE", definition: "Provocare uno stato di agitazione o eccitazione." },
{ word: "ECLISSI", definition: "Oscuramento temporaneo di un astro dovuto all'interposizione di un altro corpo celeste." },
{ word: "ECONOMIA", definition: "Scienza che studia la gestione delle risorse disponibili." },
{ word: "EDIFICIO", definition: "Costruzione destinata ad abitazione o ad altri usi." },
{ word: "EDUCAZIONE", definition: "Processo di insegnamento e apprendimento dei valori, delle norme e delle conoscenze." },
{ word: "EFFETTO", definition: "Risultato prodotto da una causa o da un'azione." },
{ word: "EFFICACE", definition: "Che produce l'effetto desiderato, che è efficace." },
{ word: "EFFICIENZA", definition: "Capacità di ottenere risultati con il minimo spreco di risorse." },
{ word: "EGOISMO", definition: "Tendenza a pensare solo al proprio interesse, senza curarsi degli altri." },
{ word: "EGOISTA", definition: "Chi agisce pensando solo al proprio interesse." },
{ word: "EGUAGLIANZA", definition: "Stato di uguaglianza tra individui o gruppi." },
{ word: "ELETTRICITÀ", definition: "Forma di energia prodotta dal movimento di cariche elettriche." },
{ word: "ELEVAZIONE", definition: "Aumento di quota, sollevamento." },
{ word: "ELISIR", definition: "Preparato magico o medicinale che si ritiene abbia poteri benefici o taumaturgici." },
{ word: "ELLISSE", definition: "Figura geometrica simile a una circonferenza ma allungata." },
{ word: "EMERGENZA", definition: "Situzione di pericolo o di crisi che richiede interventi immediati." },
{ word: "EMOZIONE", definition: "Stato affettivo di intensità variabile." },
{ word: "EMPATIA", definition: "Capacità di comprendere e condividere i sentimenti altrui." },
{ word: "EMERGERE", definition: "Venire alla luce, rivelarsi." },
{ word: "EMISSIONE", definition: "Atto di emettere, di mandare fuori qualcosa." },
{ word: "EMOTIVO", definition: "Relativo alle emozioni, che è suscettibile di essere influenzato dalle emozioni." },
{ word: "ENERGIA", definition: "Capacità di compiere un lavoro." },
{ word: "ENFASI", definition: "Accento particolare dato a una parola o a una frase per sottolinearne il significato." },
{ word: "ENTE", definition: "Organizzazione o istituzione con uno scopo specifico." },
{ word: "ENTUSIASMO", definition: "Stato di fervore e di eccitazione mentale." },
{ word: "EPIFANIA", definition: "Manifestazione improvvisa di una realtà o di una verità." },
{ word: "EPISODIO", definition: "Fatto o avvenimento isolato all'interno di una serie." },
{ word: "EPOCA", definition: "Periodo storico o momento preciso nel tempo." },
{ word: "EQUILIBRIO", definition: "Stato di stabilità e armonia tra forze contrapposte." },
{ word: "EQUIPAGGIAMENTO", definition: "Insieme di attrezzature necessarie per svolgere una certa attività." },
{ word: "EQUIVALENTE", definition: "Che ha lo stesso valore o la stessa importanza di qualcos'altro." },
{ word: "ERRORE", definition: "Mancanza di precisione o esattezza." },
{ word: "ESAGERARE", definition: "Rendere eccessivo qualcosa, amplificarlo oltre misura." },
{ word: "ESAME", definition: "Valutazione delle conoscenze o delle capacità di una persona." },
{ word: "ESAURIMENTO", definition: "Consumazione totale o diminuzione delle riserve di qualcosa." },
{ word: "ESEMPIO", definition: "Caso o situazione che può essere usato per illustrare un concetto o un'idea." },
{ word: "ESERCIZIO", definition: "Attività fisica o mentale svolta per acquisire o mantenere una certa capacità." },
{ word: "ESIBIZIONE", definition: "Atto di mostrare pubblicamente le proprie capacità o abilità." },
{ word: "ESIGENZA", definition: "Necessità o bisogno impellente di qualcosa." },

{ word: "FABBRICA", definition: "Stabilimento industriale dove vengono prodotti beni o merci." },
{ word: "FABBRO", definition: "Artigiano specializzato nella lavorazione del ferro." },
{ word: "FACCENDA", definition: "Compito o incombenza da svolgere." },
{ word: "FACCIA", definition: "Parte anteriore del volto umano." },
{ word: "FACILE", definition: "Che si compie con facilità, senza difficoltà." },
{ word: "FACILITÀ", definition: "Condizione di semplicità o di agevolezza nell'esecuzione di un'azione." },
{ word: "FALCATA", definition: "Passo dell'animale consistente nell'avanzare contemporaneamente di entrambe le zampe dello stesso lato." },
{ word: "FALCO", definition: "Uccello rapace di medie e grandi dimensioni, dotato di artigli potenti." },
{ word: "FAME", definition: "Sensazione di desiderio e bisogno di cibo." },
{ word: "FAMIGLIA", definition: "Gruppo di persone unite da legami di parentela o affettivi." },
{ word: "FANALE", definition: "Dispositivo luminoso utilizzato per illuminare o segnalare." },
{ word: "FANGO", definition: "Miscela di terra e acqua, solitamente fangosa e viscida." },
{ word: "FANTASIA", definition: "Capacità di immaginare o creare situazioni, personaggi o eventi." },
{ word: "FANTASMA", definition: "Presunta apparizione di una persona morta." },
{ word: "FARFALLA", definition: "Insetto dal corpo coperto di scaglie e dotato di ali, che si nutre di nettare." },
{ word: "FARMACIA", definition: "Locale dove vengono venduti farmaci e prodotti sanitari." },
{ word: "FASCIA", definition: "Benda o striscia di tessuto avvolta intorno a una parte del corpo per scopi terapeutici o protettivi." },
{ word: "FASCINO", definition: "Attrattiva o seduzione esercitata su qualcuno." },
{ word: "FASTIDIO", definition: "Sensazione di disagio o irritazione causata da qualcosa o qualcuno." },
{ word: "FAVOLA", definition: "Racconto breve di ambientazione fantastica, spesso con insegnamenti morali." },
{ word: "FAZIONE", definition: "Gruppo di persone che condividono idee, interessi o obiettivi comuni." },
{ word: "FEDE", definition: "Credenza religiosa o convinta adesione a un principio o a un'ideologia." },
{ word: "FECONDITÀ", definition: "Capacità di produrre una quantità elevata di figli o di frutti." },
{ word: "FELICITÀ", definition: "Stato di gioia e soddisfazione interiore." },
{ word: "FERITA", definition: "Lesione della pelle o dei tessuti sottostanti causata da un trauma." },
{ word: "FERMARE", definition: "Bloccare o impedire il movimento di qualcosa o qualcuno." },
{ word: "FEROCE", definition: "Che manifesta grande aggressività o ferocia." },
{ word: "FERRO", definition: "Metallo di colore grigio-argenteo, duttile e malleabile." },
{ word: "FERTILIZZARE", definition: "Arricchire il terreno con sostanze nutritive per favorire la crescita delle piante." },
{ word: "FERTILITÀ", definition: "Capacità di un terreno di produrre piante in abbondanza." },
{ word: "FERVORE", definition: "Intensità di un sentimento o di un'emozione." },
{ word: "FESTIVITÀ", definition: "Giorni o periodi dedicati alla celebrazione di eventi religiosi o civili." },
{ word: "FIDUCIA", definition: "Convinzione della verità o affidabilità di qualcosa o qualcuno." },
{ word: "FIGURA", definition: "Rappresentazione grafica di una forma." },
{ word: "FIGLIO", definition: "Persona nata dal rapporto genitoriale." },
{ word: "FILA", definition: "Successione ordinata di persone o cose." },
{ word: "FILO", definition: "Sottile corda o filamento." },
{ word: "FILTRO", definition: "Dispositivo per separare o eliminare particelle indesiderate da un liquido o da un gas." },
{ word: "FINANZA", definition: "Attività di gestione e controllo dei fondi e degli investimenti." },
{ word: "FINE", definition: "Termine o scopo di un'azione o di un processo." },
{ word: "FINESTRA", definition: "Apertura nel muro di un edificio, chiusa da vetri o altri materiali trasparenti." },
{ word: "FINIRE", definition: "Giungere al termine di un'azione o di un processo." },
{ word: "FIORE", definition: "Organo riproduttivo delle piante angiosperme." },
{ word: "FISCALE", definition: "Relativo alle imposte o alla fiscalità." },
{ word: "FISICO", definition: "Relativo al corpo o alle sue caratteristiche." },
{ word: "FISIOTERAPIA", definition: "Trattamento terapeutico basato sull'esercizio fisico e sulle manipolazioni." },
{ word: "FIUME", definition: "Corso d'acqua naturale che scorre lungo un letto." },
{ word: "FOGLIA", definition: "Organo delle piante, generalmente piatto e verde, deputato alla fotosintesi." },


{ word: "GABBIA", definition: "Recinto di metallo o legno utilizzato per contenere animali." },
{ word: "GAGLIARDO", definition: "Che è forte, vigoroso e coraggioso." },
{ word: "GALASSIA", definition: "Sistema astronomico costituito da un insieme di stelle, nebulose, gas e polveri." },
{ word: "GALLERIA", definition: "Passaggio sotterraneo o coperto, generalmente lungo e stretto." },
{ word: "GALLO", definition: "Uccello domestico maschio della specie Gallus gallus." },
{ word: "GAMBA", definition: "Parte del corpo umano che va dalla coscia al piede." },
{ word: "GAMBO", definition: "Parte sottile e lunga di alcune piante che sostiene foglie, fiori o frutti." },
{ word: "GANCCIO", definition: "Attrezzo metallico a forma di uncino, utilizzato per appendere o trattenere qualcosa." },
{ word: "GARANZIA", definition: "Promessa di riparazione o sostituzione di un bene nel caso in cui si verifichi un difetto." },
{ word: "GARA", definition: "Concorso o competizione tra persone o gruppi." },
{ word: "GARDA", definition: "Parola utilizzata in alcune espressioni idiomatiche." },
{ word: "GAREGGIARE", definition: "Partecipare a una gara sportiva o competitiva." },
{ word: "GARGARISMO", definition: "Procedura terapeutica che consiste nel risciacquo della bocca e della gola con liquidi." },
{ word: "GAS", definition: "Stato della materia caratterizzato da bassa densità e scarsa coesione molecolare." },
{ word: "GATTO", definition: "Mammifero carnivoro della famiglia dei felini, domestico o selvatico." },
{ word: "GAUDIO", definition: "Gioia intensa e profonda." },
{ word: "GAZZETTA", definition: "Periodico di informazione, solitamente di piccolo formato." },
{ word: "GELATO", definition: "Dolce cremoso ottenuto dalla congelazione di latte, zucchero e altri ingredienti." },
{ word: "GELO", definition: "Congelamento dell'acqua o di altri liquidi." },
{ word: "GELOSIA", definition: "Sentimento di inquietudine causato dalla paura di perdere l'affetto o l'attenzione di qualcuno." },
{ word: "GEMMA", definition: "Germoglio di una pianta, generalmente protetto da una capsula o da una buccia." },
{ word: "GENERALE", definition: "Che riguarda o interessa tutti gli elementi di un insieme." },
{ word: "GENERARE", definition: "Produrre, dare origine a qualcosa." },
{ word: "GENIO", definition: "Persona dotata di straordinaria intelligenza o creatività." },
{ word: "GENITORE", definition: "Persona che ha generato un figlio." },
{ word: "GENOA", definition: "Tipo di velatura utilizzata nelle imbarcazioni a vela." },
{ word: "GENTILE", definition: "Che si comporta con cortesia, educazione e rispetto verso gli altri." },
{ word: "GEOLOGIA", definition: "Scienza che studia la composizione, la struttura e l'evoluzione della Terra." },
{ word: "GESTIONE", definition: "Attività di organizzazione e controllo di risorse e processi." },
{ word: "GESTO", definition: "Azione compiuta con il corpo per esprimere un'idea, un sentimento o un'intenzione." },
{ word: "GETTARE", definition: "Lanciare o lanciarsi in avanti con vigore." },
{ word: "GHEPARDO", definition: "Mammifero carnivoro della famiglia dei felini, noto per la sua velocità." },
{ word: "GHIACCIO", definition: "Acqua congelata in forma solida." },
{ word: "GHIAIA", definition: "Piccoli sassi o pietre di dimensioni variabili." },
{ word: "GIALLO", definition: "Colore che si trova tra il verde e l'arancione nello spettro visibile." },
{ word: "GIARDINO", definition: "Area verde attrezzata per il relax e la coltivazione di piante ornamentali." },
{ word: "GIÀ", definition: "Indica tempo passato o presenza di qualcosa in un periodo precedente." },
{ word: "GIGANTE", definition: "Persona o essere di straordinarie dimensioni." },
{ word: "GIOIA", definition: "Stato di felicità e soddisfazione interiore." },
{ word: "GIOIELLO", definition: "Oggetto prezioso di valore ornamentale, come anelli, collane o orecchini." },
{ word: "GIORNALE", definition: "Periodico che pubblica notizie e informazioni su eventi di attualità." },
{ word: "GIORNO", definition: "Periodo di tempo che va dall'alba al tramonto." },
{ word: "GIROVITA", definition: "Circonferenza della parte più stretta del tronco umano." },
{ word: "GIOVANE", definition: "Persona nella fase della vita che precede l'età adulta." },
{ word: "GIOVINEZZA", definition: "Periodo della vita che precede l'età adulta, caratterizzato da vitalità e crescita fisica." },

{ word: "HABITAT", definition: "Ambiente naturale in cui vive una determinata specie animale o vegetale." },
{ word: "HAMBURGER", definition: "Piatto composto da carne tritata cotta alla griglia e servita tra due fette di pane." },
{ word: "HAMMAM", definition: "Bagno turco, luogo di purificazione e relax diffuso in molti paesi musulmani." },
{ word: "HANDICAP", definition: "Condizione di svantaggio che rende difficile per una persona eseguire determinate attività." },
{ word: "HARD DISK", definition: "Dispositivo di memorizzazione dati magnetico utilizzato nei computer." },
{ word: "HARDWARE", definition: "Componenti fisici di un sistema informatico, come processori, schede madri e dispositivi di archiviazione." },
{ word: "HASHTAG", definition: "Parola o frase preceduta dal simbolo #, utilizzata nei social media per identificare argomenti o temi specifici." },
{ word: "HOBBY", definition: "Attività praticata per piacere o interesse personale, non necessariamente a fini professionali." },
{ word: "HOLDING", definition: "Azienda o gruppo di aziende che detiene partecipazioni in altre società." },
{ word: "HOTEL", definition: "Struttura ricettiva che offre alloggio temporaneo, servizi e comfort ai viaggiatori." },
{ word: "HTML", definition: "Linguaggio di markup utilizzato per la creazione di pagine web." },
{ word: "HUB", definition: "Dispositivo di rete utilizzato per collegare più dispositivi in una rete locale." },
{ word: "HULA HOOP", definition: "Gioco che consiste nel far ruotare un cerchio intorno alla vita." },
{ word: "HURRICANE", definition: "Tempesta tropicale caratterizzata da forti venti e intense precipitazioni." },
{ word: "HUSKY", definition: "Razza di cane di taglia media con pelo folto e spesso originaria delle regioni artiche." },
{ word: "HYGGE", definition: "Concetto danese legato al benessere e al comfort, spesso associato a momenti di intimità e convivialità." },

{ word: "IDEA", definition: "Pensiero o concetto che nasce nella mente di una persona." },
{ word: "IDENTITÀ", definition: "Insieme di caratteristiche peculiari che distinguono una persona o una cosa da altre." },
{ word: "IDENTIFICARE", definition: "Riconoscere o determinare l'identità di qualcuno o qualcosa." },
{ word: "IDEOLOGIA", definition: "Insieme di idee, credenze e valori che costituiscono il fondamento di un sistema politico, sociale o culturale." },
{ word: "IDEOLOGICO", definition: "Relativo all'ideologia, ai suoi principi e valori." },
{ word: "IDILLIACO", definition: "Che è caratterizzato da un'atmosfera serena e romantica, tipica degli idilli." },
{ word: "IDONEITÀ", definition: "Qualità di ciò che è idoneo, adatto o appropriato per uno scopo specifico." },
{ word: "IDONEO", definition: "Che ha le qualità adatte o necessarie per svolgere una determinata funzione o per ottenere un determinato risultato." },
{ word: "IDROCARBURO", definition: "Composto chimico costituito da carbonio e idrogeno." },
{ word: "IDROGENO", definition: "Elemento chimico di simbolo H e numero atomico 1, il più leggero e abbondante nell'universo." },
{ word: "IGIENE", definition: "Insieme di pratiche e comportamenti finalizzati alla prevenzione delle malattie e al mantenimento della salute." },
{ word: "IGNORARE", definition: "Non sapere o non essere a conoscenza di qualcosa." },
{ word: "IGNORANZA", definition: "Mancanza di conoscenza o informazioni su un determinato argomento." },
{ word: "IGNOTO", definition: "Che non è conosciuto, di cui non si ha conoscenza." },
{ word: "ILARE", definition: "Allegro, gioioso, euforico." },
{ word: "ILLECITO", definition: "Che è contrario alla legge, vietato, non lecito." },
{ word: "ILLEGALE", definition: "Contrario alla legge, non permesso dalla normativa in vigore." },
{ word: "ILLUDERE", definition: "Ingannare qualcuno facendogli credere qualcosa di falso o irrealizzabile." },
{ word: "ILLUSIONE", definition: "Percezione o concezione distorta della realtà, basata su false credenze o aspettative." },
{ word: "ILLUSTRARE", definition: "Rappresentare graficamente qualcosa o spiegare dettagliatamente un concetto o un argomento." },
{ word: "IMMAGINARE", definition: "Formare un'immagine mentale di qualcosa o qualcuno che non è presente o reale." },
{ word: "IMMAGINARIO", definition: "Che esiste solo nell'immaginazione o nella fantasia." },
{ word: "IMMAGINE", definition: "Rappresentazione visiva di qualcosa o qualcuno, sia reale che immaginario." },
{ word: "IMMEDIATO", definition: "Che avviene subito, senza ritardo." },
{ word: "IMMENSO", definition: "Di dimensioni estremamente grandi, enorme." },
{ word: "IMMIGRATO", definition: "Persona che si trasferisce in un paese straniero per stabilirsi definitivamente." },
{ word: "IMMIGRAZIONE", definition: "Movimento di persone che si trasferiscono da un paese straniero per stabilirsi definitivamente in un altro." },
{ word: "IMMISSIONE", definition: "Atto o effetto di introdurre qualcosa in un determinato contesto o ambiente." },
{ word: "IMMONDIZIA", definition: "Rifiuto solido o liquido di origine domestica, industriale o commerciale." },
{ word: "IMMORALE", definition: "Contrario ai principi morali, alla decenza o alla virtù." },
{ word: "IMMORTALE", definition: "Che non può morire, che è eterno." },
{ word: "IMMOTIVATO", definition: "Che non ha una ragione o una spiegazione logica." },
{ word: "IMMUNITÀ", definition: "Stato di resistenza o di protezione da una malattia o da un agente patogeno." },
{ word: "IMPACCIATO", definition: "Che si comporta in modo goffo o maldestro, privo di agilità o destrezza." },
{ word: "IMPARARE", definition: "Acquisire conoscenze, competenze o abilità attraverso lo studio, l'esperienza o l'osservazione." },
{ word: "IMPARZIALE", definition: "Che agisce o giudica senza favoritismi o pregiudizi." },
{ word: "IMPASTARE", definition: "Lavorare un impasto di farina e acqua per ottenere una consistenza omogenea." },
{ word: "IMPASTO", definition: "Materia ottenuta mescolando farina e acqua, utilizzata come base per preparare pane, pizza e altri prodotti da forno." },
{ word: "IMPATTO", definition: "Forza esercitata da un corpo contro un altro quando entrano in contatto." },
{ word: "IMPERATIVO", definition: "Che è assolutamente necessario o indispensabile." },
{ word: "IMPERATORE", definition: "Capo supremo di un impero, titolo di chi governa un vasto territorio." },
{ word: "IMPERIALE", definition: "Relativo all'impero o all'imperatore." },
{ word: "IMPERMEABILE", definition: "Che non lascia passare l'acqua o altri liquidi." },
{ word: "IMPETO", definition: "Slancio irruento e impetuoso." },

{ word: "JABOT", definition: "Parola di origine francese che indica una ruches a pieghe, posta in genere sotto il colletto di una camicia." },
{ word: "JAZZ", definition: "Genere musicale nato negli Stati Uniti agli inizi del XX secolo, caratterizzato da ritmi syncopati e improvvisazioni." },
{ word: "JEANS", definition: "Pantaloni di tela di cotone, solitamente di colore blu, con cuciture rinforzate, nati come indumento da lavoro ma diventati popolari anche come abbigliamento casual." },
{ word: "JINGLE", definition: "Breve melodia o suono distintivo utilizzato in pubblicità, trasmissioni radiofoniche o televisive per scopi promozionali o identificativi." },
{ word: "JOURNAL", definition: "Termine di origine francese che indica una pubblicazione periodica, come un giornale o una rivista." },
{ word: "JUDO", definition: "Arte marziale di origine giapponese, basata su tecniche di proiezione e controllo dell'avversario." },
{ word: "JUKEBOX", definition: "Macchina automatica che riproduce musica mediante l'inserimento di monete, comunemente presente nei bar o nei locali pubblici." },
{ word: "JUTA", definition: "Fibra tessile di origine vegetale, ottenuta dalla pianta della juta, utilizzata per la produzione di sacchi, tappeti e altri manufatti." },
{ word: "JAZZISTA", definition: "Musicista che suona o si dedica al genere musicale jazz." },
{ word: "JUVENTINO", definition: "Sostenitore o tifoso della squadra di calcio Juventus." },

{ word: "KAYAK", definition: "Imbarcazione a remi, generalmente utilizzata per praticare sport acquatici." },
{ word: "KAISER", definition: "Titolo di imperatore in lingua tedesca." },
{ word: "KAKI", definition: "Frutto dall'aspetto simile al pomodoro, dal sapore dolce e polposo." },
{ word: "KANGAROO", definition: "Mammifero marsupiale originario dell'Australia, caratterizzato da grandi zampe posteriori adatte al salto." },
{ word: "KARAOKE", definition: "Attività di intrattenimento in cui una persona canta su una base musicale preregistrata." },
{ word: "KARMA", definition: "Concetto religioso e filosofico dell'induismo e del buddhismo, relativo alle azioni e alle conseguenze." },
{ word: "KEBAB", definition: "Piatto culinario composto da carne (solitamente di agnello) arrostita su uno spiedo verticale." },
{ word: "KENIANO", definition: "Che è originario del Kenya, paese dell'Africa orientale." },
{ word: "KETCHUP", definition: "Salsa di pomodoro condita con aceto, zucchero, sale e spezie." },
{ word: "KETTLEBELL", definition: "Attrezzo utilizzato nel fitness, simile a una palla di ferro con un manico, per esercizi di sollevamento pesi." },
{ word: "KHAN", definition: "Titolo di sovrani e capi tribali in Asia centrale e orientale." },
{ word: "KHMER", definition: "Popolo del sudest asiatico, e relativo al loro idioma e cultura." },
{ word: "KICKBOXING", definition: "Sport da combattimento che combina tecniche di pugilato e calci, praticato su un ring." },
{ word: "KILLER", definition: "Persona che uccide qualcuno, generalmente con premeditazione o in modo deliberato." },
{ word: "KIMONO", definition: "Indumento tradizionale giapponese, composto da una lunga veste avvolgente e da un obi, cintura." },
{ word: "KINETOTERAPIA", definition: "Terapia che utilizza il movimento e l'esercizio fisico per recuperare la funzionalità motoria." },
{ word: "KITE", definition: "Aquiloni adatti al volo, utilizzati come giocattoli o in competizioni sportive." },
{ word: "KITESURF", definition: "Sport acquatico che combina elementi del surf e del parapendio, utilizzando una tavola e un aquilone." },
{ word: "KNIGHT", definition: "Titolo nobiliare inglese, corrispondente al cavaliere." },
{ word: "KUMQUAT", definition: "Frutto simile all'arancio, di piccole dimensioni, con buccia edibile e sapore agrodolce." },
{ word: "KUNG FU", definition: "Arte marziale cinese, caratterizzata da movimenti fluidi e rapidi." },
{ word: "KURTA", definition: "Indumento tradizionale indiano, una sorta di tunica lunga indossata sopra i pantaloni." },
{ word: "KVAS", definition: "Bevanda tradizionale russa a base di pane di segale fermentato." },
{ word: "KYUDO", definition: "Arte marziale giapponese che consiste nel tiro con l'arco." },
{ word: "KARST", definition: "Fenomeno geologico caratterizzato da terreni calcarei solubili, spesso associati a grotte e doline." },
{ word: "KIT", definition: "Insieme di strumenti o materiali necessari per svolgere un'attività specifica." },
{ word: "KOALA", definition: "Mammifero marsupiale arboricolo originario dell'Australia, noto per la sua lentezza e il suo aspetto simpatico." },
{ word: "KOMBUCHA", definition: "Bevanda fermentata ottenuta da tè dolcificato e colonie di batteri e lieviti." },
{ word: "KOSHER", definition: "Termine ebraico che indica il rispetto delle leggi religiose ebraiche riguardo alla preparazione e al consumo di cibo." },
{ word: "KARATÈ", definition: "Arte marziale originaria dell'isola di Okinawa, caratterizzata da tecniche di combattimento con colpi di pugno e calcio." },
{ word: "KARSTICO", definition: "Che è relativo al fenomeno geologico del karst." },
{ word: "KENDO", definition: "Arte marziale giapponese che prevede l'uso di spade di bambù (shinai) e armatura protettiva." },
{ word: "KARMA", definition: "Concetto religioso e filosofico dell'induismo e del buddhismo, relativo alle azioni e alle conseguenze." },
{ word: "KHAKI", definition: "Colore simile al beige, spesso utilizzato per uniformi militari e abbigliamento casual." },
{ word: "KILO", definition: "Unità di misura del Sistema Internazionale (SI) equivalente a mille." },
{ word: "KIP", definition: "Valuta ufficiale del Laos." },
{ word: "KIWI", definition: "Frutto dalla polpa verde e dolce, originario della Nuova Zelanda." },
{ word: "KNOT", definition: "Unità di misura della velocità dei venti, corrispondente a un miglio nautico all'ora." },
{ word: "KOAN", definition: "Enigma o paradossale aforisma utilizzato come oggetto di meditazione nel buddhismo Zen." },
{ word: "KERMESSE", definition: "Manifestazione o festa popolare caratterizzata da giochi, spettacoli e divertimenti." },
{ word: "KETTLEBELL", definition: "Attrezzo utilizzato nel fitness, simile a una palla di ferro con un manico, per esercizi di sollevamento pesi." },
{ word: "KARAOKE", definition: "Attività di intrattenimento in cui una persona canta su una base musicale preregistrata." },
{ word: "KICKBOXING", definition: "Sport da combattimento che combina tecniche di pugilato e calci, praticato su un ring." },
{ word: "KAKI", definition: "Frutto dall'aspetto simile al pomodoro, dal sapore dolce e polposo." },
{ word: "KAISER", definition: "Titolo di imperatore in lingua tedesca." },
{ word: "KAYAK", definition: "Imbarcazione a remi, generalmente utilizzata per praticare sport acquatici." },

{ word: "LABIRINTO", definition: "Intricato percorso di vie e passaggi." },
{ word: "LABORATORIO", definition: "Ambiente attrezzato per la ricerca o la sperimentazione." },
{ word: "LACRIMA", definition: "Goccia di liquido prodotta dagli occhi." },
{ word: "LADRO", definition: "Persona che commette furti o rapine." },
{ word: "LAGO", definition: "Specchio d'acqua circondato da terraferma." },
{ word: "LAMPADA", definition: "Dispositivo per illuminare un ambiente." },
{ word: "LANTERNA", definition: "Dispositivo di illuminazione portatile." },
{ word: "LAVORO", definition: "Attività svolta per ottenere un compenso." },
{ word: "LEGGENDA", definition: "Narrazione popolare di eventi o figure storiche." },
{ word: "LENTE", definition: "Strumento ottico per concentrare o deviare la luce." },
{ word: "LENZA", definition: "Filo utilizzato per la pesca." },
{ word: "LEONE", definition: "Grande felino dalla criniera." },
{ word: "LEPRE", definition: "Mammifero erbivoro di piccola taglia." },
{ word: "LETTERA", definition: "Messaggio scritto da trasmettere a qualcuno." },
{ word: "LIBERTÀ", definition: "Stato di essere libero." },
{ word: "LIBRERIA", definition: "Negozio o scaffale con libri in vendita." },
{ word: "LIBRO", definition: "Opera stampata o manoscritta." },
{ word: "LICEO", definition: "Scuola superiore." },
{ word: "LIMITE", definition: "Confine o soglia massima o minima." },
{ word: "LIMONE", definition: "Frutto giallo dalla polpa acida." },
{ word: "LINEA", definition: "Successione continua di punti nello spazio." },
{ word: "LINGUA", definition: "Organo del gusto e dell'articolo." },
{ word: "LIRA", definition: "Valuta italiana." },
{ word: "LIQUIDO", definition: "Materia che assume la forma del recipiente che la contiene." },
{ word: "LIRICA", definition: "Forma di espressione artistica." },
{ word: "LITRO", definition: "Unità di misura del volume." },
{ word: "LODE", definition: "Elogio o encomio." },
{ word: "LOGICA", definition: "Ramo della filosofia che studia il ragionamento." },
{ word: "LOMBARE", definition: "Relativo alla regione bassa della schiena." },
{ word: "LONTANO", definition: "Distanziato nel tempo o nello spazio." },
{ word: "LORO", definition: "Pronome personale di terza persona plurale." },
{ word: "LOTTA", definition: "Combattimento o scontro." },
{ word: "LUCE", definition: "Agente fisico che rende visibili gli oggetti." },
{ word: "LUCIDO", definition: "Brillante e pulito." },
{ word: "LUCCHETTO", definition: "Dispositivo per chiudere e aprire porte o casseforti." },
{ word: "LUNARE", definition: "Relativo alla luna." },
{ word: "LUNGO", definition: "Esteso in direzione orizzontale." },
{ word: "LUPO", definition: "Animale carnivoro della famiglia dei canidi." },
{ word: "LUSSO", definition: "Eccesso di lusso o sfarzo." },
{ word: "LUTTO", definition: "Espressione di dolore per la morte di una persona." },
{ word: "LUTTO", definition: "Periodo di tempo in cui si manifesta il dolore per la perdita di una persona cara." },
{ word: "LUCE", definition: "Agente fisico che rende visibili gli oggetti." },
{ word: "LUCIDO", definition: "Brillante e pulito." },
{ word: "LUCCHETTO", definition: "Dispositivo per chiudere e aprire porte o casseforti." },
{ word: "LUNARE", definition: "Relativo alla luna." },
{ word: "LUNGO", definition: "Esteso in direzione orizzontale." },
{ word: "LUPO", definition: "Animale carnivoro della famiglia dei canidi." },
{ word: "LUSSO", definition: "Eccesso di lusso o sfarzo." },
{ word: "LUTTO", definition: "Espressione di dolore per la morte di una persona." },
{ word: "LUTTO", definition: "Periodo di tempo in cui si manifesta il dolore per la perdita di una persona cara." },

{ word: "MACCHINA", definition: "Dispositivo meccanico per compiere un lavoro." },
{ word: "MADRE", definition: "Genitrice di un individuo." },
{ word: "MAGIA", definition: "Pratica o credenza nel soprannaturale." },
{ word: "MAGLIA", definition: "Indumento a maglia." },
{ word: "MAGNETE", definition: "Corpo che attira i metalli." },
{ word: "MAGGIO", definition: "Quinto mese dell'anno." },
{ word: "MAGRO", definition: "Che ha poco grasso." },
{ word: "MAIALE", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "MAESTRO", definition: "Persona esperta in un'arte o disciplina." },
{ word: "MAGRO", definition: "Che ha poco grasso." },
{ word: "MAIALE", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "MAESTRO", definition: "Persona esperta in un'arte o disciplina." },
{ word: "MAGGIO", definition: "Quinto mese dell'anno." },
{ word: "MAGRO", definition: "Che ha poco grasso." },
{ word: "MAIALE", definition: "Animale della famiglia dei suidi, allevato per la carne." },
{ word: "MAESTRO", definition: "Persona esperta in un'arte o disciplina." },
{ word: "MAGO", definition: "Persona che pratica la magia." },
{ word: "MAIONESE", definition: "Salsa a base di uova e olio." },
{ word: "MALATO", definition: "Persona affetta da malattia." },
{ word: "MALE", definition: "Contrario di bene." },
{ word: "MAMMA", definition: "Termine per riferirsi alla madre." },
{ word: "MANO", definition: "Parte del corpo umano situata all'estremità del braccio." },
{ word: "MANGIARE", definition: "Ingerire cibo attraverso la bocca." },
{ word: "MANIGLIA", definition: "Impugnatura di un oggetto." },
{ word: "MANTELLO", definition: "Indumento lungo e ampio." },
{ word: "MAPPA", definition: "Rappresentazione grafica di un territorio." },
{ word: "MARE", definition: "Grande massa d'acqua salata." },
{ word: "MARGHERITA", definition: "Fiore della famiglia delle Asteraceae." },
{ word: "MARITO", definition: "Coniuge maschile." },
{ word: "MARMO", definition: "Rocca metamorfica cristallina." },
{ word: "MARTELLO", definition: "Strumento per battere o picchiare." },
{ word: "MARZO", definition: "Terzo mese dell'anno." },
{ word: "MASCHERA", definition: "Oggetto per coprire il viso." },
{ word: "MASCHIO", definition: "Sessualmente maschile." },
{ word: "MASSA", definition: "Quantità di materia." },
{ word: "MATITA", definition: "Oggetto per scrivere o disegnare." },
{ word: "MATRIMONIO", definition: "Unione legale tra due persone." },
{ word: "MATTINA", definition: "Parte del giorno che va dall'alba fino a mezzogiorno." },
{ word: "MAZZO", definition: "Gruppo di fiori o piante legati insieme." },
{ word: "MECCANICO", definition: "Relativo alla meccanica." },
{ word: "MEDICINA", definition: "Scienza e pratica del trattamento delle malattie." },
{ word: "MEDIO", definition: "Che si trova nel mezzo." },
{ word: "MELODIA", definition: "Successione piacevole di suoni." },
{ word: "MELONE", definition: "Frutto dalla buccia dura e polpa dolce." },
{ word: "MENTE", definition: "Facoltà psichica del pensiero e della coscienza." },
{ word: "MENTA", definition: "Pianta aromatica." },
{ word: "MERCATO", definition: "Luogo dove si comprano e vendono merci." },
{ word: "MERCOLEDÌ", definition: "Terzo giorno della settimana." },
{ word: "MERENDA", definition: "Spuntino consumato nel pomeriggio." },
{ word: "METÀ", definition: "Parte uguale di un tutto." },

{ word: "NASO", definition: "Parte del viso umano." },
{ word: "NAVE", definition: "Imbarcazione marittima." },
{ word: "NAZIONALE", definition: "Relativo a una nazione." },
{ word: "NEONATO", definition: "Bambino appena nato." },
{ word: "NERO", definition: "Colore scuro." },
{ word: "NEVE", definition: "Precipitazione atmosferica." },
{ word: "NIDO", definition: "Struttura in cui gli uccelli depongono le uova e allevano i piccoli." },
{ word: "NIENTE", definition: "Nulla." },
{ word: "NOBILE", definition: "Di elevato rango sociale." },
{ word: "NOCCIOLA", definition: "Frutto della nocciuola." },
{ word: "NOCCIUOLA", definition: "Pianta da frutto." },
{ word: "NOLEGGIO", definition: "Azione di noleggiare." },
{ word: "NOME", definition: "Parola che identifica una persona, un animale o una cosa." },
{ word: "NONNA", definition: "Madre del padre o della madre." },
{ word: "NONNO", definition: "Padre del padre o della madre." },
{ word: "NORD", definition: "Punto cardinale." },
{ word: "NORMALE", definition: "Conforme alla norma." },
{ word: "NOSTALGIA", definition: "Sentimento di malinconia per qualcosa che è stato perso o che appartiene al passato." },
{ word: "NOTA", definition: "Scritto breve." },
{ word: "NOTIZIA", definition: "Informazione su un evento." },
{ word: "NOVEMBRE", definition: "Undicesimo mese dell'anno." },
{ word: "NOVITÀ", definition: "Qualcosa di nuovo." },
{ word: "NOZZE", definition: "Matrimonio." },
{ word: "NUOTARE", definition: "Muoversi nell'acqua facendo uso delle braccia e delle gambe." },
{ word: "NUOTO", definition: "Attività sportiva che consiste nel nuotare." },
{ word: "NUTRIRE", definition: "Fornire cibo." },
{ word: "NUVOLA", definition: "Massa di vapore acqueo." },
{ word: "NUZIALE", definition: "Relativo al matrimonio." },
{ word: "NASTRO", definition: "Striscia di materiale." },
{ word: "NASO", definition: "Organo del corpo umano." },
{ word: "NAVE", definition: "Imbarcazione." },
{ word: "NEONATO", definition: "Bambino appena nato." },
{ word: "NERO", definition: "Colore scuro." },
{ word: "NEVE", definition: "Precipitazione atmosferica." },
{ word: "NIDO", definition: "Struttura dove gli uccelli depongono le uova e crescono i piccoli." },
{ word: "NIENTE", definition: "Nulla." },
{ word: "NOBILE", definition: "Di elevato rango sociale." },
{ word: "NOCCIOLA", definition: "Frutto della nocciuola." },
{ word: "NOLEGGIO", definition: "Azione di noleggiare qualcosa." },
{ word: "NOME", definition: "Parola che identifica una persona, un animale o una cosa." },
{ word: "NONNA", definition: "Madre del padre o della madre." },
{ word: "NONNO", definition: "Padre del padre o della madre." },
{ word: "NORD", definition: "Punto cardinale." },
{ word: "NORMALE", definition: "Conforme alla norma." },
{ word: "NOSTALGIA", definition: "Sentimento di malinconia per qualcosa che è stato perso o che appartiene al passato." },
{ word: "NOTA", definition: "Scritto breve." },
{ word: "NOTIZIA", definition: "Informazione su un evento." },
{ word: "NOVEMBRE", definition: "Undicesimo mese dell'anno." },
{ word: "NOVITÀ", definition: "Qualcosa di nuovo." },
{ word: "NOZZE", definition: "Matrimonio." },

{ word: "OBIETTIVO", definition: "Scopo o meta da raggiungere." },
{ word: "OBBLIGO", definition: "Imposizione di fare qualcosa." },
{ word: "OBIETTIVO", definition: "Scopo da raggiungere." },
{ word: "OBLIO", definition: "Dimenticanza." },
{ word: "OBSOLETO", definition: "Non più in uso o superato." },
{ word: "OCCASIONE", definition: "Momento favorevole per fare qualcosa." },
{ word: "OCCHIO", definition: "Organo della vista." },
{ word: "OCCORRENZA", definition: "Evento che si verifica in determinate circostanze." },
{ word: "OCCUPARE", definition: "Prendere possesso di un luogo o di una posizione." },
{ word: "OCCUPATO", definition: "Impegnato in un'attività." },
{ word: "OCULARE", definition: "Relativo agli occhi." },
{ word: "OCULISTA", definition: "Medico specializzato nella cura degli occhi." },
{ word: "ODIO", definition: "Sentimento di avversione profonda verso qualcuno o qualcosa." },
{ word: "OFFENDERE", definition: "Ledere l'onore o la dignità di qualcuno." },
{ word: "OFFESO", definition: "Che si è sentito ferito nell'onore o nell'autostima." },
{ word: "OFFERTA", definition: "Proposta di vendita di un prodotto o di un servizio." },
{ word: "OFFICINA", definition: "Locale dove si svolgono lavori di riparazione o manutenzione." },
{ word: "OFFRIRE", definition: "Presentare qualcosa a qualcuno in modo che lo possa accettare o rifiutare." },
{ word: "OGGETTO", definition: "Qualcosa di materiale che può essere toccato e percepito." },
{ word: "OGGI", definition: "Nella giornata attuale." },
{ word: "OLIO", definition: "Sostanza grassa ottenuta dalla spremitura di alcuni frutti." },
{ word: "OMBRELLAIO", definition: "Chi fabbrica o vende ombrelli." },
{ word: "OMBRELLO", definition: "Struttura utilizzata come protezione dalla pioggia." },
{ word: "ONDA", definition: "Moto che si propaga su una superficie." },
{ word: "ONDATA", definition: "Moto d'acqua che si propaga con forza e velocità." },
{ word: "ONORE", definition: "Sentimento di rispetto e ammirazione verso qualcuno per le sue virtù o meriti." },
{ word: "OPERA", definition: "Lavoro o creazione artistica." },
{ word: "OPERAZIONE", definition: "Azione di compiere un'attività o un intervento." },
{ word: "OPERATIVO", definition: "Che è pronto all'uso o all'azione." },
{ word: "OPINIONE", definition: "Parere o giudizio su qualcosa o qualcuno." },
{ word: "OPPORTUNITÀ", definition: "Circostanza favorevole per fare qualcosa." },
{ word: "OPPOSIZIONE", definition: "Contrasto o resistenza." },
{ word: "OPPOSTO", definition: "Che si trova di fronte o è contrario a qualcosa." },
{ word: "OPZIONE", definition: "Scelta tra diverse possibilità." },
{ word: "ORBITA", definition: "Traiettoria seguita da un corpo celeste intorno a un altro corpo più grande." },
{ word: "ORDINE", definition: "Disposizione razionale di elementi o di persone." },
{ word: "ORGANICO", definition: "Che riguarda l'organismo vivente." },
{ word: "ORGANIZZARE", definition: "Pianificare e dirigere un'attività o un evento." },
{ word: "ORIENTAMENTO", definition: "Indicazione della direzione." },
{ word: "ORIGINALE", definition: "Che è il primo nel suo genere." },
{ word: "OSARE", definition: "Avere il coraggio di fare qualcosa." },
{ word: "OSPEDALE", definition: "Struttura sanitaria dove vengono curati e ricoverati i malati." },
{ word: "OSPITE", definition: "Persona ricevuta nella propria casa o in un luogo." },
{ word: "OTTAGONO", definition: "Poligono con otto lati e otto angoli." },
{ word: "OTTANTA", definition: "Numero che segue il settantanove e precede l'ottantuno." },
{ word: "OTTAVO", definition: "Che si trova in ottava posizione." },
{ word: "OTTIMALE", definition: "Migliore possibile." },
{ word: "OTTOBRE", definition: "Decimo mese dell'anno." },

{ word: "PACE", definition: "Assenza di conflitti o guerre." },
{ word: "PADRE", definition: "Genitore maschio." },
{ word: "PADRONE", definition: "Proprietario di qualcosa o di qualcuno." },
{ word: "PAGARE", definition: "Dare denaro in cambio di beni o servizi ricevuti." },
{ word: "PAGINA", definition: "Foglio di un libro, rivista o giornale." },
{ word: "PALAZZO", definition: "Grande edificio abitativo o sede istituzionale." },
{ word: "PALLA", definition: "Oggetto sferico utilizzato in vari sport o giochi." },
{ word: "PALMO", definition: "Misura di lunghezza corrispondente alla lunghezza della mano." },
{ word: "PANCIA", definition: "Parte dell'addome." },
{ word: "PANE", definition: "Alimento fatto con farina, acqua e lievito, cotto al forno." },
{ word: "PAPÀ", definition: "Forma colloquiale per 'padre'." },
{ word: "PARADISO", definition: "Luogo immaginario di felicità e beatitudine." },
{ word: "PARCO", definition: "Area verde pubblica." },
{ word: "PARETE", definition: "Superficie verticale di un edificio." },
{ word: "PARLARE", definition: "Comunicare oralmente." },
{ word: "PARTE", definition: "Porzione o sezione di qualcosa." },
{ word: "PARTENZA", definition: "Azione di partire da un luogo." },
{ word: "PARTIRE", definition: "Iniziare un viaggio o un'azione." },
{ word: "PARTITA", definition: "Incontro sportivo tra due squadre." },
{ word: "PARTITO", definition: "Gruppo politico." },
{ word: "PARTO", definition: "Azione di dare alla luce un bambino." },
{ word: "PASSARE", definition: "Muoversi da un luogo all'altro." },
{ word: "PASTA", definition: "Alimento preparato con farina e acqua, solitamente cotto in acqua bollente." },
{ word: "PASTORE", definition: "Persona che guida e cura il bestiame." },
{ word: "PATATA", definition: "Pianta erbacea tuberosa, il cui tubero viene consumato come alimento." },
{ word: "PATENTE", definition: "Documento che attesta il diritto di guidare un veicolo." },
{ word: "PAZIENTE", definition: "Persona che riceve cure mediche." },
{ word: "PAZIENZA", definition: "Capacità di sopportare le difficoltà o le avversità con calma." },
{ word: "PECCATO", definition: "Azione contraria alla morale o alla legge religiosa." },
{ word: "PEPE", definition: "Spezia aromatica di colore nero o bianco." },
{ word: "PERDERE", definition: "Non riuscire a mantenere o a ottenere qualcosa." },
{ word: "PERDITA", definition: "Azione o conseguenza di perdere qualcosa." },
{ word: "PERICOLO", definition: "Situazione che può causare danni o rischi alla vita o alla salute." },
{ word: "PERLA", definition: "Gemma di forma sferica, generalmente prodotta dagli ostriche." },
{ word: "PERSONA", definition: "Essere umano." },
{ word: "PESARE", definition: "Misurare il peso di qualcosa." },
{ word: "PESCE", definition: "Animale acquatico vertebrato." },
{ word: "PIANO", definition: "Superficie orizzontale su cui si cammina." },
{ word: "PIANTA", definition: "Organismo vegetale con radici, fusto e foglie." },
{ word: "PIANTO", definition: "Azione di versare lacrime." },
{ word: "PIATTO", definition: "Utensile piatto e poco profondo, usato per mangiare." },
{ word: "PICCOLO", definition: "Di dimensioni ridotte." },
{ word: "PIEDE", definition: "Parte inferiore dell'arto inferiore umano." },
{ word: "PIENO", definition: "Che contiene tutto quello che può contenere." },
{ word: "PIETRA", definition: "Materiale solido di origine minerale." },
{ word: "PIGIAMA", definition: "Indumento da notte, solitamente composto da una maglietta e un pantalone." },
{ word: "PILA", definition: "Dispositivo che converte l'energia chimica in energia elettrica." },
{ word: "PILOTA", definition: "Persona che guida un veicolo o un aeroplano." },
{ word: "PINETA", definition: "Bosco di pini." },
{ word: "PINO", definition: "Albero conifero della famiglia delle Pinaceae." },

{ word: "QUADERNO", definition: "Libro di carta bianca o quadretti per scrivere o disegnare." },
{ word: "QUADRATO", definition: "Figura geometrica con quattro lati uguali e quattro angoli retti." },

{ word: "RACCOLTA", definition: "Atto di raccogliere o insieme di cose raccolte." },
{ word: "RACCOGLIERE", definition: "Prendere e mettere insieme cose sparse." },
{ word: "RACCONTO", definition: "Narrazione di fatti reali o immaginari." },
{ word: "RADA", definition: "Spazio di mare libero dagli scogli o dagli ostacoli." },
{ word: "RADIAZIONE", definition: "Emissione e propagazione di energia sotto forma di onde o particelle." },
{ word: "RADIO", definition: "Apparecchio elettroacustico per la ricezione delle trasmissioni radiofoniche." },
{ word: "RADICE", definition: "Parte di una pianta che si trova sotto il terreno." },
{ word: "RAGAZZA", definition: "Femmina giovane." },
{ word: "RAGAZZO", definition: "Maschio giovane." },
{ word: "RAGIONE", definition: "Facoltà mentale che permette di capire, valutare e giudicare." },
{ word: "RAMO", definition: "Parte di un albero che cresce lateralmente dal tronco." },
{ word: "RANA", definition: "Anfibio dotato di zampe posteriori molto sviluppate." },
{ word: "RAPIDO", definition: "Che si muove con velocità." },
{ word: "RAPPORTO", definition: "Relazione che lega due o più elementi." },
{ word: "RAPPRESENTARE", definition: "Esprimere graficamente o oralmente qualcosa." },
{ word: "RARO", definition: "Che si verifica di rado, poco comune." },
{ word: "RASOIO", definition: "Strumento per rasarsi la barba o i peli." },
{ word: "RATTO", definition: "Mammifero roditore di piccole dimensioni." },
{ word: "RAVANELLO", definition: "Pianta erbacea coltivata per il suo rizoma commestibile." },
{ word: "REALE", definition: "Che esiste realmente, non immaginario." },
{ word: "REGALO", definition: "Cosa che si dona a qualcuno per dimostrargli affetto o stima." },
{ word: "REGGERE", definition: "Sorreggere o tenere in piedi qualcosa." },
{ word: "REGINA", definition: "Femmina sovrana di uno stato." },
{ word: "REGISTRO", definition: "Libro o schedario in cui si registrano dati o informazioni." },
{ word: "REGNO", definition: "Territorio governato da un sovrano." },
{ word: "RELAZIONE", definition: "Descrizione di un fatto o di un avvenimento." },
{ word: "RELIGIONE", definition: "Insieme di credenze e pratiche legate al divino." },
{ word: "REPARTO", definition: "Sezione o reparto di un'azienda o di un ospedale." },
{ word: "REPLICARE", definition: "Ripetere qualcosa che è stato detto o fatto." },
{ word: "REPUBBLICA", definition: "Forma di governo in cui il capo di stato è eletto dal popolo." },
{ word: "RESISTERE", definition: "Contrastare un'azione o un'oppressione." },
{ word: "RESPIRARE", definition: "Assorbire aria attraverso i polmoni." },
{ word: "RESTARE", definition: "Rimanere in un luogo o in una situazione." },
{ word: "RETE", definition: "Struttura composta da fili intrecciati utilizzata per catturare o contenere qualcosa." },
{ word: "RETTA", definition: "Linea retta, segmento di retta." },
{ word: "RETTANGOLO", definition: "Figura geometrica piana con quattro lati e quattro angoli retti." },
{ word: "RICCHEZZA", definition: "Grande quantità di beni o denaro." },
{ word: "RICCIOLO", definition: "Piccola ciocca di capelli ricci." },
{ word: "RICEVERE", definition: "Ottenere qualcosa da qualcuno." },
{ word: "RICETTA", definition: "Istruzioni scritte per preparare un piatto." },
{ word: "RICHIESTA", definition: "Domanda o istanza rivolta a qualcuno per ottenere qualcosa." },
{ word: "RICORDO", definition: "Ricordare qualcosa del passato." },
{ word: "RIDERE", definition: "Esprimere gioia facendo suoni con la bocca e il viso." },
{ word: "RIEMPIRE", definition: "Occupare completamente uno spazio vuoto." },

{ word: "SABBIA", definition: "Materiale granulare costituito da piccoli frammenti di roccia." },
{ word: "SACCO", definition: "Contenitore di tessuto o materiale plastico, chiuso da un laccio, usato per contenere merci o materiali." },
{ word: "SAGGIO", definition: "Persona che ha acquisito una grande conoscenza in un determinato campo." },
{ word: "SALA", definition: "Ambiente di una casa o di un edificio adibito a un uso specifico." },
{ word: "SALIRE", definition: "Muoversi verso l'alto, ascendere." },
{ word: "SALOTTO", definition: "Stanze della casa arredate con divani e poltrone, adibite a ricevere ospiti o a conversare." },
{ word: "SALTARE", definition: "Sollevarsi da terra con un balzo." },
{ word: "SALUTE", definition: "Stato di benessere fisico, psichico e sociale." },
{ word: "SALVARE", definition: "Mettere in salvo qualcuno o qualcosa da un pericolo." },
{ word: "SAPERE", definition: "Conoscere qualcosa attraverso lo studio o l'esperienza." },
{ word: "SARACENO", definition: "Che è relativo ai Saraceni o alla loro cultura." },
{ word: "SARTO", definition: "Persona che confeziona abiti su misura." },
{ word: "SBALZO", definition: "Operazione di cesellatura o scolpitura in rilievo." },
{ word: "SCACCHI", definition: "Gioco da tavolo che si svolge su una scacchiera." },
{ word: "SCALA", definition: "Struttura composta da gradini, utilizzata per salire o scendere da un piano all'altro." },
{ word: "SCALDARE", definition: "Aumentare la temperatura di qualcosa." },
{ word: "SCAMBIO", definition: "Atto di dare qualcosa in cambio di qualcos'altro." },
{ word: "SCAPPARE", definition: "Fuggire da una situazione o da un luogo." },
{ word: "SCATOLA", definition: "Contenitore rigido utilizzato per riporre o trasportare oggetti." },
{ word: "SCATTO", definition: "Movimento rapido e improvviso." },
{ word: "SCLETA", definition: "Azione di scegliere tra due o più opzioni." },
{ word: "SCHERZO", definition: "Azione o battuta fatta per divertire." },
{ word: "SCHERMO", definition: "Superficie piana su cui vengono proiettate immagini." },
{ word: "SCIENZA", definition: "Insieme di conoscenze organizzate e sistematizzate su un determinato argomento." },
{ word: "SCOLARE", definition: "Far defluire un liquido da un contenitore." },
{ word: "SCOLARO", definition: "Persona che frequenta la scuola." },
{ word: "SCONTO", definition: "Riduzione del prezzo di un prodotto o di un servizio." },
{ word: "SCOPRIRE", definition: "Portare alla luce qualcosa che era nascosto o ignoto." },
{ word: "SCORRERE", definition: "Muoversi in modo continuo e fluido." },
{ word: "SCOSSA", definition: "Movimento brusco e improvviso." },
{ word: "SCRITTO", definition: "Qualcosa che è stato trascritto o redatto per iscritto." },
{ word: "SCRIVERE", definition: "Comporre testi o segni su una superficie." },
{ word: "SCUOLA", definition: "Istituzione educativa dove si impartisce istruzione e formazione." },
{ word: "SCUSA", definition: "Parola o gesto con cui ci si scusa per un errore o un comportamento scorretto." },
{ word: "SECOLO", definition: "Periodo di cento anni." },
{ word: "SECONDO", definition: "Misura del tempo corrispondente a sessanta secondi." },
{ word: "SEGNO", definition: "Indicazione visibile che rappresenta qualcosa." },
{ word: "SEGUIRE", definition: "Andare dietro a qualcuno o a qualcosa." },
{ word: "SELEZIONE", definition: "Atto di selezionare o scegliere tra diverse opzioni." },
{ word: "SELLARE", definition: "Mettere la sella su un cavallo." },
{ word: "SELVAGGIO", definition: "Che vive allo stato naturale, senza essere stato addomesticato." },
{ word: "SEMAFORO", definition: "Dispositivo stradale che regola il traffico veicolare." },
{ word: "SEMBIANZA", definition: "Aspetto esteriore di una persona o di una cosa." },
{ word: "SEME", definition: "Parte di una pianta da cui nasce una nuova pianta." },
{ word: "SENSO", definition: "Facoltà di percepire ciò che accade intorno a sé attraverso i sensi." },
{ word: "SENTIERO", definition: "Strada stretta e generalmente non asfaltata, adatta al passaggio a piedi o in bicicletta." },
{ word: "SENTIRE", definition: "Percepire i suoni o le sensazioni attraverso gli organi dei sensi." },
{ word: "SEPARARE", definition: "Dividere in parti distinte o separare due o più elementi." },
{ word: "SEPOLCRO", definition: "Tomba monumentale o sotterranea." },
{ word: "SERA", definition: "Parte finale della giornata, compresa tra il tramonto e la notte." },

{ word: "TABACCAIO", definition: "Commerciante che vende tabacco e articoli correlati." },
{ word: "TACCO", definition: "Parte inferiore di una scarpa, su cui poggia il tallone." },
{ word: "TACERE", definition: "Non parlare, rimanere in silenzio." },
{ word: "TACITURNO", definition: "Che ha un carattere riservato e poco incline alla conversazione." },
{ word: "TACITO", definition: "Che è sottinteso ma non esplicitato." },
{ word: "TAGLIA", definition: "Dimensione o misura di qualcosa." },
{ word: "TAGLIARE", definition: "Dividere qualcosa con un utensile affilato." },
{ word: "TAGLIO", definition: "Azione di tagliare o lo spazio prodotto da tale azione." },
{ word: "TALENTO", definition: "Abilità naturale o capacità particolarmente sviluppata in un campo." },
{ word: "TALPA", definition: "Piccolo mammifero insettivoro, dal corpo cilindrico e ricoperto di pelo morbido." },
{ word: "TAMBUTO", definition: "Strumento musicale a percussione, costituito da una membrana tesa su una cornice circolare." },
{ word: "TANA", definition: "Rifugio sotterraneo di alcuni animali, come le volpi." },
{ word: "TANTO", definition: "In grande quantità o grado." },
{ word: "TAPPO", definition: "Dispositivo utilizzato per chiudere ermeticamente una bottiglia o un contenitore." },
{ word: "TARDI", definition: "In un momento successivo rispetto a quello atteso o convenzionale." },
{ word: "TARGA", definition: "Piatto metallico con iscrizioni, utilizzato per segnalare o identificare qualcosa." },
{ word: "TARIFFA", definition: "Prezzo fissato per un servizio o un bene." },
{ word: "TASSA", definition: "Somma di denaro dovuta al governo o a un'autorità per finanziare servizi pubblici." },
{ word: "TASTIERA", definition: "Insieme di tasti di un computer o di un pianoforte." },
{ word: "TAVOLA", definition: "Piano orizzontale, generalmente rettangolare, su cui si mangia o si lavora." },
{ word: "TAVOLO", definition: "Mobile composto da un piano sostenuto da gambe, utilizzato per mangiare o lavorare." },
{ word: "TEATRO", definition: "Luogo destinato alla rappresentazione di spettacoli teatrali." },
{ word: "TEDESCO", definition: "Che è relativo alla Germania o alla sua lingua." },
{ word: "TEGOLA", definition: "Elemento di copertura per tetti, generalmente in ceramica o cemento." },
{ word: "TELEFONO", definition: "Dispositivo elettronico utilizzato per trasmettere la voce a distanza." },
{ word: "TEMA", definition: "Composizione scritta che espone le proprie idee su un determinato argomento." },
{ word: "TEMERE", definition: "Provare paura o timore nei confronti di qualcosa o qualcuno." },
{ word: "TEMPERARE", definition: "Modificare la durezza o la consistenza di qualcosa." },
{ word: "TEMPESTA", definition: "Fenomeno atmosferico caratterizzato da forti venti, pioggia e, talvolta, fulmini." },
{ word: "TEMPO", definition: "Misura dell'intervallo tra due eventi o momenti." },
{ word: "TENERE", definition: "Trattenere qualcosa con la mano o con un'altra parte del corpo." },
{ word: "TENUTA", definition: "Proprietà rurale destinata alla coltivazione di terreni agricoli." },
{ word: "TEORIA", definition: "Insieme di principi e regole che spiegano un fenomeno o un insieme di fenomeni." },
{ word: "TERME", definition: "Stabilimento balneare dotato di strutture per bagni e trattamenti." },
{ word: "TERMINARE", definition: "Portare a conclusione qualcosa." },
{ word: "TERMINE", definition: "Parola o espressione che indica un concetto o un concetto." },
{ word: "TERNO", definition: "Insieme di tre elementi." },
{ word: "TERRA", definition: "Pianeta abitabile su cui viviamo." },
{ word: "TERRIBILE", definition: "Che suscita terrore o timore intenso." },
{ word: "TESTA", definition: "Parte superiore del corpo umano, che contiene il cervello e gli organi sensoriali." },
{ word: "TESTAMENTO", definition: "Atto con cui una persona dispone dei propri beni per dopo la morte." },
{ word: "TESTO", definition: "Parole scritte o stampate che compongono un libro o un documento." },
{ word: "TETTO", definition: "Parte superiore di un edificio che lo copre e lo protegge dalle intemperie." },
{ word: "TIGLIO", definition: "Albero ornamentale dal tronco slanciato e dai fiori profumati." },
{ word: "TIMIDO", definition: "Che ha difficoltà a relazionarsi con gli altri o a esprimere se stesso." },
{ word: "TIMONE", definition: "Dispositivo di controllo che regola la direzione di un'imbarcazione." },
{ word: "TIMORE", definition: "Sentimento di paura o apprensione." },
{ word: "TINTARELLA", definition: "Abbronzatura della pelle causata dall'esposizione al sole." },
{ word: "TINTA", definition: "Colore ottenuto mescolando pigmenti o sostanze coloranti." },
{ word: "TIRO", definition: "Azione di lanciare o sparare qualcosa." },
{ word: "TITOLO", definition: "Nome di un'opera, di un documento o di un libro." },

{ word: "UBRIACO", definition: "Che ha ecceduto nell'assunzione di bevande alcoliche, in stato di ebbrezza." },
{ word: "UCCELLO", definition: "Animale vertebrato a sangue caldo, dotato di piume e ali, che depone le uova." },
{ word: "UDIENZA", definition: "Incontro formale tra una persona e un'autorità giudiziaria o governativa." },
{ word: "UFFICIALE", definition: "Persona che svolge funzioni autorizzate da una pubblica autorità." },
{ word: "UFFICIO", definition: "Locale o ambiente in cui si svolgono attività amministrative o professionali." },
{ word: "UGUALE", definition: "Che ha le stesse caratteristiche, quantità o qualità di qualcos'altro." },
{ word: "ULTIMO", definition: "Che si trova alla fine di un elenco o di un periodo di tempo." },
{ word: "UMANO", definition: "Che appartiene all'uomo, relativo all'essere umano." },
{ word: "UMIDO", definition: "Che è caratterizzato dalla presenza di umidità, leggermente bagnato." },
{ word: "UNICO", definition: "Che è uno solo, che non ha pari o simili." },
{ word: "UNITÀ", definition: "Quantità considerata come singola entità o elemento indivisibile." },
{ word: "UNIVERSITÀ", definition: "Istituzione di istruzione superiore che offre corsi di laurea e post-laurea." },
{ word: "USANZA", definition: "Pratica o comportamento consolidato all'interno di una comunità o di una società." },
{ word: "USARE", definition: "Utilizzare qualcosa per uno scopo particolare." },
{ word: "UTENTE", definition: "Persona che fa uso di un servizio o di un'applicazione." },
{ word: "UTILITÀ", definition: "Beneficio o vantaggio che si trae dall'uso di qualcosa." },

{ word: "VAGABONDO", definition: "Persona che vive senza una dimora fissa, girovago." },
{ word: "VAGARE", definition: "Muoversi senza una meta precisa, girovagare." },
{ word: "VALLE", definition: "Depressione del terreno delimitata da due catene montuose." },
{ word: "VALORE", definition: "Importanza o significato attribuito a qualcosa." },
{ word: "VAMPIRO", definition: "Creature leggendaria che, secondo le tradizioni, succhia il sangue delle persone durante la notte." },
{ word: "VANGELO", definition: "Libro sacro del cristianesimo che narra la vita e gli insegnamenti di Gesù Cristo." },
{ word: "VANO", definition: "Che non produce risultati o soddisfazioni." },
{ word: "VASO", definition: "Contenitore generalmente di forma cilindrica o ovale, utilizzato per contenere liquidi o solidi." },
{ word: "VEGETALE", definition: "Che riguarda le piante o è di origine vegetale." },
{ word: "VEGETARIANO", definition: "Che segue una dieta che esclude carne e pesce." },
{ word: "VELENO", definition: "Sostanza tossica o velenosa per gli esseri viventi." },
{ word: "VELOCE", definition: "Che si muove rapidamente, con grande velocità." },
{ word: "VELO", definition: "Tessuto leggero e trasparente che si usa per coprire il volto o il capo." },
{ word: "VENDERE", definition: "Scambiare qualcosa con denaro, cederlo in cambio di soldi." },
{ word: "VENDETTA", definition: "Azione di infliggere danni o punizioni a qualcuno in risposta a un torto subito." },
{ word: "VENDITORE", definition: "Persona che vende merci o servizi." },
{ word: "VENIRE", definition: "Muoversi o essere portato in un luogo specifico." },
{ word: "VENTO", definition: "Aria in movimento, corrente atmosferica." },
{ word: "VERITÀ", definition: "Corrispondenza tra ciò che si dice e la realtà dei fatti." },
{ word: "VERDE", definition: "Colore che si trova tra il blu e il giallo, associato alla natura e alla freschezza." },

{ word: "WOW", definition: "Interiezione usata per esprimere sorpresa, stupore o ammirazione." },

{ word: "XILOFONO", definition: "Strumento musicale formato da una serie di barre di legno disposte in ordine di grandezza e colpite con dei martelletti." },

{ word: "YACHT", definition: "Imbarcazione da diporto, solitamente di grandi dimensioni e lussuosa." },

{ word: "ZABAIONE", definition: "Dolce cremoso a base di uova, zucchero e vino, solitamente servito caldo." },
{ word: "ZAFFIRO", definition: "Pietra preziosa di colore blu trasparente." },
{ word: "ZAINO", definition: "Sacca o borsa portata sulle spalle con due cinghie, utilizzata per trasportare oggetti." },
{ word: "ZAMPOGNA", definition: "Strumento musicale a fiato composto da canne di bambù o legno, diffuso soprattutto in Italia." },
{ word: "ZANNA", definition: "Dente canino degli animali, spesso associato agli elefanti." },
{ word: "ZANZARA", definition: "Insetto volante che succhia il sangue degli animali, tra cui gli esseri umani, e può trasmettere malattie." },
{ word: "ZATTERA", definition: "Imbarcazione rudimentale costituita da tronchi legati tra loro, utilizzata per attraversare fiumi o laghi." },
{ word: "ZEBRA", definition: "Mammifero erbivoro caratterizzato da strisce bianche e nere." },
{ word: "ZELO", definition: "Entusiasmo o impegno fervente nel perseguire un obiettivo o un'attività." },
{ word: "ZELANTE", definition: "Che agisce con zelo, impegno o dedizione." },
{ word: "ZENZERO", definition: "Pianta erbacea il cui rizoma viene utilizzato come spezia, dall'aroma pungente e leggermente piccante." },
{ word: "ZERO", definition: "Numero che rappresenta l'assenza di quantità o valore, corrispondente al punto di partenza su una scala graduata." },
{ word: "ZIBELLINO", definition: "Mammifero carnivoro della famiglia dei Mustelidi, noto per il suo prezioso pelo." },
{ word: "ZIO", definition: "Fratello del padre o della madre di una persona." },
{ word: "ZOCCOLO", definition: "Parte inferiore del piede umano, composta da osso, muscoli e tessuto connettivo." },
{ word: "ZOLLA", definition: "Porzione di terreno compatta e di forma irregolare." },
{ word: "ZONA", definition: "Area delimitata o regione specifica di un territorio." },
{ word: "ZUCCHERO", definition: "Sostanza dolce e cristallina ottenuta dalla lavorazione della canna da zucchero o della barbabietola da zucchero." },
{ word: "ZUCCHINA", definition: "Varietà di zucca con forma allungata e di colore verde, utilizzata come verdura in cucina." },
{ word: "ZUFFA", definition: "Rissa o lite violenta tra più persone." },
{ word: "ZUPPA", definition: "Piatto a base di brodo o acqua in cui vengono cotti vari ingredienti come verdure, carne, pesce o pasta." },
{ word: "ZURLO", definition: "Grido o urlo acuto emesso da alcuni animali o persone." },
{ word: "ZUZZURELLONE", definition: "Persona pigra o indolente, che evita di lavorare o di impegnarsi." }
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


