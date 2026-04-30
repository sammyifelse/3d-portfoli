import fs from "fs";
import path from "path";

const LIKES_FILE = path.join(process.cwd(), "src", "data", "likes.json");

// Ensure likes.json exists with default structure
function ensureLikesFile() {
  if (!fs.existsSync(LIKES_FILE)) {
    fs.writeFileSync(LIKES_FILE, JSON.stringify({ count: 0 }), "utf-8");
  }
}

function getLikes(): number {
  ensureLikesFile();
  const data = JSON.parse(fs.readFileSync(LIKES_FILE, "utf-8"));
  return data.count || 0;
}

function incrementLikes(): number {
  ensureLikesFile();
  const data = JSON.parse(fs.readFileSync(LIKES_FILE, "utf-8"));
  data.count = (data.count || 0) + 1;
  fs.writeFileSync(LIKES_FILE, JSON.stringify(data), "utf-8");
  return data.count;
}

export async function GET() {
  try {
    const count = getLikes();
    return Response.json({ count, success: true });
  } catch (error) {
    console.error("Error reading likes:", error);
    return Response.json(
      { count: 0, success: false, error: "Failed to read likes" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const newCount = incrementLikes();
    return Response.json({ count: newCount, success: true });
  } catch (error) {
    console.error("Error incrementing likes:", error);
    return Response.json(
      { success: false, error: "Failed to increment likes" },
      { status: 500 }
    );
  }
}
