import React, { useState, useEffect } from "react";
// import Modal from "../../components/modal";
// import ItemCard from "@/components/itemCard/itemCard";
// import SearchBar from "@/components/searchBar/searchBar";
// import MainNav from "@/components/nav/MainNav";


export default function PlantListPage({ plants }) {
  const [userPlantsData, setUserPlantsData] = useState(null);
  const [allPlantsData, setAllPlantsData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userOwnsPlant, setUserOwnsPlant] = useState({});

  //to flag the owened plants
  // Add a state variable to track if the user owns the plant
  //to flag the owened plants
  useEffect(() => {
    setLoading(true);
    fetch("/api/userPlants")
      .then((res) => res.json())
      .then((data) => {
        console.log("userPlantsData:", data); 
        setUserPlantsData(data);

        // Create an object to store the plant IDs that the user owns
        const userPlantsMap = data.reduce((acc, plant) => {
          acc[plant.id] = true;
          return acc;
        }, {});
        setUserOwnsPlant(userPlantsMap);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log("allPlantsData:", data); 
        setAllPlantsData(data);
        setLoading(false);
      });
  }, []);


  let [queryResult, setQueryResult] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (!allPlantsData) return <p>No profile data</p>;
// Check if userPlantsData is null and prevent the error(userPlantsDatais a null)
if (userPlantsData === null) {
  return <p>Loading user plant data...</p>;
}

  return (
    <div>

      <div className="container mx-auto pt-24 pb-6 px-6 relative">
        {/* <div className="relative">
          <SearchBar className="mb-16" onChange={(res) => setQueryResult(res)} />
        </div> */}
        <div className="flex flex-wrap gap-4">
        {/* Wait for the userOwnsPlant data to be ready */}
        {allPlantsData.map((plant) => {
          // Check if the plant's scientific_name exists in userPlantsData
          const userOwnsPlant = userPlantsData.some(
            (userPlant) => userPlant.scientific_name === plant.scientific_name
          );

          return (
            <div key={plant.id}>
              {/* <ItemCard
                pic={plant.image_url}
                name={plant.common_name}
                level={plant.hardiness}
                size={plant.dimensions}
                key={plant.common_name}
                plant={plant}
                setShowModal={setShowModal}
                userOwnsPlant={userOwnsPlant}
              /> */}
                    {/* {showModal.show && showModal.plant.id === plant.id && (
                      <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        plant={plant}
                        key={plant.id}
                      />
                    )} */}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
