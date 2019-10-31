import axios from 'axios'

let IP = 'http://localhost:3000'
const ax = axios.create({
    baseURL:IP
})

//-------------------------------------------登录接口------------------------------------//
export function login(acc,pwd){
    return ax.post('/login',{acc,pwd})
}
//------------------------------------------token--------------------------------------//
export function getToken(token){
    return ax.get('/selectToken',{params:{token}})
}

//-----------------------------------------账号--------------------------------------//
//添加账号
export function accoutadd(acc,pwd,userGroup){
    return ax.post('/accountadd',{acc,pwd,userGroup})
}
