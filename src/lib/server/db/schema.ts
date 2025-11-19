import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const album = sqliteTable("album", {
        id: text("id")
                .primaryKey()
                .$defaultFn(() => crypto.randomUUID()),
        title: text("title"),
        artist: text("artist"),
        releaseDate: text("release_date"),
        cover: text("cover"),
        url: text("url")
});


