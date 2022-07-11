
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from 'styles/user.module.css'


const UserItem: FC = () => {
  const {usersList} =  useSelector((state:any)=>({...state.data}))
  return (
    <div >
        {usersList.map((user: { name: boolean | React.Key | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; mobile: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) =>  (
            // eslint-disable-next-line react/jsx-key
            <ul className={styles.ul1} >
                <li >{user.name}</li>
                <li>{user.mobile}</li>
                <li>{user.email}</li>
            </ul>
            )
        )}
    </div>
  )
}

export default UserItem