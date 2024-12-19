import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{r as a}from"./index.B52nOzfP.js";import{u as v}from"./base.B4iLwrKF.js";function g(){const[m,r]=a.useState(!1),[l,o]=a.useState(""),[d,i]=a.useState(!1);a.useEffect(()=>{const s=setTimeout(()=>{o(""),r(!1)},3e3);return()=>clearTimeout(s)},[l]);const u=s=>{s.preventDefault();const t=s.currentTarget,x=t.elements.namedItem("Name")?.value,p=t.elements.namedItem("tel")?.value,f=t.elements.namedItem("service")?.value,h={nombre:x,telefono:p,servicio:f};async function j(){try{i(!0);const n=await fetch(`${v}/clientepotencial`,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(h)});if(!n.ok)throw new Error(`Error: ${n.status}`);const c=await n.json();console.log(c),c.status=="success"&&(r(!0),o("Perfecto, en un momento nos comunicaremos contigo, gracias."))}catch{r(!0),o("Error al enviar, intentelo mas tarde.")}finally{i(!1),t.Name.value="",t.tel.value="",t.service.value=""}}j()};return e.jsx("form",{onSubmit:u,className:"w-full  py-8 px-4",children:e.jsxs("div",{className:"max-w-6xl  m-auto",children:[e.jsxs("div",{className:"bg-custom-gradient-global p-4 py-6 md:p-8 rounded-[30px]",children:[e.jsx("h2",{className:" text-center text-primary text-2xl md:text-3xl font-bold text-whitem mb-8 ",children:"Dejanos tus datos y nosotros te contactamos"}),e.jsxs("div",{className:"flex gap-4 flex-wrap justify-center px-4 sm:px-0",children:[e.jsx("input",{type:"text",className:"w-full  sm:w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none",placeholder:"nombre",name:"Name",pattern:"[A-Za-záéíóúÁÉÍÓÚñÑ\\s]{1,60}",title:"Ingresa un nombre válido (máximo 60 caracteres).",required:!0}),e.jsx("input",{type:"number",className:"w-full  sm:w-36 h-10 md:w-56 md:h-12 bg-primary rounded-2xl px-4 outline-none",placeholder:"telefono",name:"tel",id:"telefono",pattern:"9\\d{8}",title:"Debe comenzar con 9 y tener 9 dígitos.",required:!0}),e.jsxs("select",{name:"service",className:"w-full  sm:w-36 h-10 md:w-56 md:h-12 rounded-2xl px-4 appearance-auto",required:!0,children:[e.jsx("option",{value:"",children:"Elegir servicio"}),e.jsx("option",{value:"1",children:"Internet"}),e.jsx("option",{value:"2",children:"Cable TV"}),e.jsx("option",{value:"3",children:"Internet + cable"}),e.jsx("option",{value:"4",children:"Cámaras"})]})]})]}),e.jsx("div",{className:"flex justify-center my-8",children:e.jsx("button",{type:"submit",className:"bg-fourth px-16 py-2 md:w-56 md:h-12 font-bold rounded-full text-white transition-all hover:scale-105 duration-100",children:d?e.jsx("div",{className:"flex-col gap-4 w-full flex items-center justify-center",children:e.jsx("div",{className:"w-8 h-8 border-8  text-4xl animate-spin border-white flex items-center justify-center border-t-fourth rounded-full"})}):"Enviar"})}),m&&e.jsx("div",{className:"flex justify-center ",children:e.jsx("p",{className:"inline-block text-center bg-custom-gradient-global py-4   px-8 text-white  rounded-2xl",children:l})})]})})}export{g as default};
