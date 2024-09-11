 
import './App.css';
import Blue from './components/Blue'
import Search from './components/Search'
import Active from './components/Active'
import Message from './components/Message'
import Hero from './components/Hero';

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-5">
      <div className="col-span-1 bg-indigo-700 grid">{/* add blue section */}
      
      <Blue/>
        
      </div>
      <div className="col-span-4 bg-gray-100 grid">
        <div className="grid grid-rows-10 gap-0.5">
          <div className="row-span-1 grid grid-cols-6 gap-0.5">
            <div className="col-span-4 bg-white grid">
              <Search/>
            </div>
            <div className="col-span-2  bg-white grid ">
               <Active/>
            </div>
          </div>
          <div className="row-span-9 grid grid-cols-6 gap-0.5">
            <div className="col-span-4 bg-white grid ">
              <Hero/>
            </div>
            <div className="col-span-2  bg-white grid">
               <Message/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
