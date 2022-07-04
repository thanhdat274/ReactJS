import React from 'react'
import styles from './square.module.css'

const Square = ({value, handPlay}) => {
  return (  
    <button onClick={handPlay} className={styles.hop}>
      {value}
    </button>
  )
}

export default Square