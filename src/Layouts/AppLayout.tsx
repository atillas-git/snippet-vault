import Sidebar from "@/components/Sidebar"

interface IProps {
    children:React.ReactNode
}
const AppLayout = ({children}:IProps) => {
  return (
    <div className="flex min-h-screen">
        <Sidebar/>
        <div className="w-full min-h-screen">
            {children}
        </div>
    </div>
  )
}

export default AppLayout