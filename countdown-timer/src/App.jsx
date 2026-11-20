import CountdownCard from "./components/CountdownCard";
import CountdownTimer from "./components/CountdownTimer";
import SocialLinks from "./components/SocialLinks";
function App() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#1c172b] bg-[url('/images/bg-stars.svg')] bg-cover bg-center">
            <img
              src="/images/pattern-hills.svg"
              alt=""
              className="absolute bottom-0 left-0 z-0 h-[200px] w-full md:h-[200px]"
            />
            <h1 className="relative z-10 mx-auto mt-24 max-w-[300px] text-center text-lg font-bold tracking-[0.4em] text-white uppercase sm:max-w-none">
                WE'RE LAUNCHING SOON
            </h1>
            
            <div className="absolute bottom-10 left-0 z-20 w-full"><SocialLinks/></div>
            <CountdownTimer/>
        </main>
    );
}

export default App;
