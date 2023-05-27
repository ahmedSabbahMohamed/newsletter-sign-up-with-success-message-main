import Aside from "./Components/Aside";
import Form from "./Components/Form";
import Thank from "./Components/Thank";

function App() {
  return (
    <>
      <main>
        <div className="subscribe bg-white pb-6 md:p-5 md:m-4 rounded-xl flex items-center flex-col-reverse md:flex-row gap-4">
          <div className="flex-1 px-6">
          <Form />
          </div>
          <div className="flex-1">
          <Aside />
          </div>
        </div>
        <div className="success hidden">
          <Thank />
        </div>
      </main>
    </>
  );
}

export default App;
