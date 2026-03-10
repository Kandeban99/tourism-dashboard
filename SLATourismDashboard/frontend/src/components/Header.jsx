import './Header.css';

import styles from './Header.module.css'

function Header() {

    const styleObj={color:'green',backgroundColor:'lightgrey',padding:'10px 10px',fontFamily:'sans-serif'};

  return (

    <>
    {/* <h1 style={{color:'red',backgroundColor:'lightblue',padding:'10px 10px',fontFamily:'sans-serif'}}>It  is header component</h1> */}

     <h1 >It  is header component</h1>

    <h1 className={styles.header}>kishomini is good girl and she is clever</h1>

    <h2 style={styleObj}>my best friend is kisho</h2>
    </>
  )
}

export default Header