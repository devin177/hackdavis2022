import * as React from 'react';
import SimpleBottomNavigation from '../../components/Menu/Menu';
import './giveaway.css'
import GiveawayCards from '../../components/Giveaways/Giveaways';

function Giveawaypage() {

  return (
    <div class="giveawayContainer">
      <GiveawayCards />

      <SimpleBottomNavigation />
    </div>
  );
}

export default Giveawaypage;