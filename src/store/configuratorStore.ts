import { create } from 'zustand';

interface ConfiguratorState {
  model: string | null;
  paint: string | null;
  wheels: string | null;
  interior: string | null;
  performance: string | null;
  accessories: string[];
  setModel: (model: string) => void;
  setPaint: (paint: string) => void;
  setWheels: (wheels: string) => void;
  setInterior: (interior: string) => void;
  setPerformance: (performance: string) => void;
  toggleAccessory: (accessory: string) => void;
}

export const useConfiguratorStore = create<ConfiguratorState>((set) => ({
  model: null,
  paint: null,
  wheels: null,
  interior: null,
  performance: null,
  accessories: [],
  setModel: (model) => set({ model }),
  setPaint: (paint) => set({ paint }),
  setWheels: (wheels) => set({ wheels }),
  setInterior: (interior) => set({ interior }),
  setPerformance: (performance) => set({ performance }),
  toggleAccessory: (accessory) =>
    set((state) => ({
      accessories: state.accessories.includes(accessory)
        ? state.accessories.filter((a) => a !== accessory)
        : [...state.accessories, accessory],
    })),
}));
