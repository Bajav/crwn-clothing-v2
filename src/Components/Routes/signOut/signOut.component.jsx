import {useContext} from 'react'
import { UserContext } from '../../Contexts/user.context';


function SignOut() {
  const {currentUser} = useContext(UserContext);
  console.log("current user ::: ",currentUser);
  return (
    <div>SignOut</div>
  )
}

export default SignOut;