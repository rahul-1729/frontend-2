 
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-5">
      <div className="col-span-1 bg-indigo-700">{/* add blue section */}</div>
      <div className="col-span-4 bg-gray-100 grid">
        <div className="grid grid-rows-10 gap-1">
          <div className="row-span-1 grid grid-cols-5 gap-1">
            <div className="col-span-3 bg-white">
              {/* search section */}
            </div>
            <div className="col-span-2  bg-white">
              {/* active section  */}
            </div>
          </div>
          <div className="row-span-9 grid grid-cols-5 gap-1">
            <div className="col-span-3  bg-white">
              {/* scroll section */}
            </div>
            <div className="col-span-2  bg-white">
              {/* message section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
