import Container from '../Container';

export interface Props {
  title: string;
  description?: string;
  key: string;
}
export default function PrivacyPolicyComponent(props: Props) {
  const { title, description, key } = props;

  return (
    <Container id={key}>
      <h3 className="text-3xl font-semibold py-7 text-green-250">{title}</h3>
      {description && (
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="pb-5 text-gray-800"
        ></div>
      )}
    </Container>
  );
}
