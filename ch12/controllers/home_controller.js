
const home_controller = (req, res) => {
    res.render('index',{"name":"John Doe"}); // passs name data to template
};

export {home_controller}