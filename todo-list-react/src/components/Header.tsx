import todologo from '../assets/Logo.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo}/>
    </header>
  )
}

export default Header