import React, { FC } from 'react'
import styles from 'styles/user.module.css'
import UserItem from './UserItem'

const UserList:FC = () => {
  return (
      <div className={styles.userList}>
          <h2>User List</h2>
        <div >
            
            <ul className={styles.ul}>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
            <UserItem/>
        </div>  
    </div>
  )
}

export default UserList