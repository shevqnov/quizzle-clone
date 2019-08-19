import * as React from 'react'
import { CardType } from '../commonTypes'

interface Props extends CardType { }

const Card: React.FC<Props> = (props) => {
  const [isUpsideDown, setIsUpsideDown] = React.useState<boolean>(false)
  const [checked, setChecked] = React.useState<boolean>(false)
  return (
    <div style={{
      padding: 10,
      margin: 15,
      backgroundColor: checked && !isUpsideDown ? 'green' : '#ccc',
      width: 300,
      height: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 5,
    }} onClick={() => {
      setChecked(true)
      setIsUpsideDown(!isUpsideDown)
    }}>
      {isUpsideDown ? (
        <React.Fragment>
          <p>{props.meaning}</p>
          <img style={{ width: 150 }} src={props.image} alt={props.word}></img>
        </React.Fragment>
      ) : (
          <b style={{ fontSize: 26 }}>{props.word}</b>
        )}
    </div>
  )
}

export default React.memo(Card)