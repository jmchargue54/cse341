const data = {
  professionalName: 'Jenna McHargue',
  nameLink: {
    firstName: 'Jenna',
    url: 'https://www.linkedin.com/in/jenna-mchargue-1b0a3a1b/',
  },
  base64Image: "https://picsum.photos/200/300",
  firstName: 'Jenna',
  primaryDescription: ' is a student at BYU-Idaho',
  workDescription1:
    'Web Design and Development Major.',
  workDescription2:
    'Projected to Graduate in June 2026.',
  linkTitleText: 'Check out her work below',
  linkedInLink: {
    link: 'www.linkedin.com/in/jenna-mchargue-9970a7287',
    text: 'LinkedIn',
  },
  githubLink: {
    link: 'https://github.com/jmchargue54',
    text: 'GitHub',
  },
  contactText:
    "Feel free to contact er at mch23001@byui.edu if you'd like for her to work for you!",
};
exports.getData = (req, res, next) => {
  // await mongodb call
  res.status(200).json(data);
};
