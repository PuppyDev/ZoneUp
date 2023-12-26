import { create } from "zustand";

const noopFunction = () => {};

type PreferencesStore = {
    isOpenSidebar: boolean;
    toggleOpenSidebar: (v: boolean) => void;
    closeSidebarEvent: () => void;
    openSidebarEvent: () => void;
};

const initPreferencesState: PreferencesStore = {
    isOpenSidebar: true,
    toggleOpenSidebar: noopFunction,
    closeSidebarEvent: noopFunction,
    openSidebarEvent: noopFunction,
};

export const usePreferencesState = create<PreferencesStore>((set) => ({
    ...initPreferencesState,
    toggleOpenSidebar: (isOpenSidebar: boolean) => set({ isOpenSidebar }),
    closeSidebarEvent: () => set({ isOpenSidebar: false }),
    openSidebarEvent: () => set({ isOpenSidebar: true }),
}));
