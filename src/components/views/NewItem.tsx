import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function NewItem() {
    return (
        <div className="p-8 h-full w-full bg-background flex flex-col items-center justify-center space-y-4 text-center">
            <div className="p-6 bg-muted rounded-full">
                <Plus className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">Create New Item</h2>
            <p className="text-muted-foreground max-w-[300px]">Start a new project or create a new component for your app.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Project name" />
                <Button type="submit">Create</Button>
            </div>
        </div>
    )
}
