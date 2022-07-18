import { ComponentProps } from 'react';
import Link from '../Link';


export type SelfieProps = Omit<ComponentProps<typeof Link>, "href">;

const Selfie = ({ ...rest }: SelfieProps) => {
  return (
    <>🦸🏻‍♂️</>
  )
};

export default Selfie;
