 
import './App.css';
import Blue from './components/Blue'

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-5">
      <div className="col-span-1 bg-indigo-700 grid">{/* add blue section */}
      
      <Blue/>
        
      </div>
      <div className="col-span-4 bg-gray-100 grid">
        <div className="grid grid-rows-10 gap-1">
          <div className="row-span-1 grid grid-cols-5 gap-1">
            <div className="col-span-3 bg-white grid">
              {/* search section */}
            </div>
            <div className="col-span-2  bg-white grid ">
              {/* active section  */}
            </div>
          </div>
          <div className="row-span-9 grid grid-cols-5 gap-1">
            <div className="col-span-3  bg-white grid ">
              {/* scroll section */}
            </div>
            <div className="col-span-2  bg-white grid">
              {/* message section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
