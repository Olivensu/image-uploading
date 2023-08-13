import './app.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Pages/Shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';


function App() {
  

  return (
    <>
      <div className='m-auto text-center'>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
