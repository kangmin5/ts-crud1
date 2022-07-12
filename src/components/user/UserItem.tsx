
import { Iuser } from 'modules/interfaces/Interface'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from 'styles/user.module.css'


const UserItem:FC<{users:Iuser[]}> = (props) => {

  return (
    <div >
      <ul className={styles.ul1} >
        {props.users.map((users,idx) => (
            <li key={idx}>{users.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserItem