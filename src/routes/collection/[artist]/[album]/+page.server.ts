import type { PageServerLoad } from "../../../$types";
import { db } from "$lib/server/db";
import { album } from "$lib/server/db/schema";
import { eq, and } from "drizzle-orm";
import { compile } from 'mdsvex';
import { asset } from "$app/paths";

export const load: PageServerLoad = async ({ params, fetch }) => {
        const url = `${params.artist}/${params.album}`;
        const albumData = await db
                .select()
                .from(album)
                .where(eq(album.url, url));
        const firstAlbum = albumData[0];
        const name = firstAlbum.cover.split('.')[0]
        const descriptionSrc = asset(`/albums/${firstAlbum.artist}/${name}.md`);
        const desc = await fetch(descriptionSrc);
        const description = await desc.text();
        console.log(desc)
        return {
                title: firstAlbum.title,
                artist: firstAlbum.artist,
                cover: firstAlbum.cover,
                releaseDate: firstAlbum.releaseDate,
                url: firstAlbum.url,
                description: description
        }
// const file = await fetch(`/strudel-songs/${params.song}.js`)
// const song = await file.text()
// console.log(song)
// const title = song.split('\n')[0].split('@title ')[1] ?? 'Strudel Song';
// return { song, title }

}
