const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Maximus Kim",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    nick: "MonstoBusta",
    role: "Sound Designer",
    bio: "Hello! My name is Max. I go by MonstoBusta online.",
    email: "monstobusta@gmail.com",
    linkedin: "MaximusKim",
    github: "MonstoBusta",
    twitter: "MonstoBusta",
    youtube: "MonstoBusta"
  },

  // projects: [
  //   {
  //     name: `YouTube`,
  //     href: "https://www.youtube.com/channel/UCKijqvTtUZxr8ZCHeIHfB-w",
  //   },
  //   {
  //     name: 'Twitter',
  //     href: "https://twitter.com/MonstoBusta"
  //   },
  //   {
  //     name: 'AirWiggles'
  //     href: "https://www.airwiggles.com/u/49756b14"
  //   },
  // ],

  // blog setting (required)
  blog: {
    title: "Maximus Kim Sound",
    description: "welcome to morethan-log!",
    theme: "dark"
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
