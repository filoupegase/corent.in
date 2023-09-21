import useSWRImmutable from "swr/immutable";
import fetcher from "../../../lib/helpers/fetcher";
import type { PageStats } from "../../../types";
import Loading from "../Loading";

export type HitCounterProps = {
  slug: string;
};

const HitCounter = ({ slug }: HitCounterProps) => {
  // use immutable SWR to avoid double (or more) counting views:
  // https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
  const { data, error } = useSWRImmutable<PageStats>(
    `/api/count/?${new URLSearchParams({
      slug,
    })}`,
    fetcher
  );

  console.log("data", data);

  // fail secretly
  if (error) {
    return null;
  }

  // show spinning loading indicator if data isn't fetched yet
  if (!data) {
    return <Loading boxes={3} width={20} />;
  }

  return <span>{slug}</span>;
};

export default HitCounter;
