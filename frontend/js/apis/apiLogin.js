const login = "http://localhost:3309/api/login"
const register = "http://localhost:3309/api/usuarios"

export const loguear = async (credenciales)=>{
    try {
        const logi = await fetch(login,{
            method: "POST",
            body:JSON.stringify(credenciales),
            headers:{'Content-Type':'application/json'}
        });
        if(logi.ok){
            const {token, rango} = await logi.json();
            document.cookie = `token-x=${encodeURIComponent(token)}; path=/;`;
            if(rango === "USER"){
                window.location.replace("../pages/user/home.user.html")
            } else{window.location.replace("../pages/admin/home.admin.html")}
        }
        return;
    } catch (error) {
        console.log(error,"No funshion :(");
    }
}

export const registro = async (data)=>{
    try {
        await fetch(register,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        });window.location.reload()
    } catch (error) {
        console.log(error,"no funshion :(");
    }
}
