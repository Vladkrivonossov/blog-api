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