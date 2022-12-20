export default {
    name: 'article',
    type: 'document',
    title: 'Articles',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title'
        },
        {
            name: 'text',
            type: 'string',
            title: 'text'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
              {
                type: 'block'
              }
            ]
        },
        {
            name: 'slug',
            type: 'string',
            title: 'slug'
        }
    ]
}