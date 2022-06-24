const Catagory = {
    slug: "catagory",
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        
       
    ],
    admin: {
        useAsTitle: 'title',
    },


}

export default Catagory;