
import './App.css';
// import './react.jsx';
import React from 'react';
import Designer from './components/Designer';
import Skill from './components/Skill';
import { BsFillCalendar2XFill, BsFillCalendarWeekFill } from 'react-icons/bs';
import { FaStarOfLife } from 'react-icons/fa'
import { MdEmail, MdWork, MdHomeWork } from 'react-icons/md'
import { IoIosCall } from 'react-icons/io'
import { GiWorld } from 'react-icons/gi'


function App() {
  return (
    <>
      <div className='header_cv'>
        <header>
          <img src='Image/avatar_hat.jpg' alt=''></img>
          <p className='para'>Jane Doe</p>
        </header>
        <div className='container'>
          <div className='row'>
            <main>
              <Designer><span className='i'><BsFillCalendar2XFill /></span>  Designer</Designer>
              <Designer><span className='i'><MdHomeWork /></span> London, UK</Designer>
              <Designer><span className='i'><MdEmail /></span> ex@mail.com</Designer>
              <Designer><span className='i'><IoIosCall /></span> 1224435534</Designer>
            </main>
            <hr></hr>
          </div>
        </div>
        <section className='ski'>
          <Designer><span className='i'><FaStarOfLife /></span> <span className='text'>Skill</span></Designer>

          <p>Adobe Photoshop</p>
          <div className='color'>
          <Skill value={85}></Skill>
          </div>
          <p>Photography</p>
          <div className='color'>
          <Skill value={80}></Skill>
          </div>

          <p>Illustrator</p>
          <div className='color'>
          <Skill value={75}></Skill>
          </div>

          <p>Media</p>
          <div className='color'>
            <Skill value={50}></Skill>
          </div>
        </section>

        <footer className='footer'>

          <Designer><span className='i'><GiWorld /></span> <span className='text'>Language</span></Designer>

          <p>English</p>
          <div className='color'>
          <Skill value={70}></Skill>
          </div>

          <p>Spanish</p>
          <div className='color'>
          <Skill value={60}></Skill>
          </div>


          <p>German</p>
          <div className='color'>
          <Skill value={49}></Skill>
          </div>
        </footer>

      </div>
    </>

  );
}

export default App;
