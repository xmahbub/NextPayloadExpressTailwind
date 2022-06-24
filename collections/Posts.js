
const Posts = {
    slug: "Posts",
    fields: [
        {
            name: "Title",
            type: "text",
            label: "Post Title",
            
        },
        {
            name: "content",
            type: "richText",
            label: "Post Content",
            
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'catagory',
            hasMany: true,
            admin: {
              position: 'sidebar',
            },
          },

       
    ]


}

export default Posts;