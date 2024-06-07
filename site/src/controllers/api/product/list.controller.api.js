const { literal } = require("sequelize");
const db = require("../../../database/models");
const { getOriginUrl } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await db.product.findAll({
        attributes: ['id', 'titulo', 'subtitulo', 'descripcion', 'imagen','categoryId' ],
        include: [
          {
            model: db.Category,
            as: 'category', 
            attributes: ['id','name'], 
          },
        ],
      });
      const categoryMap = {};
    const categories = await db.Category.findAll();
    categories.forEach(category => {
      categoryMap[category.name] = category.id;
    });

    const categoryCounts = {};

    for (let i = 0; i < product.length; i++) {
      const category = product[i].categoryId; 
      if (category !== null) {
        if (!categoryCounts[category]) {
          categoryCounts[category] = { name: category, cantidad: 1 };
        } else {
          categoryCounts[category].cantidad++;
        }
      }
    }
    

      const productsmap = product.map(product => ({
        id: product.id,
        name: product.titulo,
        subname: product.subtitulo,
        description: product.descripcion,
        category: {
          id: categoryMap[product.categoryId],
          name: product.categoryId
        }
      }));


    res.json({
      count: productsmap.length,
      countByCategory: categoryCounts,
      products: productsmap,
      
    });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

