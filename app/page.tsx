import { e2e } from "@/utils/e2e";

export default function Home() {
  return (
    <main>
      <h1 { ...e2e.home_heading }>
        Welcome
      </h1>
    </main>
  );
}
