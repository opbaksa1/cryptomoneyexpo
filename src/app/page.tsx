import { SITE, CRITERIA } from "@/lib/site";
import { Faq, JsonLd, Related, TgCta } from "@/components/ui";
import Link from "next/link";
const FAQ=[{q:"코인선물거래소와 해외선물거래소는 같은가요?",a:"아닙니다. 해외선물은 지수·원자재·외환 등 전통 자산을, 코인 선물은 가상자산 파생상품을 주로 가리킵니다."},
{q:"선물거래소를 고를 때 가장 먼저 볼 것은 무엇인가요?",a:"운영 주체의 규제 상태와 자산 보호 체계를 먼저 확인하고, 이후 수수료와 유동성을 비교하세요."},
{q:"코인거래소 이벤트는 믿고 참여해도 되나요?",a:"공식 공지의 조건을 직접 확인하세요. 거래량 요건이 큰 이벤트는 비용이 보상을 초과할 수 있습니다."}];
export default function Home(){return(<div className="space-y-16">
<JsonLd d={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQ.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}}/>
<section className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
<div><h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">코인선물거래소,<br/>같은 기준으로 비교합니다</h1>
<p className="mt-5 max-w-xl text-lg text-muted">선물거래소와 해외선물거래소의 수수료, 보안, 한국어 지원, 이벤트 조건을 확인 가능한 자료로 정리하고, 레버리지와 청산 위험을 함께 설명합니다.</p>
<div className="mt-7 flex flex-wrap gap-3"><Link href="/guide/futures-ranking" className="rounded-sm bg-ice px-6 py-3 font-semibold text-ink">순위 기준 보기</Link>
<a href={SITE.tg} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-ice px-6 py-3 font-semibold text-ice">텔레그램 상담</a></div></div>
<aside aria-label="평가 기준 요약" className="rounded-md border border-line bg-panel p-5 font-mono text-sm shadow-[0_0_60px_-20px] shadow-ice/40">
<div className="mb-3 flex justify-between text-muted"><span>평가 매트릭스</span><span className="text-amber">기준일 {SITE.updated}</span></div>
<ul className="divide-y divide-line">{CRITERIA.map(c=><li key={c.k} className="flex items-center justify-between gap-3 py-2.5"><span>{c.k}</span><span className="rounded-sm border border-ice/50 px-2 py-0.5 text-xs text-ice">검증 항목</span></li>)}</ul></aside></section>
<section aria-labelledby="c"><h2 id="c" className="text-2xl font-semibold">평가 기준</h2><p className="mt-1 text-muted">모든 순위와 추천은 아래 여섯 가지 기준을 공통으로 적용합니다.</p>
<div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{CRITERIA.map(c=><article key={c.k} className="rounded-sm border border-line bg-panel p-4"><h3 className="font-semibold text-ice">{c.k}</h3><p className="mt-1 text-sm text-muted">{c.d}</p></article>)}</div></section>
<section aria-labelledby="g"><h2 id="g" className="mb-5 text-2xl font-semibold">주제별 가이드</h2><Related/></section>
<TgCta/>
<section aria-labelledby="f"><h2 id="f" className="mb-5 text-2xl font-semibold">자주 묻는 질문</h2><Faq items={FAQ}/></section></div>)}
