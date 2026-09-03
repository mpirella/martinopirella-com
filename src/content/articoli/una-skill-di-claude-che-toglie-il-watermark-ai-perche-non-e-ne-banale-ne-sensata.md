---
title: "\"C'è una skill di Claude che toglie il Watermark AI\". Perché la cosa non è né banale né sensata."
date: 2026-09-03
slug: "una-skill-di-claude-che-toglie-il-watermark-ai-perche-non-e-ne-banale-ne-sensata"
excerpt: "Circola un video, l'ho visto su Instagram: una persona competente spiega che l'AI mette un marchio nascosto in quello che genera, e mostra come scaricare uno strumento per toglierlo. Vale la pena fermarsi, non per l'ennesima crociata etica, ma perché sotto la parola watermark convivono tre problemi diversi."
image: "/images/una-skill-di-claude-che-toglie-il-watermark-ai.webp"
---

Circola un video. Io l'ho visto su Instagram. Una persona competente, con più di 30.000 followers, spiega che l'intelligenza artificiale mette un marchio nascosto in quello che genera, e mostra come scaricare uno strumento, una skill, per toglierlo. Lo fa citando scuola, esami, colloqui di lavoro: i contesti dove un testo viene controllato e revisionato, e dove quel marchio invisibile, dice, comincia a contare davvero.

Vale la pena fermarsi su questo video, non per l'ennesima crociata etica, ma perché sotto la parola "watermark" convivono almeno tre problemi diversi, che lo strumento in questione tratta come fossero uno solo. E perché, anche a voler ignorare ogni dubbio sul senso dell'operazione, installare quella cosa è più complicato e meno affidabile di quanto il video lasci credere.

## Tre watermark, tre problemi diversi

Primo caso: le immagini e i video generati da AI possono portare un segnale nascosto nei pixel stessi, sparso in tutta l'immagine come un'impronta digitale invece che scritto in un angolo. Qui il marchio risponde a una domanda concreta: questo contenuto è stato fabbricato da una macchina o mostra qualcosa di realmente accaduto? Ha senso che esista, perché con le immagini il rischio è l'inganno sull'oggetto stesso: un volto che dice parole mai dette, un evento mai successo.

Secondo caso, più semplice: i metadati. Ogni file porta con sé informazioni invisibili all'occhio ma leggibili dal computer, che programma l'ha creato, quando, con quale servizio. Sono come l'etichetta cucita dentro un vestito. Toglierle è tecnicamente facile e verificabile.

Terzo caso, quello davvero equivocato: il testo. Qui non esiste un'etichetta cucita da qualche parte. Il presunto marchio, quando esiste, sta nel modo in cui il modello sceglie le parole, in un pattern statistico che si nasconde nella sequenza dei token, non in un carattere nascosto che si può strappare via. È come cercare di dimostrare se una lettera è stata scritta da una persona guardando la calligrafia, non cercando un timbro sul foglio.

Il video di Instagram, come quasi tutta la comunicazione popolare su questo tema, tratta questi tre casi come se fossero lo stesso problema. Non lo sono.

## Cosa fa davvero lo strumento

Sono andato a vedere lo strumento specifico a cui il video rimanda: un progetto open source con quasi 19.000 stelle su GitHub, installabile come estensione di Claude Code, con tanto di plugin e marketplace dedicato. Non è un giocattolo improvvisato, dietro c'è del lavoro tecnico serio. E proprio per questo la documentazione è insolitamente onesta su cosa funziona e cosa no.

Sui metadati, funziona bene, e lo dichiara con chiarezza: rimuove davvero l'etichetta nascosta nei file PDF, Word, immagini, e il risultato è verificabile, puoi controllare che non ci sia più.

Sul marchio nei pixel delle immagini, funziona in modo parziale e problematico. Serve un componente esterno, non distribuito ufficialmente dagli sviluppatori del progetto stesso perché la licenza del software su cui si appoggia non lo permette, e il processo di rimozione altera visibilmente l'immagine nel farlo: la "rigenera" pezzo per pezzo, il che significa che il risultato non è più esattamente l'immagine di partenza.

