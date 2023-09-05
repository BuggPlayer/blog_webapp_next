import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="bg-gray-200 h-screen w-full  flex items-center justify-center">
      <Image src="/loading-state.gif" height={60} width={60} alt="no" />;
    </div>
  );
}
