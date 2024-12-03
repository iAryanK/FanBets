import { create } from "zustand";

interface ModalStore {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  setShowModal: (showModal) => set({ showModal }),
}));

export default useModalStore;
