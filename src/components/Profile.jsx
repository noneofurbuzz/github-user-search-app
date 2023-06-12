import { useState } from "react"

export default function Profile(){
    const [profile,setProfile] = useState({
        picture : "/images/profile.svg",
        name : "The Octocat",
        username: "@octocat",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        repo : 8,
        followers: 3938,
        following:9,
        location:"San Francisco",
        twitter: "Not Available",
        blog: "https://github.com/blog",
        company: "GitHub",
        date :   "25 Jan 2011"
    })
    return(
        <div className="text-white bg-navy-blue rounded-xl mt-6 flex">
            <img src={profile.picture} alt="avatar" className=" flex-shrink-0 w-24 mx-8 my-8 self-baseline"/>
            <div className="my-8 m">
            <div className="flex flex-col mr-3">
            <div>
            <p className="font-bold text-2xl mb-1">{profile.name}</p>
            <p className="text-blue mb-1">{profile.username}</p>
            </div>
            <p className="">Joined {profile.date}</p>
           </div>
           <div className="mt-10 -ml-20">
            <p className="my-3 -ml-10 mr-4">{profile.bio}</p>
            </div>
            </div>
        </div>
    )
}