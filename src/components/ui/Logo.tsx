import Image from "next/image";
import Link from "next/link";

const Logo = ({
  width = 250,
  height = 250,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Link href='/'>
      <Image
        src='/images/ccd-logo-white.svg'
        alt='Code Crafted Digital Logo White Variant'
        width={width}
        height={height}
        priority
      />
    </Link>
  );
};

export default Logo;
