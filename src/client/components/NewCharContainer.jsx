import {useState} from 'react'
import { choices } from '../../../choices'

const NewCharContainer = () => {
  // const [selections, setSelections] = useState([])
  const [magicLevel, setMagicLevel] = useState(null)

  console.log(choices)
  return (
    <div>
      <section>
        <h1>How much magic do you want to use?</h1>
          { !magicLevel && choices.magicLevel.options.map(option => {
            return <div key={option}>
              <button onClick={() => setMagicLevel(option)}>{option}</button>
            </div>
          })}
          
      </section>
    </div>
  )
}

export default NewCharContainer