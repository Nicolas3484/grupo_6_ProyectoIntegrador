const db = require("../../../database/models");
const { getOriginUrl } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.user.findByPk(id, {
      attributes: {
        exclude: ["password", "roleId", "createdAt", "updatedAt", "deletedAt"]
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

 
    const formattedUser = {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      image: `${getOriginUrl(req)}${user.avatar}`
    };

    res.json(formattedUser);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};
