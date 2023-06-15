export default function Searchbar(prop){
    return(
    <form onSubmit = {prop.onClick} className={`${prop.dark ? "bg-navy-blue" : "bg-white"} flex justify-between rounded-xl mt-8 text-xs 480:text-base shadow-2xl`}>
        <div className="flex w-full py-3 ml-5 mr-2 500:mr-3">
        <img src="/images/icon-search.svg" alt="icon-search" className = "mr-3 self-center 500:mr-5"/>
        <input type="text" className={`${prop.dark ? "bg-navy-blue" : "bg-white"} ${prop.dark ? "text-white" : "text-black"} ${prop.dark ? "placeholder-white" : "placeholder-grayish-blue"} w-full outline-none  text-ellipsis`} name="username" placeholder="Search Github username..." value={prop.user} onChange={prop.onChange} autoComplete="off" spellCheck = "false"/>
        </div>
        {prop.error && <span className="text-red font-bold w-44 m-auto">No results</span>}
        <button className="bg-blue hover:bg-blue-2 active:bg-blue-2 text-white rounded-xl p-3 my-2 mr-2 font-bold">Search</button>
    </form>
    )
}