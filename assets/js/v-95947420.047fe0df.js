"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93189],{325272:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-95947420","path":"/devices/SR-ZG9001K12-DIM-Z5.html","title":"Sunricher SR-ZG9001K12-DIM-Z5 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9001K12-DIM-Z5 control via MQTT","description":"Integrate your Sunricher SR-ZG9001K12-DIM-Z5 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-10-31T10:20:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Resetting","slug":"resetting","link":"#resetting","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1712689485000},"filePathRelative":"devices/SR-ZG9001K12-DIM-Z5.md"}')},16881:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var i=n(166252);const o=(0,i._)("h1",{id:"sunricher-sr-zg9001k12-dim-z5",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#sunricher-sr-zg9001k12-dim-z5","aria-hidden":"true"},"#"),(0,i.Uk)(" Sunricher SR-ZG9001K12-DIM-Z5")],-1),s=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SR-ZG9001K12-DIM-Z5")],-1),d=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"5 zone remote and dimmer")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, action, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9001K12-DIM-Z5.png",alt:"Sunricher SR-ZG9001K12-DIM-Z5"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.</p><h3 id="resetting" tabindex="-1"><a class="header-anchor" href="#resetting" aria-hidden="true">#</a> Resetting</h3><p>Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button. The Status LED will blink 3 times to indicate successful reset.</p>',5),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_1</code>, <code>off_1</code>, <code>brightness_move_up_1</code>, <code>brightness_move_down_1</code>, <code>brightness_stop_1</code>, <code>on_2</code>, <code>off_2</code>, <code>brightness_move_up_2</code>, <code>brightness_move_down_2</code>, <code>brightness_stop_2</code>, <code>on_3</code>, <code>off_3</code>, <code>brightness_move_up_3</code>, <code>brightness_move_down_3</code>, <code>brightness_stop_3</code>, <code>on_4</code>, <code>off_4</code>, <code>brightness_move_up_4</code>, <code>brightness_move_down_4</code>, <code>brightness_stop_4</code>, <code>on_5</code>, <code>off_5</code>, <code>brightness_move_up_5</code>, <code>brightness_move_down_5</code>, <code>brightness_stop_5</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},_=(0,n(983744).Z)(m,[["render",function(e,t){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),o,(0,i._)("table",null,[s,(0,i._)("tbody",null,[a,(0,i._)("tr",null,[d,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Sunricher"},{default:(0,i.w5)((()=>[(0,i.Uk)("Sunricher")])),_:1})])]),l,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);