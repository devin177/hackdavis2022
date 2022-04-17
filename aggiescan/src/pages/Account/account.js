import './account.css';
import { useEffect, useState } from 'react';
import UserSelect from '../../components/Home/UserSelect';
import SimpleBottomNavigation from '../../components/Menu/Menu';
import QRcode from '../../components/Scan/qrcode';

const AccountPage = () => {
    const [userType, setUserType] = useState('Student')
    const [uri, setURI] = useState('data:image/png;base64,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')
    const url = 'https://us-central1-aggierewards-ea14c.cloudfunctions.net/app/generate'
    // useEffect(() => {
    //     const getQR = async () => {
    //         const response = await fetch(
    //             url,
    //             {
    //                 method: 'POST',
    //                 body: JSON.stringify({
    //                     username: {userType}
    //                 })
    //             }
    //         )
    //         setURI(response)
    //     }
    //     getQR();
    // }, []);
    return(
             <div class="AccountContainer">
                <UserSelect userType={userType} setUserType={setUserType}/>
                <QRcode uri={uri}/>
                <SimpleBottomNavigation />
            </div>
    );
}
 
export default AccountPage;
