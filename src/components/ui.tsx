import Link from "next/link";
import { SITE, INQUIRIES } from "@/lib/site";
import { PAGES, P } from "@/lib/pages";
export const JsonLd=({d}:{d:object})=><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(d)}}/>;
const NAV=[["futures-ranking","순위"],["fee-comparison","수수료"],["futures-recommend","추천"],["exchange-events","이벤트"],["coin-futures-info","코인정보"]];
export function Header(){return(
<header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
<Link href="/" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid h-7 w-7 place-items-center rounded-sm border border-ice font-mono text-xs text-ice">CM</span>{SITE.name}</Link>
<nav aria-label="주요 메뉴" className="hidden gap-6 text-sm text-muted md:flex">{NAV.map(([s,l])=><Link key={s} href={`/guide/${s}`} className="hover:text-ice">{l}</Link>)}</nav>
<a href={SITE.tg} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-ice px-4 py-2 text-sm font-semibold text-ink">텔레그램 문의</a></div>
<nav aria-label="모바일 메뉴" className="flex gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm text-muted md:hidden">{NAV.map(([s,l])=><Link key={s} href={`/guide/${s}`} className="shrink-0 py-1">{l}</Link>)}</nav></header>)}
export function TgCta({title="상담 채널"}:{title?:string}){return(
<section aria-labelledby="tg" className="rounded-md border border-line bg-panel p-5 md:p-8">
<h2 id="tg" className="text-xl font-semibold">{title}</h2>
<p className="mt-1 text-sm text-muted">문의 유형을 선택하면 텔레그램 {SITE.handle} 대화로 연결됩니다. 개인 키, 비밀번호, 인증번호는 어떤 경우에도 보내지 마세요.</p>
<ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{INQUIRIES.map(i=><li key={i.k}>
<a href={SITE.tg} target="_blank" rel="noopener noreferrer" className="block min-h-24 rounded-sm border border-line p-4 transition hover:border-ice"><b className="block">{i.k}</b><span className="text-sm text-muted">{i.d}</span></a></li>)}</ul></section>)}
export function Faq({items}:{items:{q:string;a:string}[]}){return(
<div className="divide-y divide-line rounded-md border border-line bg-panel">{items.map(f=>
<details key={f.q} className="group p-4"><summary className="cursor-pointer list-none font-medium">{f.q}</summary><p className="mt-2 text-muted">{f.a}</p></details>)}</div>)}
export function Related({cur}:{cur?:string}){return(
<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{PAGES.filter(p=>p.slug!==cur).map((p:P)=>
<li key={p.slug}><Link href={`/guide/${p.slug}`} className="block h-full rounded-sm border border-line bg-panel p-4 hover:border-ice"><b>{p.h1}</b><span className="mt-1 block text-sm text-muted">{p.desc}</span></Link></li>)}</ul>)}
export const Notice=()=><p className="rounded-sm border border-amber/40 bg-amber/5 p-4 text-sm text-amber">고지: 본 사이트는 정보 제공 목적이며 특정 거래소 가입이나 투자를 권유하지 않습니다. 선물거래는 원금 이상 손실이 발생할 수 있습니다. 국내 이용자가 미신고 해외 사업자를 이용하거나 홍보하는 경우 법적 위험이 있을 수 있으므로 관련 규정을 직접 확인하세요.</p>;
export function Footer(){return(
<footer className="mt-20 border-t border-line bg-panel/80"><div className="mx-auto max-w-7xl space-y-6 px-4 py-10">
<Notice/><div className="flex flex-wrap justify-between gap-4 text-sm text-muted"><span>{SITE.name} · {SITE.url.replace("https://","")}</span>
<a href={SITE.tg} target="_blank" rel="noopener noreferrer" className="text-ice">텔레그램 {SITE.handle}</a></div>
<p className="text-xs text-muted">최종 점검일 {SITE.updated}. 수수료와 정책은 수시로 변경되므로 각 거래소 공식 페이지에서 재확인하세요.</p></div></footer>)}
