
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbars from './components/layouts/Navbars';
import { Col, Row } from 'react-bootstrap';
// import Home from './components/pages/Home'
// import Layouts from './components/Layouts';
// import { Navbar } from 'react-bootstrap';
// import Main from './components/pages/Main';
// import Footer from './components/layouts/Footer';

// import Tabbar from './components/layouts/Tabbar';

// import Flow from './components/pages/Flow';
// import FlowChengai from './components/pages/FlowChengai';
// import FlowRO from './components/pages/FlowRO';
// import FlowROSkybolt from './components/pages/FlowROSkybolt';

function App() {
  return (
    <Router>
      <Row>
        {/* <Tabbar /> */}
        <Col>


          <Navbars />
          {/* <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/home' exact component={Home}></Route>
            <Route path='/flow' exact component={Flow}></Route>
            <Route path='/chengai' exact component={FlowChengai}></Route>
            <Route path='/ro' exact component={FlowRO}></Route>
            <Route path='/skybolt' exact component={FlowROSkybolt}></Route>
          </Switch>
          <Footer /> */}
        </Col>
      </Row>
    </Router>
  );
}

export default App;
