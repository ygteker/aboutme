import './App.css';
import NavbarElement from './components/NavbarElement';

function App() {
  return (
    <div className='fixed w-screen bg-mainbg h-screen'>
      <div className='flex space-x-4 backdrop-blur-md rounded-md m-2 p-4 shadow-md'>
        <NavbarElement text='Home' />
        <NavbarElement text='About' />
        <NavbarElement text='Contact' />
      </div>
    </div>
  );
}

export default App;
