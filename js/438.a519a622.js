"use strict";(self["webpackChunkinfini_labs"]=self["webpackChunkinfini_labs"]||[]).push([[438],{6305:function(e,a,l){l.r(a),l.d(a,{default:function(){return R}});var t=l(3949),s=l(3396),o=l(7139),i=l(9242),n=l(7116),c=l(1925),d=l.p+"img/download.3f1f06a8.svg",r=l.p+"img/deploy.34efab0e.svg",u=l.p+"img/DockerLink.46e379b8.svg";const p=e=>((0,s.dD)("data-v-1d48ebcc"),e=e(),(0,s.Cn)(),e),b={class:"download-wrapper"},g={class:"download-top"},_=p((()=>(0,s._)("img",{src:n},null,-1))),m=p((()=>(0,s._)("p",null,"下载中心",-1))),f=p((()=>(0,s._)("img",{src:c,class:"global-img"},null,-1))),v=p((()=>(0,s._)("span",null,"中文",-1))),h={class:"download-middle"},w={class:"middle-top"},k=["onClick"],T={class:"middle-bottom"},y={class:"middle-left"},z={class:"left-top"},C=p((()=>(0,s._)("p",null,"版本",-1))),D=["href"],O=p((()=>(0,s._)("p",null,"发布时间",-1))),S=p((()=>(0,s._)("p",null,"文件体积",-1))),$={class:"left-middle"},I=p((()=>(0,s._)("img",{src:d},null,-1))),N=p((()=>(0,s._)("p",null,"下载稳定版安装包",-1))),x={class:"item-card"},P={class:"item"},M=p((()=>(0,s._)("span",{class:"label"},"操作系统",-1))),H=["value"],F={class:"item"},Y=p((()=>(0,s._)("span",{class:"label"},"架构",-1))),j=["value"],q={class:"left-bottom"},J=p((()=>(0,s._)("img",{src:r,class:"deploy"},null,-1))),K=p((()=>(0,s._)("p",null,"您也可以进行容器部署",-1))),L=["href"],W=p((()=>(0,s._)("img",{src:u,class:"link"},null,-1))),Z=p((()=>(0,s._)("span",null,"或使用以下命令获取最新容器镜像：",-1))),U=p((()=>(0,s._)("br",null,null,-1))),V={class:"bottom-bkd"},A=p((()=>(0,s._)("div",{class:"middle-right"},[(0,s._)("div",{style:{display:"none"}},[(0,s._)("p",null,"订阅电子邮件"),(0,s._)("span",null,"获取 INFINI Labs 动态和最新产品信息"),(0,s._)("form",{action:""},[(0,s._)("input",{class:"Text-input",type:"text",placeholder:"请输入电子邮件地址"}),(0,s._)("br"),(0,s._)("button",null,"订阅")])])],-1)));function G(e,a,l,n,c,d){const r=(0,s.up)("router-link"),u=t.Z;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",b,[(0,s._)("div",g,[(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[_])),_:1}),m,f,v]),(0,s._)("div",h,[(0,s._)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(c.config.products),(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["product",{active:c.activeTab==e}]),key:c.config.products[e].label,onClick:a=>d.onTabChange(e)},(0,o.zw)(c.config.products[e].label),11,k)))),128))]),(0,s._)("div",T,[(0,s._)("div",y,[(0,s._)("div",z,[(0,s._)("div",null,[C,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].version)+"-"+(0,o.zw)(c.config.products[c.activeTab].number),1),(0,s._)("a",{target:"_blank",href:c.config.products[c.activeTab].release_notes_url},"更新说明",8,D)]),(0,s._)("div",null,[O,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].build_date),1)]),(0,s._)("div",null,[S,(0,s._)("span",null,(0,o.zw)(c.config.products[c.activeTab].size),1)])]),(0,s._)("div",$,[I,N,(0,s._)("div",x,[(0,s._)("div",P,[M,(0,s.wy)((0,s._)("select",{class:"options","onUpdate:modelValue":a[0]||(a[0]=e=>c.config.products[c.activeTab].selectedOS=e),onChange:a[1]||(a[1]=(...e)=>d.osChange&&d.osChange(...e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.keys(c.config.os),(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,o.zw)(c.config.os[e].label),9,H)))),128))],544),[[i.bM,c.config.products[c.activeTab].selectedOS]])]),(0,s._)("div",F,[Y,(0,s.wy)((0,s._)("select",{class:"options","onUpdate:modelValue":a[2]||(a[2]=e=>c.config.products[c.activeTab].selectedPlatform=e)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.config.os[c.config.products[c.activeTab].selectedOS].platform,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,o.zw)(e),9,j)))),128))],512),[[i.bM,c.config.products[c.activeTab].selectedPlatform]])])]),(0,s._)("button",{onClick:a[3]||(a[3]=(...e)=>d.goDownload&&d.goDownload(...e))},"下载")]),(0,s._)("div",q,[J,K,(0,s._)("a",{href:c.config.products[c.activeTab].docker.repo,target:"_blank"}," Docker 官方仓库 ",8,L),W,Z,U,(0,s._)("div",V,[(0,s._)("span",null,"docker pull infinilabs/"+(0,o.zw)(c.activeTab)+":latest",1)])])]),A])])]),(0,s.Wm)(u)],64)}var B={components:{CommonFooter:t.Z},name:"Download",data(){return{activeTab:"gateway",config:{products:{gateway:{label:"INFINI Gateway",version:"1.6.0",number:657,size:"7M",build_date:"31-May-2022 08:14",release_notes_url:"https://gateway.infinilabs.com/zh/docs/release-notes/",docker:{repo:"https://hub.docker.com/r/infinilabs/gateway"},selectedOS:"linux",selectedPlatform:"amd64"},console:{label:"INFINI Console",version:"0.3.1",number:748,size:"13M",build_date:"25-Jul-2022 01:58",release_notes_url:"https://console.infinilabs.com/zh/docs/release-notes/",docker:{repo:"https://hub.docker.com/r/infinilabs/console"},selectedOS:"linux",selectedPlatform:"amd64"}},os:{linux:{label:"Linux",platform:["386","amd64","arm5","arm6","arm64","arm7","mips","mips64","mips64le"],packageType:"tar.gz"},mac:{label:"Mac",platform:["amd64","arm64"],packageType:"zip"},windows:{label:"Windows",platform:["386","amd64"],packageType:"zip"}}}}},mounted(){let e=this.$route.query,a=Object.keys(this.config.products);e.tab&&a.indexOf(e.tab)&&(this.activeTab=e.tab)},methods:{onTabChange(e){this.activeTab=e;let a=JSON.parse(JSON.stringify(this.$route.query));a.tab=e,this.$router.replace({query:a})},osChange(e){this.config.products[this.activeTab].selectedPlatform=this.config.os[e.target.value].platform[0]},goDownload(){let e=this.config.products[this.activeTab],a=`https://release.infinilabs.com/${this.activeTab}/stable/${this.activeTab}-${e.version}${"gateway"==this.activeTab?"_SNAPSHOT":""}-${e.number}-${e.selectedOS}-${e.selectedPlatform}.${this.config.os[e.selectedOS].packageType}`;location.href=a}}},E=l(89);const Q=(0,E.Z)(B,[["render",G],["__scopeId","data-v-1d48ebcc"]]);var R=Q}}]);
//# sourceMappingURL=438.a519a622.js.map