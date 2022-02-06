import Transaction from '../../../models/Transaction';
import dbConnect from '../../../util/dbConnect';

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try{
                const transaction = await Transaction.findById(id)
                if (!transaction){
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success: true, data: transaction})
            } catch {
                res.status(400).json({success: false})
            }
            break;
        case 'PUT':
            try {
                const transaction = await Transaction.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if(!transaction) {
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success: true, data: transaction})

            } catch (error) {
                return res.status(400).json({success: false})
            }
            break;
        case 'DELETE':
            try {
                const deleteTransaction = await Transaction.deleteOne({ _id: id });
                if(!deleteTransaction) {
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success: true, data: {}})
            } catch (error) {
                return res.status(400).json({success: false})
            }
            break;
        default:
        return res.status(400).json({success: false})
        break;
    }    
}