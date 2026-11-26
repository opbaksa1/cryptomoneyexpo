import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGES, bySlug } from "@/lib/pages";
import { SITE, CRITERIA } from "@/lib/site";
import { Faq, JsonLd, Related, TgCta, Notice } from "@/components/ui";
type Ctx={params:Promise<{slug:string}>};
export const dynamicParams=false;
export const generateStaticParams=()=>PAGES.map(p=>({slug:p.slug}));
export async function generateMetadata({params}:Ctx):Promise<Metadata>{const p=bySlug((await params).slug);if(!p)return{};
const url=`/guide/${p.slug}`;return{title:p.title,description:p.desc,alternates:{canonical:url},openGraph:{type:"article",url,title:p.title,description:p.desc,locale:"ko_KR"}}}
export default async function Page({params}:Ctx){const p=bySlug((await params).slug);if(!p)notFound();const url=`${SITE.url}/guide/${p.slug}`;
return(<article className="space-y-10"><JsonLd d={{"@context":"https://schema.org","@graph":[
{"@type":"Article",headline:p.title,description:p.desc,mainEntityOfPage:url,inLanguage:"ko-KR",datePublished:SITE.updated,dateModified:SITE.updated,author:{"@id":`${SITE.url}/#org`},publisher:{"@id":`${SITE.url}/#org`}},
{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"홈",item:SITE.url},{"@type":"ListItem",position:2,name:p.h1,item:url}]},
{"@type":"FAQPage",mainEntity:p.faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}]}}/>
<header className="max-w-3xl"><nav aria-label="경로" className="text-sm text-muted"><Link href="/" className="hover:text-ice">홈</Link> / {p.h1}</nav>
<h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{p.h1}</h1><p className="mt-4 text-lg text-muted">{p.intro}</p>
<p className="mt-2 font-mono text-xs text-muted">최종 점검 <time dateTime={SITE.updated}>{SITE.updated}</time> · 편집팀</p></header>
<div className="grid gap-10 lg:grid-cols-[1fr_320px]"><div className="max-w-3xl space-y-8">
{p.s.map(s=><section key={s.h}><h2 className="text-xl font-semibold">{s.h}</h2><p className="mt-2">{s.p}</p></section>)}
<section><h2 className="text-xl font-semibold">공통 평가 기준</h2><dl className="mt-3 divide-y divide-line rounded-sm border border-line bg-panel">{CRITERIA.map(c=><div key={c.k} className="grid gap-1 p-3 sm:grid-cols-[160px_1fr]"><dt className="font-medium text-ice">{c.k}</dt><dd className="text-sm text-muted">{c.d}</dd></div>)}</dl></section>
<section><h2 className="mb-3 text-xl font-semibold">자주 묻는 질문</h2><Faq items={p.faq}/></section><Notice/></div>
<aside className="space-y-4 lg:sticky lg:top-24 lg:self-start"><TgCta title="상담 문의"/></aside></div>
<section><h2 className="mb-4 text-xl font-semibold">관련 가이드</h2><Related cur={p.slug}/></section></article>)}
