import * as React from 'react'
import { CardType } from '../commonTypes'

interface Props extends CardType { }

const Card: React.FC<Props> = (props) => {
  const [isUpsideDown, setIsUpsideDown] = React.useState(false)
  return (
    <div>
      {isUpsideDown ? (
        <React.Fragment>
          <p>{props.meaning}</p>
          <img style={{ width: 100 }} src={props.image} alt={props.word}></img>
        </React.Fragment>
      ) : (
          <h4>{props.word}</h4>
        )}
      <button onClick={() => setIsUpsideDown(!isUpsideDown)}>Flip Card</button>
    </div>
  )
}

export default Card