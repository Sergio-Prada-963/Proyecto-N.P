const login = "http://localhost:3309/api/login"
const register = "http://localhost:3309/api/usuarios"

export const loguear = async (credenciales)=>{
    try {
        const logi = await fetch(login,{
            method: "POST",
            body:JSON.stringify(credenciales),
            headers:{'Content-Type':'application/json'}
        });
        const dataUser = await logi.json();
        console.log(dataUser);
        return dataUser
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
