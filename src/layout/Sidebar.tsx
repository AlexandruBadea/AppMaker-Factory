import { Button } from "@/components/ui/button"
import { Plus, Settings, User, LogOut, LayoutDashboard, Store } from "lucide-react"

interface SidebarProps {
    onNavigate: (view: string) => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
    return (
        <div className="w-[50px] bg-[#222222] mr-4">
            <div className="flex flex-col items-center justify-center h-full">
                <Button variant="ghost" size="icon" className="m-2" onClick={() => onNavigate('NewItem')}>
                    <Plus />
                </Button>
                <Button variant="ghost" size="icon" className="m-2" onClick={() => onNavigate('Dashboard')}>
                    <LayoutDashboard />
                </Button>
                <Button variant="ghost" size="icon" className="m-2" onClick={() => onNavigate('Store')}>
                    <Store />
                </Button>
                <Button variant="ghost" size="icon" className="m-2" onClick={() => onNavigate('User')}>
                    <User />
                </Button>
                <Button variant="ghost" size="icon" className="m-2" onClick={() => onNavigate('Settings')}>
                    <Settings />
                </Button>
                <Button variant="ghost" size="icon" className="m-2" onClick={() => console.log('Logout clicked')}>
                    <LogOut />
                </Button>
            </div>
        </div>
    )
}