import * as React from 'react'
import { CardType } from '../commonTypes';

interface Props {
  onSubmit: (state: CardType) => void
}

const initialState = {
  word: '',
  image: '',
  meaning: '',
  id: new Date().getTime()
}

const AddCard: React.FC<Props> = (props) => {
  const [formState, setFormState] = React.useState<CardType>(initialState)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setFormState(initialState)
    props.onSubmit(formState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget
    setFormState({ ...formState, [name]: value })
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor='word'>Word: </label>
        <input name='word' onChange={handleChange} value={formState.word} />
        <label htmlFor='meaning'>Meaning:</label>
        <input name='meaning' onChange={handleChange} value={formState.meaning} />
        <label htmlFor='image'>Link to image:</label>
        <input name='image' onChange={handleChange} value={formState.image} />
        <button type='submit'>Add Card</button>
      </form>
    </React.Fragment >
  )
}

export default AddCard