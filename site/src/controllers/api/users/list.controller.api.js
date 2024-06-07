const { literal } = require("sequelize");
const db = require("../../../database/models");
const { getOriginUrl } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await db.user.findAll({
      attributes: ['id', 'nombre', 'email'],
      include: [
        {
          model: db.addresses,
          as: 'addresses', 
          attributes: [], 
        },
      ],
    });

    const formattedUsers = users.map(user => ({
      id: user.id,
      name: user.nombre,
      email: user.email,
      detail: `${getOriginUrl(req)}/api/users/${user.id}`,
    }));

    res.json({
      count: formattedUsers.length,
      users: formattedUsers,
    });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};
