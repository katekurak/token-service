import{_ as D,u as Q,o as X,a as j,b as ee,c as ae,d as ne}from"./B9e1VCve.js";import{_ as w,t as b,v as f,x as t,z as g,y as s,a2 as A,B as T,A as h,d as F,r as M,j as U,Z as B,V as L,K as r,ac as oe,W as E,N as P,X as H,ad as te,a0 as de,I as x,J as Z,M as me,a3 as K,ae as ce,G as W,H as J,m as se,g as re,L as le}from"./BPKU-ukn.js";import"./_7q_4vBK.js";const ie={},ue={class:"new-customer__error"};function pe(d,e){const c=D;return f(),b("div",ue,[t("h3",null,s(d.$t("errors.formTitle")),1),t("p",null,[A(d.$slots,"default",{},()=>[T(s(d.$t("errors.formSubtitle")),1)])]),g(c,{type:"button",class:"new-customer__button-try-again",onClick:e[0]||(e[0]=l=>d.$emit("close"))},{default:h(()=>[T(s(d.$t("buttons.tryAgain")),1)]),_:1})])}const fe=w(ie,[["render",pe]]),_e={},ve={class:"new-customer__success"};function be(d,e){return f(),b("div",ve,[t("h3",null,s(d.$t("success.formTitle")),1),t("p",null,s(d.$t("success.formTitle")),1)])}const ye=w(_e,[["render",be]]);let O=0;function Se(){return{getID:()=>(O++,O)}}const ge={class:"base-textfield__wrapper"},Ce=["for"],Me=["id","value","aria-describedby","aria-invalid"],$e=["id"],he=F({__name:"Input",props:{label:{},modelValue:{},error:{}},emits:["update:modelValue"],setup(d,{emit:e}){const c=d,l=e,i=M(null),y=M(!1),C=U(()=>y.value||!!c.modelValue),V=Se().getID().toString(),$=()=>y.value=!0,n=()=>y.value=!1,I=o=>{const a=o.target;a&&l("update:modelValue",a.value)},k=()=>{i.value&&i.value.focus()};return(o,a)=>(f(),b("div",ge,[t("div",{class:B(["base-textfield",{"base-textfield--error":o.error}]),onClick:k},[o.label?(f(),b("label",{key:0,class:B(["base-textfield__label",{floating:C.value}]),for:r(V)},s(o.label),11,Ce)):L("",!0),t("input",oe(o.$attrs,{id:r(V),ref_key:"inputRef",ref:i,class:"base-textfield__input",value:o.modelValue,"aria-describedby":o.error?`${r(V)}-error`:void 0,"aria-invalid":c.error?!0:void 0,onFocus:$,onBlur:n,onInput:I}),null,16,Me)],2),g(E,{name:"fade"},{default:h(()=>[o.error?(f(),b("p",{key:0,id:`${r(V)}-error`,"aria-live":"assertive",class:"base-textfield__message base-textfield__message--error"},s(o.error),9,$e)):L("",!0)]),_:1})]))}}),Te={class:"base-textfield__wrapper"},Ve={class:"base-textfield__icon-wrapper"},Ie={key:0,class:"base-textfield__icon",src:j,alt:"Icon arrow collapse"},Be={key:1,class:"base-textfield__icon",src:ee,alt:"Icon arrow expand"},Ne={class:"base-textfield__input-wrapper"},Ge={class:"base-textfield__input"},Re=["onClick"],Ae={class:B(["base-textfield__option base-textfield__option--error"])},ke={key:0,class:"base-textfield__message base-textfield__message--error"},Ue=F({__name:"SelectWithSearch",props:{label:{},modelValue:{},error:{},options:{},searchParameter:{}},emits:["update:modelValue"],setup(d,{emit:e}){const c=d,l=e,i=M(null),y=M(null),C=M(null),V=Q(i),$=M(!1),n=M(""),I=U(()=>$.value||!!c.modelValue),k=p=>{l("update:modelValue",p)},o=p=>{const u=p.target;u&&(n.value=u.value)};X(i,()=>$.value=!1);const a=U(()=>{if(!V)return{};const{bottom:p,left:u,width:S}=V;return{position:"fixed",top:`${p.value}px`,left:`${u.value}px`,width:S.value?`${S.value}px`:"140px"}}),G=U(()=>{var u;if(!c.searchParameter)return c.options.filter(S=>S.toString().toLowerCase().includes(n.value.toLowerCase()));const p=((u=c.searchParameter)==null?void 0:u.split("|"))||[];return c.options.filter(S=>p.some(N=>S[N].toString().toLowerCase().includes(n.value.toLowerCase())))});return P($,p=>{p?me(()=>{var u;return(u=C.value)==null?void 0:u.focus()}):n.value=""}),(p,u)=>(f(),b("div",Te,[t("div",{ref_key:"parentRef",ref:i,class:"base-textfield",onClick:u[1]||(u[1]=S=>$.value=!$.value)},[p.label?(f(),b("label",{key:0,class:B(["base-textfield__label",{floating:I.value}])},s(p.label),3)):L("",!0),t("div",Ve,[$.value?(f(),b("img",Ie)):(f(),b("img",Be))]),t("div",Ne,[t("div",Ge,[$.value?H((f(),b("input",{key:0,ref_key:"searchInputRef",ref:C,"onUpdate:modelValue":u[0]||(u[0]=S=>n.value=S),type:"text",class:"base-textfield__search",onInput:o},null,544)),[[te,n.value]]):A(p.$slots,"value-text",{key:1,option:p.modelValue},()=>[T(s(p.modelValue),1)])])]),g(E,{name:"fade-slide-down"},{default:h(()=>[$.value?(f(),b("div",{key:0,ref_key:"dropdownRef",ref:y,class:"base-textfield__dropdoun",style:de(a.value)},[G.value.length?(f(),b("ul",{key:0,class:B(["base-textfield__options",{active:$.value}])},[(f(!0),b(x,null,Z(G.value,(S,N)=>(f(),b("li",{key:N,class:B(["base-textfield__option",{"base-textfield__option--active":JSON.stringify(S)===JSON.stringify(p.modelValue)}]),onClick:R=>k(S)},[A(p.$slots,"option-text",{option:S},()=>[T(s(S),1)])],10,Re))),128))],2)):(f(),b("ul",{key:1,class:B(["base-textfield__options",{active:$.value}])},[t("li",Ae,[A(p.$slots,"default",{},()=>[T(s(p.$t("errors.noDataFound")),1)])])],2))],4)):L("",!0)]),_:3})],512),g(E,{name:"fade"},{default:h(()=>[p.error?(f(),b("p",ke,s(p.error),1)):L("",!0)]),_:1})]))}}),Le={class:"radio-button-group"},Pe=["value","name"],Fe=F({__name:"RadioButtonGroup",props:{options:{},modelValue:{}},emits:["update:modelValue"],setup(d){const e=d,c=M(e.modelValue);return P(()=>e.modelValue,l=>{c.value=l}),(l,i)=>{const y=ae;return f(),K(y,null,{default:h(()=>[t("div",Le,[(f(!0),b(x,null,Z(l.options,C=>(f(),b("label",{key:C.value,class:B(["radio-button-group__label",{"radio-button-group__label--selected":C.value===c.value}])},[H(t("input",{"onUpdate:modelValue":i[0]||(i[0]=V=>c.value=V),type:"radio",class:"radio-button-group__input",value:C.value,name:C.name,onChange:i[1]||(i[1]=()=>{l.$emit("update:modelValue",c.value)})},null,40,Pe),[[ce,c.value]]),A(l.$slots,"default",{option:C},()=>[T(s(C.label),1)])],2))),128))])]),_:3})}}}),Ee={class:"base-checkbox"},Ke=["checked"],we=F({__name:"Checkbox",props:{modelValue:{type:Boolean},label:{},error:{type:Boolean}},emits:["update:modelValue"],setup(d,{emit:e}){const c=e,l=i=>{const y=i.target;y&&c("update:modelValue",y.checked)};return(i,y)=>{const C=ne;return f(),b("label",Ee,[t("input",{class:"base-checkbox__input",type:"checkbox",checked:i.modelValue,onChange:l},null,40,Ke),g(C,{name:"checkbox",class:B(["base-checkbox__icon",{"base-checkbox__icon--error":i.error,"base-checkbox__icon--checked":i.modelValue}])},null,8,["class"]),A(i.$slots,"default",{},()=>[T(s(i.label),1)])])}}}),Oe={},De={class:"new-customer-form__content"},He={class:"new-customer-form__content-list"};function xe(d,e){return f(),b("div",De,[t("h4",null,s(d.$t("tokenServiceForm.content.title")),1),t("div",He,[t("div",null,[t("h5",null,[e[0]||(e[0]=t("span",null,"1",-1)),T(s(d.$t("tokenServiceForm.content.items[0].title")),1)]),t("p",null,s(d.$t("tokenServiceForm.content.items[0].text")),1)]),t("div",null,[t("h5",null,[e[1]||(e[1]=t("span",null,"2",-1)),T(s(d.$t("tokenServiceForm.content.items[1].title")),1)]),t("p",null,s(d.$t("tokenServiceForm.content.items[1].text")),1)]),t("div",null,[t("h5",null,[e[2]||(e[2]=t("span",null,"3",-1)),T(s(d.$t("tokenServiceForm.content.items[2].title")),1)]),t("p",null,s(d.$t("tokenServiceForm.content.items[2].text")),1)])])])}const Ze=w(Oe,[["render",xe]]),_=M({}),We=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Je=/^[A-Za-z]{2}$/,Ye=/^[A-Za-z .-]{1,14}$/,ze=/^(https?:\/\/)?((([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}))(:[0-9]{1,5})?(\/[^\s]*)?$/,qe=U(()=>Object.keys(_.value).length===0),v=(d,e,c)=>{const l=Xe(c);for(const i of l){const y=je(i,e);if(typeof y=="string"){_.value[d]=y;break}else _.value=Qe(_.value,d)}},Qe=(d,e)=>{const{[e]:c,...l}=d;return l},Xe=d=>d.split("|").map(e=>{const[c,l]=e.split("{"),i=l?l.replace("}","").split(",").map(y=>y.trim()):[];return{rule:c,params:i}}),je=(d,e)=>{const{rule:c}=d;switch(c){case"required":return e!=null&&e!==!1&&e!==""||"errors.required";case"name":return typeof e=="string"&&e.length>=2&&e.length<=64||"errors.name";case"surname":return typeof e=="string"&&e.length>=2&&e.length<=64||"errors.surname";case"company":return typeof e=="string"&&e.length>=2&&e.length<=128||"errors.company";case"country":return typeof e=="string"&&Je.test(e)||"errors.country";case"city":return typeof e=="string"&&Ye.test(e)||"errors.city";case"siteUrl":return typeof e=="string"&&ze.test(e)||"errors.siteUrl";case"email":return typeof e=="string"&&We.test(e)||"errors.email";case"taxNumber":return typeof e=="string"&&e.length>=3&&e.length<=14||"errors.taxNumber";default:return!0}},ea=[{code:"AF",name:"Afghanistan"},{code:"AX",name:"Åland Islands"},{code:"AL",name:"Albania"},{code:"DZ",name:"Algeria"},{code:"AS",name:"American Samoa"},{code:"AD",name:"Andorra"},{code:"AO",name:"Angola"},{code:"AI",name:"Anguilla"},{code:"AQ",name:"Antarctica"},{code:"AG",name:"Antigua and Barbuda"},{code:"AR",name:"Argentina"},{code:"AM",name:"Armenia"},{code:"AW",name:"Aruba"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbados"},{code:"BY",name:"Belarus"},{code:"BE",name:"Belgium"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Benin"},{code:"BM",name:"Bermuda"},{code:"BT",name:"Bhutan"},{code:"BO",name:"Bolivia"},{code:"BA",name:"Bosnia and Herzegovina"},{code:"BW",name:"Botswana"},{code:"BV",name:"Bouvet Island"},{code:"BR",name:"Brazil"},{code:"IO",name:"British Indian Ocean Territory"},{code:"VG",name:"British Virgin Islands"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgaria"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodia"},{code:"CM",name:"Cameroon"},{code:"CA",name:"Canada"},{code:"CV",name:"Cape Verde"},{code:"BQ",name:"Caribbean Netherlands"},{code:"KY",name:"Cayman Islands"},{code:"CF",name:"Central African Republic"},{code:"TD",name:"Chad"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CX",name:"Christmas Island"},{code:"CC",name:"Cocos (Keeling) Islands"},{code:"CO",name:"Colombia"},{code:"KM",name:"Comoros"},{code:"CK",name:"Cook Islands"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CU",name:"Cuba"},{code:"CW",name:"Curaçao"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czechia"},{code:"DK",name:"Denmark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominica"},{code:"DO",name:"Dominican Republic"},{code:"CD",name:"DR Congo"},{code:"EC",name:"Ecuador"},{code:"EG",name:"Egypt"},{code:"SV",name:"El Salvador"},{code:"GQ",name:"Equatorial Guinea"},{code:"ER",name:"Eritrea"},{code:"EE",name:"Estonia"},{code:"SZ",name:"Eswatini"},{code:"ET",name:"Ethiopia"},{code:"FK",name:"Falkland Islands"},{code:"FO",name:"Faroe Islands"},{code:"FJ",name:"Fiji"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GF",name:"French Guiana"},{code:"PF",name:"French Polynesia"},{code:"TF",name:"French Southern and Antarctic Lands"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambia"},{code:"GE",name:"Georgia"},{code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},{code:"GR",name:"Greece"},{code:"GL",name:"Greenland"},{code:"GD",name:"Grenada"},{code:"GP",name:"Guadeloupe"},{code:"GU",name:"Guam"},{code:"GT",name:"Guatemala"},{code:"GG",name:"Guernsey"},{code:"GN",name:"Guinea"},{code:"GW",name:"Guinea-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haiti"},{code:"HM",name:"Heard Island and McDonald Islands"},{code:"HN",name:"Honduras"},{code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"},{code:"IR",name:"Iran"},{code:"IQ",name:"Iraq"},{code:"IE",name:"Ireland"},{code:"IM",name:"Isle of Man"},{code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"CI",name:"Ivory Coast"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"JE",name:"Jersey"},{code:"JO",name:"Jordan"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"XK",name:"Kosovo"},{code:"KW",name:"Kuwait"},{code:"KG",name:"Kyrgyzstan"},{code:"LA",name:"Laos"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libya"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MO",name:"Macau"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaysia"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malta"},{code:"MH",name:"Marshall Islands"},{code:"MQ",name:"Martinique"},{code:"MR",name:"Mauritania"},{code:"MU",name:"Mauritius"},{code:"YT",name:"Mayotte"},{code:"MX",name:"Mexico"},{code:"FM",name:"Micronesia"},{code:"MD",name:"Moldova"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolia"},{code:"ME",name:"Montenegro"},{code:"MS",name:"Montserrat"},{code:"MA",name:"Morocco"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibia"},{code:"NR",name:"Nauru"},{code:"NP",name:"Nepal"},{code:"NL",name:"Netherlands"},{code:"NC",name:"New Caledonia"},{code:"NZ",name:"New Zealand"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"NU",name:"Niue"},{code:"NF",name:"Norfolk Island"},{code:"KP",name:"North Korea"},{code:"MK",name:"North Macedonia"},{code:"MP",name:"Northern Mariana Islands"},{code:"NO",name:"Norway"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palau"},{code:"PS",name:"Palestine"},{code:"PA",name:"Panama"},{code:"PG",name:"Papua New Guinea"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Peru"},{code:"PH",name:"Philippines"},{code:"PN",name:"Pitcairn Islands"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"PR",name:"Puerto Rico"},{code:"QA",name:"Qatar"},{code:"CG",name:"Republic of the Congo"},{code:"RE",name:"Réunion"},{code:"RO",name:"Romania"},{code:"RU",name:"Russia"},{code:"RW",name:"Rwanda"},{code:"BL",name:"Saint Barthélemy"},{code:"SH",name:"Saint Helena, Ascension and Tristan da Cunha"},{code:"KN",name:"Saint Kitts and Nevis"},{code:"LC",name:"Saint Lucia"},{code:"MF",name:"Saint Martin"},{code:"PM",name:"Saint Pierre and Miquelon"},{code:"VC",name:"Saint Vincent and the Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"San Marino"},{code:"ST",name:"São Tomé and Príncipe"},{code:"SA",name:"Saudi Arabia"},{code:"SN",name:"Senegal"},{code:"RS",name:"Serbia"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapore"},{code:"SX",name:"Sint Maarten"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"SB",name:"Solomon Islands"},{code:"SO",name:"Somalia"},{code:"ZA",name:"South Africa"},{code:"GS",name:"South Georgia"},{code:"KR",name:"South Korea"},{code:"SS",name:"South Sudan"},{code:"ES",name:"Spain"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Sudan"},{code:"SR",name:"Suriname"},{code:"SJ",name:"Svalbard and Jan Mayen"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},{code:"SY",name:"Syria"},{code:"TW",name:"Taiwan"},{code:"TJ",name:"Tajikistan"},{code:"TZ",name:"Tanzania"},{code:"TH",name:"Thailand"},{code:"TL",name:"Timor-Leste"},{code:"TG",name:"Togo"},{code:"TK",name:"Tokelau"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinidad and Tobago"},{code:"TN",name:"Tunisia"},{code:"TR",name:"Turkey"},{code:"TM",name:"Turkmenistan"},{code:"TC",name:"Turks and Caicos Islands"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Uganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"GB",name:"United Kingdom"},{code:"US",name:"United States"},{code:"UM",name:"United States Minor Outlying Islands"},{code:"VI",name:"United States Virgin Islands"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Uzbekistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican City"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"WF",name:"Wallis and Futuna"},{code:"EH",name:"Western Sahara"},{code:"YE",name:"Yemen"},{code:"ZM",name:"Zambia"},{code:"ZW",name:"Zimbabwe"}],aa=[{code:"AU",name:"Австралія"},{code:"AT",name:"Австрія"},{code:"AZ",name:"Азербайджан"},{code:"AX",name:"Аландські Острови"},{code:"AL",name:"Албанія"},{code:"DZ",name:"Алжир"},{code:"AS",name:"Американське Самоа"},{code:"AI",name:"Ангілья"},{code:"AO",name:"Ангола"},{code:"AD",name:"Андорра"},{code:"AQ",name:"Антарктида"},{code:"AG",name:"Антигуа і Барбуда"},{code:"AR",name:"Аргентина"},{code:"AW",name:"Аруба"},{code:"AF",name:"Афганістан"},{code:"BS",name:"Багами"},{code:"BD",name:"Бангладеш"},{code:"BB",name:"Барбадос"},{code:"BH",name:"Бахрейн"},{code:"BZ",name:"Беліз"},{code:"BE",name:"Бельгія"},{code:"BJ",name:"Бенін"},{code:"BM",name:"Бермуди"},{code:"BY",name:"Білорусь"},{code:"BG",name:"Болгарія"},{code:"BO",name:"Болівія"},{code:"BA",name:"Боснія і Герцеговина"},{code:"BW",name:"Ботсвана"},{code:"BR",name:"Бразилія"},{code:"IO",name:"Британська Територія в Індійському Океані"},{code:"VG",name:"Британські Віргінські Острови"},{code:"BN",name:"Бруней"},{code:"BF",name:"Буркіна-Фасо"},{code:"BI",name:"Бурунді"},{code:"BT",name:"Бутан"},{code:"VN",name:"В'єтнам"},{code:"VU",name:"Вануату"},{code:"VA",name:"Ватикан"},{code:"GB",name:"Велика Британія"},{code:"VE",name:"Венесуела"},{code:"VI",name:"Віргінські Острови США"},{code:"AM",name:"Вірменія"},{code:"GA",name:"Габон"},{code:"HT",name:"Гаїті"},{code:"GM",name:"Гамбія"},{code:"GH",name:"Гана"},{code:"GY",name:"Гаяна"},{code:"GP",name:"Гваделупа"},{code:"GT",name:"Гватемала"},{code:"GN",name:"Гвінея"},{code:"GW",name:"Гвінея-Бісау"},{code:"GG",name:"Гернсі"},{code:"GI",name:"Гібралтар"},{code:"HN",name:"Гондурас"},{code:"HK",name:"Гонконг"},{code:"GD",name:"Гренада"},{code:"GL",name:"Гренландія"},{code:"GR",name:"Греція"},{code:"GE",name:"Грузія"},{code:"GU",name:"Гуам"},{code:"DK",name:"Данія"},{code:"JE",name:"Джерсі"},{code:"DJ",name:"Джибуті"},{code:"DM",name:"Домініка"},{code:"DO",name:"Домініканська Республіка"},{code:"CD",name:"ДР Конго"},{code:"EC",name:"Еквадор"},{code:"GQ",name:"Екваторіальна Гвінея"},{code:"ER",name:"Еритрея"},{code:"SZ",name:"Есватіні"},{code:"EE",name:"Естонія"},{code:"ET",name:"Ефіопія"},{code:"EG",name:"Єгипет"},{code:"YE",name:"Ємен"},{code:"ZM",name:"Замбія"},{code:"EH",name:"Західна Сахара"},{code:"ZW",name:"Зімбабве"},{code:"IL",name:"Ізраїль"},{code:"IN",name:"Індія"},{code:"ID",name:"Індонезія"},{code:"IQ",name:"Ірак"},{code:"IR",name:"Іран"},{code:"IE",name:"Ірландія"},{code:"IS",name:"Ісландія"},{code:"ES",name:"Іспанія"},{code:"IT",name:"Італія"},{code:"JO",name:"Йорданія"},{code:"CV",name:"Кабо-Верде"},{code:"KZ",name:"Казахстан"},{code:"KY",name:"Кайманові Острови"},{code:"KH",name:"Камбоджа"},{code:"CM",name:"Камерун"},{code:"CA",name:"Канада"},{code:"BQ",name:"Карибські Нідерланди"},{code:"QA",name:"Катар"},{code:"KE",name:"Кенія"},{code:"KG",name:"Киргизстан"},{code:"CN",name:"Китай"},{code:"CY",name:"Кіпр"},{code:"KI",name:"Кірибаті"},{code:"CC",name:"Кокосові (Кілінг) Острови"},{code:"CO",name:"Колумбія"},{code:"KM",name:"Коморські Острови"},{code:"XK",name:"Косово"},{code:"CR",name:"Коста-Рика"},{code:"CI",name:"Кот-д'Івуар"},{code:"CU",name:"Куба"},{code:"KW",name:"Кувейт"},{code:"CW",name:"Кюрасао"},{code:"LA",name:"Лаос"},{code:"LV",name:"Латвія"},{code:"LS",name:"Лесото"},{code:"LT",name:"Литва"},{code:"LR",name:"Ліберія"},{code:"LB",name:"Ліван"},{code:"LY",name:"Лівія"},{code:"LI",name:"Ліхтенштейн"},{code:"LU",name:"Люксембург"},{code:"MM",name:"М'янма"},{code:"MU",name:"Маврикій"},{code:"MR",name:"Мавританія"},{code:"MG",name:"Мадагаскар"},{code:"YT",name:"Майотта"},{code:"MO",name:"Макао"},{code:"MW",name:"Малаві"},{code:"MY",name:"Малайзія"},{code:"ML",name:"Малі"},{code:"UM",name:"Малі Віддалені Острови США"},{code:"MV",name:"Мальдіви"},{code:"MT",name:"Мальта"},{code:"MA",name:"Марокко"},{code:"MQ",name:"Мартиніка"},{code:"MH",name:"Маршаллові Острови"},{code:"MX",name:"Мексика"},{code:"FM",name:"Мікронезія"},{code:"MZ",name:"Мозамбік"},{code:"MD",name:"Молдова"},{code:"MC",name:"Монако"},{code:"MN",name:"Монголія"},{code:"MS",name:"Монтсеррат"},{code:"NA",name:"Намібія"},{code:"NR",name:"Науру"},{code:"NP",name:"Непал"},{code:"NE",name:"Нігер"},{code:"NG",name:"Нігерія"},{code:"NL",name:"Нідерланди"},{code:"NI",name:"Нікарагуа"},{code:"DE",name:"Німеччина"},{code:"NU",name:"Ніуе"},{code:"NZ",name:"Нова Зеландія"},{code:"NC",name:"Нова Каледонія"},{code:"NO",name:"Норвегія"},{code:"AE",name:"Об'єднані Арабські Емірати"},{code:"OM",name:"Оман"},{code:"BV",name:"Острів Буве"},{code:"IM",name:"Острів Мен"},{code:"NF",name:"Острів Норфолк"},{code:"CX",name:"Острів Різдва"},{code:"HM",name:"Острів Херд і Острови Макдональд"},{code:"CK",name:"Острови Кука"},{code:"PN",name:"Острови Піткерн"},{code:"TC",name:"Острови Теркс і Кайкос"},{code:"PK",name:"Пакистан"},{code:"PW",name:"Палау"},{code:"PS",name:"Палестина"},{code:"PA",name:"Панама"},{code:"PG",name:"Папуа Нова Гвінея"},{code:"PY",name:"Парагвай"},{code:"PE",name:"Перу"},{code:"ZA",name:"Південна Африка"},{code:"GS",name:"Південна Джорджія"},{code:"KR",name:"Південна Корея"},{code:"SS",name:"Південний Судан"},{code:"KP",name:"Північна Корея"},{code:"MK",name:"Північна Македонія"},{code:"MP",name:"Північні Маріанські Острови"},{code:"PL",name:"Польща"},{code:"PT",name:"Португалія"},{code:"PR",name:"Пуерто-Рико"},{code:"CG",name:"Республіка Конго"},{code:"RE",name:"Реюньйон"},{code:"RU",name:"Росія"},{code:"RW",name:"Руанда"},{code:"RO",name:"Румунія"},{code:"SV",name:"Сальвадор"},{code:"WS",name:"Самоа"},{code:"SM",name:"Сан-Марино"},{code:"ST",name:"Сан-Томе і Принсіпі"},{code:"SA",name:"Саудівська Аравія"},{code:"SH",name:"Свята Єлена, Вознесіння і Тристан-да-Кунья"},{code:"SC",name:"Сейшели"},{code:"BL",name:"Сен-Бартельмі"},{code:"MF",name:"Сен-Мартен"},{code:"PM",name:"Сен-П'єр і Мікелон"},{code:"SN",name:"Сенегал"},{code:"VC",name:"Сент-Вінсент і Гренадини"},{code:"KN",name:"Сент-Кітс і Невіс"},{code:"LC",name:"Сент-Люсія"},{code:"RS",name:"Сербія"},{code:"SY",name:"Сирія"},{code:"SG",name:"Сінгапур"},{code:"SX",name:"Сінт-Мартен"},{code:"SK",name:"Словаччина"},{code:"SI",name:"Словенія"},{code:"SB",name:"Соломонові Острови"},{code:"SO",name:"Сомалі"},{code:"US",name:"Сполучені Штати Америки"},{code:"SD",name:"Судан"},{code:"SR",name:"Суринам"},{code:"SL",name:"Сьєрра-Леоне"},{code:"TJ",name:"Таджикистан"},{code:"TH",name:"Таїланд"},{code:"TW",name:"Тайвань"},{code:"TZ",name:"Танзанія"},{code:"TL",name:"Тімор-Лешті"},{code:"TG",name:"Того"},{code:"TK",name:"Токелау"},{code:"TO",name:"Тонга"},{code:"TT",name:"Тринідад і Тобаго"},{code:"TV",name:"Тувалу"},{code:"TN",name:"Туніс"},{code:"TR",name:"Туреччина"},{code:"TM",name:"Туркменістан"},{code:"UG",name:"Уганда"},{code:"HU",name:"Угорщина"},{code:"UZ",name:"Узбекистан"},{code:"UA",name:"Україна"},{code:"WF",name:"Уолліс і Футуна"},{code:"UY",name:"Уругвай"},{code:"FO",name:"Фарерські Острови"},{code:"FJ",name:"Фіджі"},{code:"PH",name:"Філіппіни"},{code:"FI",name:"Фінляндія"},{code:"FK",name:"Фолклендські Острови"},{code:"FR",name:"Франція"},{code:"GF",name:"Французька Гвіана"},{code:"PF",name:"Французька Полінезія"},{code:"TF",name:"Французькі Південні та Антарктичні Території"},{code:"HR",name:"Хорватія"},{code:"CF",name:"Центральноафриканська Республіка"},{code:"TD",name:"Чад"},{code:"CZ",name:"Чехія"},{code:"CL",name:"Чилі"},{code:"ME",name:"Чорногорія"},{code:"CH",name:"Швейцарія"},{code:"SE",name:"Швеція"},{code:"SJ",name:"Шпіцберген і Ян-Маєн"},{code:"LK",name:"Шрі-Ланка"},{code:"JM",name:"Ямайка"},{code:"JP",name:"Японія"}],na={en:ea,uk:aa},oa=W("countries",{getters:{getLocaleCountries:()=>{const{locale:d}=J();return na[d.value]}}}),ta=W("range",{getters:{getRanges:()=>{const{t:d}=J();return[{name:"selectedRange",value:"UP_TO_1000",label:`${d("upTo")} 1000`},{name:"selectedRange",value:"FROM_1000_TO_10000",label:"1000 - 10 000"},{name:"selectedRange",value:"FROM_10000_TO_100000",label:"10 000 - 100 000"},{name:"selectedRange",value:"MORE_THAN_100000",label:`${d("moreThan")} 100 000`}]}}}),da=async d=>{const e=se();try{const c=await fetch(e.public.cdnUrl+"/api/v1/merchant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}),l=await c.text();return{status:c.status,data:c.status===201?{message:l}:JSON.parse(l)}}catch(c){throw console.error("Error: ",c),c}},ma={class:"new-customer-form"},ca={class:"new-customer-form__form"},sa={class:"form__header"},ra={class:"form__content"},la={class:"form__group-title"},ia={class:"form__group"},ua={class:"form__group-title"},pa={class:"form__group"},fa={class:"form__range-title"},_a={class:"form__group"},va={href:"/privacy_policy",target:"_blank"},ba={href:"/terms_of_use",target:"_blank"},ya={class:"form__footer"},Sa={class:"new-customer-form__content-wrapper"},$a=F({__name:"index",setup(d){const e=oa(),c=ta(),l=M(!1),i=M(null),y=M(!1),C=M(!1),$=Intl.DateTimeFormat().resolvedOptions().locale.split("-")[1],n=M({name:"",surname:"",company:"",country:e.getLocaleCountries.find(o=>o.code===$)||e.getLocaleCountries[0],city:"",siteUrl:"",email:"",businessType:"",taxNumber:"",selectedRange:c.getRanges[0].value}),I=M(!0);P(()=>I.value,()=>{v("agree",I.value,"required")}),P(()=>n.value.country,()=>{v("country",n.value.country,"required")}),P(()=>n.value.selectedRange,()=>{v("selectedRange",n.value.selectedRange,"selectedRange")});const k=()=>{if(!C.value&&(v("agree",I.value,"required"),v("country",n.value.country,"required"),v("name",n.value.name,"name"),v("surname",n.value.surname,"surname"),v("email",n.value.email,"email"),v("company",n.value.company,"company"),v("selectedRange",n.value.selectedRange,"required"),v("siteUrl",n.value.siteUrl,"siteUrl"),v("city",n.value.city,"city"),v("businessType",n.value.businessType,"required"),v("taxNumber",n.value.taxNumber,"taxNumber"),qe.value)){C.value=!0;const o={...n.value,country:n.value.country.code};da(o).then(a=>{var G,p,u,S;a.status===201?y.value=!0:((G=a.data)==null?void 0:G.errorCode)===411?(l.value=!0,i.value=411):((p=a.data)==null?void 0:p.errorCode)===412?(l.value=!0,i.value=412):(u=a.data)!=null&&u.details?_.value=(S=a.data)==null?void 0:S.details.reduce((N,R)=>(R.field&&(N[R.field]=`errors.${R.field}`),N),{}):l.value=!0}).catch(a=>{console.error("Error:",a),l.value=!0}).finally(()=>{C.value=!1})}};return(o,a)=>{const G=fe,p=ye,u=he,S=Ue,N=Fe,R=re("i18n-t"),Y=we,z=D,q=Ze;return f(),b("div",ma,[t("div",ca,[l.value?(f(),K(G,{key:0,onClose:a[0]||(a[0]=m=>l.value=!1)},{default:h(()=>[T(s(i.value===411&&o.$t("errors.duplicateEmail")||i.value===412&&o.$t("errors.duplicateTaxNumber")||o.$t("errors.formSubtitle")),1)]),_:1})):y.value?(f(),K(p,{key:1})):(f(),b("form",{key:2,class:"form",onSubmit:le(k,["prevent"])},[t("div",sa,[t("h3",null,s(o.$t("tokenServiceForm.form.title")),1),t("p",null,s(o.$t("tokenServiceForm.form.subtitle")),1)]),t("div",ra,[t("h5",la,s(o.$t("tokenServiceForm.form.personalInformation")),1),t("div",ia,[g(u,{modelValue:n.value.name,"onUpdate:modelValue":a[1]||(a[1]=m=>n.value.name=m),class:"form__textfield",label:o.$t("labels.name"),type:"text",error:r(_).name&&o.$t(r(_).name),onInput:a[2]||(a[2]=m=>r(v)("name",n.value.name,"name"))},null,8,["modelValue","label","error"]),g(u,{modelValue:n.value.surname,"onUpdate:modelValue":a[3]||(a[3]=m=>n.value.surname=m),class:"form__textfield",label:o.$t("labels.surname"),type:"text",error:r(_).surname&&o.$t(r(_).surname),onInput:a[4]||(a[4]=m=>r(v)("surname",n.value.surname,"surname"))},null,8,["modelValue","label","error"]),g(u,{modelValue:n.value.email,"onUpdate:modelValue":a[5]||(a[5]=m=>n.value.email=m),class:"form__textfield--full-width",label:o.$t("labels.email"),type:"text",error:r(_).email&&o.$t(r(_).email),onInput:a[6]||(a[6]=m=>r(v)("email",n.value.email,"email"))},null,8,["modelValue","label","error"])]),t("h5",ua,s(o.$t("tokenServiceForm.form.aboutCompany")),1),t("div",pa,[g(u,{modelValue:n.value.company,"onUpdate:modelValue":a[7]||(a[7]=m=>n.value.company=m),class:"form__textfield",label:o.$t("labels.companyName"),type:"text",error:r(_).company&&o.$t(r(_).company),onInput:a[8]||(a[8]=m=>r(v)("company",n.value.company,"company"))},null,8,["modelValue","label","error"]),g(u,{modelValue:n.value.siteUrl,"onUpdate:modelValue":a[9]||(a[9]=m=>n.value.siteUrl=m),class:"form__textfield",label:o.$t("labels.websiteUrl"),type:"text",error:r(_).siteUrl&&o.$t(r(_).siteUrl),onInput:a[10]||(a[10]=m=>r(v)("siteUrl",n.value.siteUrl,"siteUrl"))},null,8,["modelValue","label","error"]),g(S,{modelValue:n.value.country,"onUpdate:modelValue":a[11]||(a[11]=m=>n.value.country=m),class:"form__textfield",options:r(e).getLocaleCountries,"search-parameter":"name|code",label:o.$t("labels.country"),error:r(_).country&&o.$t(r(_).country)},{"option-text":h(({option:m})=>[t("span",null,s(m&&m.name)+" "+s(m&&m.code),1)]),"value-text":h(({option:m})=>[t("span",null,s(m&&m.name)+" "+s(m&&m.code),1)]),_:1},8,["modelValue","options","label","error"]),g(u,{modelValue:n.value.city,"onUpdate:modelValue":a[12]||(a[12]=m=>n.value.city=m),class:"form__textfield",label:o.$t("labels.city"),type:"text",error:r(_).city&&o.$t(r(_).city),onInput:a[13]||(a[13]=m=>r(v)("city",n.value.city,"city"))},null,8,["modelValue","label","error"]),g(u,{modelValue:n.value.businessType,"onUpdate:modelValue":a[14]||(a[14]=m=>n.value.businessType=m),class:"form__textfield",type:"text",label:o.$t("labels.businessType"),error:r(_).businessType&&o.$t(r(_).businessType),onInput:a[15]||(a[15]=m=>r(v)("businessType",n.value.businessType,"required"))},null,8,["modelValue","label","error"]),g(u,{modelValue:n.value.taxNumber,"onUpdate:modelValue":a[16]||(a[16]=m=>n.value.taxNumber=m),class:"form__textfield",label:o.$t("labels.taxNumber"),type:"text",error:r(_).taxNumber&&o.$t(r(_).taxNumber),onInput:a[17]||(a[17]=m=>r(v)("taxNumber",n.value.taxNumber,"taxNumber"))},null,8,["modelValue","label","error"])]),t("h5",fa,s(o.$t("labels.numberOfTransactions")),1),t("div",_a,[g(N,{modelValue:n.value.selectedRange,"onUpdate:modelValue":a[18]||(a[18]=m=>n.value.selectedRange=m),options:r(c).getRanges},null,8,["modelValue","options"])]),t("div",null,[g(Y,{modelValue:I.value,"onUpdate:modelValue":a[19]||(a[19]=m=>I.value=m),class:"form__agree",error:!!r(_).agree},{default:h(()=>[g(R,{scope:"global",keypath:"labels.agreePrivacyPolicy"},{privacyPolicyLink:h(()=>[t("a",va,s(o.$t("privacyPolicy")),1)]),termsOfUseLink:h(()=>[t("a",ba,s(o.$t("termsOfUse")),1)]),_:1})]),_:1},8,["modelValue","error"])])]),t("div",ya,[g(z,{type:"submit",class:"form__button","is-loader":C.value,style:{width:"142px"},onClick:()=>{}},{default:h(()=>[T(s(o.$t("buttons.submit")),1)]),_:1},8,["is-loader"])])],32))]),t("div",Sa,[g(q)])])}}});export{$a as default};
