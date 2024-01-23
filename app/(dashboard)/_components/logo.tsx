

import Image from "next/image";


export const Logo = () => {

  return (
    <Image
      className="cursor-pointer"
      height={130}
      width={130}
      alt="logo"
      src="/logo.svg"
    />
  );
};
