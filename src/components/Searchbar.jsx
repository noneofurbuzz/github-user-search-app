export default function Searchbar(prop){

    
    return(
    <div className="bg-navy-blue flex justify-between rounded-xl mt-8">
        <div className="flex w-full py-3 ml-5 mr-2 500:mr-3 ">
        <img src="/images/icon-search.svg" alt="icon-search" className="mr-3 self-center 500:mr-5"/>
        <input type="text" className="bg-navy-blue text-white w-full outline-none placeholder-white text-ellipsis" name="username" placeholder="Search Github username..." value={prop.user} onChange={prop.onChange}/>
        </div>
        <button className="bg-blue text-white rounded-xl p-3 my-2 mr-2">Search</button>
        <p>{prop.user}</p>
    </div>
    )
}