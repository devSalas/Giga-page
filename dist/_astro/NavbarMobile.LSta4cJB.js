import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{r}from"./index.B52nOzfP.js";import{d as t}from"./index.BaDp8yG6.js";const m=()=>{const[l,a]=r.useState(!1),i=()=>{a(s=>!s)};return e.jsxs("div",{className:"w-full h-16 p-4 flex justify-between items-center lg:hidden",children:[e.jsx("figure",{children:e.jsx("img",{id:"btnOpenModal",src:"/imgs/menu.svg",alt:"Abrir menú",onClick:i})}),e.jsx("figure",{children:e.jsx("a",{href:"/",children:e.jsx("img",{src:"/imgs/gigamas_logo.png",alt:"Logo",className:"w-16"})})}),e.jsxs("div",{id:"navbarMobile",className:`fixed inset-0 bg-white z-50 ${l?"":"hidden"}`,children:[e.jsxs("div",{id:"closeModal",className:"fixed w-full flex justify-between p-4",children:[e.jsx("figure",{children:e.jsx("a",{href:"/",children:e.jsx("img",{src:"/imgs/gigamas_logo.png",alt:"Logo",className:"w-32"})})}),e.jsx("img",{src:"/imgs/close.svg",alt:"Cerrar",onClick:i})]}),e.jsx("nav",{className:"flex flex-col justify-center items-center h-full w-full font-semibold text-2xl",children:t.map(s=>e.jsx("a",{href:s.path,className:"block w-full py-8 text-center text-black hover:bg-secondary hover:text-white",onClick:i,children:s.title},s.title))})]})]})};export{m as default};
