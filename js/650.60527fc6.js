"use strict";(self["webpackChunkinfini_labs"]=self["webpackChunkinfini_labs"]||[]).push([[650],{1986:function(e,l,a){a.r(l),a.d(l,{default:function(){return X}});var t=a(3949),s=a(3396),o=a(7139),i=a(9242),n=a(7116),c=a(1925),r=a.p+"img/download.3f1f06a8.svg",d=a.p+"img/deploy.34efab0e.svg",u=a.p+"img/DockerLink.46e379b8.svg";const p=e=>((0,s.dD)("data-v-bf193962"),e=e(),(0,s.Cn)(),e),b={class:"download-wrapper"},f={class:"download-top"},g=p((()=>(0,s._)("img",{src:n},null,-1))),m=p((()=>(0,s._)("p",null,"下载中心",-1))),_=p((()=>(0,s._)("img",{src:c,class:"global-img"},null,-1))),v=p((()=>(0,s._)("span",null,"中文",-1))),h={class:"download-middle"},w={class:"middle-top"},k=["onClick"],T={class:"middle-bottom"},y={class:"middle-left"},z={class:"left-top"},C=p((()=>(0,s._)("p",null,"版本",-1))),D=["if"],O=["href"],I=p((()=>(0,s._)("p",null,"发布时间",-1))),S=p((()=>(0,s._)("p",null,"文件体积",-1))),N={class:"left-middle"},$=p((()=>(0,s._)("img",{src:r},null,-1))),x=p((()=>(0,s._)("p",null,"下载稳定版安装包",-1))),P={class:"item-card"},M={class:"item"},F=p((()=>(0,s._)("span",{class:"label"},"操作系统",-1))),H=["value"],Y={class:"item"},j=p((()=>(0,s._)("span",{class:"label"},"架构",-1))),q=["value"],K={class:"left-bottom"},L=p((()=>(0,s._)("img",{src:d,class:"deploy"},null,-1))),W=p((()=>(0,s._)("p",null,"您也可以进行容器部署",-1))),Z=["href"],J=p((()=>(0,s._)("img",{src:u,class:"link"},null,-1))),U=p((()=>(0,s._)("span",null,"或使用以下命令获取最新容器镜像：",-1))),V=p((()=>(0,s._)("br",null,null,-1))),A={class:"bottom-bkd"},G=p((()=>(0,s._)("div",{class:"middle-right"},[(0,s._)("div",{style:{display:"none"}},[(0,s._)("p",null,"订阅电子邮件"),(0,s._)("span",null,"获取 INFINI Labs 动态和最新产品信息"),(0,s._)("form",{action:""},[(0,s._)("input",{class:"Text-input",type:"text",placeholder:"请输入电子邮件地址"}),(0,s._)("br"),(0,s._)("button",null,"订阅")])])],-1)));function B(e,l,a,n,c,r){const d=(0,s.up)("router-link"),u=t.Z;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",b,[(0,s._)("div",f,[(0,s.Wm)(d,{to:"/"},{default:(0,s.w5)((()=>[g])),_:1}),m,_,v]),(0,s._)("div",h,[(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(c.config.products),(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["product",{active:c.activeTab==e}]),key:c.config.products[e].label,onClick:l=>r.onTabChange(e)},(0,o.zw)(c.config.products[e].label),11,k)))),128))]),(0,s._)("div",T,[(0,s._)("div",y,[(0,s._)("div",z,[(0,s._)("div",null,[C,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].version)+"-"+(0,o.zw)(c.config.products[c.activeTab].number),1),(0,s._)("template",{if:""==c.config.products[c.activeTab].release_notes_url},[(0,s._)("a",{target:"_blank",href:c.config.products[c.activeTab].release_notes_url},"更新说明",8,O)],8,D)]),(0,s._)("div",null,[I,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].build_date),1)]),(0,s._)("div",null,[S,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].size),1)])]),(0,s._)("div",N,[$,x,(0,s._)("div",P,[(0,s._)("div",M,[F,(0,s.wy)((0,s._)("select",{class:"options","onUpdate:modelValue":l[0]||(l[0]=e=>c.config.products[c.activeTab].selectedOS=e),onChange:l[1]||(l[1]=(...e)=>r.osChange&&r.osChange(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(c.config.os),(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,o.zw)(c.config.os[e].label),9,H)))),128))],544),[[i.bM,c.config.products[c.activeTab].selectedOS]])]),(0,s._)("div",Y,[j,(0,s.wy)((0,s._)("select",{class:"options","onUpdate:modelValue":l[2]||(l[2]=e=>c.config.products[c.activeTab].selectedPlatform=e)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.config.os[c.config.products[c.activeTab].selectedOS].platform,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,o.zw)(e),9,q)))),128))],512),[[i.bM,c.config.products[c.activeTab].selectedPlatform]])])]),(0,s._)("button",{onClick:l[3]||(l[3]=(...e)=>r.goDownload&&r.goDownload(...e))},"下载")]),(0,s._)("div",K,[L,W,(0,s._)("a",{href:c.config.products[c.activeTab].docker.repo,target:"_blank"}," Docker 官方仓库 ",8,Z),J,U,V,(0,s._)("div",A,[(0,s._)("span",null,"docker pull infinilabs/"+(0,o.zw)(c.activeTab)+":"+(0,o.zw)(c.config.products[c.activeTab].version)+"-"+(0,o.zw)(c.config.products[c.activeTab].number),1)])])]),G])])]),(0,s.Wm)(u)],64)}var E={components:{CommonFooter:t.Z},name:"Download",data(){return{activeTab:"gateway",config:{products:{gateway:{label:"INFINI Gateway",version:"1.8.1",number:733,size:"8M",build_date:"26-Sep-2022 13:34",release_notes_url:"https://gateway.infinilabs.com/zh/docs/release-notes/",docker:{repo:"https://hub.docker.com/r/infinilabs/gateway"},selectedOS:"linux",selectedPlatform:"amd64"},console:{label:"INFINI Console",version:"0.6.0",number:841,size:"15M",build_date:"23-Sep-2022 12:02",release_notes_url:"https://console.infinilabs.com/zh/docs/release-notes/",docker:{repo:"https://hub.docker.com/r/infinilabs/console"},selectedOS:"linux",selectedPlatform:"amd64"},agent:{label:"INFINI Agent",version:"0.2.1",number:30,size:"6M",build_date:"25-Sep-2022 13:06",release_notes_url:"",docker:{repo:"https://hub.docker.com/r/infinilabs/agent"},selectedOS:"linux",selectedPlatform:"amd64"}},os:{linux:{label:"Linux",platform:["386","amd64","arm5","arm6","arm64","arm7","mips","mips64","mips64le"],packageType:"tar.gz"},mac:{label:"Mac",platform:["amd64","arm64"],packageType:"zip"},windows:{label:"Windows",platform:["386","amd64"],packageType:"zip"}}}}},mounted(){let e=this.$route.query,l=Object.keys(this.config.products);e.tab&&l.indexOf(e.tab)&&(this.activeTab=e.tab)},methods:{onTabChange(e){this.activeTab=e;let l=JSON.parse(JSON.stringify(this.$route.query));l.tab=e,this.$router.replace({query:l})},osChange(e){this.config.products[this.activeTab].selectedPlatform=this.config.os[e.target.value].platform[0]},goDownload(){let e=this.config.products[this.activeTab],l=`https://release.infinilabs.com/${this.activeTab}/stable/${this.activeTab}-${e.version}-${e.number}-${e.selectedOS}-${e.selectedPlatform}.${this.config.os[e.selectedOS].packageType}`;location.href=l}}},Q=a(89);const R=(0,Q.Z)(E,[["render",B],["__scopeId","data-v-bf193962"]]);var X=R}}]);
//# sourceMappingURL=650.60527fc6.js.map