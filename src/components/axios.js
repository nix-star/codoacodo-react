const getnameAxios = async(idPost) => {

    try {
        const resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log(resPost.data)

        const respUser =  await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(respUser)
        console.log(respUser.data.name)

        console.log (`La persona que escribio este post ${idPost} es  ${respUser.data.name}, vive en ${respUser.data.address.city} y escribió: ${resPost.data.body}`)

    } catch (error) {
        console.log(error);
    }
}

getnameAxios(18)