const Contents = require('../models/contentModel');

module.exports = (app) => {
    app.get('/api/setupContents', (req, res) => {
        //seed database
        let starterContents = [
            {
                section: 'navigaton',
                content: {
                    name: 'navLinks',
                    header: null,
                    paragraphs: null
                }
            },
            {
                section: 'body',
                content: {
                    name: 'home',
                    header: 'Home',
                    paragraphs: [
                        `Paragraph1`,
                        `Paragraph2`,
                        `Paragraph3`
                    ]
                }
            },
        ];
        Contents.create(starterContents, (err, results) => {
            res.send(results)
        });
    });
};