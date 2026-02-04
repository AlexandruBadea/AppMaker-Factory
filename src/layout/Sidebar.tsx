import { Button } from "@/components/ui/button"
import { Plus, Settings, User, LogOut, LayoutDashboard, Store } from "lucide-react"

export default function Sidebar() {
    return (
        <div className="w-[50px] bg-[#222222] mr-4 rounded-br-lg rounded-tr-lg">
            <div className="flex flex-col items-center justify-center h-full">
                <Button variant="ghost" size="icon" className="m-2">
                    <Plus />
                </Button>
                <Button variant="ghost" size="icon" className="m-2">
                    <LayoutDashboard />
                </Button>
                <Button variant="ghost" size="icon" className="m-2">
                    <Store />
                </Button>
                <Button variant="ghost" size="icon" className="m-2">
                    <User />
                </Button>
                <Button variant="ghost" size="icon" className="m-2">
                    <Settings />
                </Button>
                <Button variant="ghost" size="icon" className="m-2">
                    <LogOut />
                </Button>
            </div>
        </div>
    )
}