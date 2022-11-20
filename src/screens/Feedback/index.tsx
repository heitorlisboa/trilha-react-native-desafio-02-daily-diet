import {
  type RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import type { RoutesWithParams } from '@app/@types/navigation';

import {
  Container,
  FeedbackIllustration,
  Subtitle,
  SubtitleBold,
  Title,
} from './styles';

import { Button } from '@app/components/Button';

import successIllustration from '@app/assets/success-illustration.png';
import failureIllustration from '@app/assets/failure-illustration.png';

type FeedbackRouteProp = RouteProp<RoutesWithParams, 'feedback'>;

export function Feedback() {
  const {
    params: { inDiet },
  } = useRoute<FeedbackRouteProp>();

  const navigation = useNavigation();

  function handleGoToHome() {
    navigation.navigate('home');
  }

  const titleColor = inDiet ? 'positive' : 'negative';
  const titleText = inDiet ? 'Continue assim!' : 'Que pena!';
  const subtitleText = inDiet ? (
    <>
      Você continua <SubtitleBold>dentro da dieta</SubtitleBold>. Muito bem!
    </>
  ) : (
    <>
      Você <SubtitleBold>saiu da dieta</SubtitleBold> dessa vez, mas continue se
      esforçando e não desista!
    </>
  );
  const illustration = inDiet ? successIllustration : failureIllustration;

  return (
    <Container>
      <Title color={titleColor}>{titleText}</Title>
      <Subtitle>{subtitleText}</Subtitle>

      <FeedbackIllustration source={illustration} />

      <Button
        style={{ paddingLeft: 24, paddingRight: 24, marginTop: 32 }}
        title="Ir para a página inicial"
        onPress={handleGoToHome}
      />
    </Container>
  );
}
