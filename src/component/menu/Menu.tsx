import { Link } from 'react-router-dom'
import {menu} from '../../data'
import './menu.scss'

const Menu = () => {


  return (
  <div className='menu'>
     {menu.map((item) => (


       <div className="item" key={item.id}>
       <span className='title'>{item.title}</span>

       {item.listItems.map((link) => (
         <Link to="/" className='listItem' key={link.id}>
         <img src={link.url + link.icon} alt="" />
         <span className='listItemTitle'>{link.title}</span>
         </Link>
       ))}
      
       
     </div>
     ))}
    
    </div>
  )
}

export default Menu