export default function Navbar(){
    return(
        <div className="flex justify-between text-white items-center">
            <h1 className="font-bold text-2xl">devfinder</h1>
            <span className="flex items-center">
                <p className="pr-3 font-bold text-sm tracking-widest">LIGHT</p>
                <img src="/images/icon-sun.svg" alt="light-theme"></img>
            </span>
        </div>
    )
}