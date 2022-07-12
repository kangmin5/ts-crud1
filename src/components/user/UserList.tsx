import { userListApi } from 'modules/apis/userApi'
import { Iuser } from 'modules/interfaces/Interface'
import { usersActions, UsersState } from 'modules/slices/usersSlice'
import { useAppSelector } from 'modules/store'
import React, { FC, useEffect, useState } from 'react'
import styles from 'styles/user.module.css'


const UserList:FC= () => {
    const userlist = useAppSelector((state) => (state.rootReducer.users))
    console.log('.......>>>>>',userlist)
    const [users, setUsers] = useState<Iuser[]>([])

    
  return (
      <div className={styles.userList}>
          <h2>User List</h2>
        <div >
            <ul className={styles.ul}>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
             <ul className={styles.ul1} >
                  {users.map((user,id) => (
                      <li key={id}>{user.name}</li>
                )) }
            </ul>
        </div>  
    </div>
  )
}

export default UserList