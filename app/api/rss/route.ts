import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [
      ["media:content", "media", { keepArray: true }],
      ["content:encoded", "contentEncoded"],
      ["dc:creator", "creator"],
    ],
  },
});

interface RSSFeed {
  title: string;
  link: string;
  description?: string;
  pubDate?: string;
  content?: string;
  contentEncoded?: string;
  creator?: string;
  guid?: string;
  source?: string;
}

export async function GET() {
  try {
    const feeds = [
      "https://feeds.feedburner.com/GDBcode",
      "https://techcrunch.com/feed/",
      "https://www.cnet.com/rss/news/",
    ];

    const allItems: (RSSFeed & { source: string; sourceUrl: string })[] = [];

    for (const feedUrl of feeds) {
      try {
        const feed = await parser.parseURL(feedUrl);
        const sourceName =
          feed.title || feedUrl.split("/")[2] || "Unknown Source";

        if (feed.items && feed.items.length > 0) {
          feed.items.slice(0, 10).forEach((item) => {
            allItems.push({
              title: item.title || "No Title",
              link: item.link || "",
              description:
                item.contentSnippet || item.content || item.description || "",
              pubDate: item.pubDate || "",
              content: item.content || "",
              contentEncoded: (item as any).contentEncoded || "",
              creator: (item as any).creator || "",
              guid: item.guid || "",
              source: sourceName,
              sourceUrl: feedUrl,
            });
          });
        }
      } catch (error) {
        console.error(`Error fetching feed ${feedUrl}:`, error);
        // Continue with other feeds even if one fails
      }
    }

    // Sort by date (newest first)
    allItems.sort((a, b) => {
      const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
      const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
      return dateB - dateA;
    });

    // Limit to 30 items total
    const limitedItems = allItems.slice(0, 30);

    return NextResponse.json(
      {
        success: true,
        items: limitedItems,
        total: limitedItems.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("RSS feed error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch RSS feeds",
        items: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}

