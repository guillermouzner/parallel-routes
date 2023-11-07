export const dynamic = "force-dynamic";

export default async function RendersPage() {
  const loadTime = 5000;

  await sleep(loadTime);

  return (
    <div className="text-3xl font-bold tracking-tighter">
      Renders Page loaded after {loadTime}ms
    </div>
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
