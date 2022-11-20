import {
  createContext,
  type FC,
  type PropsWithChildren,
  type ReactNode,
  useContext,
} from 'react';

type RadioGroupContextData = {
  value: string | null;
  onValueChange: (value: string) => void;
};

const RadioGroupContext = createContext<RadioGroupContextData | null>(null);

type RadioGroupRootProps = PropsWithChildren<RadioGroupContextData>;

function RadioGroupRoot({
  children,
  value,
  onValueChange,
}: RadioGroupRootProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      {children}
    </RadioGroupContext.Provider>
  );
}

(RadioGroupRoot as FC).displayName = 'RadioGroup.Root';

type RadioItemProps = {
  value: string;
  render: (item: {
    selected: boolean;
    updateRadioGroupValue: () => void;
  }) => ReactNode;
};

function RadioGroupItem({ value, render }: RadioItemProps) {
  const radioGroupContext = useContext(RadioGroupContext);
  if (!radioGroupContext)
    throw new Error(
      '`RadioGroup.Root` component around all `RadioGroup.Item` components' +
        ' is missing'
    );

  const { value: currentRadioGroupValue, onValueChange } = radioGroupContext;
  const selected = currentRadioGroupValue === value;

  function handleUpdateValue() {
    onValueChange(value);
  }

  return <>{render({ selected, updateRadioGroupValue: handleUpdateValue })}</>;
}

(RadioGroupItem as FC).displayName = 'RadioGroup.Item';

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};
