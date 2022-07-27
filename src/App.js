import {useState, useEffect} from 'react'

function App() {
const [friends, setFriends] = useState([])
const [filter, setFilter ] = useState('')

useEffect(()=> {
  const getFriends = async () => {
    let req = await fetch("http://localhost:3001/friends");
    let res = await req.json()
    setFriends(res)
  }
  getFriends()
},[])



const handleRender = () => {
 
    let filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(filter.toLowerCase()))
    return filteredFriends

}

let friendsList = 
handleRender().map((friend) => {
  return (
    <div key={friend.id}>
      {friend.name} {friend.email}
    </div>
  );
});

  return (
    <div className="App">
  <h2>Friends</h2>
  <input type="text" placeholder='Enter a friend name' onChange={(e)=> {setFilter(e.target.value)}} />
  {friendsList}
    </div>
  );
}

 export default App;

// function App() {
//   const [friends, setFriends] = useState([])
//   const [allFriends, setAllFriends] = useState([])

//   const handleChange = (e) => {
//     if (e.target.value === '') return setFriends(allFriends)
//     const filteredFriends = friends.filter((f) => f.name.toLowerCase().includes(e.target.value.toLowerCase()))
//     setFriends(filteredFriends)
//   }

//   useEffect(() => {
//     const getFriends = async () => {
//       let req = await fetch('http://10.129.2.235:3001/friends')
//       let res = await req.json()
//       setFriends(res)
//       setAllFriends(res)
//     }
//     getFriends()
//   }, [])

//   return(
//     <div className="App">
//       <h2>Friends</h2> 
//       <input type="text" placeholder="Enter a friend name" onChange={handleChange} />
//       {
// 	friends.map((friend) => {
// 	  return(
// 	    <div key={friend.id}>
// 	      {friend.name} {friend.email} 
// 	    </div>
//   	  )
// 	})
//       }
//     </div>
//   );
// }

// export default App;