import { apiGet } from "../../src/lib/api";
import { About } from "../../src/app/pages/About";

type AboutPageDto = {
  title: string
  content: string
  updated_at: string
}

export default async function Page() {
  const page = await apiGet<AboutPageDto>("/api/pages/about/");
  const View = await About({ page });
  return View;
}

