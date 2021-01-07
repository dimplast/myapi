exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success:true, msg:'Show all bootcamls'})
}

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Show bootcamp with id:${req.params.id}`});
}

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:'Create new bootcamp'});
}

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Update bootcamp with id:${req.params.id}`});
}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success:true, msg:`Delete bootcamp with id:${req.params.id}`});
}

