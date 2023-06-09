import { NextApiRequest, NextApiResponse } from 'next';

export interface Body {
  request: {
    requester: { name: string; email: string };
    subject: string;
    comment: { body: object };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, subject, message } = req.body;

  const body: Body = {
    request: {
      requester: { name, email },
      subject,
      comment: { body: message },
    },
  };

  const response = await fetch(`https://oxen.zendesk.com/api/v2/requests`, {
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.status === 201) {
    res.status(201).json(await response.json());
  } else {
    res.status(400).json(await response.json());
  }
}
