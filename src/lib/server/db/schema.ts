import { pgTable, serial, text, date } from "drizzle-orm/pg-core";

export const album = pgTable("album", {
        id: serial("id").primaryKey(),
        title: text("title"),
        artist: text("artist"),
        releaseDate: text("release_date"),
        url: text("url"),
        addedDate: date("added_date")
});
