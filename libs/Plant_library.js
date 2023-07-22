import prisma from "./prismadb";

// GET
export const getAllPlants = async () => {
  const plants = await prisma.Library.findMany({});
  return plants;
};

export const getPlant = async (id) => {
  const plant = await prisma.Library.findUnique({
    where: { id },
  });
  return plant;
};

//search for plant by scientific name (genus and species in Latin); should return null if none is found
//https://en.wikipedia.org/wiki/Binomial_nomenclature
export const getPlantByScientificName = async (scientific_name) => {
  const plant = await prisma.Library.findUnique({
    where: { scientific_name },
  });
  return plant;
};

// CREATE
export const createPlant = async (
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
) => {
  const plant = await prisma.Library.create({
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
      life_cycle,
    },
  });
  return plant;
};

// Set MIME type to application/json
export const setJsonMimeType = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  };