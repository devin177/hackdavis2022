import './account.css';
import { useEffect, useState } from 'react';
import UserSelect from '../../components/Home/UserSelect';
import SimpleBottomNavigation from '../../components/Menu/Menu';


const AccountPage = () =>{
    const [userType, setUserType] = useState('')
    const url='https://us-central1-aggierewards-ea14c.cloudfunctions.net/app/generate'
    useEffect(() => {
        const getQR = async () => {
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        username: {userType}
                    })
                }
            )
        }
    }, [])
    return(
             <div class="AccountContainer">
                <UserSelect userType={userType} setUserType={setUserType}/>
                <p> text </p>

                <SimpleBottomNavigation />
            </div>
    );
}
 
export default AccountPage;