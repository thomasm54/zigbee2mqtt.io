"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[56025],{290249:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-f43f1b5a","path":"/devices/4512762.html","title":"Namron 4512762 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512762 control via MQTT","description":"Integrate your Namron 4512762 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-01T09:58:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Batteries not included","slug":"batteries-not-included","link":"#batteries-not-included","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory Reset","slug":"factory-reset","link":"#factory-reset","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1712689485000},"filePathRelative":"devices/4512762.md"}')},623470:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var n=i(166252);const a=(0,n._)("h1",{id:"namron-4512762",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#namron-4512762","aria-hidden":"true"},"#"),(0,n.Uk)(" Namron 4512762")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"4512762")],-1),l=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee Door Sensor")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"contact, battery, voltage, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512762.png",alt:"Namron 4512762"})])],-1),h=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="batteries-not-included" tabindex="-1"><a class="header-anchor" href="#batteries-not-included" aria-hidden="true">#</a> Batteries not included</h3><p>The manual does not mention the fact that the device comes without batteries. Remove the bottom lid and insert a CR2450 battery.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Short press the button on the bottom of the device (black, recessed button) three times in short succession.</li><li>A light on the top of the device should turn orange for a short while before it starts pairing.</li><li>If the light blinks slowly in green for five minutes, this indicates that the device is already paired, and must be factory reset before joining a new network. Refer to the section &quot;Factory Reset&quot; below.</li></ol><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset" aria-hidden="true">#</a> Factory Reset</h3><ol><li>Press and hold the button on the bottom of the device (black, recessed button) for ten seconds.</li><li>A light on the top of the device will start blinking red for ten seconds and then turn steadily red. You can now release the button, and the device will be reset when the light turns off.</li></ol>',7),u=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),b={},p=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[o,(0,n._)("tbody",null,[r,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Namron"},{default:(0,n.w5)((()=>[(0,n.Uk)("Namron")])),_:1})])]),d,s,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,n.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);