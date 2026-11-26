import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header, Footer, JsonLd } from "@/components/ui";
export const metadata:Metadata={metadataBase:new URL(SITE.url),
title:{default:"코인선물거래소·선물거래소 비교 | Crypto Money Expo",template:"%s | Crypto Money Expo"},description:SITE.desc,
alternates:{canonical:"/"},
verification:{other:{"naver-site-verification":"d72ddfc5da41ef916a873bb8b4070cbd6f35430a"}},
robots:{index:true,follow:true},
openGraph:{type:"website",siteName:SITE.name,locale:"ko_KR",url:SITE.url,title:"코인선물거래소·선물거래소 비교",description:SITE.desc}};
export default function Root({children}:{children:React.ReactNode}){return(
<html lang="ko"><body><JsonLd d={{"@context":"https://schema.org","@graph":[
{"@type":"Organization","@id":`${SITE.url}/#org`,name:SITE.name,url:SITE.url,contactPoint:{"@type":"ContactPoint",contactType:"customer support",url:SITE.tg,availableLanguage:"ko"}},
{"@type":"WebSite","@id":`${SITE.url}/#site`,url:SITE.url,name:SITE.name,inLanguage:"ko-KR",publisher:{"@id":`${SITE.url}/#org`}}]}}/>
<Header/><main className="mx-auto max-w-7xl px-4 py-8">{children}</main><Footer/></body></html>)}
