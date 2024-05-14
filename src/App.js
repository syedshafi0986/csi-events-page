import './App.css';
import Nav from './components/Nav';
import Events from './components/Events';
import Cards from './components/cards';
import calendar from "./components/images/calendar.png"
import location from "./components/images/map.png"
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Events
     
      />
      <Cards
       title="stack spirint"
       date=":10th & 11th November2023"
       map={location}
       loc=":CIC lab"
       calendar={calendar}
       para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consectetur, reprehenderit ut consequuntur accusantium, veniam fugit magni similique illum laborum quaerat neque commodi deleniti. Adipisci, rem explicabo. Mollitia, accusantium cumque."/>
      <Cards
       title="stack spirint"
       date=":10th & 11th November2023"
       map={location}
       loc=":CIC lab"
       calendar={calendar}
       para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consectetur, reprehenderit ut consequuntur accusantium, veniam fugit magni similique illum laborum quaerat neque commodi deleniti. Adipisci, rem explicabo. Mollitia, accusantium cumque."/>
      <Cards
       title="stack spirint"
       date=":10th & 11th November2023"
       map={location}
       loc=":CIC lab"
       calendar={calendar}
       para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi consectetur, reprehenderit ut consequuntur accusantium, veniam fugit magni similique illum laborum quaerat neque commodi deleniti. Adipisci, rem explicabo. Mollitia, accusantium cumque."/>
        <Footer/>

    </div>
  );
}

export default App;
