// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'cloud',
    },
    cloud: {
        project: 'care-therapy/caretherapy',
    },
    collections: {
        posts: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'caretherapy/src/data/posts/*',
            format: { contentField: 'content' },
            schema: {
                // 1. Title (generates the slug automatically)
                title: fields.slug({ name: { label: 'Title' } }),

                // 2. Draft Status
                draft: fields.checkbox({
                    label: 'Draft',
                    description: 'Check this to hide this post from the live site.',
                    defaultValue: false,
                }),

                // 3. Featured Post
                featured: fields.checkbox({
                    label: 'Featured',
                    description: 'Mark this post as the featured article on the blog listing page.',
                    defaultValue: false,
                }),

                // 4. Published Date
                publishedDate: fields.date({ label: 'Published Date' }),

                // 5. Category
                category: fields.select({
                    label: 'Category',
                    description: 'Choose the category for this post.',
                    options: [
                        { label: 'General', value: 'General' },
                        { label: 'Adapted Exercise', value: 'Adapted Exercise' },
                        { label: 'Rehabilitation', value: 'Rehabilitation' },
                        { label: 'Wellness', value: 'Wellness' },
                        { label: 'Ageing', value: 'Ageing' },
                        { label: 'Disability', value: 'Disability' },
                        { label: 'Tips & Advice', value: 'Tips & Advice' },
                    ],
                    defaultValue: 'General',
                }),

                // 6. Tags
                tags: fields.text({
                    label: 'Tags',
                    description: 'Comma-separated tags (e.g. "ageing, exercise, rehabilitation")',
                    multiline: false,
                }),

                // 7. SEO Excerpt
                excerpt: fields.text({
                    label: 'Excerpt',
                    description: 'Short summary for SEO and blog previews.',
                    multiline: true,
                }),

                // 8. Cover Image
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'caretherapy/public/images/blog',
                    publicPath: '/images/blog/',
                }),

                // 9. Author Name
                authorName: fields.text({
                    label: 'Author Name',
                    defaultValue: 'Cameron',
                }),

                // 10. Author Role
                authorRole: fields.text({
                    label: 'Author Role',
                    defaultValue: 'Founder & Adapted Exercise Specialist',
                }),

                // 11. The Content (rich text editor)
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'caretherapy/public/images/blog',
                        publicPath: '/images/blog/',
                    },
                }),
            },
        }),
    },
});