Sul testo, il punto più delicato, la documentazione ammette candidamente che l'unico modo per "pulire" un testo dal presunto marchio statistico è farlo riscrivere frase per frase da un altro modello di intelligenza artificiale. Non basta spostare paragrafi o cambiare qualche titolo: bisogna riscrivere quasi ogni frase, il che significa perdere lo stile, la precisione, il lavoro fatto sul testo originale. Gli stessi autori dello strumento si pongono, testualmente, la domanda che viene spontanea: se comunque devi far riscrivere il testo da un modello più economico solo per cancellare le tracce, perché non l'hai scritto direttamente con quello, risparmiando tempo e qualità?

C'è poi un limite dichiarato e non aggirabile: un tipo di marchio nelle immagini, chiamato "soft binding", si ricollega a un archivio remoto anche dopo che i metadati locali sono stati ripuliti. Contro quello lo strumento non fa nulla, e lo scrive nero su bianco.

## Il dettaglio tecnico che il video non dice

C'è un aspetto che chi guarda il video difficilmente immagina: questo strumento non è un programma che gira per conto suo su un telefono o un computer. È quello che si chiama un client sottile: si limita a inviare i file a un server esterno che deve essere avviato e mantenuto attivo, in locale o tramite un servizio online, e a ricevere indietro il risultato. Se quel server non risponde, lo strumento non fa nulla, non ripiega su una pulizia più semplice, si ferma.

Questo significa due cose pratiche. La prima: installarlo davvero, farlo funzionare, non è il gesto di un click che il video suggerisce, richiede di mettere in piedi un piccolo pezzo di infrastruttura tecnica, capirne la configurazione, tenerla aggiornata.

La seconda, più delicata: se il servizio gira su un server di terzi anziché sul proprio computer, i file che si vogliono "ripulire", magari documenti personali o di lavoro, passano attraverso quel server. Chi installa lo strumento seguendo un video di due minuti raramente si ferma a considerare dove stanno effettivamente transitando i propri contenuti.

## Il punto che conta davvero

Per le immagini e i video il marchio ha una funzione reale, perché lì l'oggetto stesso può essere falso: una foto che ritrae qualcosa mai accaduto è un problema di autenticità, e verificarla ha senso.

Per il testo la questione è diversa, non di grado ma di natura. La domanda "questo testo l'ha scritto un'AI o una persona" non è la domanda giusta, o meglio, sposta l'attenzione da quella che conta davvero: chi si assume la responsabilità di quello che c'è scritto, indipendentemente da come è stato prodotto. Un testo scritto con l'aiuto di un'intelligenza artificiale può essere accurato e onesto.

Uno scritto interamente da una persona può essere falso o scadente. Il marchio statistico nel testo non misura niente di tutto questo: misura solo se certe parole sono state scelte da un algoritmo secondo un certo pattern. E se il problema è uno studente che consegna un lavoro non suo, cancellare il marchio non risolve niente: sposta solo di un passo la stessa domanda.

Uno strumento che promette di "cancellare le tracce dell'AI" dai testi alimenta l'illusione che il problema sia tecnico, un marchio da nascondere con il software giusto, quando in realtà è sempre stato un problema di responsabilità editoriale: chi pubblica un testo ne risponde, indipendentemente da quanto lavoro d'intelligenza artificiale ci sia dentro. Per le immagini rincorrere il marchio ha un senso investigativo. Per il testo, rincorrerlo è inseguire un fantasma, e nel farlo si perde di vista la sostanza: non importa chi ha scelto le parole, importa chi ne risponde.

---

Il video che circola promette una soluzione in due minuti a un problema che, a guardarlo da vicino, non è né semplice né uno solo. Vale la pena saperlo prima di scaricare qualcosa.
