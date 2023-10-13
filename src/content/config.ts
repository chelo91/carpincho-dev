// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define tu colección(es)
const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string().transform((str) => new Date(str)),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        draft: z.boolean().default(false),
        author: z.string().default('Chelo')
    })
});
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
    'posts': postCollection,
};