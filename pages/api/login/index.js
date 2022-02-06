import User from '../../../models/User'
import dbConnect from '../../../util/dbConnect'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'POST':
            try {
                const login = await User.findOne(req.body);
                if(!login) {
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success: true})

            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
        return res.status(400).json({success: false})
        break;
    }
}