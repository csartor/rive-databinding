'use client'
import * as rive from "@rive-app/webgl2";
import { useEffect, useRef } from 'react';

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveRef = useRef<rive.Rive | null>(null);


  useEffect(() => {
    if (canvasRef.current && !riveRef.current) {
      riveRef.current = new rive.Rive({
        src: "/sc_starter_databinding.riv",
        canvas: canvasRef.current,
        autoplay: true,
        autoBind: true,
        artboard: "MainArtboard",
        stateMachines: "State Machine 1",
        layout: new rive.Layout({
          fit: rive.Fit.Layout,
        }),
        onLoad: () => {

          const globalsInstance = riveRef.current?.viewModelInstance
          const enums = riveRef.current?.enums()
          const actionsInstance = globalsInstance?.viewModel("Actions")

          // Log the specific Manufacturers enum
          const actionsEnum = enums?.find(e => e.name === "Actions");
          console.log("Actions enum:", actionsEnum?.values);
          
          console.log(globalsInstance)
          console.log(enums)

          const setupActionTriggers = () => {
            actionsEnum?.values?.forEach((actionName: string) => {
              actionsInstance?.trigger(actionName)?.on(() => {
                console.log(`Action ${actionName} triggered`);
              });
            });
          };

          setupActionTriggers();
          
          // Log available actions for debugging
          console.log("Available actions:", actionsEnum?.values);
          console.log("Actions instance:", actionsInstance);

          riveRef.current?.resizeDrawingSurfaceToCanvas();
          
        }
      });

      const handleResize = () => {
        if (riveRef.current) {
          riveRef.current.resizeDrawingSurfaceToCanvas();
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        riveRef.current?.cleanup();
      };
    }
  }, []);

  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className='w-screen h-screen'>
          <canvas ref={canvasRef} className='w-full h-full'></canvas>
        </div>
      </main>
    </div>
  );
}
