//to handle the api/plants
import prisma from "../../../libs/prismadb"; // to use the global prisma connection

import {
  createPlant,
  create,
  getAllPlants,
  getPlant
} from '../../../libs/Plant_library'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          // Get a single plant if id is provided in the query
          // api/plants?id=1
          //http://localhost:3000/api/plants?id=64a57538cc2597753dd8b5a6
          const plant = await getPlant(req.query.id)
          return res.status(200).json(plant)
        } else {
          // Otherwise, fetch all plants
          const plants = await getAllPlants()
          console.log(plants)
          return res.json(plants)
        }
      }
      case 'POST': {
        const { trefle_id,
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
          life_cycle} = req.body 

        if ( trefle_id,
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
          life_cycle) {
          // Attach the plant ID to the user's collection
          const Library = await prisma.Library.create({
            data: {
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
            },
          });
          return res.json(Library)
        } else {
          // Handle invalid request
          return res.status(400).json({ message: 'Missing user ID or plant ID' })
        }
      }
      case 'PUT': {
        // to be done soon    
      }
      case 'DELETE': {
        // to be done soon
      }
      default:
        break
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
