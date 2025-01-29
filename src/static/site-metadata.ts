interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'LI RUI Running Page',
  siteUrl: 'https://running-page-phi-lilac.vercel.app/',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://running-page-phi-lilac.vercel.app/',
    },
    {
      name: 'About',
      url: 'https://running-page-phi-lilac.vercel.app/',
    },
  ],
};

export default data;
