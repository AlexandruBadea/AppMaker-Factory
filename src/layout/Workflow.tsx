import { forwardRef } from 'react';
import { GoldenLayoutWrapper } from "@/components/layout/GoldenLayoutWrapper";
import type { GoldenLayoutRef } from "@/components/layout/GoldenLayoutWrapper";

export const Workflow = forwardRef<GoldenLayoutRef, {}>((_, ref) => {
    return (
        <div className="w-full bg-[#111111] border-l border-[#333333] h-full flex flex-col">
            <div className="flex-1 w-full h-full relative">
                <GoldenLayoutWrapper ref={ref} />
            </div>
        </div>
    )
});

Workflow.displayName = "Workflow";

export default Workflow;