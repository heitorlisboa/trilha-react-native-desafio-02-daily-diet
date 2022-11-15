import { useTheme } from 'styled-components/native';
import type { TouchableOpacityProps } from 'react-native';
import type { Icon as IconComponent } from 'phosphor-react-native';

import { type ButtonVariantProp, Container, Title } from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: ButtonVariantProp;
  Icon?: IconComponent;
};

export function Button({
  title,
  variant = 'fill',
  Icon,
  ...props
}: ButtonProps) {
  const { colors } = useTheme();

  return (
    <Container variant={variant} {...props}>
      {Icon && (
        <Icon
          color={variant === 'fill' ? colors.white : colors['gray-900']}
          size={18}
          style={{ marginRight: 12 }}
        />
      )}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
}
