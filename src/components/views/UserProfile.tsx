import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfile() {
    return (
        <div className="p-4 h-full w-full bg-background flex flex-col items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">John Doe</CardTitle>
                    <p className="text-sm text-muted-foreground">Admin</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Email</span>
                        <span className="text-muted-foreground">john@example.com</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Plan</span>
                        <span className="text-muted-foreground">Pro</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
