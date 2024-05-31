export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: ['/private/'],
            },

        ],
        sitemap: 'https://prime-concrete-pumping.vercel.app/sitemap.xml',
    }
}