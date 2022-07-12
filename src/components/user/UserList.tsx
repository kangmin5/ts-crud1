import { Iuser } from 'modules/interfaces/Interface'
import { usersActions } from 'modules/slices/usersSlice'
import { useAppSelector } from 'modules/store'
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

         setUsers(userlist)
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
                   <li className={styles.li} key={user.name}> {user.name}{user.mobile}{user.email}</li>
                   
               )}
            </ul>
        </div>  
    </div>
  )
}

export default UserList

function useAppDispatch() {
    throw new Error('Function not implemented.')
}
function AppDispatch(arg0: { payload: undefined; type: string }) {
    throw new Error('Function not implemented.')
}

