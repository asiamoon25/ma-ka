
exports.handlerErrorResponse = function (response, res) {
    console.log(JSON.stringify(response));
    if(!response.success) {
        return res.status(400).json({
            result : response.message || 'Unknown error occurred'
        });
    }
    return null;
}