import { NextApiRequest, NextApiResponse } from 'next';

import base64 from 'base-64';

// Multi-Valued Select Many custom fields are set by providing multiple Custom Field array items with the same key.
// https://www.campaignmonitor.com/api/v3-3/subscribers/#adding-a-subscriber
function handleMultiValueSelect(arr: string[], field: string) {
  if (arr) {
    return arr.map((value: string) => {
      return {
        Key: field,
        Value: value,
      };
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(400).json({
      message: 'Email API: Invalid http method. | Only POST is accepted.',
    });
  }
  const list = `${req.query.list}`;
  const email = req.body.email;

  const listId =
    list === 'session'
      ? process.env.CAMPAIGN_MONITOR_LIST_SESSION_ID
      : process.env.CAMPAIGN_MONITOR_LIST_MARKET_RESEARCH_ID;

  const body: any = {
    EmailAddress: email,
    ConsentToTrack: 'Unchanged',
  };

  if (list !== 'session') {
    const roles = handleMultiValueSelect(req.body.roles, 'Roles') ?? [];
    const tags = handleMultiValueSelect(req.body.tags, 'Tags') ?? [];

    body['Name'] = req.body.name ? req.body.name : undefined;
    body['CustomFields'] = [
      req.body.country && {
        Key: 'Country',
        Value: req.body.country,
      },
      ...roles,
      ...tags,
    ];
  }

  const response = await fetch(
    `https://api.createsend.com/api/v3.2/subscribers/${listId}.json`,
    {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${base64.encode(
          `${process.env.CAMPAIGN_MONITOR_API_KEY}:x`
        )}`,
      },
      method: 'POST',
    }
  );

  if (response.status === 201) {
    res.status(201).json({ email });
  } else {
    const result = await response.json();
    res.status(result.Code).json({ email, message: result.Message });
  }
}
