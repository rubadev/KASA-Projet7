import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import './App.css';
import {Header,Container,Footer} from './index1'
import {Home,Logement,Propos,Error} from '../Pages/index'

const App = () => {
  return(
    <>
    <Router>
        <Header/>
          <Container>
            <Routes>
             <Route path='/' element ={<Home/>}/>
             <Route path='/propos' element ={<Propos/>}/>
             <Route path='/logement/:id' element ={<Logement/>}/>
             <Route path='*' element ={<Error/>}/>
            </Routes>
          </Container>
        <Footer/>
    </Router>
    </>
  )
}

export default App;
