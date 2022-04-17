import './home.css';

import HomePoints from '../components/Home/HomePoints';
import SimpleBottomNavigation from '../components/Menu/Menu';
import ContainedButtons from '../components/Home/ViewRewards';
import TitlebarImageList from '../components/Prizes/Prizes';

const HomePage = () =>{
    return(
             <div class="homeContainer">
                <HomePoints />
                <ContainedButtons />
                <TitlebarImageList />

                <SimpleBottomNavigation />
            </div>
    );
}
 
export default HomePage;
