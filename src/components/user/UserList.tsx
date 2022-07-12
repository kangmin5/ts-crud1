import { userListApi } from 'modules/apis/userApi'
import { Iuser } from 'modules/interfaces/Interface'
import { usersActions, UsersState } from 'modules/slices/usersSlice'
import { useAppSelector } from 'modules/store'
import { type } from 'os'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from 'styles/user.module.css'

export interface Tuser {
    
    name: string,
    email: string,
    mobile: string
    
}

const UserList: FC = () => {
    const userlist = useAppSelector((state) => (state.rootReducer.users))
    console.log('.......>>>>>',userlist)
    const [users, setUsers] = useState<Array<Iuser>>([])

    useEffect(() => {
         const t = [
            {"name":"홍길동","mobile":"010-3049-5485","email":"hong@test.com"},
            {"name":"이순신","mobile":"010-3902-9560","email":"sslee@dhte.com"},
            {"name":"김철수","mobile":"010-6969-4393","email":"cslim@gkfd.com"},
            {"name":"안중근","mobile":"010-1094-0939","email":"jka@kskdjf.com"}
            ]
         setUsers(t)
     }, [userlist])
    
    console.log(`setUser` + JSON.stringify(users))
    console.log(typeof users)

  return (
      <div className={styles.container}>
          <h2>User List</h2>
        <div className={styles.userList} >
            <ul className={styles.ul1}>
                <li>이름</li>
                <li>휴대번호</li>
                <li>이메일</li>
            </ul>
             <ul className={styles.ul2} >
               {users.map((user :  Iuser) =>
                   <li className={styles.li} key={user.name}>{user.name}{user.mobile}{user.email}</li>
                   
               )}
            </ul>
        </div>  
    </div>
  )
}

export default UserList