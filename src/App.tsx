import { useRef } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "./layout/Sidebar"
import Workflow from "./layout/Workflow"
import type { GoldenLayoutRef } from "@/components/layout/GoldenLayoutWrapper";

export default function App() {
  const workflowRef = useRef<GoldenLayoutRef>(null);

  const handleNavigate = (view: string) => {
    if (workflowRef.current) {
      workflowRef.current.addComponent(view);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-screen h-screen bg-background text-foreground overflow-hidden">
        <Sidebar onNavigate={handleNavigate} />
        <Workflow ref={workflowRef} />
      </div>
    </ThemeProvider>
  )
}