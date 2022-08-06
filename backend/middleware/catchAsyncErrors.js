module.exports = (catchAsyncErrors) => (req,res,next) => {
    Promise.resolve(catchAsyncErrors(req,res,next)).then(next);
}