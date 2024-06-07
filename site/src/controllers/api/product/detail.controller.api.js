const db = require("../../../database/models");
const { getOriginUrl } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await db.product.findByPk(id, {
      attributes: {
        
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

 
    const products = {
      id: product.id,
      nombre: product.titulo,
      subname: product.subtitulo,
      price: product.precio,
      description: product.descripcion,
      autores: product.autores,
      image: `${getOriginUrl(req)}/images/${product.imagen}`,
      available: product.disponible,
      category: product.categoryId
    };

    res.json(products);
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};