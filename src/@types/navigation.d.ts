export type RoutesWithParams = {
  home: undefined;
  statistics: undefined;
  registerMeal: undefined;
  feedback: {
    /**
     * If the meal whose the feedback belongs to is in the diet
     */
    inDiet: boolean;
  };
  meal: {
    /**
     * The meal unique ID
     */
    id: string;
  };
  editMeal: {
    /**
     * The meal unique ID
     */
    id: string;
  };
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RoutesWithParams {}
  }
}
