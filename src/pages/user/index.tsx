import User from 'components/user/User'
import { NextPage } from 'next'
import React from 'react'
import styles from 'styles/user.module.css'

const UserPage:NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>UserPage</h1>
      <User/>
    </div>
  )
}

export default UserPage