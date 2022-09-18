// // import { NextFunction, Request, Response } from 'express';
// // import { StatusCodes } from 'http-status-codes';
// import { NextFunction } from 'express';
// import Products from '../interface/Products.Interface';

// const [name, amount ] = Products;

// // const properties = ['name', 'amount'];

// function validateProperties(req: Request, res: Response, next: NextFunction) {
//   // const { name ] = req.body;
//   if (!name) {
//     return res.status(400).json({ message: '"name" is required' });
//   }
//   next();
// }

// function validationValues(product: Products): [boolean, string | null] {
//   const entries = Object.entries(product);
//   for (let i = 0; i < entries.length; i += 1) {
//     const [property, value] = entries[i];
//     if (!value) {
//       return [false, property];
//     }
//   }
//   return [true, null];
// }

// function validation(req: Request, res: Response, next: NextFunction) {
//   const product: Products = req.body;

//   let [valid, property] = validateProperties(product);

//   if (!valid) {
//     return res.status().send(
//       `O campo ${property} é Obrigatorio.`,
//     );

//     [valid, property] = validationValues(product);

//     if (!valid) {
//       return res.status(StatusCodes.BAD_REQUEST).send(
//         `O campo ${property} não pode ser nulo ou vazio.`,
//       );
//     }
//     next();
//   }
// }

// export default validation;