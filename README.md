# martinopirella.com

Sito personale di Martino Pirella — Consulenza e Formazione per l'Intelligenza Artificiale.

Costruito con [Astro](https://astro.build/), ospitato su GitHub Pages.

## Setup locale

```bash
npm install
npm run dev       # Apre http://localhost:4321
npm run build     # Genera il sito in ./dist
npm run preview   # Anteprima del build
```

## Deploy

Il sito si aggiorna automaticamente con ogni push sul branch `main` tramite GitHub Actions.

## Struttura

```
src/
├── layouts/Base.astro     # Layout principale (nav + footer)
├── pages/                 # Le pagine del sito
│   ├── index.astro        # Home
│   ├── chi-sono.astro     # Chi sono
│   ├── servizi.astro      # Servizi
│   ├── collaborazioni.astro
│   ├── articoli.astro     # Lista articoli
│   ├── articoli/[slug].astro  # Singolo articolo
│   ├── risorse.astro      # Risorse/strumenti
│   └── contatti.astro     # Contatti
├── content/articoli/      # Articoli in Markdown
├── styles/global.css      # Design system
public/
├── images/                # Immagini del sito
└── tools/                 # Pagine HTML standalone (proposte, checklist, ecc.)
```

## Aggiungere contenuti

### Nuovo articolo
Crea un file `.md` in `src/content/articoli/`:

```markdown
---
title: "Titolo dell'articolo"
date: 2026-06-09
slug: "slug-dell-articolo"
excerpt: "Breve descrizione"
---

Contenuto dell'articolo in Markdown...
```

### Pagina HTML standalone
Copia il file `.html` nella cartella `public/tools/`. Sarà raggiungibile a:
`martinopirella.com/tools/nome-file.html`
