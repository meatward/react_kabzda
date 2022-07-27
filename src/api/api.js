import axios from "axios";

export const instance =  axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY": "82b4e2a5-93df-4fb7-a008-385c7407ddcc"}
})


export const usersAPI = {
 getUsers(page =2, pageSize=10){
     return instance.get(`users?page=${page}&count=${pageSize}`).then(response =>
                    response.data
                    );
            },
 followUse(id){
    return instance.post(`/follow/${id}`)
},
 unfollowUse(id){
    return instance.delete(`/follow/${id}`).then(response => response.data)
},
 isFriend(id){ return instance.get(`/follow/${id}`)}
}

