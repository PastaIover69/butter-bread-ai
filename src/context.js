import { createContext, useState } from "react";

export const PlanContext = createContext();

export function PlanProvider({ children }) {
  const initialPlanData = {
    plan: "",
    price: null,
    features: [
      "Общение с ИИ на 5 языках",
      "До 10 загружаемых документов/день",
      "100 вопросов в день",
      "Базовые упражнения",
      "Текстовые ответы",
    ],
  };
  const tgBotLink = 'https://t.me/ButterBreadAI_bot?start=src=site';
  const [planData, setPlanData] = useState(initialPlanData);

  return (
    <PlanContext.Provider value={{ planData, setPlanData }}>
      {children}
    </PlanContext.Provider>
  );
}
