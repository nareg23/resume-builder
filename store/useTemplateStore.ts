import { create } from "zustand";
import React from "react";
import TemplateClassic from "@/components/Templates/TemplateClassic";
import TemplateAwesome from "@/components/Templates/TemplateAwesome";

// add new Templates here and line 20.
enum TemplateType {
  CLASSIC = "CLASSIC",
  AWESOME = "AWESOME",
}

type TemplateChoices = keyof typeof TemplateType;

interface TemplateStore {
  currentComponentName: string;
  currentComponent: (ref: React.LegacyRef<HTMLDivElement>) => any;
  setComponent: (type: TemplateChoices) => void;
}

// add new components here.
export const TemplateComponents = {
  [TemplateType.CLASSIC]: TemplateClassic as any,
  [TemplateType.AWESOME]: TemplateAwesome,
};

const useTemplateStore = create<TemplateStore>((set) => ({
  currentComponent: TemplateComponents[TemplateType.CLASSIC],
  currentComponentName: TemplateType.CLASSIC,
  setComponent: (type: TemplateChoices) =>
    set(() => ({
      currentComponent: TemplateComponents[type],
      currentComponentName: type,
    })),
}));

export default useTemplateStore;
