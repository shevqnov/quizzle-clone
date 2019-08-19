import React from 'react';
import './App.css';
import { DeckType } from './commonTypes';
import DeckView from './components/DeckView';

const decks: DeckType[] = [
  {
    id: 1, name: 'test deck', cards: [
      { id: 1, word: 'cow', meaning: 'korova', image: 'https://img.huffingtonpost.com/asset/5c3fc13e25000031007db54e.jpeg?cache=vlonxixb43&ops=scalefit_720_noupscale' },
      { id: 2, word: 'fox', meaning: 'lisichka', image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/6261/production/_104458152_nov23-foxhuntjimfeng.jpg' }
    ]
  }
]

const App: React.FC<{}> = () => {

  return (
    <div className="App">
      <DeckView {...decks[0]} />
    </div>
  );
}

export default App;
