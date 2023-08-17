import { VscThreeBars } from "react-icons/vsc"
import { AiOutlinePlus } from "react-icons/ai"
import StarsCanvas from "../components/canvas/Stars"
import Ball from "../components/canvas/Ball"
import { FiMoreHorizontal }  from "react-icons/fi"
import { BsSendFill } from "react-icons/bs"
import Response from "../components/Response"
import { useState } from "react";

const Assistant = () => {

  const [prompt, setPrompt] = useState<string>("");

  const handleChat = async () => {

    if (prompt) {

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),      
      });

      setPrompt("");

      const response_msg = await response.json();
      console.log(response_msg);
      
    } catch (error) {
      console.error('Error in messages exchange', error);
    }

  }

  }

  return (
    <div className="relative overflow-x-hidden h-screen bg-gradient-to-b from-[#161E26] to-[#0D1117] w-full z-0 flex gap-1 overflow-y-hidden">

      {/* Canvas */}
      <StarsCanvas />

      {/* <img src="/Brain.png" alt="Elysia" className="w-[40px] h-[40px] rounded-full"/> */}
        
      {/* Prevoius Sessions */}

           {/* Desktop View */}
        <div className="hidden md:flex flex-col justify-between lg:min-w-[250px] min-w-[200px] border-r-2 border-gray-500 rounded-tr-lg rounded-br-lg h-screen">
            
            <div>
               {/* User */}
            <div className="flex items-center justify-between gap-3 py-2 px-2 rounded-lg transition duration-150 hover:bg-black/30  cursor-pointer">
                <div className="flex items-center justify-between gap-2">
                <img src="/Brain.png" alt="Elysia" className="w-[30px] h-[30px] rounded-full"/>
                <p className="text-white text-[16px] font-bold truncate">
                  Sachin Beniwal
                </p>
                </div>
                <FiMoreHorizontal className="text-white"/>
            </div>

            {/* New Chat Button */}
            <div className="flex items-center justify-between px-4 py-2 border-2 mx-3 my-1 rounded-lg hover:bg-black/30 transition duration-400 cursor-pointer">
              <span className="text-white font-semibold text-[20px]">New Chat</span>
              <AiOutlinePlus className="font-semiblod text-white"/>
            </div>

            {/* Previous Chats */}
            <div className="overflow-y-auto overflow-x-hidden flex flex-col my-3">
            <p className="text-white  text-[16px] px-2 hover:bg-black/30 truncate py-2">New Chat</p>
            <p className="text-white text-[16px] px-2 hover:bg-black/30 truncate py-2">New Chat</p>
          
            </div>

            </div>
           

            {/* Icon Elysia */}
            <div className="flex items-center gap-3 mx-3 my-2 justify-center border-t-2 border-gray-500 border-solid py-2">
              <div className="w-[60px] h-[60px]">
              <Ball icon={"/Brain.png"}/>
              </div>
              <p className="text-white font-bold text-[30px]">
                Elysia
              </p>
            </div>
  
        </div>
           
           {/* Mobile View */}
        <div className="md:hidden absolute top-0 flex items-center justify-between left-0 right-0 mx-2 my-2 border-b-2 border-gray-500 py-1 gap-4">
           
           {/* Toggle Icon */}
           <VscThreeBars className="text-white w-8 h-8 cursor-pointer"/>
           
           {/* Current Session Name */}
           <p className="text-white font-semibold px-3 py-1 truncate flex-1 text-center">Who is Elon Musk?</p>

           {/* New Chat */}
           <AiOutlinePlus className="text-white w-8 h-8 cursor-pointer"/>

        </div>   

        
        {/* Current Sessions */}
        <div 
        className="flex-1 relative w-full right-0 left-0 lg:mx-10 md:mx-8 mx-4 my-4 py-4 h-screen overflow-y-auto no-scrollbar">
          
          {/* Input Box */}
          <div className="w-full md:h-[60px] h-[40px] bg-gray-800 sticky top-5 flex rounded-lg left-0 right-0 px-5 py-3 items-center justify-between gap-3">
            <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text" 
            placeholder="So what's on your mind now?" 
            className="flex-1 outline-none outline-0 ring-0 bg-gray-800/0 text-white"/>
            <BsSendFill 
            onClick={handleChat}
            className="text-white w-[20px] h-[20px] hover:opacity-80"
            />
          </div>

          {/* Chat */}
          <div className="w-full lg:px-10 md:px-6 px-2 overflow-hidden max-h-screen pb-40 pt-10">

            <div className="w-full border-b-[1px] border-t-[1px] border-gray-500 mt-1">
              <div className="flex items-center justify-between px-2 my-2">
                <img src="/Brain.png" alt="brain" className="w-[30px] h-[30px] rounded-full"/>
                <p className="text-white font-semibold">Elysia</p>
              </div>
              <p className="text-white px-2 py-2">
                <Response text="We think these three words are enough to describe the plight of RCB fans after the team lost a nail-biting match against Gujarat Titans. Even after Virat Kohli's undefeated 101 runs, RCB lost by six wickets in Bengaluru.

Now, nobody guessed that Shubhman Gill was going to knock it out of the park with a brilliant 104 and RCB fans were prepping to rejoice the win. One RCB fan was so assured of the team's win that she ordered a feast of assorted snacks for all of her PG mates. Alas, she was highly disappointed.

A Twitter user named Prakriti shared a photo of the too-soon celebratory snack and Twitter couldn't stop feeling sorry for the heartbroken RCB fan.
We think these three words are enough to describe the plight of RCB fans after the team lost a nail-biting match against Gujarat Titans. Even after Virat Kohli's undefeated 101 runs, RCB lost by six wickets in Bengaluru.

Now, nobody guessed that Shubhman Gill was going to knock it out of the park with a brilliant 104 and RCB fans were prepping to rejoice the win. One RCB fan was so assured of the team's win that she ordered a feast of assorted snacks for all of her PG mates. Alas, she was highly disappointed.

A Twitter user named Prakriti shared a photo of the too-soon celebratory snack and Twitter couldn't stop feeling sorry for the heartbroken RCB
We think these three words are enough to describe the plight of RCB fans after the team lost a nail-biting match against Gujarat Titans. Even after Virat Kohli's undefeated 101 runs, RCB lost by six wickets in Bengaluru.

Now, nobody guessed that Shubhman Gill was going to knock it out of the park with a brilliant 104 and RCB fans were prepping to rejoice the win. One RCB fan was so assured of the team's win that she ordered a feast of assorted snacks for all of her PG mates. Alas, she was highly disappointed.

A Twitter user named Prakriti shared a photo of the too-soon celebratory snack and Twitter couldn't stop feeling sorry for the heartbroken RCB fan.
We think these three words are enough to describe the plight of RCB fans after the team lost a nail-biting match against Gujarat Titans. Even after Virat Kohli's undefeated 101 runs, RCB lost by six wickets in Bengaluru.

Now, nobody guessed that Shubhman Gill was going to knock it out of the park with a brilliant 104 and RCB fans were prepping to rejoice the win. One RCB fan was so assured of the team's win that she ordered a feast of assorted snacks for all of her PG mates. Alas, she was highly disappointed.

A Twitter user named Prakriti shared a photo of the too-soon celebratory snack and Twitter couldn't stop feeling sorry for the heartbroken RCB fan.
We think these three words are enough to describe the plight of RCB fans after the team lost a nail-biting match against Gujarat Titans. Even after Virat Kohli's undefeated 101 runs, RCB lost by six wickets in Bengaluru.

Now, nobody guessed that Shubhman Gill was going to knock it out of the park with a brilliant 104 and RCB fans were prepping to rejoice the win. One RCB fan was so assured of the team's win that she ordered a feast of assorted snacks for all of her PG mates. Alas, she was highly disappointed.

A Twitter user named Prakriti shared a photo of the too-soon celebratory snack and Twitter couldn't stop feeling sorry for the heartbroken RCB fan."/>
              </p>
            </div>
            
            <div className="w-full border-b-[1px] border-t-[1px] border-gray-500 mt-1">
              <div className="flex items-center justify-between px-2 my-2">
                <img src="/Brain.png" alt="brain" className="w-[30px] h-[30px] rounded-full"/>
                <p className="text-white font-semibold">Me</p>
              </div>
              <p className="text-white px-2 py-2">
                <Response text="Sachin"/>
              </p>
            </div>
            
          </div>

        </div>

    </div>
  )
}

export default Assistant
