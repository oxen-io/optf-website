import { Legals } from '@/types/cms';
import ProjectsPrivacyPolicy from '../../ProjectsPrivacyPolicy';

export interface Props {
  items: Legals[];
}

export default function Legals(props: Props) {
  const { items } = props;
  return (
    <>
      {items.map((item: Legals) => {
        return (
          <ProjectsPrivacyPolicy
            key={item.title}
            src={item.source}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </>
  );
}
