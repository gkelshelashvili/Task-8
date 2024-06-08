function power(base, exponent) {
    if (exponent == 0)return 1;
    return base * power(base, exponent - 1);
}
  
console.log(power(5,3));

const getPosts = async () => {
    try {
        const raw_posts = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!raw_posts) {
            throw Error('Problme while getting posts')
        }

        const posts = await raw_posts.json()
        posts.forEach(element => {
            return creatPost(element)
        });



        } catch (error) {
        
    }
}

getPosts()
const creatPost = (element) => {
    //wrapper
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    //card
    const card = document.createElement('div')
    card.classList.add('card')
    //img 
    const img = document.createElement('img')
    img.src = ('https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg')
    //content
    const content = document.createElement('div')
    content.classList.add('content')
    //h3 
    const h3 = document.createElement('h3')
    h3.classList.add('h3')
    h3.innerText = `Number:${element.id} ${element.title}`
    //p 
    const p = document.createElement('p')
    p.classList.add('p')
    p.innerText = element.body
    //a
    const a = document.createElement('a')
    a.classList.add('btn')
    a.innerText = 'Read More'
    //adding items into content
    content.append(h3,p,a)
    card.append(img,content)
    wrapper.append(card)

    return document.body.append(wrapper)
}
