import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{r as t}from"./index.B52nOzfP.js";import{u as j}from"./base.DbDskMeb.js";function S(){t.useState("");const[a,n]=t.useState(!1),[l,x]=t.useState(!1),[i,p]=t.useState(!1);t.useEffect(()=>{const s=setTimeout(()=>{n(!1),x(!1)},3e3);return()=>clearTimeout(s)},[a,l]);const d=s=>{s.preventDefault();const u=new FormData(s.target),o=Object.fromEntries(u.entries()),{nombre:m,dni:f,correo:g,telefono:h,mensaje:b}=o;if(console.log(o),!m||!h||!f||!g){alert("Tiene que ingresar todos los datos.");return}(async()=>{try{p(!0);const r=await fetch(`${j}/clientepotencial`,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"Application/json",Accept:"Application/json"}});console.log(r),r.ok||new Error;const c=await r.json();console.log(c),c.status=="success"&&(x(!0),s.target.reset())}catch{n(!0)}finally{p(!1)}})()};return t.useEffect(()=>{},[]),e.jsxs("form",{onSubmit:d,className:"flex flex-col gap-[20px] max-w-[500px]   m-auto ",children:[e.jsx("div",{className:"w-full ",children:e.jsxs("div",{className:"grid grid-cols-2 px-[15px] py-[20px] bg-custom-gradient-global gap-[10px]  rounded-[24px] lg:p-[20px] lg:gap-[20px]  ",children:[e.jsx("input",{type:"text",name:"nombre",placeholder:"Nombres Completos",required:!0,className:"rounded-[15px] lg:rounded-[30px] text-start h-[40px]  py-[4px] px-[20px] text-xs sm:text-base "}),e.jsx("input",{type:"text",name:"dni",placeholder:"DNI o CE",className:"rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "}),e.jsx("input",{type:"text",name:"telefono",placeholder:"telefono",className:"rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "}),e.jsx("input",{type:"correo",placeholder:"Correo",name:"correo",className:"rounded-[15px] lg:rounded-[20px] text-start h-[40px] py-[4px] px-[20px] text-xs sm:text-base "}),e.jsx("textarea",{name:"mensaje",id:"",className:" rounded-[15px]  lg:rounded-[20px] h-[80px] resize-none w-full col-span-2 p-[20px] "})]})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("button",{type:"submit",className:"px-16 rounded-2xl py-2 bg-fourth text-white",children:i?e.jsx("div",{className:"flex-col gap-4 w-full flex items-center justify-center",children:e.jsx("div",{className:"w-6 h-6 border-8  text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"})}):"Enviar"})}),l&&e.jsx("div",{className:"  px-[20px] py-[10px] rounded-md w-full text-white bg-custom-gradient-global ",children:"Perfecto, en un momento nos comunicaremos contigo, gracias."}),a&&e.jsx("div",{className:"w-full  rounded-md  text-white bg-red-500  ",children:e.jsx("p",{className:"px-[20px] py-[10px] ",children:"Ocurrio un Error al enviar el formluario. Intentelo nuevamente, por favor."})})]})}export{S as default};
