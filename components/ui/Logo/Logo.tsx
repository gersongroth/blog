import Image from 'next/image';

const Logo = ({ className = '', ...props }) => (
  <Image src="/logo.png" width={723} height={338} {...props} className={className} layout="responsive" />
);

export default Logo;
