import './App.css';
import './index.css';
import cardData from './data'
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/card';

function App() {

  const cardElement = cardData.map (card => {
    return (
      <Card 
        key = {card.id}
        card = {card}
      />
    )   
  })

    return (
      <div className="App overflow-hidden px-4 md:px-12">
        <Header />
        <Hero />

        <div className="card-section flex overflow-auto">
          {cardElement} 
        </div>
        
      </div>
      
    )
}

export default App;