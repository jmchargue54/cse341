const data = {
    professionalName: 'Jenna McHargue',
    nameLink: {
      firstName: 'Jenna',
      url: 'https://github.com/jmchargue54',
    },
    base64Image: 'https://picsum.photos/200/300',
    firstName: 'Jenna',
    primaryDescription: ' Student at BYU-Idaho',
    workDescription1:
      'Web Design and Development major',
    workDescription2:
      'Projected to graduate in July 2026',
    linkTitleText: 'Check out her work below',
    linkedInLink: {
      link: 'https://www.linkedin.com/in/jenna-mchargue-1b0a4b1a6/',
      text: 'LinkedIn',
    },
    githubLink: {
      link: 'https://github.com/jmchargue54',
      text: 'GitHub',
    },
    contactText:
      "Feel free to contact her at mch23001@byui.edu",
  };
  exports.getData = (req, res, next) => {
    // await mongodb call
    res.status(200).json(data);
  };