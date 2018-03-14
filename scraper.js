require('dotenv').config();
require('isomorphic-fetch');
const cheerio = require('cheerio');

/* todo require og stilla dót */

/**
 * Listi af sviðum með „slug“ fyrir vefþjónustu og viðbættum upplýsingum til
 * að geta sótt gögn.
 */
const departments = [
  {
    name: 'Félagsvísindasvið',
    slug: 'felagsvisindasvid',
  },
  {
    name: 'Heilbrigðisvísindasvið',
    slug: 'heilbrigdisvisindasvid',
  },
  {
    name: 'Hugvísindasvið',
    slug: 'hugvisindasvid',
  },
  {
    name: 'Menntavísindasvið',
    slug: 'menntavisindasvid',
  },
  {
    name: 'Verkfræði- og náttúruvísindasvið',
    slug: 'verkfraedi-og-natturuvisindasvid',
  },
];

/**
 * Sækir svið eftir `slug`. Fáum gögn annaðhvort beint frá vef eða úr cache.
 *
 * @param {string} slug - Slug fyrir svið sem skal sækja
 * @returns {Promise} Promise sem mun innihalda gögn fyrir svið eða null ef það finnst ekki
 */
async function getTests(slug) {
  /* todo */
  if (slug === 'felagsvisindasvid') {
    const response = await fetch('https://ugla.hi.is/Proftafla/View/ajax.php?sid=2027&a=getProfSvids&proftaflaID=37&svidID=1&notaVinnuToflu=0');
    // console.log('GET response status', response.status);
    const text = await response.text();
    // console.log('GET response text', text);
    let $ = cheerio.load(text);

    console.log($.html());
    
    // console.log($('body').text();
    
    // const mu = $('table');
    // const li = $('tr > td:nth-child(2)');
    // console.log(li.text());
    
    
    
    // const td = $('tbody').find('tr').next('td');
    // console.log(td.text(), ' texti ? ');
    // console.log($.html());
    /**
     * 
     const html = `
     {<div class="foo">
       <ul>
         <li>foo!</li>
         <li>bar?</li>
         <li>baz</li>
       </ul>
       <div>div!</div>
       <p>Fyrsta p</p>
       <p>Annað p</p>
     </div>}
   `;
   const $ = cheerio.load(text);
   
   const mu = $('table.table');
   console.log(mu.html());
   
   // console.log($.html());
   // console.log($.html(), 'first');
   
   const lit = $('');
   console.log(lit.html());
   
 
   const li = $('rd > td:nth-child(2)');
   console.log(li.text());
 
   const p = $('div.foo').find('div').next('p');
   console.log(p.text());
 
   const lis = $('.foo ul li');
   lis.each((i, el) => {
     const li = $(el);
     console.log(`<li> nr. ${i} = ${li.text()}`);
   });
     */
  }
}

/**
 * Hreinsar cache.
 *
 * @returns {Promise} Promise sem mun innihalda boolean um hvort cache hafi verið hreinsað eða ekki.
 */
async function clearCache() {
  /* todo */
}

/**
 * Sækir tölfræði fyrir öll próf allra deilda allra sviða.
 *
 * @returns {Promise} Promise sem mun innihalda object með tölfræði um próf
 */
async function getStats() {
  /* todo */
}

module.exports = {
  departments,
  getTests,
  clearCache,
  getStats,
};
