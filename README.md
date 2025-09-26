# Art Gallery

## Introduzione
**Art Gallery** è un'applicazione web sviluppata in **React**.  
L’app permette di **scoprire artisti**, **commentare le loro opere** e **rimanere aggiornati sugli eventi legati al mondo dell’arte**,
offrendo un’esperienza interattiva e modulare grazie a componenti riutilizzabili e scalabili.

## Obiettivi
- Creare una struttura modulare e manutenibile.  
- Gestire componenti riutilizzabili.  
- Separare chiaramente logica, stile e presentazione.  
- Offrire funzionalità social e informative per gli utenti interessati all’arte.

## Struttura del progetto

```plaintext
src/
│
├─ assets/           # Risorse statiche (immagini, icone, ecc.)
├─ components/
│  ├─ atoms/         # Componenti base (Button, Input, Heading, Image)
│  ├─ molecules/     # Combinazioni di atoms (Card, CommentList, Preview)
│  ├─ organisms/     # Combinazioni più complesse (Header, Gallery, EventSection)
├─ service/          # Funzioni per API, fetch dati
├─ App.jsx           # Componente principale
├─ App.css           # Stile globale del progetto
├─ index.css         # Stile di base
└─ main.jsx          # Entry point dell'app
```

### Dettaglio dei componenti principali

#### Atoms
Elementi fondamentali, riutilizzabili, senza logica complessa:
- `Button.jsx`
- `Heading.jsx`
- `Image.jsx`
- `Input.jsx`

#### Molecules
Combinazioni di atoms con logica più specifica:
- `Card.jsx`
- `CommentList.jsx`
- `Preview.jsx`

#### Organisms
Combinazioni complesse che formano sezioni dell’interfaccia:
- `EventSection.jsx`
- `Gallery.jsx`
- `Header.jsx`

#### Service
- `api.js` → gestione delle chiamate API.

## Funzionamento dell’app
- `main.jsx` monta l’applicazione React.  
- `App.jsx` contiene la struttura principale e include gli organisms.  
- Gli organisms aggregano molecules e atoms per costruire l’interfaccia.  
- `service/api.js` gestisce la comunicazione con eventuali backend o dati esterni, come artisti, commenti ed eventi.

## Stile e layout
- `App.css` → stili globali per i componenti principali.  
- `index.css` → stili di base e reset CSS.

## Possibili sviluppi futuri
- Aggiungere nuove features e organisms per migliorare l’esperienza utente.  
- Migliorare la gestione dello stato (ad esempio con Redux o Context API).  
- Aggiungere test unitari per i componenti.  
- Integrare notifiche o feed in tempo reale sugli eventi e le attività degli artisti.

