// import { log } from './tools/helpers.js'

const Button = (props) => {
  console.log('Component button')
  const greting = props.id ? props.id : 'Salut'
  return (
    <button class='btn btn-primary m-3'>{greting} 👋!</button>
  )
}

const main = (
    <div>
      <Button id='Hello'/>
      <Button />
    </div>
  )

const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(main)
