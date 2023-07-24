import prisma from "./prismadb";

// GET
export const getAllUserPlants = async (userId) => {
  try {
    const plants = await prisma.Plant.findMany({
      where: {
        userId: userId, // Filter plants by the provided userId
      },
    });
    return plants || []; // Return an empty array if plants object is is falsy
  } catch (error) {
    console.error("Error fetching user plants:", error);
    throw error;
  }
};


// CREATE

export const createUserPlant = async (
  userId,
  common_name,
  scientific_name,
  image,
  plant_age,
  planting_date,
  individual_advice,
  // notes,
  // library,
  // plantId
) => {
  try {
    const createdUserPlant = await prisma.Plant.create({
      data: {
        userId,
        common_name,
        scientific_name,
        image,
        plant_age: parseInt(plant_age), // Convert to integer
        planting_date: new Date(planting_date), // Convert to a Date object
        individual_advice,
        // notes,
        // library,
        // plantId
      },
    });

    return createdUserPlant;
  } catch (error) {
    console.error("Error creating plant:", error);
    throw error;
  }
};

// UPDATE
export const updateUserPlant = async (id, updateData) => {
  const Plant_update = await prisma.Plant.update({
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
export const deleteUserPlant = async (id) => {
  const deletePlant = await prisma.Plant.delete({
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
