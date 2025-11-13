import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
        const file = await fetch(`/strudel-songs/${params.song}.js`)
        const song = await file.text()
        console.log(song)
        return { song }

}
