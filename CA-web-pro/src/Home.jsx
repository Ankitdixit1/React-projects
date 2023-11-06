import { Header } from "./components/Header";
import mainimg from "./assets/Left.png"
import "./App.css";

function Home() {
  return (
    <>
      <div className="bg-gradient pt-8 ">
        <div className=" mx-20"><Header></Header></div>
        <div className="flex justify-center items-center mt-16">
          <div className="left text-start mr-24 ">
            <h1 className="font-Poppins text-[65px] leading-[80px] font-black">
              Find <span className="bg-gradient-text">Partners</span> (CAs) <br /> available online
            </h1>
            <p className="text-xl opacity-80 my-6">
              <span className="font-bold">CONNECT</span> with us where your services are listed and
              visible to a myriad <br /> of businesses seeking CA's for compliance
              support
            </p>
            <div className="relative mt-12">
              <input className="w-[640px] h-[73px] rounded-xl border-2 text-start pl-7 outline-none font-Poppins text-lg" type="text" placeholder="Search by name" />
              <button className="left-[455px] absolute text-white text-xl font-bold w-[186px] h-[73px] bg-[#0076CE] rounded-xl">Search</button>
            </div>
          </div>
          <div className="right ml-3"><img src={mainimg} alt="" srcset="" /></div>
        </div>
      </div>
    </>
  );
}

export default Home;
