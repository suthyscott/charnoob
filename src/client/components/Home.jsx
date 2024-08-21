import { NavLink } from "react-router-dom"
const Home = () => {
  return (
    <div>
        <h1>Charnoob is a site for new D&D players to easily create a character - and learn the process along the way!</h1>
        <NavLink to='/root/new-char' className='bg-green-500'>Click here to make a new character</NavLink>
    </div>
  )
}

export default Home