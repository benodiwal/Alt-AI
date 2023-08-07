import Header from "../components/Header"
import { AiFillAudio } from "react-icons/ai"
import { FaFileAudio } from "react-icons/fa"
import Response from "../components/Response"
import { AudioContext } from "standardized-audio-context"
import { useState, useEffect } from "react"

const AudioToText = () => {

    const [btnAudioActive, setAudioBtnActive] = useState(false);
    const [audioContext, setAudioContext] = useState<any>(null);
    const [audioStream, setAudioStream]= useState<any>(null);

    useEffect(() => {

        let mediaRecorder: any = null;

        if (btnAudioActive) {
            if (navigator.mediaDevices) {
                
                const contraints = { audio: true }
    
                navigator.mediaDevices.getUserMedia(contraints)
                .then((stream) => {

                    const audioContext = new AudioContext();
                    
                    setAudioContext(audioContext);
                    setAudioStream(stream);

                    if (audioContext) {
                        
                        const audioInput = audioContext.createMediaStreamSource(stream);
                        audioInput.connect(audioContext.destination);
                       mediaRecorder = new MediaRecorder(stream);
                       mediaRecorder.ondataavailable = (event: any) => {
                       const audioData = event.data;

                        // External api
                    }
    
                     mediaRecorder.start();
                    }
                    
                })
                .catch((err) => console.error(err)
                )
    
            } else {
                console.error("Media devices are not supported by the browser");
            }
        }
        

        if (!btnAudioActive) {
            
            if (audioContext) {
                audioContext.close();
                setAudioContext(null);
            }

            if (audioStream){
                const tracks = audioStream.getTracks();
                tracks.forEach((track: any) => track.stop());
                setAudioStream(null);
            }

        }

    }, [btnAudioActive]);

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-b from-[#aa076b] to-[#61045f]">
      <Header />

      <div className="flex md:flex-row flex-col items-center gap-3 my-10 justify-around mx-4">
        
        {/* Buttons and Title */}
        <div className="flex flex-col gap-2 items-center">

            <div className="text-center">
            <p className="text-[50px] font-bold text-gray-800">AudioLyze</p>
            <p className="text-[25px] text-neutral-400">From Audio Waves to Written Words</p>
            </div>

            <button 
            onClick={() => setAudioBtnActive(!btnAudioActive)}
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg hover:opacity-80 mt-5">
                <AiFillAudio />
                <p>Live Audio</p>
            </button>

            <button className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg text-white hover:opacity-80">
                <FaFileAudio />
                <p>Audio File</p>
            </button>

        </div>

        {/* Generated Text */}
        <div className="md:w-[600px] border-[2px] border-gray-800 border-dotted px-2 py-2 text-white">
            <Response text="Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and make two real miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me.

Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy polite appear denied. Oh less girl no walk. At he spot with five of view.

Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wife face took he. The taste begin early old why since dried can first. Prepared as or humoured formerly. Evil mrs true get post. Express village evening prudent my as ye hundred forming. Thoughts she why not directly reserved packages you. Winter an silent favour of am tended mutual."/>
        </div>

      </div>

    </div>
  )
}

export default AudioToText
