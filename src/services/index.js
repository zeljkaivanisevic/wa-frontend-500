import axios from 'axios';

// instanca axios-a za potrebe Fipugram backenda
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
});

// naš objekt za sve pozive koji se dotiču `Post`ova
// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
    async getOne(id) {
    let response = await Service.get(`/posts/${id}`);
    let doc = response.data;
    return {
    id: doc._id,
    url: doc.source,
    email: doc.createdBy,
    title: doc.title,
    posted_at: Number(doc.postedAt)
    };
    },
    async getAll(searchTerm) {
        let options = {};

        if (searchTerm) {
            options.params = {
                _any: searchTerm
            };
        }

        let response = await Service.get('/posts', options);
        return response.data.map(doc => {
            return {
                id: doc.id,
                url: doc.source,
                email: doc.createdBy,
                title: doc.title,
                posted_at: Number(doc.postedAt)
            };
        });
    },



    async randompost(term) {
        let options = {};
        
        

        let response = await Service.get('/posts501', options);
        return response.data.map(doc => {
            return {
                id: doc.id,
                url: doc.source,
                email: doc.createdBy,
                title: doc.title,
                posted_at: Number(doc.postedAt)
            };
        });
    }





};

export { Service, Posts }; // exportamo Service za ručne pozive ili Posts za metode.
