import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        alt="Logotype of beauty salon"
        width={120}
        height={44}
        priority
      />
    </Link>
  );
};
