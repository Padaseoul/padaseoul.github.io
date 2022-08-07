module.exports = {
  siteMetadata: {
    title: `Pada`,
    siteUrl: `https://padaseoul.com`,
    description: `서울 광진구 화양사거리에 위치한 서브컬처를 위한 클럽 Pada는 애니송, 게임음악, K-Pop, J-Pop 등을 본격적인 클럽 사운드로 즐길 수 있는 공간입니다.`,
    twitterUsername: `@PadaSeoul`,
    keywords: `Anime,Anisong,Club,Cosplay,Dj,kpop,k-pop,jpop,j-pop,Vtuber,V-tuber,Subculture,애니,애니송,클럽,애니송클럽,아니쿠라,오타게,코스프레,성우,케이팝,제이팝,서브컬처,アニメ,コスプレ,オタ芸,アニソン,サブカル`,
    image: `/images/image.png`,
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-HBHVW36ZTB"
    }
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "name": "Pada",
      "short_name": "Pada",
      "start_url": "/",
      "background_color": "#fff",
      "theme_color": "#0000ff",
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};