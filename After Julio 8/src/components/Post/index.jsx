import React from 'react';
import styles from './styles.module.scss';

const Post = ({title, children}) => {
  return (
    <div className={styles.container}>
        <h4>{title}</h4>
        {children}
    </div>
  )
}

export default Post