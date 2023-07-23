// to handle reuests related to plant/s

import {
  createPlant,
  updatePlant,
  getAllPlants,
  getPlant,
  deletePlant,
} from "../../../libs/plantsFuncHandler";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          //http://localhost:3000/api/plants?id=64a57538cc2597753dd8b5a6
          const plant = await getPlant(req.query.id);
          return res.status(200).json(plant);
        } else {
          // Otherwise, fetch all plants
          const plants = await getAllPlants();
          console.log(plants);
          return res.json(plants);
        }
      }
      case "POST": {
        const trefle_id = req.body.trefle_id;
        const common_name = req.body.common_name;
        const scientific_name = req.body.scientific_name;
        const image_url = req.body.image_url;
        const watering = req.body.watering;
        const lighting = req.body.lighting;
        const diseases = req.body.diseases;
        const type = req.body.type;
        const categories = req.body.categories;
        const extendedPlantsData = req.body.extendedPlantsData;
        const blooming_period = req.body.blooming_period;
        const dimensions = req.body.dimensions;
        const hardiness = req.body.hardiness;
        const soil_ph_min = req.body.soil_ph_min;
        const soil_ph_max = req.body.soil_ph_max;
        const life_cycle = req.body.life_cycle;

        const plant = await createPlant(
          trefle_id,
          common_name,
          scientific_name,
          image_url,
          watering,
          lighting,
          diseases,
          type,
          categories,
          extendedPlantsData,
          blooming_period,
          dimensions,
          hardiness,
          soil_ph_min,
          soil_ph_max,
          life_cycle
        );

        return res.json(plant);
      }

      case "PUT": {
        const { id, ...updateData } = req.body;
        const updatedPlant = await updatePlant(id, updateData);
        return res.json(updatedPlant);
      }
      case "DELETE": {
        const id = req.query.id;
        const plantDelete = await deletePlant(id);
        return res.json(plantDelete);
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
