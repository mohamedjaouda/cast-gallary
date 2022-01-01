import React, {useEffect, useState} from 'react';
import Header from './components/ui/Header';
import CharacterCards from './components/characters/CharacterCards';
import Search from './components/ui/Search';
import './App.css'
import axios from 'axios';


const App = () => {

const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [query, setQuery] = useState('')


useEffect(() => {
  const fetchItems = async () => {
    setIsLoading(true)
    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    )

    setItems(result.data)
    setIsLoading(false)
  }

  fetchItems()
}, [query])

return (
  <div className='container'>
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterCards isLoading={isLoading} items={items} />
  </div>
)
}

export default App;
