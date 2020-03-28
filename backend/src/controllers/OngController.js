const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

/*
  Query Params: Parâmetros para filtros
  Route Params: Parâmetros para identificar recursos
  Request Body: Corpo de requisição usado para alterar e criar recursos
*/

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');
    res.json(ongs);
  },
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;

    await connection('ongs').where('id', id).delete();

    return res.status(204).send();
  }
}