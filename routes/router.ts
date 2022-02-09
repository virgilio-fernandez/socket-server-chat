import {Router, Request, Response} from 'express';
export const router = Router();

router.get('/mensajes', (req:Request, res:Response) => {
    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    });
});

router.post('/mensajes/:id', (req:Request, res:Response) => {
    let cuerpo = req.body.cuerpo;
    let de = req.body.de;
    let id = req.params.id;
    res.json({
        ok: true,  
        cuerpo,
        de,
        id
    });
});