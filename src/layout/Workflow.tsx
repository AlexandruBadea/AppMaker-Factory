import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function Workflow() {
    return (
        <div className="w-full bg-[#111111] rounded-bl-lg rounded-tl-lg">
            <div className="tab-bar flex items-center w-full h-[35px] bg-[#151515] rounded-tl-lg">

                <div className="active-tab flex items-center p-2 justify-between w-[150px] h-full bg-[#222222] mr-1 rounded-tl-lg">
                    <p>Workflow</p>
                    <Button variant="ghost" size="icon" className="w-6 h-6 -mr-1 cursor-pointer">
                        <X />
                    </Button>
                </div>

                <div className="flex items-center p-2 justify-between w-[150px] h-full bg-[#151515] mr-1 border-l border-r border-b-[#222222]">
                    <p>Untitled</p>
                    <Button variant="ghost" size="icon" className="w-6 h-6 -mr-1 cursor-pointer">
                        <X />
                    </Button>
                </div>

                <div className="flex items-center p-2 justify-between w-[150px] h-full bg-[#151515] mr-1 border-l border-r border-b-[#222222]">
                    <p>Settings</p>
                    <Button variant="ghost" size="icon" className="w-6 h-6 -mr-1 cursor-pointer">
                        <X />
                    </Button>
                </div>

            </div>

            <div className="w-full canvas-area bg-[#222222] h-[calc(100%-35px)] rounded-bl-lg p-4">
                workflow tab content as its active tab
            </div>

        </div>
    )
}