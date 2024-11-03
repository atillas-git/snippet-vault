import { Loader2 } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-2">
            <Loader2 className="animate-spin h-12 w-12"/>
            <p>Please wait...</p>
        </div>
    </div>
  )
}

export default Loading