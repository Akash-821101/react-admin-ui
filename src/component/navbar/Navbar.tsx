import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Ak-admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className='icon'/>
        <img src="/app.svg" alt="" className='icon'/>
        <img src="/expand.svg" alt="" className='icon'/>
        <div className="notifications">
          <img src="/notifications.svg" alt="" className='icon'/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
          <span>Akash</span>
        </div>

        <img src="/settings.svg" alt="" className='icon'/>
      </div>
    </div>
  )
}

export default Navbar