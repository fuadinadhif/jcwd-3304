import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    /* --------------------------------- DELETE --------------------------------- */
    await prisma.articleCategory.deleteMany();
    await prisma.article.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();

    console.info("Delete success");

    /* --------------------------------- CREATE --------------------------------- */
    /* ------------------------------- Create User ------------------------------ */
    const user1 = await prisma.user.create({
      data: {
        name: "Jonh Doe",
        email: "john.doe@mail.com",
        password: "newpass",
      },
    });
    const user2 = await prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane.smith@mail.com",
        password: "newpass",
      },
    });
    const user3 = await prisma.user.create({
      data: {
        name: "Angelina",
        email: "angelina@mail.com",
        password: "newpass",
      },
    });

    /* ----------------------------- Create Article ----------------------------- */
    const articles = [
      {
        title: "How to Grow Tomatoes",
        preview: "A quick guide to growing healthy tomatoes at home.",
        content: "Tomatoes require full sun and well-drained soil...",
        imagePreview: "tomato_preview.jpg",
        imageContent: "tomato_full.jpg",
        userId: user1.id,
      },
      {
        title: "JavaScript Tips",
        preview: "Improve your JavaScript skills with these tips.",
        content: "Always use 'let' or 'const' instead of 'var'...",
        imagePreview: "js_preview.png",
        imageContent: "js_full.png",
        userId: user2.id,
      },
      {
        title: "The Art of Meditation",
        preview: "Find inner peace through mindful practice.",
        content: "Meditation can reduce stress and improve focus...",
        imagePreview: "meditation_preview.jpg",
        imageContent: "meditation_full.jpg",
        userId: user3.id,
      },
      {
        title: "Healthy Meal Prep Ideas",
        preview: "Simple meals to keep you on track all week.",
        content: "Batch-cooking proteins and grains can save time...",
        imagePreview: "mealprep_preview.jpg",
        imageContent: "mealprep_full.jpg",
        userId: user3.id,
      },
      {
        title: "Understanding React Hooks",
        preview: "A beginner’s guide to useState and useEffect.",
        content: "React hooks simplify state management...",
        imagePreview: "react_preview.png",
        imageContent: "react_full.png",
        userId: user1.id,
      },
      {
        title: "10 Best Travel Destinations 2025",
        preview: "Plan your next adventure with these picks.",
        content: "From Iceland to Japan, discover the top spots...",
        imagePreview: "travel_preview.jpg",
        imageContent: "travel_full.jpg",
        userId: user1.id,
      },
      {
        title: "Mastering Python",
        preview: "Tips and resources to get fluent in Python.",
        content: "Start with basics like variables and functions...",
        imagePreview: "python_preview.png",
        imageContent: "python_full.png",
        userId: user2.id,
      },
      {
        title: "Photography for Beginners",
        preview: "Learn the fundamentals of photography.",
        content: "Master composition, lighting, and camera settings...",
        imagePreview: "photo_preview.jpg",
        imageContent: "photo_full.jpg",
        userId: user3.id,
      },
      {
        title: "Indoor Plants for Air Quality",
        preview: "Breathe easier with these green additions.",
        content: "Plants like spider plant and peace lily purify air...",
        imagePreview: "plants_preview.jpg",
        imageContent: "plants_full.jpg",
        userId: user3.id,
      },
      {
        title: "Effective Remote Work Tips",
        preview: "Stay productive working from home.",
        content: "Set a schedule, create a dedicated space...",
        imagePreview: "remote_preview.jpg",
        imageContent: "remote_full.jpg",
        userId: user1.id,
      },
      {
        title: "Guide to Cryptocurrency",
        preview: "Understand Bitcoin and altcoins.",
        content: "Cryptocurrency is a decentralized digital currency...",
        imagePreview: "crypto_preview.png",
        imageContent: "crypto_full.png",
        userId: user1.id,
      },
      {
        title: "Yoga for Beginners",
        preview: "Start your yoga journey with simple poses.",
        content: "Begin with poses like downward dog and child’s pose...",
        imagePreview: "yoga_preview.jpg",
        imageContent: "yoga_full.jpg",
        userId: user2.id,
      },
      {
        title: "Simple Budgeting Tips",
        preview: "Manage your money with ease.",
        content: "Track your spending and set clear savings goals...",
        imagePreview: "budget_preview.jpg",
        imageContent: "budget_full.jpg",
        userId: user3.id,
      },
      {
        title: "Building a Personal Brand",
        preview: "Stand out in your industry online.",
        content: "Leverage LinkedIn, create content, and stay consistent...",
        imagePreview: "brand_preview.jpg",
        imageContent: "brand_full.jpg",
        userId: user3.id,
      },
      {
        title: "Basics of Machine Learning",
        preview: "An introduction to ML concepts and tools.",
        content: "Machine learning uses algorithms to learn from data...",
        imagePreview: "ml_preview.png",
        imageContent: "ml_full.png",
        userId: user1.id,
      },
    ];

    await prisma.article.createMany({ data: articles });

    /* ----------------------------- Create Category ---------------------------- */
    const categories = [
      {
        name: "Technology",
        description:
          "Articles and guides on the latest in tech, programming, and gadgets.",
      },
      {
        name: "Health & Wellness",
        description: "Tips and insights on physical and mental well-being.",
      },
      {
        name: "Travel",
        description:
          "Destination guides, travel tips, and adventure stories from around the world.",
      },
      {
        name: "Food & Cooking",
        description: "Delicious recipes, cooking techniques, and food culture.",
      },
      {
        name: "Lifestyle",
        description:
          "Advice and inspiration on home, fashion, and everyday living.",
      },
    ];

    await prisma.category.createMany({ data: categories });

    /* ------------------------- Create ArticleCategory ------------------------- */
    const articleCollection = await prisma.article.findMany();
    const categoryCollection = await prisma.category.findMany();

    for (const el of articleCollection) {
      const catRandomIndex = Math.round(
        Math.random() * (categoryCollection.length - 1)
      );

      await prisma.articleCategory.create({
        data: {
          articleId: el.id,
          categoryId: categoryCollection[catRandomIndex].id,
        },
      });
    }

    console.info("Seed finished");
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
  }
}

seed();
