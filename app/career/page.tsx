import CardsTable from '@/components/CardsTable';
import { WORK_EXPERIENCE_DATA, PROJECT_DATA } from '@/app/constants';

export default function Profile() {
  return (
    <>
      <CardsTable title={WORK_EXPERIENCE_DATA.title} cards={WORK_EXPERIENCE_DATA.cards} />
      <CardsTable title={PROJECT_DATA.title} cards={PROJECT_DATA.cards} />
    </>
  );
}