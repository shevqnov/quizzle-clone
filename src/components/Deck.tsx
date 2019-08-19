import * as React from 'react'
import Card from './Card'
import { DeckType } from '../commonTypes';

interface Props extends DeckType { }

const Deck: React.FC<Props> = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h3>{props.name}</h3>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  )
}

export default React.memo(Deck)