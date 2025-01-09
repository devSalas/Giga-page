import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{r as o}from"./index.B52nOzfP.js";import{u as S}from"./base.myuU_eUG.js";const C=[{value:"lima",name:"Lima"},{value:"canete",name:"Cañete"}],j=[{value:1,name:"Villa Maria del triunfo",provincia:"lima"},{value:2,name:"San Juan de Miraflores",provincia:"lima"},{value:3,name:"Surco",provincia:"lima"},{value:4,name:"Lunahuaná",provincia:"canete"}];function P(){const[r,l]=o.useState({provincia:"",distrito:"",nombre:"",telefono:"",dni:"",correo:""}),[E,b]=o.useState(""),[d,x]=o.useState(!1),[m,f]=o.useState(!1),[w,h]=o.useState(!1),[y,v]=o.useState(j);o.useEffect(()=>{const a=setTimeout(()=>{x(!1),f(!1)},3e3);return()=>clearTimeout(a)},[d,m]),o.useEffect(()=>{if(r.provincia){const a=j.filter(t=>t.provincia===r.provincia);v(a),l(t=>({...t,distrito:""}))}else v([])},[r.provincia]);const n=a=>{const{name:t,value:s}=a.target;l(i=>({...i,[t]:s}))},N=async a=>{a.preventDefault();const{provincia:t,distrito:s,nombre:i,telefono:c,dni:u,correo:g}=r;if(!t||!s||!i||!c||!u){b("LLenar información correcta");return}try{h(!0),console.log({provincia:t,distrito:s,nombre:i,telefono:c,dni:u,correo:g});const p=await fetch(`${S}/clientepotencial`,{method:"POST",body:JSON.stringify({provincia:t,distrito:s,nombre:i,telefono:c,dni:u,correo:g}),headers:{"Content-Type":"Application/json"},credentials:"include"});if(!p.ok)throw new Error;(await p.json()).status==="success"&&(f(!0),l({provincia:"",distrito:"",nombre:"",telefono:"",dni:"",correo:""}))}catch{x(!0)}finally{h(!1)}};return e.jsxs("div",{className:"flex flex-col justify-center gap-[30px]",children:[e.jsx("div",{className:"bg-map rounded-[20px] sm:p-[50px] bg-cover shadow-lg",children:e.jsx("form",{onSubmit:N,className:"bg-primary p-[20px] sm:px-[35px] sm:py-[40px] rounded-[15px] flex flex-col gap-[30px] max-w-[400px] m-auto shadow-2xl",children:e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsxs("select",{name:"provincia",value:r.provincia,onChange:n,required:!0,className:"h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100",children:[e.jsx("option",{value:"",children:"Eliga la Provincia"}),C.map((a,t)=>e.jsx("option",{value:a.value,children:a.name},t))]}),e.jsxs("select",{name:"distrito",value:r.distrito,onChange:n,required:!0,className:"h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100",children:[e.jsx("option",{value:"",children:"Eliga el distrito"}),y.map((a,t)=>e.jsx("option",{value:a.value,children:a.name},t))]}),e.jsx("input",{name:"nombre",value:r.nombre,onChange:n,required:!0,type:"text",placeholder:"Nombre Completo",className:"h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100"}),e.jsx("input",{name:"telefono",value:r.telefono,onChange:n,required:!0,type:"text",placeholder:"Telefono",className:"h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100"}),e.jsx("input",{name:"dni",value:r.dni,onChange:n,required:!0,type:"text",placeholder:"DNI",className:"h-[45px] w-full rounded-[20px] px-[10px] bg-slate-100"}),e.jsx("button",{className:"h-[45px] w-full rounded-[20px] px-[10px] bg-secondary text-white",children:w?e.jsx("div",{className:"flex-col gap-4 w-full flex items-center justify-center",children:e.jsx("div",{className:"w-8 h-8 border-8 text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"})}):"Enviar"})]})})}),m&&e.jsx("div",{className:"px-[20px] py-[10px] rounded-md w-full text-white bg-custom-gradient-global",children:"Perfecto, en un momento nos comunicaremos contigo, gracias."}),d&&e.jsx("div",{className:"w-full rounded-md text-white bg-red-500",children:e.jsx("p",{className:"px-[20px] py-[10px]",children:"Ocurrió un Error al enviar el formulario. Inténtelo nuevamente, por favor."})})]})}export{P as default};
