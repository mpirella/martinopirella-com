import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://martinopirella.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  },
  redirects: {
    // Vecchi articoli WordPress (formato /AAAA/MM/GG/slug/) -> nuova struttura /articoli/slug/
    '/2026/03/11/lintelligenza-artificiale-non-si-impara-si-diventa': '/articoli/lintelligenza-artificiale-non-si-impara-si-diventa',
    '/2026/02/26/non-tutti-i-ristoranti-sono-uguali-e-nemmeno-i-modelli-di-ai': '/articoli/non-tutti-i-ristoranti-sono-uguali-e-nemmeno-i-modelli-di-ai',
    '/2026/05/24/da-human-in-the-loop-alla-prevalenza-del-pensiero-critico-umano-nella-ai-ma-quale-umano': '/articoli/da-human-in-the-loop-alla-prevalenza-del-pensiero-critico-umano-nella-ai-ma-quale-umano',
    '/2026/05/24/lapprendista-senza-stregone': '/articoli/lapprendista-senza-stregone',
    '/2025/07/28/prompt-e-carbonara': '/articoli/prompt-e-carbonara',
    '/2026/03/13/ghe-pensi-mi-ai-agentica-e-rimozione-del-pensiero': '/articoli/ghe-pensi-mi-ai-agentica-e-rimozione-del-pensiero',
    '/2026/05/24/fotografare-il-fiume-la-norma-uni-11621-8-e-lillusione-di-cristallizzare-le-professioni-dellai': '/articoli/fotografare-il-fiume-la-norma-uni-11621-8-e-lillusione-di-cristallizzare-le-professioni-dellai',
    '/2026/05/02/veltroni-e-claude-lillusionista-in-chiesa': '/articoli/veltroni-e-claude-lillusionista-in-chiesa',
    '/2026/05/24/doxastic-loop-generative-engine-optimization-e-intelligenza-artificiale-agentica-come-rischio-sistemico': '/articoli/doxastic-loop-generative-engine-optimization-e-intelligenza-artificiale-agentica-come-rischio-sistemico',
    '/2026/05/24/pronto-chi-parla-identita-opacita-e-responsabilita-nellera-degli-agenti-ibridi': '/articoli/pronto-chi-parla-identita-opacita-e-responsabilita-nellera-degli-agenti-ibridi',
    '/2026/03/31/il-vuoto-e-il-surrogato': '/articoli/il-vuoto-e-il-surrogato',
    '/2026/03/26/ai-merce-o-relazione': '/articoli/ai-merce-o-relazione',
    '/2026/02/20/potevo-starmene-zitto-su-moltbook-certo-lho-fatto-no': '/articoli/potevo-starmene-zitto-su-moltbook-certo-lho-fatto-no',
    '/2026/05/24/14-luglio-2025-la-mia-intervista-a-chatgpt-molto-prima-di-walter': '/articoli/14-luglio-2025-la-mia-intervista-a-chatgpt-molto-prima-di-walter',
    '/2026/05/24/gli-agenti-ai-non-hanno-mai-paura-ed-e-un-problema': '/articoli/gli-agenti-ai-non-hanno-mai-paura-ed-e-un-problema',
    '/2026/03/14/dire-epistemia-non-basta': '/articoli/dire-epistemia-non-basta',
    '/2026/02/22/il-surf-e-larte-di-usare-lintelligenza-artificiale': '/articoli/il-surf-e-larte-di-usare-lintelligenza-artificiale',
    '/2026/02/19/ai-numeri-terre-rare-sudore': '/articoli/ai-numeri-terre-rare-sudore',
    '/2026/03/16/di-cosa-parli-quando-parli-di-ai': '/articoli/di-cosa-parli-quando-parli-di-ai',
    '/2026/03/11/chi-e-lesperto-di-ai': '/articoli/chi-e-lesperto-di-ai',
    '/2026/03/04/hai-dei-nuovi-dipendenti-e-non-lo-sapevi': '/articoli/hai-dei-nuovi-dipendenti-e-non-lo-sapevi',

    // Pagine di sistema WordPress senza un equivalente diretto sul sito nuovo
    '/category/uncategorized': '/articoli',
    '/category/scrittura': '/articoli',
    '/category/fotografia': '/articoli',
    '/category/arte': '/articoli',
    '/category/cucina': '/articoli',
    '/author/mpirella': '/',
    '/news': '/',
    '/page/2': '/articoli',
    '/page/3': '/articoli',
    '/informazioni': '/chi-sono',

    // Vecchi contenuti personali (pre-2026) senza un equivalente sul sito nuovo
    '/2018/06/20/welcome-to-myself': '/',
    '/2018/06/20/welcome-to-myself/amp': '/',
    '/2018/04/27/endorfine': '/',
    '/2021/10/25/i-militi-ignoti': '/',
    '/2018/07/09/parole-incrociate': '/',
    '/2018/06/25/arles-voies-off-festival-2018': '/',
    '/2018/07/19/consumo-ergo-sum': '/',
    '/2020/09/21/the-darkroom-project-otto': '/',
    '/2018/06/28/pronto-per-arles': '/',
    '/2018/03/08/yoko-ono-sky-piece-of-jesus-christ-performance': '/',
    '/2018/05/22/la-cena': '/',
  }
});
