import type { PageServerLoad } from "../$types";
import { db } from "$lib/server/db";
import { album } from "$lib/server/db/schema";

export const load: PageServerLoad = async () => {
        const albumData = await db
                .select()
                .from(album)
        return {
                albums: albumData.map(album => {
                        return {
                                title: album.title,
                                artist: album.artist,
                                cover: album.cover,
                                releaseDate: album.releaseDate,
                                urlPath: album.url
                        }
                })
        }
}
