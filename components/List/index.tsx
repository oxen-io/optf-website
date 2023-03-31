import { ReactElement } from 'react';

interface Props {
  list: string[];
}

export default function List(props: Props): ReactElement {
  const { list } = props;
  return (
    <ul className="pb-5 ml-10 list-disc">
      {list.map((item) => {
        return <li dangerouslySetInnerHTML={{ __html: item }}></li>;
      })}
    </ul>
  );
}
