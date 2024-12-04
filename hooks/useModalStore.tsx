import { create } from "zustand";

interface ModalStore {
  showAlert: boolean;
  showModal: boolean;

  setShowAlert: (showAlert: boolean) => void;
  setShowModal: (showModal: boolean) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  showAlert: false,
  setShowModal: (showModal) => set({ showModal }),
  setShowAlert: (showAlert) => set({ showAlert }),
}));

export default useModalStore;
