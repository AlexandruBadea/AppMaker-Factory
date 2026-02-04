import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Store() {
    return (
        <div className="p-4 h-full w-full bg-background space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">Store</h2>
                <Button>Add Product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="cursor-pointer hover:bg-accent/50 transition-colors">
                        <CardHeader>
                            <CardTitle>Product {i}</CardTitle>
                            <CardDescription>Amazing product description goes here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-lg font-bold">$99.99</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
