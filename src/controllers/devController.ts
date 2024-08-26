import { Request, Response } from 'express';

import QRCode from 'qrcode';

// import { Types } from 'mongoose';

// import Consultation from '../models/consultation.model';
// import Building from '../models/building.model';
// import Class from '../models/class.model';
// import Room from '../models/room.model';
// import Subject from '../models/subject.model';
// import User from '../models/user.model';
// import scopeTypes from '../models/scopeTypes.model';
// import Scope from '../models/scope.model';

// import { ETime } from '../types/enums';

export default {
    index: (req: Request, res: Response) => {
        res.json('Consultations dev index');
    },
    setup: async (req: Request, res: Response) => {
        try {
            res.json('Consultations dev setup');
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
};