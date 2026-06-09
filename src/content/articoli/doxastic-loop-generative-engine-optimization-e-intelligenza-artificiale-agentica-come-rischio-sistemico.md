---
title: "Doxastic loop, Generative Engine Optimization e intelligenza artificiale agentica come rischio sistemico"
date: 2026-05-24
slug: "doxastic-loop-generative-engine-optimization-e-intelligenza-artificiale-agentica-come-rischio-sistemico"
excerpt: "Un sistema agentico di intelligenza artificiale non legge le fonti che usa. Le recupera, le valuta per autorevolezza algoritmica, e agisce. Se le fonti sono state costruite per sembrare autorevoli, l’"
image: "/images/image-2.webp"
---

Un sistema agentico di intelligenza artificiale non legge le fonti che usa. Le recupera, le valuta per autorevolezza algoritmica, e agisce. Se le fonti sono state costruite per sembrare autorevoli, l’agente agisce su una base epistemica compromessa, senza che nessun essere umano abbia letto, valutato o anche solo visto passare l’informazione.

Questo non è uno scenario ipotetico. Nel marzo 2026 il Washington Examiner ([https://www.washingtonexaminer.com/news/investigations/4501168/israel-funds-front-websites-push-chatgpt-promote-pro-war-messaging/](https://www.washingtonexaminer.com/news/investigations/4501168/israel-funds-front-websites-push-chatgpt-promote-pro-war-messaging/)) ha reso pubblico un contratto depositato presso il Dipartimento di Giustizia americano nell’ambito del Foreign Agents Registration Act. Il contraente è Clock Tower X, società di Brad Parscale. Il committente è il governo israeliano. L’oggetto dichiarato: “deployment of websites and content to deliver GPT framing results on GPT conversations.” Il compenso: nove milioni di dollari, con contratto rinnovato.

È la prima documentazione pubblica, contrattuale e registrata, di un tentativo sistematico di condizionare le risposte dei modelli linguistici attraverso tecniche di Generative Engine Optimization. I risultati concreti, nel breve termine, sembrano modesti: né Axios né il Washington Examiner sono riusciti a far citare ai modelli i siti costruiti da Parscale. Ma questa circostanza chiarisce la natura del rischio, non lo ridimensiona. Un vettore di attacco già operativo come intenzione strategica, ancora poco efficace, su una traiettoria di sofisticazione crescente: è esattamente il momento in cui vale la pena analizzarlo.

## Un concetto che precede la notizia

Tra il 2024 e il 2025 ho sviluppato il concetto di doxastic loop come categoria teorica per descrivere un fenomeno strutturale dei sistemi di intelligenza artificiale generativa. La definizione: un ciclo in cui le credenze generate dall’intelligenza artificiale vengono riassorbite nei dati di addestramento e restituite come nuove verità probabilistiche. Il meccanismo si articola in cinque fasi: addestramento su dati pubblici già impregnati di credenze; percezione di autorevolezza dell’output da parte dell’utente; affidamento e diffusione sociale; rafforzamento tramite viralità; re-ingestione nei cicli successivi di training.

Il concetto è documentato in una pubblicazione: The Windowless Library: Doxastic Loops and Epistemic Self-Confirmation in AI (SSRN, [Abstract ID 5627061](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5627051)), oltre che su Stultifera Navis ([https://www.stultiferanavis.it/la-rivista/la-biblioteca-senza-finestre](https://www.stultiferanavis.it/la-rivista/la-biblioteca-senza-finestre)).

La tesi centrale era che il doxastic loop non fosse un’anomalia tecnica correggibile, ma una condizione sistemica: il modo in cui il modello apprende e riproduce senso. Le patologie documentate, allucinazioni, sycophancy, model collapse, amplificazione dei bias, non sono guasti. Sono effetti strutturali del ciclo.

Il caso Parscale trasforma quella tesi in cronaca.

## Cosa cambia con l’AI agentica

Fino a qui il problema riguarda le credenze: informazioni false o orientate che circolano, si consolidano, rientrano nel training. Un problema epistemico, rilevante, ma contenuto nell’ordine del sapere.

L’AI agentica sposta il problema nell’ordine dell’azione.

Un sistema agentivo naviga, valuta, decide e agisce per conto di un utente o di un’organizzazione. Prenota, acquista, redige, invia, esegue. La fonte da cui trae il proprio frame cognitivo produce una traiettoria operativa, non una risposta.

In questo contesto, il doxastic loop inquina la decisione.

Se un agente AI deputato all’analisi geopolitica, alla sintesi di intelligence open source, o alla gestione di comunicazioni istituzionali opera su un ecosistema informativo in cui fonti costruite ad arte occupano posizioni di autorevolezza algoritmica, il problema operativo cambia natura. Un utente può leggere una risposta e dubitarne. Un agente agisce su quella risposta, spesso senza che nessun essere umano abbia letto la fonte, valutato il contenuto, o anche solo visto passare l’informazione.

La velocità di esecuzione degli agenti rende il loop invisibile nel momento in cui conta.

## Strumenti di contrasto e mitigazione

La risposta al doxastic loop come vettore di attacco su sistemi agentivi richiede un approccio a tre livelli: tecnico, istituzionale, operativo.

### Livello tecnico: interrompere il ciclo alla fonte

Il punto critico sta nell’acquisizione di contenuti costruiti come fonti autorevoli. La GEO funziona perché i modelli non distinguono tra autorevolezza epistemica e autorevolezza algoritmica.

La prima misura è la tracciabilità dinamica delle fonti nei sistemi RAG, che sono il cuore della maggior parte dei sistemi agentivi attuali. Ogni fonte recuperata dovrebbe portare metadati verificabili: data di creazione, storia delle modifiche, rete di citazioni, registrazione FARA o equivalente se prodotta da soggetti con interessi dichiarati verso governi stranieri. Rendere visibile l’origine delle fonti è una misura tecnica proporzionata e già implementabile.

La seconda è l’introduzione di indici di concentrazione narrativa. Se un agente recupera dieci fonti su un tema e otto convergono sulla stessa formulazione, la convergenza stessa è un segnale da trattare, non una conferma. I sistemi agentivi dovrebbero avere meccanismi di rilevamento della convergenza anomala, analoghi ai sistemi antifrode nel credito.

La terza è la separazione tra layer di recupero e layer di azione. Prima che un agente agisca su una base informativa, dovrebbe esistere un punto di verifica, umano o algoritmico, che valuti la qualità epistemica delle fonti. Nei sistemi ad alta autonomia questo punto tende a scomparire per ragioni di efficienza. È esattamente lì che il loop diventa operativo.

### Livello istituzionale: ridefinire la categoria di rischio

Il FARA esiste e ha funzionato: il caso Parscale è stato reso pubblico grazie a quel meccanismo. Ma il FARA è pensato per la comunicazione pubblica verso gli umani. Per la GEO come vettore di influenza sui modelli non esiste ancora un equivalente normativo.

Serve una estensione che classifichi la costruzione intenzionale di contenuti progettati per condizionare i sistemi AI come forma di influenza straniera soggetta a registrazione e controllo. La base legale esiste già; manca l’aggiornamento della categoria.

Sul piano europeo, l’AI Act prevede obblighi di trasparenza per i sistemi ad alto rischio, ma non affronta l’inquinamento delle fonti a monte del modello. La lacuna diventa critica nel momento in cui i sistemi agentivi entrano in uso istituzionale: amministrazioni, forze dell’ordine, infrastrutture critiche. Un registro pubblico europeo delle campagne di GEO identificate, gestito da un organismo indipendente con accesso ai dati delle piattaforme, sarebbe uno strumento concreto e proporzionato.

### Livello operativo: resilienza epistemica nei sistemi ad alto rischio

Per le organizzazioni che già usano sistemi agentivi in contesti sensibili, il problema è presente, non futuro.

La prima misura è la definizione di perimetri epistemici per gli agenti: quali fonti un agente può usare, con quale peso, con quale obbligo di verifica umana prima dell’azione. La catena di custodia dell’informazione ha valore operativo, non solo metodologico. L’analogia con la gestione delle fonti in ambito intelligence è diretta.

La seconda è la formazione specifica degli operatori che supervisionano sistemi agentivi: riconoscere la convergenza anomala delle fonti, identificare i segnali di GEO, sapere quando fermare un agente prima che agisca su una base informativa compromessa. Sono competenze operative.

Il punto centrale è questo: un sistema agentivo compromesso a livello epistemico produce decisioni coerenti, ben argomentate, basate su fonti apparentemente solide. La coerenza è il prodotto del loop. E la coerenza non attiva nessun alert.

### Conclusione

Il doxastic loop era, un anno fa, una categoria teorica sulla struttura epistemica dei modelli linguistici. Il caso Parscale lo trasforma in contratto pubblico, con budget e obiettivi dichiarati.

Ma il caso Parscale appartiene ancora al mondo in cui un umano riceve una risposta, ci crede o non ci crede, e decide. Con l’AI agentica quel momento scompare. L’umano esce dal ciclo di verifica. Il sistema agisce su basi epistemiche che nessuno ha controllato, producendo decisioni coerenti, ben argomentate, difficilmente distinguibili da decisioni fondate.

La coerenza è il prodotto del loop. E la coerenza non attiva nessun alert.

Questo è il cambio di paradigma che le categorie attuali di sicurezza non coprono. La minaccia cognitiva non lascia tracce nei log: le lascia nelle decisioni. Attrezzarsi per riconoscerla e contrastarla è una questione di infrastruttura, prima che di consapevolezza.