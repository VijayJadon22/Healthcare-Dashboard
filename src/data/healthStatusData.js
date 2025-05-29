import boneImage from "../assets/bone.png"; // Importing bone image asset
import lungsImage from "../assets/lungs.png"; // Importing lungs image asset
import teethImage from "../assets/teeth.png"; // Importing teeth image asset

export const healthStatusData = [
  {
    organ: "Lungs",
    Date: "26 Okt 2021",
    image: lungsImage, // Associated image
    color: "red", // Color representing the organ's health status
    percentage: 60, // Percentage indicating health level
  },
  {
    organ: "Teeth",
    Date: "26 Okt 2021",
    image: teethImage,
    color: "green",
    percentage: 70,
  },
  {
    organ: "Bone",
    Date: "26 Okt 2021",
    image: boneImage,
    color: "orange",
    percentage: 50,
  },
];