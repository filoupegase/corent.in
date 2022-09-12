import { NextApiRequest, NextApiResponse } from 'next';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // return overall site stats
    //const result = await getSiteStats();

    // let Vercel edge cache results for 15 mins
    res.setHeader("Cache-Control", "public, max-age=0, s-maxage=900, stale-while-revalidate");

    // send result as JSON
    //return res.status(200).json(result);
  } catch (error) {
    // extract just the error message to send back to client
    const message = error instanceof Error ? error.message : error;

    // log full error to console and sentry
    //await logServerError(error);

    // 500 Internal Server Error
    return res.status(500).json({ message });
  }
};
