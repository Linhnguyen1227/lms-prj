import { create } from 'zustand'

type Store = {
    progressVideo:number,
    setProgressVideo: (progressVideo:number) => void
}

export const useStore = create<Store>((set) => ({
    progressVideo: 0,
    setProgressVideo: (progressVideo:number) => set({ progressVideo })
})) 