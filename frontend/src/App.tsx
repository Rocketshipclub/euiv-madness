import React, { useEffect, useState } from 'react';
import { Country } from './Country';
import { IdeaGroup } from './IdeaGroup';
import { Achievement } from './Achievement';
import './App.css';
import axios from 'axios';

function App() {
  
  const [challenge, setChallenge] = useState({
    country: {
      name: '',
      id: ''
    },
    ideaGroups: [{
      id: 0,
      group: '',
      name: ''
    }],
    achievements: [{
      id: 0,
      name: '',
      summary: ''
    }]
  });


  useEffect(() => {
    async function getChallenge() {
      const result = await axios.post('http://localhost:5000/api/challenges/', {
      continents: [1,2,3,4], ideaGroupsNumber: 1, achievementsNumber: 1}, { headers: {"Access-Control-Allow-Origin": "*"}});
      setChallenge(result.data);
    }
    getChallenge();
  }, [])

  const country = challenge.country !== null ? <Country name={challenge.country.name} flag={challenge.country.id}/> : <div></div>
  const groups = challenge.ideaGroups.length > 0 ? challenge.ideaGroups.map(group => <IdeaGroup key={group.id} name={group.name} group={group.group}/> ) : <div>No Groups Found</div>
  const achievements = challenge.achievements.length > 0 ? challenge.achievements.map(achievement => <Achievement key={achievement.id} name={achievement.name} summary={achievement.summary}/>) : <div></div>
  return (
    <div className="App">
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", margin:"2em 33% 0 33%"}}>
      {country}
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", margin:"2em 33% 0 33%"}}>
        {groups}
      </div>
      <hr style={{margin:"2em 33% 0 33%"}}/>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", marginTop:"2em"}}>
        {achievements}
      </div>
    </div>
  );
}

export default App;
