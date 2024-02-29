
import { create } from "zustand";

export type ModalType =
  | "openUserProfile"
;

interface ModalStore {
  type: ModalType | null;
  data: string;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: string) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: '',
  isOpen: false,
  onOpen: (type, data = '') => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));