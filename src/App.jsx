import RightSide from "./Components/RightSide"
import LeftSide from "./Components/LeftSide";
import Modal from "./Components/Modal";
 
function App() {

  return (
    <div  className="flex flex-col items-center w-full">
    <div className="md:hidden mt-10">
        <h1 className="text-4xl text-[#202020] capitalize font-semibold">fill the form</h1>
    </div>
    <section className="bg-[#070A12] flex flex-col md:flex-row my-5 text-white w-[90%] max-w-[1100px] mx-auto rounded-3xl overflow-hidden ring-2 ring-[#4b3ebe4d]">
    <LeftSide/>
    <RightSide />
    </section>
    </div>
  )
}

export default App


