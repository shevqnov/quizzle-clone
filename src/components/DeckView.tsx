import * as React from 'react'
import { DeckType, CardType } from '../commonTypes';
import Deck from './Deck';
import AddCard from './AddCard';

interface Props extends DeckType { }

const DeckView: React.FC<Props> = (props) => {
  const [cards, setCards] = React.useState<CardType[]>(props.cards)
  const handleSubmit = (card: CardType) => {
    setCards([...cards, card])
  }
  return (
    <React.Fragment>
      <Deck {...props} cards={cards} />
      <AddCard onSubmit={handleSubmit} />
    </React.Fragment>
  )
}

export default DeckView