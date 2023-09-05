import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <Image src="/loading-state.gif" height={40} width={40} alt="no" />;
}
