import { TextNode } from "./../components/Editor/types/text-node";
import { Meme } from "../types/meme";

export async function getMemes(): Promise<{ memes: Meme[] }> {
  try {
    const memes = await fetch("https://api.memegen.link/templates", {
      method: "GET",
    }).then((res) => res.json());

    return { memes };
  } catch (error) {
    console.error(error);

    return { memes: [] };
  }
}

export async function createMeme({
  meme,
  nodes,
}: {
  meme: Meme;
  nodes: TextNode[];
}): Promise<{
  data?: { url: string; page_url: string };
  error_message?: string;
}> {
  try {
    const textUrl = nodes.map((node) => node.value)?.join("/");
    const response = await fetch(
      `https://api.memegen.link/images/${meme.id}/${textUrl}.png`,
      {
        method: "GET",
      }
    ).then((res) => {
      return { data: { url: res.url, page_url: "" } };
    });

    return response;
  } catch (error) {
    throw new Error("Error creating meme");
  }
}
