
exports.show = (request, response) => {
    const path = (request.path === '/') ? '/home' : request.path;

    //render the view
    response.render(`pages${path}`); //views/pages/about
};