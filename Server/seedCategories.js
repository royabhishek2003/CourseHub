require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("./models/Category");

const MONGODB_URL = process.env.MONGODB_URL;

const categories = [
  { name: "Web Development", description: "Build modern web applications using HTML, CSS, JavaScript, React, Node.js and more" },
  { name: "Mobile Development", description: "Create mobile apps for Android and iOS using React Native, Flutter, Swift and Kotlin" },
  { name: "Data Science", description: "Learn data analysis, visualization, and machine learning with Python and R" },
  { name: "Machine Learning", description: "Master ML algorithms, deep learning, neural networks and AI fundamentals" },
  { name: "Cloud Computing", description: "Learn AWS, Azure, Google Cloud and cloud architecture best practices" },
  { name: "DevOps", description: "CI/CD, Docker, Kubernetes, automation and infrastructure as code" },
  { name: "Cybersecurity", description: "Network security, ethical hacking, penetration testing and security best practices" },
  { name: "Blockchain", description: "Understand blockchain technology, smart contracts, DApps and Web3 development" },
  { name: "Python", description: "Learn Python programming from basics to advanced — scripting, automation, and frameworks" },
  { name: "Java", description: "Core Java, Spring Boot, enterprise application development and design patterns" },
];

async function seedCategories() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");

    for (const cat of categories) {
      const exists = await Category.findOne({ name: cat.name });
      if (!exists) {
        await Category.create(cat);
        console.log(`✅ Created category: ${cat.name}`);
      } else {
        console.log(`⏭️  Category already exists: ${cat.name}`);
      }
    }

    console.log("\n🎉 Seeding complete!");
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
}

seedCategories();
