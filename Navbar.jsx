import classes from "./Navbar.module.css"

// let classes = {
//   "nav": "Navbar_nav__3ou9q",
//   "item": "Navbar_item__3qaF3"
// }

const Navbar = () => {
    return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <a href="/Profile">
          Profile
          </a>
        </div>
        <div className={classes.item}>
          <a href="/Dialogs">
          Messages
          </a>
        </div>
        <div className={classes.item}>
          <a>
          News
          </a>
        </div>
        <div className={classes.item}>
          <a>
          Music
          </a>
        </div>
        <div className={classes.item}>
          <a>
          Settings
          </a>
        </div>
     
      
    </nav>
    )
}

export default Navbar