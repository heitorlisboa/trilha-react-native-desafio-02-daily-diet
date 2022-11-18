import { BaseLayout } from '@app/layouts/BaseLayout';
import { Percent } from './components/Percent';
import { Content } from './components/Content';

export function Statistics() {
  return (
    <BaseLayout
      headerContainerStyle={{ flexDirection: 'column', marginBottom: 32 }}
      color="positive"
      Header={Percent}
      Content={Content}
    />
  );
}
