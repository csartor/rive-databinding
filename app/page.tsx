'use client'

import { useRive, useViewModel, useViewModelInstance, Layout, Fit, Alignment, useViewModelInstanceTrigger, useViewModelInstanceString } from '@rive-app/react-canvas';

import { useEffect, useRef } from 'react';

const stratagemObject = {
  orbital_120mm_he_barrage: {
    name: "Orbital 120MM HE Barrage",
    macro: "[L,U,R]"
  },
  orbital_380mm_he_barrage: {
    name: "Orbital 380MM HE Barrage",
    macro: "[L,U,R]"
    },
    orbital_airburst_strike: {
      name: "Orbital Airburst Strike",
      macro: "[L,U,R]"
    },
    orbital_ems_strike: { 
      name: "Orbital EMS Strike",
      macro: "[L,U,R]"
    },
    orbital_gas_strike: { 
      name: "Orbital Gas Strike",
      macro: "[L,U,R]"  
    },
    orbital_gatling_barrage: {
      name: "Orbital Gatling Barrage",
      macro: "[L,U,R]"
    },
    orbital_laser: {
      name: "Orbital Laser",  
      macro: "[L,U,R]"
    },
    orbital_napalm_barrage: {
      name: "Orbital Napalm Barrage",
      macro: "[L,U,R]"
    },
    orbital_precision_strike: {
      name: "Orbital Precision Strike", 
      macro: "[L,U,R]"
    },
    orbital_smoke_strike: {
      name: "Orbital Smoke Strike",
      macro: "[L,U,R]"
    },
    orbital_railcannon_strike: {
      name: "Orbital Railcannon Strike",    
      macro: "[L,U,R]"
    },
    orbital_walking_barrage: {
      name: "Orbital Walking Barrage",
      macro: "[L,U,R]"
    }
}

export default function Home() {

  const { rive, RiveComponent } = useRive({
    src: '/hd35.riv',
    autoplay: true,
      autoBind: true,
      artboard: "Artboard",
      stateMachines: "State Machine 1",
      layout: new Layout({
        fit: Fit.Layout,
        alignment: Alignment.Center,
      }),
    // ... other options
    onLoad: () => {
      // Access the current instance that was auto-bound
      let boundInstance = rive?.viewModelInstance;
      
    }
});

  const defaultViewModel = useViewModel(rive); 
  //console.log(defaultViewModel?.properties)
  const OffensiveStratagemsOrbital = useViewModel(rive, { name: 'OffensiveStratagemsOrbital' });
  //console.log('OffensiveStratagemsOrbital',OffensiveStratagemsOrbital?.properties)


  const viewModelInstance = rive?.viewModelInstance;
  const offensiveInstance = useViewModelInstance(OffensiveStratagemsOrbital);
  const strata1id = viewModelInstance?.string("Strata1-id")
  const strata2id = viewModelInstance?.string("Strata2-id")
  const strata3id = viewModelInstance?.string("Strata3-id")
  const strata4id = viewModelInstance?.string("Strata4-id")

  const stratEditMode = viewModelInstance?.boolean("StratEditMode")
  const stratagem1ID = offensiveInstance?.string("ID")
  const stratagem1Name = offensiveInstance?.string("Name")

  // String
  const { value: Name } = useViewModelInstanceString(
  'Name', // Property path
  offensiveInstance,
);

  const { trigger: strata1trigger } = useViewModelInstanceTrigger(
    'Strata1Press', // Property path
    viewModelInstance,
    { 
        // Optional callback to be called when the trigger is fired
        onTrigger: () => {
            const value = strata1id?.value;
            const editMode = stratEditMode?.value;
            if (value !== undefined && !editMode && value in stratagemObject) {
              const stratagem = stratagemObject[value as keyof typeof stratagemObject];
              console.log(`ID: ${value}, Name: ${stratagem.name}, Macro: ${stratagem.macro}`);
          }
        }
    }
  );

  const { trigger: strata2trigger } = useViewModelInstanceTrigger(
    'Strata2Press', // Property path
    viewModelInstance,
    { 
        // Optional callback to be called when the trigger is fired
        onTrigger: () => {
            const value = strata2id?.value;
            const editMode = stratEditMode?.value;
            if (value !== undefined && !editMode && value in stratagemObject) {
              const stratagem = stratagemObject[value as keyof typeof stratagemObject];
              console.log(`ID: ${value}, Name: ${stratagem.name}, Macro: ${stratagem.macro}`);
          }
        }
    }
  );

  const { trigger: strata3trigger } = useViewModelInstanceTrigger(
    'Strata3Press', // Property path
    viewModelInstance,
    { 
        // Optional callback to be called when the trigger is fired
        onTrigger: () => {
            const value = strata3id?.value;
            const editMode = stratEditMode?.value;
            if (value !== undefined && !editMode && value in stratagemObject) {
              const stratagem = stratagemObject[value as keyof typeof stratagemObject];
              console.log(`ID: ${value}, Name: ${stratagem.name}, Macro: ${stratagem.macro}`);
          }
        }
    }
  );

  const { trigger: strata4trigger } = useViewModelInstanceTrigger(
    'Strata4Press', // Property path
    viewModelInstance,
    { 
        // Optional callback to be called when the trigger is fired
        onTrigger: () => {
            const value = strata4id?.value;
            const editMode = stratEditMode?.value;
            if (value !== undefined && !editMode && value in stratagemObject) {
              const stratagem = stratagemObject[value as keyof typeof stratagemObject];
              console.log(`ID: ${value}, Name: ${stratagem.name}, Macro: ${stratagem.macro}`);
          }
        }
    }
  );




  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className='w-screen h-screen'>
         <RiveComponent />
        </div>
      </main>
    </div>
  );
}
