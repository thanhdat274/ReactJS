import React from 'react'
import styles from './square.module.css'

const Square = (props) => {
  console.log(props);
  let bg;
  if(props.stt[props.abc]===true){
    bg={background:'green'}
  }
  return (  
    <button onClick={props.handPlay} className={styles.hop} style={bg}>
      {props.value}
    </button>
  )
}

export default Square