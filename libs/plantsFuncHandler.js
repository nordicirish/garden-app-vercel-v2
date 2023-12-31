import prisma from "./prismadb";

// GET
export const getAllPlants = async () => {
  const plants = await prisma.Library.findMany({});
  return plants;
};

export const getPlant = async (id) => {
  const plant = await prisma.Library.findUnique({
    where: { id },
    //http://localhost:3000/api/plants?id=64be8035d63346ec8354b592
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
      type,
      lighting,
      diseases,
      description,
      blooming_period,
      dimensions,
      hardiness,
      soil_ph_min,
      soil_ph_max,
      life_cycle,
      care_advice,
      plantId,
  // Plant
) => {
  const plant = await prisma.Library.create({
    data: {
      trefle_id: parseInt(trefle_id),
      common_name,
      scientific_name,
      image_url,
      type,
      lighting,
      diseases,
      description,
      blooming_period,
      dimensions,
      hardiness,
      soil_ph_min: parseInt(soil_ph_min),
      soil_ph_max: parseInt(soil_ph_max),
      life_cycle,
      care_advice,
      plantId,
      // Plant,
    },
  });
  return plant;
};

// UPDATE
export const updatePlant = async (id, updateData) => {
  const Plant_update = await prisma.Library.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return Plant_update;
};

// DELETE
export const deletePlant = async (id) => {
  const deletePlant = await prisma.Library.delete({
    where: {
      id,
    },
  });
  return deletePlant;
};

// Set MIME type to application/json
export const setJsonMimeType = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};
