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

export const introProducts = [
  {
    id: 0,
    name: "Cerave Foaming Facial Cleanser",
    price: "₦8,500",
    image: cerveFoamingFacialCleanser,
    category: "Health & Beauty",
    desc: [
      "A gentle foaming cleanser highly recommended by dermatologists for its skin-friendly properties.",
      "It effectively removes dirt, oil, and makeup while preserving the skin's natural barrier, ensuring a balanced complexion even after repeated use. Formulated with a powerful blend of ceramides, hyaluronic acid, and niacinamide, it cleanses deeply without over-drying, making it an excellent choice for normal to oily skin types seeking a non-irritating solution.",
      "Its non-comedogenic and fragrance-free formula is specifically designed to suit sensitive skin, significantly reducing the risk of irritation or breakouts, which is ideal for individuals with delicate skin concerns. Perfect for daily use, this cleanser offers a refreshing start or end to the day, catering to those with busy schedules who need a reliable skincare routine that fits seamlessly into their lifestyle.",
      "The lightweight texture lathers easily, providing a satisfying cleanse without leaving a residue, and its pH-balanced composition supports the skin's natural moisture levels. Packaged in a travel-friendly bottle, it’s a practical addition for students or professionals on the move, ensuring healthy skin maintenance wherever they are.",
      "Users can expect a noticeable improvement in skin texture and clarity over time, with reduced oiliness and a smoother feel, making it a long-term investment in personal care that aligns with modern skincare trends favoring gentle yet effective products.",
    ],
    features: [
      "Three essential ceramides (1, 3, 6-II) to restore and maintain skin barrier",
      "Hyaluronic acid for hydration and moisture retention",
      "Niacinamide to calm and soothe the skin",
      "Non-comedogenic and fragrance-free formula",
      "Suitable for normal to oily and sensitive skin types",
      "Gentle foaming action without over-stripping",
    ],
    specifications: [
      { label: "Brand", value: "Cerave" },
      { label: "Model", value: "Foaming Facial Cleanser" },
      { label: "Weight", value: "0.5" },
    ],
  },
  {
    id: 1,
    name: "Empire of Vision",
    price: "₦10,000",
    image: empireOfVision,
    category: "Books",
    desc: [
      "A captivating novel that delves deeply into the timeless themes of ambition, power, and destiny, crafted with exceptional narrative skill.",
      "It follows the inspiring journey of a determined young protagonist who sets out to reshape the world around them, weaving a rich tapestry of character development that brings each figure to life with authenticity and depth. The story blends thought-provoking social commentary with intricate plot twists, offering readers a multi-layered experience that challenges their perspectives.",
      "Ideal for literature enthusiasts or anyone seeking an engaging read during downtime, this book serves as an escape into a world of intrigue, inspiration, and emotional resonance, making it a perfect companion for quiet evenings or long commutes. Its themes resonate universally, appealing to a wide audience including those who enjoy reflective storytelling.",
      "Perfect for book clubs or personal reflection, the novel includes discussion-worthy elements such as moral dilemmas and cultural insights, encouraging group debates or individual introspection. The eloquent prose and well-researched backdrop add to its allure, positioning it as a standout piece in contemporary fiction.",
      "With its compelling narrative arc and memorable characters, Empire of Vision promises to leave a lasting impression, inviting readers to revisit its pages and explore the protagonist’s evolution time and again, solidifying its status as a must-read for anyone passionate about literature.",
    ],
    features: [
      "Fresh Foam cushioning for superior shock absorption",
      "Durable rubber outsole with excellent traction",
      "Breathable mesh upper for airflow and comfort",
      "Lightweight construction reducing fatigue",
      "Versatile classic design for casual and semi-formal wear",
      "Padded collar and tongue for enhanced support",
    ],
    specifications: [
      { label: "Weight", value: "0.3" },
      { label: "Product Type", value: "Books" },
    ],
  },
  {
    id: 2,
    name: "New Balance",
    price: "₦25,000",
    image: newBalance,
    category: "Fashion",
    desc: [
      "Stylish and comfortable sneakers meticulously crafted for everyday wear, blending fashion with functionality in a single design.",
      "Featuring a durable rubber outsole that ensures excellent traction on various surfaces and Fresh Foam cushioning technology for superior shock absorption, these sneakers provide all-day comfort and support, making them a top choice for active individuals. The ergonomic design supports natural foot movement, reducing fatigue during extended wear.",
      "Available in a range of classic colors, their versatility allows them to suit a variety of occasions, from casual outings and light exercise to semi-formal pairings with chinos or skirts. This adaptability makes them a must-have for those who value both style and practicality, appealing to fashion-conscious individuals with dynamic lifestyles.",
      "Constructed with breathable materials and a lightweight build, the sneakers promote airflow to keep feet cool, while the padded collar and tongue enhance overall comfort. Ideal for urban explorers or those with long days on their feet, they offer durability that withstands regular use, backed by New Balance’s reputation for quality craftsmanship.",
      "Whether paired with casual jeans for a laid-back look or dressed up for a smart-casual event, these sneakers elevate any outfit while providing the reliability needed for daily wear, making them an essential addition to any wardrobe seeking a blend of aesthetics and performance.",
    ],
    features: [
      "Fresh Foam cushioning for superior shock absorption",
      "Durable rubber outsole with excellent traction",
      "Breathable mesh upper for airflow and comfort",
      "Lightweight construction reducing fatigue",
      "Versatile classic design for casual and semi-formal wear",
      "Padded collar and tongue for enhanced support",
    ],
    specifications: [
      { label: "Brand", value: "New Balance" },
      { label: "Model", value: "574" },
      { label: "Weight", value: "0.5" },
      { label: "Color", value: "Cream" },
      { label: "Product Type", value: "Sneakers" },
    ],
  },
  {
    id: 3,
    name: "Samsung Galaxy S23 Ultra",
    price: "₦1,200,000",
    image: samsungGalaxyS23Ultra,
    category: "Phones & Tablets",
    desc: [
      "A flagship smartphone that redefines excellence with its stunning Dynamic AMOLED 2X display, delivering vibrant colors and a silky-smooth 120Hz refresh rate for an immersive viewing experience.",
      "Powered by the latest Snapdragon processor, it excels at gaming, multitasking, and professional tasks, offering lightning-fast performance that caters to tech enthusiasts and productivity-driven users alike. The advanced cooling system ensures sustained efficiency even during intensive use.",
      "Its cutting-edge quad-camera system, headlined by a 200MP main sensor, captures high-resolution photos and crisp 8K videos with remarkable detail, making it ideal for documenting life’s moments, from scenic landscapes to fast-paced action shots. The inclusion of night mode and AI enhancements further elevates photography capabilities.",
      "With a robust battery that supports all-day usage and fast charging, plus S Pen support for precise input and creativity, this device stands as a premium tech investment. The sleek design, Gorilla Glass protection, and water-resistant build add to its durability and appeal for those seeking a high-end mobile experience.",
      "Perfect for professionals, creatives, or anyone desiring top-tier technology, the Samsung Galaxy S23 Ultra combines innovation with practicality, offering a future-proof device that adapts to evolving digital needs with regular software updates and expandable storage options.",
    ],
    features: [
      "Dynamic AMOLED 2X display with 120Hz refresh rate",
      "Snapdragon 8 Gen 2 chipset for high performance",
      "200MP quad-camera system with 8K video recording",
      "5000mAh battery with fast charging",
      "Built-in S Pen for precise input and productivity",
      "IP68 water and dust resistance with Gorilla Glass Victus 2",
    ],
    specifications: [
      { label: "Brand", value: "Samsung" },
      { label: "Model", value: "Galaxy S23 Ultra" },
      { label: "Weight", value: "0.234" },
      { label: "Color", value: "Phantom Black" },
      { label: "Product Type", value: "Smartphones" },
    ],
  },
  {
    id: 4,
    name: "Microwave",
    price: "₦45,000",
    image: microwave,
    category: "Home Appliances",
    desc: [
      "A compact and highly efficient microwave oven designed to streamline meal preparation with convenience and speed at its core.",
      "Equipped with multiple power levels and an array of pre-programmed settings, it simplifies a wide range of tasks including reheating leftovers, defrosting frozen items, and cooking diverse dishes with precision and ease. The intuitive controls cater to all skill levels.",
      "Its sleek, modern design and user-friendly interface, complete with a clear digital display, make it an attractive addition to shared living spaces or small kitchens. Despite its compact size, the spacious interior accommodates larger dishes, offering flexibility for preparing snacks, meals, or even experimenting with recipes.",
      "Constructed with energy-efficient technology, this microwave reduces power consumption while maintaining performance, making it an eco-friendly choice. The easy-to-clean interior and child safety lock add practicality, ensuring safety and low maintenance for busy households or dormitories.",
      "Perfect for those on the go, it transforms meal prep into a quick and enjoyable process, allowing users to save time without compromising on taste or nutrition, making it an indispensable appliance for anyone seeking efficiency in their daily routine.",
    ],
    features: [
      "Multiple power levels and pre-programmed auto-cook settings",
      "Sensor cooking technology for optimal results",
      "EasyClean interior for effortless maintenance",
      "Compact design with spacious cooking cavity",
      "Energy-efficient operation and child safety lock",
      "Motorised rotisserie for even grilling and roasting",
    ],
    specifications: [
      { label: "Brand", value: "LG" },
      { label: "Model", value: "NeoChef" },
      { label: "Weight", value: "10" },
      { label: "Color", value: "Black" },
      { label: "Product Type", value: "Microwave Ovens" },
    ],
  },
  {
    id: 5,
    name: "Cream Shirt",
    price: "₦7,500",
    image: creamShirt,
    category: "Fashion",
    desc: [
      "A versatile cream-colored shirt crafted from high-quality, breathable fabric that combines comfort with timeless elegance.",
      "Its tailored fit and minimalist design make it a standout piece suitable for both casual outings and formal occasions, offering a polished look that transitions seamlessly from day to night. The subtle stitching details enhance its sophisticated appeal.",
      "The neutral cream hue pairs effortlessly with a wide range of outfits, including jeans, trousers, or skirts, providing endless styling options that cater to diverse tastes and occasions. This adaptability makes it a go-to choice for those building a flexible wardrobe.",
      "Made from a premium cotton blend, the shirt ensures all-day comfort with its soft texture and moisture-wicking properties, while the button-down front and collar options allow for customizable styling. Its durable construction promises longevity with proper care.",
      "Affordable yet sophisticated, this cream shirt serves as a reliable wardrobe addition for various settings, from classroom presentations to social gatherings, embodying a blend of practicality and fashion that appeals to style-conscious individuals on a budget.",
    ],
    features: [
      "High-quality breathable cotton blend fabric",
      "Tailored fit for casual and formal versatility",
      "Neutral cream color for easy outfit pairing",
      "Moisture-wicking properties for all-day comfort",
      "Subtle stitching details for sophisticated appeal",
      "Button-down front with customizable collar options",
    ],
    specifications: [
      { label: "Brand", value: "Zara" },
      { label: "Model", value: "Classic Fit Shirt" },
      { label: "Weight", value: "0.2" },
      { label: "Color", value: "Cream" },
      { label: "Product Type", value: "Shirts" },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
    link: "/category/electronics",
  },
  {
    id: 2,
    name: "Phones & Tablets",
    image: phonesTablets,
    link: "/category/phones-tablets",
  },
  {
    id: 3,
    name: "Computing",
    image: computing,
    link: "/category/computing",
  },
  {
    id: 4,
    name: "Fashion",
    image: fashion,
    link: "/category/fashion",
  },
  {
    id: 5,
    name: "Health & Beauty",
    image: healthBeauty,
    link: "/category/health-beauty",
  },
  {
    id: 6,
    name: "Home Appliances",
    image: homeAppliances,
    link: "/category/home-appliances",
  },
];

export const sellers = [
  {
    name: "Facial Care",
    id: 0,
    score: 90,
    followers: 120,
    sellPerformance: [
      { shipingSpeed: 95, qualityScore: 88, customerRating: 72 },
    ],
    sellerInfo: [{ duration: "2", sales: 500 }],
  },
  {
    name: "Jide Ogunsanya",
    id: 1,
    score: 85,
    followers: 200,
    sellPerformance: [
      { shipingSpeed: 80, qualityScore: 90, customerRating: 65 },
    ],
    sellerInfo: [{ duration: "1", sales: 300 }],
  },
  {
    name: "JI Footwears",
    id: 2,
    score: 88,
    followers: 250,
    sellPerformance: [
      { shipingSpeed: 85, qualityScore: 87, customerRating: 80 },
    ],
    sellerInfo: [{ duration: "3", sales: 400 }],
  },
  {
    name: "JoGad Ventures",
    id: 3,
    score: 92,
    followers: 150,
    sellPerformance: [
      { shipingSpeed: 90, qualityScore: 95, customerRating: 61 },
    ],
    sellerInfo: [{ duration: "4", sales: 600 }],
  },
  {
    name: "Home Essentials",
    id: 4,
    score: 87,
    followers: 100,
    sellPerformance: [
      { shipingSpeed: 82, qualityScore: 88, customerRating: 68 },
    ],
    sellerInfo: [{ duration: "2", sales: 350 }],
  },
  {
    name: "Fashion Hub",
    id: 5,
    score: 89,
    followers: 110,
    sellPerformance: [
      { shipingSpeed: 88, qualityScore: 61, customerRating: 50 },
    ],
    sellerInfo: [{ duration: "3", sales: 450 }],
  },
];
