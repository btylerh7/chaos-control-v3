
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
        const file = await fetch(`/strudel-songs/vengeance-is-mine.js`)
        const song = await file.text()
        console.log(song)
        return { song }
}
