export const dynamic = "force-dynamic";

export default async function FormPage() {
  const loadTime = 4000;

  await sleep(loadTime);

  return (
    <div className="text-2xl font-bold tracking-tighter">Form Page loaded after {loadTime}ms</div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// import {Suspense} from "react";

// export const dynamic = "force-dynamic";

// async function FormPage() {
//   const loadTime = 4000;

//   await sleep(loadTime);

//   return (
//     <div className="text-2xl font-bold tracking-tighter">Form Page loaded after {loadTime}ms</div>
//   );
// }

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// export default function FormPageContainer() {
//   return (
//     <Suspense fallback={<div>Loading from Suspense</div>}>
//       <FormPage />
//     </Suspense>
//   );
// }
