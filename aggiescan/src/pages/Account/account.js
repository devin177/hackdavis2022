import './account.css';
import { useEffect, useState } from 'react';
import UserSelect from '../../components/Home/UserSelect';
import SimpleBottomNavigation from '../../components/Menu/Menu';
import QRcode from '../../components/Scan/qrcode';

const AccountPage = () => {
    const [userType, setUserType] = useState('Student')
    const [uri, setURI] = useState('')
    const url = 'https://us-central1-aggierewards-ea14c.cloudfunctions.net/app/generate'
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
            setURI(response)
        }
        getQR();
    }, []);
    return(
             <div class="AccountContainer">
                <UserSelect userType={userType} setUserType={setUserType}/>
                <h1>{uri}</h1>
                <QRcode />
                <SimpleBottomNavigation />
            </div>
    );
}
 
export default AccountPage;