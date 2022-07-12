export type MenuItemProps = {
  href?: string;
  text?: string;
  current?: boolean;
  className?: string;
  // `any` avoids conflicts with @svgr/webpack, see: node_modules/next/image-types/global.d.ts
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

const MenuItem = ({ icon: ItemIcon, href, text, current, className }: MenuItemProps) => {
  return (
    <>
    </>
  )
}

export default MenuItem;
