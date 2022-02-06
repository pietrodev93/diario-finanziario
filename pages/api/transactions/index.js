import Transaction from '../../../models/Transaction';
import dbConnect from '../../../util/dbConnect';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const transactions = await Transaction.find({})
                res.status(200).json({success: true, data: transactions})
            } catch {
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try{
                const transaction = await Transaction.create(req.body);
                res.status(201).json({success: true, data: transaction})
            } catch{
                res.status(400).json({success: false});
            }
            break;ß
        default:
        res.status(400).json({success: false})
        break;
    }
}