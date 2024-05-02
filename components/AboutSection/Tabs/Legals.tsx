import { CMSLegals } from '@/types/cms';
import ProjectsPrivacyPolicy from '../../ProjectsPrivacyPolicy';

export interface Props {
  items: CMSLegals[];
}

export default function Legals(props: Props) {
  const { items } = props;
  return (
    <>
      {items.map((item: CMSLegals) => {
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
