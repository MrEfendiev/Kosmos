import { useState } from 'react';
import  Header  from './Header';
import './App.css';

import { Routes, Route, Link, BrowserRouter, Router } from 'react-router-dom';
import  Home  from './Home';
import About from './CosmoCoin';
import Auth from './Auth';
import CosmoCoin from './CosmoCoin';
import ICO from './ICO';
import ICOTOO from './ICO_TOO';
import RoapMap from './RoapMap';
import Team from './Team';
import Contacts from './Contacts';
import Novosti from './Novosti';
import Slaider from './Slaider';
import Registration from './Registration';
import Entrance from './Entrance';
import PersonalArea from './ PersonalArea';
import CosmoWallet from './CosmoWallet';
import Wallet from './Wallet';
import PurchaseCSM from './PurchaseCSM';
import BuyCosmoCoin from './BuyCosmoCoin';
import PayCSM from './ PayCSM';
import Agree from './Agree';
import CreateReferralLink from './CreateReferralLink';
import Sliiider from './Sliiiider';
import ReferralStats from './ ReferralStats';
import BookUser from './BookUser';
import BookUserToo from './BookUserToo';
import PersonalData from './PersonalData';
import Motivation from './Motivation';
import BTC from './ BTC';
import ETH from './ETH';
import CSM from './CSM';
import ConclusionMotivation from './ConclusionMotivation';
// import Main from './Main';

function App() {


    const [user, setUser] = useState({})

  return (
    
      <div className='Wrappper'> 
       
          <div className='content'>
            <div className='container'>
              <Routes> 
                  <Route path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Auth" element={<Auth/>}/>
                  <Route path="/CosmoCoin" element={<CosmoCoin/>}/>
                  <Route path="/ICO" element={<ICO/>}/>
                  <Route path="/ICOTOO" element={<ICOTOO/>}/>
                  <Route path="/RoapMap" element={<RoapMap/>}/>
                  <Route path="/Team" element={<Team/>}/>
                  <Route path="/Contacts" element={<Contacts/>}/>
                  <Route path="/Novosti" element={<Novosti/>}/>
                  <Route path="/Slaider" element={<Slaider/>}/>
                  <Route path="/Registration" element={<Registration user={user} setUser={setUser} />}/>
                  <Route path="/Entrance" element={<Entrance/>}/>
                  <Route path="/PersonalArea" element={<PersonalArea/>}/>
                  <Route path="/CosmoWallet" element={<CosmoWallet/>}/>
                  <Route path="/Wallet" element={<Wallet/>}/>
                  <Route path="/PurchaseCSM" element={<PurchaseCSM/>}/>
                  <Route path="/BuyCosmoCoin" element={<BuyCosmoCoin/>}/>
                  <Route path="/PayCSM" element={<PayCSM/>}/>
                  <Route path="/Agree" element={<Agree/>}/>
                  <Route path="/CreateReferralLink" element={<CreateReferralLink/>}/>
                  <Route path="/Sliiider" element={<Sliiider/>}/>
                  <Route path="/ReferralStats" element={<ReferralStats/>}/>
                  <Route path="/BookUser" element={<BookUser/>}/>
                  <Route path="/BookUserToo" element={<BookUserToo/>}/>
                  <Route path="/PersonalData" element={<PersonalData/>}/>
                  <Route path="/Motivation" element={<Motivation/>}/>
                  <Route path="/BTC" element={<BTC/>}/>
                  <Route path="/ETH" element={<ETH/>}/>
                  <Route path="/CSM" element={<CSM/>}/>
                  <Route path="/ConclusionMotivation" element={<ConclusionMotivation/>}/>
                  {/* <Route path="/Main" element={<Main/>}/> */}
              </Routes>
            </div>
          </div>
      </div>
      

      
  );
}

        
 

export default App;
