import { ILegals } from '@/types/cms';
import ProjectsPrivacyPolicy from '../../ProjectsPrivacyPolicy';

export interface Props {
  items: ILegals[];
}

export default function Legals(props: Props) {
  const { items } = props;
  return (
    <>
      {items.map((item: ILegals) => {
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
