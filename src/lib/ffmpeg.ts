import { FFmpeg } from '@ffmpeg/ffmpeg'
import coreURL from '../ffmpeg/ffmpeg-core.js?url'
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
import workerURL from '../ffmpeg/ffmpeg-worker.js?url'


let ffmeg: FFmpeg | null

export async function getFFmpeg() {
    if (ffmeg) {
        return ffmeg
    }
    ffmeg = new FFmpeg()

    if (!ffmeg.loaded) {
        await ffmeg.load({
            coreURL,
            wasmURL,
            workerURL
        })
    }

    return ffmeg
}