import RightSide from "./Components/RightSide"
import LeftSide from "./Components/LeftSide"
function App() {

  return (
    <div className="flex flex-col items-center mt-11">
    <div className="md:hidden">
        <h1 className="text-4xl text-[#8c8c8c] uppercase font-semibold">fill the form</h1>
    </div>
    <section className="bg-[#070A12] flex flex-col md:flex-row text-white w-[90%] max-w-[1100px] mb-5 mt-5 mx-auto rounded-3xl overflow-hidden ring-2 ring-[#4b3ebe4d]">
  <LeftSide />
  <RightSide />
    </section>



    </div>
  )
}

export default App


