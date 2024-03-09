
import { Course } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "openUserProfile"
  | "openUserCreate"
  | "openEditCourse"
  |"deleteComment"
;

interface ModalData {
  id?: string;
  title?: string;
  name?: string;
  role?: string;
  email?: string;
  description?: string;
  isPublished?: boolean;
  price?: number;
  apiUrl?: string;
  query?: Record<string, any>;

}

interface ModalStore {
  type: ModalType | null;
  data: ModalData
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data
   }),
  onClose: () => set({ type: null, isOpen: false }),
}));
