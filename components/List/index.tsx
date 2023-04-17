import { nanoid } from 'nanoid';
import { ReactElement } from 'react';

interface Props {
  list: string[];
}

export default function List(props: Props): ReactElement {
  const { list } = props;
  const id = nanoid();
  return (
    <ul className="pb-5 ml-10 list-disc">
      {list.map((item, index) => {
        return <li key={`${id}-${index}`}> {item}</li>;
      })}
    </ul>
  );
}
