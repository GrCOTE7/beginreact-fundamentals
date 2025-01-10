// import { log } from './tools/helpers.js'

const Button = (props) => {
  console.log('Component button')
  const greting = props.id ? props.id : 'Salut'
  const className = `btn btn-${props.className ? props.className : 'primary' } m-3`
  return (
    <button class={className}>{greting} 👋!</button>
  )
}

const main = (
    <div>
      <Button id='Hello'/>
      <Button className='outline'/>
    </div>
  )

const root = document.querySelector('#root')

ReactDOM.createRoot(root).render(main)
