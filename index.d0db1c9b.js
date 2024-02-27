const t=document.getElementById("app");(async()=>{console.log("hola");let e=await fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=15"),a=await e.json(),s=a?.map(t=>`
            <article class="Card">
                <img src="${t.images[0].match(/https?:\/\/[^\s]+/)}">
                <h2>
                    ${t.title} <small>Precio $ ${t.price}</small>
                </h2>
            </article>
        `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=s,t.appendChild(c)})();
//# sourceMappingURL=index.d0db1c9b.js.map
