import React, { forwardRef, useImperativeHandle } from "react";
import { createRoot } from "react-dom/client";
import {
    GoldenLayout,
    type LayoutConfig,
    type ComponentContainer,
} from "@/vendor/golden-layout/golden-layout";
import { useTheme } from "@/components/theme-provider";

// Import CSS as inline strings
import baseCss from "@/vendor/golden-layout/css/goldenlayout-base.css?inline";
import darkThemeCss from "@/vendor/golden-layout/css/themes/goldenlayout-dark-theme.css?inline";
import lightThemeCss from "@/vendor/golden-layout/css/themes/goldenlayout-light-theme.css?inline";

// View Imports that we will register
import Dashboard from "@/components/views/Dashboard";
import Store from "@/components/views/Store";
import Settings from "@/components/views/Settings";
import UserProfile from "@/components/views/UserProfile";
import NewItem from "@/components/views/NewItem";

export interface GoldenLayoutRef {
    addComponent: (componentType: string, title?: string) => void;
}


export const GoldenLayoutWrapper = forwardRef<GoldenLayoutRef, {}>((_, ref) => {
    const layoutRef = React.useRef<HTMLDivElement>(null);
    const glRef = React.useRef<GoldenLayout | null>(null);
    const { theme } = useTheme();

    useImperativeHandle(ref, () => ({
        addComponent: (componentType: string, title?: string) => {
            if (!glRef.current) return;
            // Standard behavior - let Golden Layout handle placement
            glRef.current.addComponent(componentType, { text: 'Component added' }, title || componentType);
        }
    }));

    // Theme handling
    React.useEffect(() => {
        const styleId = "golden-layout-styles";
        let styleEl = document.getElementById(styleId) as HTMLStyleElement;

        if (!styleEl) {
            styleEl = document.createElement("style");
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }

        const currentThemeCss = (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))
            ? darkThemeCss
            : lightThemeCss;

        styleEl.innerHTML = `
            ${baseCss}
            ${currentThemeCss}
            
            /* -- Modern IDE Styling -- */
            
            .lm_header {
                height: 36px !important;
                background: #111111 !important;
                border-bottom: 2px solid #222222 !important;
                padding-left: 0 !important;
            }
            
            .lm_tab {
                font-family: 'Inter', system-ui, sans-serif;
                font-size: 12px;
                font-weight: 500;
                background: transparent !important;
                color: #777 !important;
                border: none !important;
                margin: 0 !important;
                padding: 0 55px 0 12px !important; /* Space for close button */
                height: 34px !important;
                line-height: 34px !important;
                border-right: 1px solid #1a1a1a !important;
                box-shadow: none !important;
                transition: all 0.2s ease;
                border-top: 2px solid transparent !important; /* For active indicator */
            }
            
            .lm_tab:hover {
                 background: #1a1a1a !important; 
                 color: #ccc !important;
            }
            
            .lm_tab.lm_active {
                color: #ffffff !important;
                background: #222222 !important;
                border-top: 2px solid #3b82f6 !important; /* Blue active indicator */
                z-index: 10;
            }

            .lm_tab .lm_title {
                margin-top: -1px;
            }

            /* Custom Close Button using CSS */
            .lm_close_tab {
                top: 10px !important; 
                right: 6px !important;
                width: 14px !important;
                height: 14px !important;
                opacity: 0.5;
                background-image: none !important; /* Remove default icon if needed */
                position: absolute;
                cursor: pointer;
            }

            .lm_close_tab:before, .lm_close_tab:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 10px;
                height: 1px;
                background-color: currentColor;
                transform-origin: center;
            }

             .lm_close_tab:before {
                transform: translate(-50%, -50%) rotate(45deg);
            }
            .lm_close_tab:after {
                transform: translate(-50%, -50%) rotate(-45deg);
            }

            .lm_close_tab:hover {
                opacity: 1;
                background-color: #cc0000; /* Optional hover bg */
                color: white;
                border-radius: 2px;
            }
            
            .lm_content {
                background: #222222 !important;
                border: none !important;
            }
            
            /* Visible Splitters */
            .lm_splitter {
                 background: #000 !important;
                 opacity: 0.5 !important;
                 position: relative !important;
                 z-index: 100 !important;
            }
            
            .lm_splitter.lm_vertical {
                height: 4px !important;
            }

            .lm_splitter.lm_horizontal {
                width: 4px !important;
            }
            
            .lm_splitter:hover {
                 background: #3b82f6 !important; /* Resize handle highlight */
                 opacity: 1 !important;
            }
            
            /* Fix dragging */
            .lm_dragProxy {
                background: rgba(59, 130, 246, 0.2) !important;
                border: 1px solid #3b82f6 !important;
                box-shadow: none !important;
            }

            .lm_root {
                background: #111111 !important;
            }
            
            /* Hide minimize/maximize if desired or style them */
            .lm_controls {
                top: 8px !important;
                right: 5px !important;
            }
        `;

    }, [theme]);

    React.useEffect(() => {
        if (!layoutRef.current) return;

        const gl = new GoldenLayout(layoutRef.current);
        glRef.current = gl;

        const registerComponent = (name: string, Component: React.ComponentType<any>) => {
            gl.registerComponentFactoryFunction(name, (container: ComponentContainer, state: any) => {
                const element = container.element;
                element.style.height = "100%";
                element.style.width = "100%";
                element.style.overflow = "hidden"; // Let component handle scroll
                const root = createRoot(element);
                root.render(<Component {...state} />);
                container.on("destroy", () => root.unmount());
            });
        };

        // Register our new views
        registerComponent("Dashboard", Dashboard);
        registerComponent("Store", Store);
        registerComponent("Settings", Settings);
        registerComponent("User", UserProfile);
        registerComponent("NewItem", NewItem);

        const config: LayoutConfig = {
            settings: {
                hasHeaders: true,
                constrainDragToContainer: true,
                reorderEnabled: true,
                popoutWholeStack: false,
                blockedPopoutsThrowError: true,
                closePopoutsOnUnload: true,
                showPopoutIcon: true,
                showMaximiseIcon: true,
                showCloseIcon: true
            },
            dimensions: {
                borderWidth: 4,
                headerHeight: 36
            },
            root: {
                type: 'stack', // Simple default start
                content: [
                    {
                        type: 'component',
                        componentType: 'Dashboard',
                        title: 'Dashboard'
                    }
                ]
            }
        };
        gl.loadLayout(config);

        // Resize handler
        const handleResize = () => {
            if (layoutRef.current && glRef.current) {
                glRef.current.updateSize(layoutRef.current.offsetWidth, layoutRef.current.offsetHeight);
            }
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            gl.destroy();
        }

    }, []);

    return (
        <div className="w-full h-full rounded-bl-lg overflow-hidden bg-[#222222]">
            <div ref={layoutRef} className="w-full h-full" />
        </div>
    );
});

GoldenLayoutWrapper.displayName = "GoldenLayoutWrapper";
