import { ClipLoader } from "react-spinners"

const Loading = () => {
  return (
    <div>
        <ClipLoader 
        color="#ffffff"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
    </div>
  )
}

export default Loading
