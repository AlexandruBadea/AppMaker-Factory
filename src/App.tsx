import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "./layout/Sidebar"
import Workflow from "./layout/Workflow"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-screen h-screen">
        <Sidebar />
        <Workflow />
      </div>
    </ThemeProvider>
  )
}