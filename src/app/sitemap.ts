import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { PAGES } from "@/lib/pages";
import { SITE } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const d=new Date(SITE.updated);
return[{url:SITE.url,lastModified:d,priority:1},...PAGES.map(p=>({url:`${SITE.url}/guide/${p.slug}`,lastModified:d,priority:0.8}))]}
