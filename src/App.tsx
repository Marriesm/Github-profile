import { useState } from 'react';
import styles from './styles/App.module.scss'
import Search from './components/Pages/Search';
import ProfileCard from './components/Pages/ProfileCard';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className={styles.container}>
     <div className={styles.containerTwo}>
      <div className={styles.title}>
        <img src="/Github.png" alt="GitHub" /> 
        
      </div>
         <Search onSearch={setUser} />
        {user && <ProfileCard user={user} />}
      </div>
      
    </div>
  )
}


export default App

