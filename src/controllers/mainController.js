const index = (req, res) => {
    res.render("index")
};
const about = (req, res) => {
    res.render("about")
};
const contact = (req, res) => {
    res.render("contact")
};
const service = (req, res) => {
    res.render("service")
};
const team = (req, res) => {
    res.render("team")
};

module.exports = {
    index,
    about,
    contact,
    service,
    team
};