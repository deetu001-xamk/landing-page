import './App.css'
import Carousel from './components/Carousel'
function App() {

  return (
    <>
      <div>

        <h1>Eetu Turtiainen</h1>
        <p>Web Developer</p>
        <p>React / Typescript / NodeJS</p>
      
      </div>

      <div>
        <h3>About me</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Montes nascetur ridiculus mus mauris. Sit amet dictum sit amet. 
           Consequat id porta nibh venenatis. Porta nibh venenatis cras sed felis eget velit.
            Elit ullamcorper dignissim cras tincidunt lobortis. 
        </p>
      </div>
      <div>
        <h3>Projects</h3>
        <p>Here are some of my projects</p>
        <Carousel images={["https://via.placeholder.com/200", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]} />
      </div>


    </>
  )
}

export default App
