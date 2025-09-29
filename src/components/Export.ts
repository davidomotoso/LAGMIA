// Introduction to products data
import cerveFoamingFacialCleanser from "../../public/cerave-foaming-facial-cleanser.jpg";
import empireOfVision from "../../public/empire-of-vision.jpg";
import newBalance from "../../public/new-balance.jpg";
import samsungGalaxyS23Ultra from "../../public/samsung-galaxy-s23-ultra.jpg";
import microwave from "../../public/microwave.jpg";
import creamShirt from "../../public/cream-shirt.jpg";

// Categories data
import computing from "../../public/computing.jpg";
import electronics from "../../public/electronics.jpg";
import fashion from "../../public/fashion.jpg";
import homeAppliances from "../../public/home-appliances.jpg";
import phonesTablets from "../../public/phones-tablets.jpg";
import healthBeauty from "../../public/health-beauty.jpg";

export const introProducts=[
    {
        id:0,
        name:"Cerave Foaming Facial Cleanser",
        price:"₦8,500",
        image:cerveFoamingFacialCleanser,
        desc:"A gentle foaming cleanser that effectively removes dirt, oil, and makeup without disrupting the skin's natural barrier. Ideal for normal to oily skin types."
    },
    {
        id:1,
        name:"Empire of Vision",
        price:"₦10,000",
        image:empireOfVision,
        desc:"A captivating novel that explores themes of ambition, power, and destiny through the journey of a young protagonist determined to change the world."
    },
    {
        id:2,
        name:"New Balance",
        price:"₦25,000",
        image:newBalance,
        desc:"A pair of stylish and comfortable sneakers designed for everyday wear, featuring a classic design and superior cushioning for all-day comfort."
    },
    {
        id:3,
        name:"Samsung Galaxy S23 Ultra",
        price:"₦1,200,000",
        image:samsungGalaxyS23Ultra,
        desc:"The latest flagship smartphone from Samsung, boasting a stunning display, powerful performance, and an advanced camera system for capturing every moment in incredible detail."
    },
    {
        id:4,
        name:"Microwave",
        price:"₦45,000",
        image:microwave,
        desc:"A compact and efficient microwave oven perfect for quick meal preparation, featuring multiple power levels and a user-friendly interface."
    },
    {
        id:5,
        name:"Cream Shirt",
        price:"₦7,500",
        image:creamShirt,
        desc:"A versatile and stylish cream-colored shirt made from high-quality fabric, perfect for both casual and formal occasions."
    },

]

export const categories=[
    {
        id:1,
        name:"Electronics",
        image:electronics
    },
    {
        id:2,
        name:"Phones & Tablets",
        image:phonesTablets
    },
    {
        id:3,
        name:"Computing",       
        image:computing
    },
    {
        id:4,
        name:"Fashion",
        image:fashion
    },
    {
        id:5,
        name:"Health & Beauty",
        image:healthBeauty
    },
    {
        id:6,
        name:"Home Appliances",
        image:homeAppliances
    },
]