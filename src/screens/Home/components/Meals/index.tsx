import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';

import {
  Container,
  MealSectionFooter,
  MealSectionHeader,
  Title,
} from './styles';

import { Button } from '@app/components/Button';
import { MealCard } from '../MealCard';

type Meal = {
  name: string;
  dateTime: Date;
  inDiet: boolean;
};

const data = [
  {
    title: '12.08.22',
    data: [
      { name: 'X-tudo', dateTime: new Date('2022-08-12T20:00'), inDiet: false },
      {
        name: 'Whey protein com leite',
        dateTime: new Date('2022-08-12T16:00'),
        inDiet: true,
      },
      {
        name: 'Salada cesar com frango grelhado',
        dateTime: new Date('2022-08-12T12:30'),
        inDiet: true,
      },
      {
        name: 'Vitamina de banana com abacate',
        dateTime: new Date('2022-08-12T09:30'),
        inDiet: true,
      },
    ] as Meal[],
  },
  {
    title: '11.08.22',
    data: [
      { name: 'X-tudo', dateTime: new Date('2022-08-11T20:00'), inDiet: false },
      {
        name: 'Whey protein com leite',
        dateTime: new Date('2022-08-11T16:00'),
        inDiet: true,
      },
      {
        name: 'Salada cesar com frango grelhado',
        dateTime: new Date('2022-08-11T12:30'),
        inDiet: true,
      },
      {
        name: 'Vitamina de banana com abacate',
        dateTime: new Date('2022-08-11T09:30'),
        inDiet: true,
      },
    ] as Meal[],
  },
];

export function Meals() {
  const navigation = useNavigation();
  function handleGoToRegisterMeal() {
    navigation.navigate('registerMeal');
  }

  return (
    <Container>
      <Title>Refeições</Title>
      <Button
        style={{ marginTop: 8 }}
        title="Nova refeição"
        Icon={Plus}
        onPress={handleGoToRegisterMeal}
      />

      <SectionList
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        sections={data}
        renderItem={({ item }) => (
          <MealCard
            mealId={item.id}
            title={item.name}
            dateTime={item.dateTime}
            inDiet={item.inDiet}
          />
        )}
        renderSectionHeader={({ section }) => (
          <MealSectionHeader>{section.title}</MealSectionHeader>
        )}
        renderSectionFooter={() => <MealSectionFooter />}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
