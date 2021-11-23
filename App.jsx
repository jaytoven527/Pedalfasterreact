import logo from './logo.svg';
import './App.scss';
import { format } from 'date-fns';
import {useMemo, useState, useCallback} from 'react';
import Main, {HomeBody} from './components/Main/Main';
function Header({changeKey}) {
  const navItems = useMemo(() => {
    return [
      "home",
      "news",
      "archives",
      "about",
      "contact",
      changeKey
    ]
  }, []);

  
  return (
    <header id="main-header">
        <div id="main-logo" class="image-container">
          <div className="main-image">Pedal Faster</div>
          <div className="subtitle">The Modern Bicycle Magazine</div>
        </div>
        <nav role="menu">
          <ul className="nav-list" role="navigation">
            {
              navItems.map(item => (
                <li key={item}>
                  <a href={'/' + item}>{item}</a>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
  );
}

function Footer({currentDate}) {
  return (
    <footer>
      Copyright &copy; {currentDate}
    </footer>
  );
}




function Page({which}) {
  switch (which) {
    case 'home':
      const title = "Fixed Gear Forever";

      return (
        <Main>
         <HomeBody /> 
        </Main>
      );
    default: 
      return (
        <Main />
      );
    }
}


function App() {
  const currentDate = useMemo(() => format(new Date, 'mm/dd/yyyy'), []);
  const [changeKey, setChangeKey] = useState('hello');
  const change = useCallback(
    () => {
      setChangeKey(Date.now());
    },
    [],
  )

  return (
    <div className="App">
      <button onClick={change}>Click</button>
      <Header changeKey={changeKey}/>
      <Page which="home" />
      <Footer currentDate={currentDate} />
    </div>
  );
}

export default App;
